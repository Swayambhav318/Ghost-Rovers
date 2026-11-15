// ===== Low-poly 3D scenes for each destination (Three.js) =====
// The machine pins stay normal HTML buttons; this module only draws planets, orbits and space,
// and moves each pin to follow its spot. If this file can't load, the flat map is used instead.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

const D = Math.PI / 180;
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- helpers ----------
const hash3 = (x, y, z) => { const s = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453; return s - Math.floor(s); };
const noise = (p) => Math.sin(p.x * 5.1 + 1.3) * Math.sin(p.y * 4.7 + 0.7) * Math.sin(p.z * 5.9 + 2.1) + 0.5 * Math.sin(p.x * 11.3 + p.y * 9.1 + p.z * 7.7);
const toLatLon = (n) => ({ lat: Math.asin(Math.max(-1, Math.min(1, n.y))) / D, lon: Math.atan2(n.x, n.z) / D });
const latLonVec = (lat, lon, r) => new THREE.Vector3(r * Math.cos(lat * D) * Math.sin(lon * D), r * Math.sin(lat * D), r * Math.cos(lat * D) * Math.cos(lon * D));
const angDist = (a, b, c, d) => {
  const v1 = latLonVec(a, b, 1), v2 = latLonVec(c, d, 1);
  return Math.acos(Math.max(-1, Math.min(1, v1.dot(v2)))) / D;
};
const near = (lat, lon, n, clat, clon, r) => angDist(lat, lon, clat, clon) < r * (1 + 0.22 * noise(n.clone().multiplyScalar(3)));
const col = (hex) => new THREE.Color(hex);

// Faceted planet: colour chosen per triangle from (lat, lon)
function makeGlobe(radius, detail, colorAt, bump = 0.012) {
  const g = new THREE.IcosahedronGeometry(1, detail).toNonIndexed();
  const pos = g.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    const r = radius * (1 + bump * noise(v.clone().multiplyScalar(2.2)));
    pos.setXYZ(i, v.x * r, v.y * r, v.z * r);
  }
  const colors = new Float32Array(pos.count * 3);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  const out = new THREE.Color();
  for (let f = 0; f < pos.count; f += 3) {
    a.fromBufferAttribute(pos, f); b.fromBufferAttribute(pos, f + 1); c.fromBufferAttribute(pos, f + 2);
    const n = a.clone().add(b).add(c).normalize();
    const { lat, lon } = toLatLon(n);
    out.copy(colorAt(lat, lon, n));
    out.multiplyScalar(0.92 + hash3(n.x, n.y, n.z) * 0.14);
    for (let k = 0; k < 3; k++) colors.set([out.r, out.g, out.b], (f + k) * 3);
  }
  g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95, metalness: 0 }));
}

// Patchy, see-through cloud shell
function makeClouds(radius, detail, color, density, alpha) {
  const g = new THREE.IcosahedronGeometry(radius, detail).toNonIndexed();
  const pos = g.attributes.position;
  const rgba = new Float32Array(pos.count * 4);
  const cc = col(color);
  const a = new THREE.Vector3(), b = new THREE.Vector3(), c = new THREE.Vector3();
  for (let f = 0; f < pos.count; f += 3) {
    a.fromBufferAttribute(pos, f); b.fromBufferAttribute(pos, f + 1); c.fromBufferAttribute(pos, f + 2);
    const n = a.clone().add(b).add(c).normalize();
    const v = noise(n.clone().multiplyScalar(2.6)) + 0.4 * noise(n.clone().multiplyScalar(6.1));
    const al = v > density ? alpha : 0;
    for (let k = 0; k < 3; k++) rgba.set([cc.r, cc.g, cc.b, al], (f + k) * 4);
  }
  g.setAttribute("color", new THREE.BufferAttribute(rgba, 4));
  g.computeVertexNormals();
  return new THREE.Mesh(g, new THREE.MeshStandardMaterial({ vertexColors: true, transparent: true, flatShading: true, depthWrite: false, roughness: 1 }));
}

function ballMesh(radius, color, detail = 1, emissive = 0) {
  return new THREE.Mesh(
    new THREE.IcosahedronGeometry(radius, detail),
    new THREE.MeshStandardMaterial({ color, flatShading: true, roughness: 0.9, emissive: emissive ? color : 0x000000, emissiveIntensity: emissive })
  );
}

function dashed(points, color = 0xaeb6da, opacity = 0.7, dash = 0.18) {
  const g = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(g, new THREE.LineDashedMaterial({ color, dashSize: dash, gapSize: dash * 0.8, transparent: true, opacity }));
  line.computeLineDistances();
  return line;
}
const ringPoints = (rx, rz, n = 160, cx = 0) => Array.from({ length: n + 1 }, (_, i) => { const t = (i / n) * Math.PI * 2; return new THREE.Vector3(cx + rx * Math.cos(t), 0, rz * Math.sin(t)); });

function stars() {
  const n = 700, p = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const v = new THREE.Vector3(hash3(i, 1, 2) - 0.5, hash3(3, i, 5) - 0.5, hash3(7, 8, i) - 0.5).normalize().multiplyScalar(90);
    p.set([v.x, v.y, v.z], i * 3);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(p, 3));
  return new THREE.Points(g, new THREE.PointsMaterial({ color: 0xdfe5ff, size: 0.35, sizeAttenuation: true, transparent: true, opacity: 0.85 }));
}

function glow(radius, color, opacity) {
  return new THREE.Mesh(new THREE.SphereGeometry(radius, 24, 16), new THREE.MeshBasicMaterial({ color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
}

// ---------- planet colouring ----------
const MOON_MARIA = [[33, -16, 17], [28, 17, 10], [8.5, 31, 11], [18, -57, 24], [17, 59, 7], [-21, -17, 9], [-8, 51, 9], [56, 2, 6], [-15, 40, 7]];
const moonColor = (lat, lon, n) => {
  if (angDist(lat, lon, -43, -11) < 3 || angDist(lat, lon, 9.6, -20) < 2.5) return col("#ECECF2");
  if (MOON_MARIA.some(([a, b, r]) => near(lat, lon, n, a, b, r))) return col("#777A8E");
  return col(noise(n.clone().multiplyScalar(4)) > 0.6 ? "#D2D4DD" : "#B9BCC8");
};
const marsColor = (lat, lon, n) => {
  if (lat > 76 - 3 * noise(n) || lat < -80 + 2 * noise(n)) return col("#F2ECE6");
  if (angDist(lat, lon, 18.6, -133.8) < 4.5) return col("#E59266");
  if (lat > -17 && lat < -10 && lon > -95 && lon < -30) return col("#6A2C13");
  if (angDist(lat, lon, -42.4, 70.5) < 13) return col("#E2A27E");
  if ([[8.4, 69.5, 11], [46.7, -22, 14], [-25, -40, 16], [-2, 0, 7], [-20, 110, 12]].some(([a, b, r]) => near(lat, lon, n, a, b, r))) return col("#8A3F22");
  return col(noise(n.clone().multiplyScalar(3)) > 0.4 ? "#D47448" : "#C2603A");
};
const venusColor = (lat, lon, n) => {
  const band = Math.sin(lat * 0.11 + noise(n.clone().multiplyScalar(2)) * 1.4);
  return col(band > 0.35 ? "#F0D59C" : band < -0.35 ? "#D3A65A" : "#E3BE78");
};
const EARTH_LAND = [[5, 20, 24], [20, 15, 14], [50, 85, 33], [50, 15, 13], [45, -100, 24], [60, -110, 16], [-15, -60, 19], [-25, 134, 12], [72, -40, 8], [15, 78, 9], [35, 105, 15]];
const earthColor = (lat, lon, n) => {
  if (lat < -68 || lat > 78) return col("#F4F7FB");
  if (EARTH_LAND.some(([a, b, r]) => near(lat, lon, n, a, b, r))) {
    const desert = (lat > 12 && lat < 32 && lon > -15 && lon < 50) || (lat < -18 && lat > -32 && lon > 118 && lon < 145);
    return col(desert ? "#D9C28A" : noise(n.clone().multiplyScalar(5)) > 0.3 ? "#3F8E4E" : "#57A862");
  }
  return col(noise(n.clone().multiplyScalar(3)) > 0.5 ? "#2F78D8" : "#2565C0");
};

// ---------- scene builders ----------
// Each returns: anchors { machineId: Object3D | {screen:[x,y]} }, labels [{obj,text,dot}],
// spinTarget (object turned by dragging), globe (for hiding far-side pins), update(t, dt), focusOf(id)
function surfaceWorld(scene, { radius, colorAt, detail, anchors, clouds, retro, home }) {
  const globe = new THREE.Group();
  globe.add(makeGlobe(radius, detail, colorAt));
  let cloudMesh = null;
  if (clouds) { cloudMesh = makeClouds(radius * 1.05, 5, clouds.color, clouds.density, clouds.alpha); globe.add(cloudMesh); }
  scene.add(globe);
  const out = {};
  Object.entries(anchors).forEach(([id, a]) => {
    if (a.lat !== undefined) {
      const o = new THREE.Object3D();
      o.position.copy(latLonVec(a.lat, a.lon, radius * 1.03));
      o.userData.surface = true;
      o.userData.lat = a.lat; o.userData.lon = a.lon;
      globe.add(o);
      out[id] = o;
    } else out[id] = a;
  });
  return {
    globe, spinTarget: globe, anchors: out, labels: [], home,
    update(t, dt) { if (cloudMesh) cloudMesh.rotation.y += (retro ? -1 : 1) * dt * 0.05; },
    focusOf(id) { const a = out[id]; return a && a.userData && a.userData.surface ? { x: a.userData.lat * D * 0.7, y: -a.userData.lon * D } : null; }
  };
}

const BUILD = {
  moon(scene, camera) {
    camera.position.set(0, 0, 10.6); camera.lookAt(0, 0, 0);
    return surfaceWorld(scene, {
      radius: 2.5, detail: 10, colorAt: moonColor, home: { x: 0.12, y: -0.1 },
      anchors: { surveyor3: { lat: -3.0, lon: -23.4 }, apollo11: { lat: 0.7, lon: 23.5 }, apollo15lrv: { lat: 26.1, lon: 3.6 }, apollo17lrv: { lat: 20.2, lon: 30.8 } }
    });
  },

  mars(scene, camera) {
    camera.position.set(0, 0, 10.6); camera.lookAt(0, 0, 0);
    // Perseverance and Ingenuity share a landing site; Ingenuity's pin is nudged so both can be clicked
    return surfaceWorld(scene, {
      radius: 2.5, detail: 10, colorAt: marsColor,
      anchors: {
        viking1: { lat: 22.3, lon: -48.0 }, sojourner: { lat: 19.1, lon: -33.2 }, spirit: { lat: -14.6, lon: 175.5 },
        opportunity: { lat: -2.0, lon: -5.5 }, phoenix: { lat: 68.2, lon: -125.7 }, curiosity: { lat: -4.6, lon: 137.4 },
        insight: { lat: 4.5, lon: 135.6 }, perseverance: { lat: 18.4, lon: 77.5 }, ingenuity: { lat: 25.5, lon: 84.5 }
      }
    });
  },

  venus(scene, camera) {
    camera.position.set(0, 0.6, 11.5); camera.lookAt(0, 0.2, 0);
    const w = surfaceWorld(scene, {
      radius: 2.1, detail: 9, colorAt: venusColor, retro: true,
      clouds: { color: "#FFF4D6", density: 0.15, alpha: 0.25 },
      anchors: { pioneervenus: { lat: -31.3, lon: -43 } }
    });
    // Magellan's near-polar orbit (fixed in space, so its pin stays put while Venus turns)
    const orbit = new THREE.Group();
    orbit.add(dashed(ringPoints(3.0, 3.0), 0xaeb6da, 0.8));
    orbit.rotation.set(Math.PI / 2 - 0.35, 0, 0.55);
    scene.add(orbit);
    const mag = new THREE.Object3D();
    mag.position.set(3.0 * Math.cos(-0.5), 0, 3.0 * Math.sin(-0.5));
    orbit.add(mag);
    w.anchors.magellan = mag;
    // Earth far away and Mariner 1's short, failed path
    const earth = makeGlobe(0.32, 3, earthColor, 0);
    earth.position.set(-3.3, 2.75, -1);
    scene.add(earth);
    const m1 = new THREE.Object3D(); m1.position.set(-2.55, 3.45, -1); scene.add(m1);
    scene.add(dashed([earth.position.clone(), new THREE.Vector3(-2.95, 3.2, -1), m1.position.clone()], 0xff8a3d, 0.9, 0.08));
    w.anchors.mariner1 = m1;
    // Mariner 2's successful flyby path
    scene.add(dashed(Array.from({ length: 40 }, (_, i) => { const t = i / 39; return new THREE.Vector3(3.5 - t * 0.9, 4.4 - t * 8.8, -1 + Math.sin(t * Math.PI) * 4.2); }), 0xaeb6da, 0.6, 0.14));
    const m2 = new THREE.Object3D(); m2.position.set(2.6, 3.25, 0.2); scene.add(m2);
    w.labels.push({ obj: earth, text: "Earth", dot: false, dy: 30 }, { obj: m2, text: "Mariner 2 flew past (1962)", dot: false, dy: -14 });
    const baseUpdate = w.update;
    w.update = (t, dt) => { baseUpdate(t, dt); earth.rotation.y += dt * 0.3; };
    return w;
  },

  orbit(scene, camera) {
    camera.position.set(0, 5.5, 27); camera.lookAt(0.2, -0.6, 0);
    const root = new THREE.Group();
    scene.add(root);
    const earth = new THREE.Group();
    earth.add(makeGlobe(1.45, 8, earthColor, 0.01));
    earth.add(makeClouds(1.52, 5, "#FFFFFF", 0.35, 0.55));
    earth.rotation.z = 23.4 * D;
    root.add(earth);
    root.add(glow(1.75, 0x4fa3ff, 0.12));

    const ring = (r, rx, ry, rz, color, op) => { const g = new THREE.Group(); g.add(dashed(ringPoints(r, r), color, op, 0.12)); g.rotation.set(rx, ry, rz); root.add(g); return g; };
    const leo = ring(2.3, 0.18, 0, 0.12, 0x5fd39a, 0.85);
    const issRing = ring(2.15, 0.6, 0.4, -0.2, 0x5fd39a, 0.35);
    const polar = ring(2.55, 0.25, 0, 1.45, 0x5fd39a, 0.45);

    const at = (group, r, ang) => { const o = new THREE.Object3D(); o.position.set(r * Math.cos(ang), 0, r * Math.sin(ang)); group.add(o); return o; };
    const hubble = at(leo, 2.3, 0.55);

    // Chandra's long oval orbit, with Earth at one end
    const a = 5.6, b = 3.1, c = Math.sqrt(a * a - b * b);
    const chandraG = new THREE.Group();
    chandraG.add(dashed(ringPoints(a, b, 200, c), 0xaeb6da, 0.75, 0.2));
    chandraG.rotation.set(0.42, -0.25, 0.08);
    root.add(chandraG);
    const chandra = new THREE.Object3D();
    chandra.position.set(c + a * Math.cos(-1.05), 0, b * Math.sin(-1.05));
    chandraG.add(chandra);

    // Webb, far out at L2
    const webb = new THREE.Object3D(); webb.position.set(10.4, -3.8, 2.4); root.add(webb);
    root.add(dashed([new THREE.Vector3(0, 0, 0), webb.position.clone()], 0xffd24a, 0.55, 0.25));
    const l2Label = new THREE.Object3D(); l2Label.position.set(6.6, -2.7, 1.6); root.add(l2Label);

    // Earth's path around the Sun, with the retired Kepler and Spitzer trailing behind
    const R = 34;
    const sunPath = (deg) => new THREE.Vector3(R * Math.sin(deg * D), 0, -R + R * Math.cos(deg * D));
    const pathG = new THREE.Group();
    pathG.add(dashed(Array.from({ length: 90 }, (_, i) => sunPath(-42 + i * 0.62)), 0xffd24a, 0.55, 0.3));
    pathG.rotation.set(0.12, 0, -0.06);
    root.add(pathG);
    const pt = (deg) => { const o = new THREE.Object3D(); o.position.copy(sunPath(deg)); pathG.add(o); return o; };
    const kepler = pt(-10), spitzer = pt(-16.5), pathLabel = pt(-13);

    // Moving decorations: the ISS and Landsat 9
    const sat = (color) => { const m = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.08, 0.32), new THREE.MeshStandardMaterial({ color, flatShading: true, metalness: 0.4, roughness: 0.5 })); root.add(m); return m; };
    const iss = sat(0xf5f2ea), landsat = sat(0xffd24a);
    const tmp = new THREE.Vector3();
    const place = (mesh, group, r, ang) => { tmp.set(r * Math.cos(ang), 0, r * Math.sin(ang)); group.updateMatrixWorld(); mesh.position.copy(tmp.applyMatrix4(group.matrix)); mesh.rotation.y = -ang; };

    return {
      spinTarget: root, root, anchors: { hubble, chandra, webb, kepler, spitzer },
      labels: [
        { obj: iss, text: "ISS · ~400 km", dot: false, dy: 14 }, { obj: landsat, text: "Landsat 9", dot: false, dy: 14 },
        { obj: earth, text: "Earth", dot: false, dy: -58 }, { obj: l2Label, text: "to L2 · 1.5 million km", dot: false },
        { obj: pathLabel, text: "Earth’s path around the Sun", dot: false, dy: -34 }
      ],
      update(t, dt) {
        earth.rotation.y += dt * 0.15;
        const s = REDUCED ? 0.3 : t;
        place(iss, issRing, 2.15, s * 0.5);
        place(landsat, polar, 2.55, s * 0.32 + 2);
      }
    };
  },

  deep(scene, camera) {
    camera.position.set(0, 8.5, 21); camera.lookAt(-0.8, -0.6, 0);
    const root = new THREE.Group();
    root.position.set(-6.4, 0, 0);
    scene.add(root);
    const sun = ballMesh(0.95, 0xffd24a, 2, 1.2);
    root.add(sun, glow(1.5, 0xffb347, 0.25), glow(2.3, 0xffd24a, 0.08));
    const planets = [
      { name: "Jupiter", r: 2.3, size: 0.32, color: 0xe0b07a, speed: 0.12, start: -0.6 },
      { name: "Saturn", r: 3.5, size: 0.27, color: 0xe8d49a, speed: 0.08, start: 2.6, ring: true },
      { name: "Uranus", r: 4.7, size: 0.2, color: 0x9fe3e8, speed: 0.055, start: 1.2 },
      { name: "Neptune", r: 5.8, size: 0.2, color: 0x5b8cff, speed: 0.04, start: -2.2 }
    ].map((p) => {
      root.add(dashed(ringPoints(p.r, p.r), 0xaeb6da, 0.35, 0.15));
      const g = new THREE.Group();
      const m = ballMesh(p.size, p.color, 1);
      g.add(m);
      if (p.ring) {
        const ring = new THREE.Mesh(new THREE.RingGeometry(p.size * 1.4, p.size * 2.2, 24), new THREE.MeshBasicMaterial({ color: 0xd9c690, side: THREE.DoubleSide, transparent: true, opacity: 0.75 }));
        ring.rotation.x = Math.PI / 2 - 0.45;
        g.add(ring);
      }
      root.add(g);
      return { ...p, g, m };
    });
    // Kuiper Belt: a ring of icy rocks
    const kuiper = new THREE.InstancedMesh(new THREE.DodecahedronGeometry(0.05, 0), new THREE.MeshStandardMaterial({ color: 0xbfd2e6, flatShading: true }), 260);
    const mtx = new THREE.Matrix4();
    for (let i = 0; i < 260; i++) {
      const ang = hash3(i, 2, 3) * Math.PI * 2, rr = 6.4 + hash3(4, i, 6) * 1.3;
      mtx.makeTranslation(rr * Math.cos(ang), (hash3(7, 8, i) - 0.5) * 0.35, rr * Math.sin(ang));
      kuiper.setMatrixAt(i, mtx);
    }
    root.add(kuiper);
    // Heliopause: edge of the Sun's bubble
    root.add(dashed(ringPoints(9.6, 9.6, 220), 0xff8a3d, 0.75, 0.25));
    const bubble = new THREE.Mesh(new THREE.IcosahedronGeometry(9.6, 2), new THREE.MeshBasicMaterial({ color: 0xff8a3d, wireframe: true, transparent: true, opacity: 0.03 }));
    root.add(bubble);
    const anchor = (x, y, z) => { const o = new THREE.Object3D(); o.position.set(x, y, z); root.add(o); return o; };
    const probes = {
      newhorizons: anchor(6.9, 0.25, -1.0),
      pioneer10: anchor(9.9, 0.3, 4.6),
      voyager1: anchor(11.6, 3.3, -2.4),
      voyager2: anchor(10.6, -3.4, 3.0)
    };
    Object.values(probes).forEach((o) => root.add(dashed([new THREE.Vector3(0, 0, 0), o.position.clone()], 0xf5f2ea, 0.2, 0.2)));
    const hpLabel = anchor(9.6 * Math.cos(-1.15), 0, 9.6 * Math.sin(-1.15));
    const kLabel = anchor(7.0 * Math.cos(0.75), 0, 7.0 * Math.sin(0.75));
    return {
      spinTarget: root, root, anchors: probes,
      labels: [
        { obj: sun, text: "Sun", dot: false, dy: 34 },
        ...planets.map((p) => ({ obj: p.m, text: p.name, dot: false, dy: 16 })),
        { obj: kLabel, text: "Kuiper Belt", dot: false },
        { obj: hpLabel, text: "Heliopause: edge of the Sun’s bubble", dot: false }
      ],
      update(t, dt) {
        sun.rotation.y += dt * 0.2;
        kuiper.rotation.y += dt * 0.01;
        const s = REDUCED ? 0 : t;
        planets.forEach((p) => {
          const ang = p.start + s * p.speed;
          p.g.position.set(p.r * Math.cos(ang), 0, p.r * Math.sin(ang));
          p.m.rotation.y += dt * 0.6;
        });
      }
    };
  }
};

const ASPECT = { moon: "1 / 1", mars: "1 / 1", venus: "1 / 1", orbit: "4 / 3", deep: "16 / 10" };

// ---------- mounting ----------
let active = null;

function mount(el, worldId, selectedId) {
  unmount();
  if (!BUILD[worldId]) return;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.className = "scene__3d";
  canvas.setAttribute("aria-hidden", "true");
  el.style.aspectRatio = ASPECT[worldId];
  el.prepend(canvas);
  el.classList.add("scene--3d");

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(worldId === "orbit" || worldId === "deep" ? 40 : 35, 1, 0.1, 300);
  scene.add(stars());
  scene.add(new THREE.AmbientLight(0xffffff, worldId === "deep" ? 0.45 : 0.32));
  if (worldId === "deep") {
    const sunLight = new THREE.PointLight(0xfff1d6, 3.2, 0, 0);
    sunLight.position.set(-6.4, 0, 0);
    scene.add(sunLight);
  } else {
    const key = new THREE.DirectionalLight(0xffffff, 2.6);
    key.position.set(-6, 3.5, 7);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0x8fb3ff, 0.5);
    rim.position.set(6, -2, -4);
    scene.add(rim);
  }
  const world = BUILD[worldId](scene, camera);

  const pins = {};
  el.querySelectorAll(".pin").forEach((p) => { pins[p.dataset.id] = p; });
  const labels = world.labels.map((l) => {
    const s = document.createElement("span");
    s.className = "decor decor--3d" + (l.dot ? "" : " decor--text");
    s.innerHTML = (l.dot ? "<i></i>" : "") + l.text;
    el.appendChild(s);
    return { ...l, el: s };
  });
  const hint = document.querySelector(".scene-hint");
  if (hint) hint.textContent = window.matchMedia("(hover: hover)").matches ? "Drag to turn the view · hover over a pin to peek · click to choose · not to scale" : "Drag to turn the view · tap a pin to choose · not to scale";

  // rotation state (target = where dragging/focus wants to go; cur = smoothed)
  const spin = world.spinTarget;
  const isGlobe = !!world.globe;
  const target = { x: isGlobe ? 0.12 : 0, y: 0 };
  const cur = { x: target.x, y: target.y };
  let hovering = false, dragging = false, last = null, idleFrom = 0, raf = 0, prev = performance.now();
  const clock0 = performance.now();

  function focus(id) {
    if (!world.focusOf) return;
    const f = world.focusOf(id);
    if (!f) return;
    let y = f.y;
    while (y - cur.y > Math.PI) y -= Math.PI * 2;
    while (y - cur.y < -Math.PI) y += Math.PI * 2;
    target.x = Math.max(-1.1, Math.min(1.1, f.x));
    target.y = y;
    idleFrom = performance.now();
  }
  if (world.home) { target.x = world.home.x; target.y = world.home.y; }
  else if (selectedId) focus(selectedId);
  cur.x = target.x; cur.y = target.y;

  const onDown = (e) => { dragging = true; last = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); el.classList.add("is-dragging"); hideTip(); };
  const onMove = (e) => {
    if (!dragging) return;
    const dx = e.clientX - last.x, dy = e.clientY - last.y;
    last = { x: e.clientX, y: e.clientY };
    if (isGlobe) {
      target.y += dx * 0.009;
      target.x = Math.max(-1.2, Math.min(1.2, target.x + dy * 0.007));
    } else {
      target.y = Math.max(-0.9, Math.min(0.9, target.y + dx * 0.005));
      target.x = Math.max(-0.3, Math.min(0.55, target.x + dy * 0.004));
    }
  };
  const onUp = () => { dragging = false; el.classList.remove("is-dragging"); idleFrom = performance.now(); };
  const onEnter = () => { hovering = true; };
  const onLeave = () => { hovering = false; idleFrom = performance.now(); };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);
  el.addEventListener("pointerenter", onEnter);
  el.addEventListener("pointerleave", onLeave);

  function resize() {
    const w = el.clientWidth, h = el.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(el);
  resize();

  const v = new THREE.Vector3(), n = new THREE.Vector3(), toCam = new THREE.Vector3(), center = new THREE.Vector3();
  const project = (obj) => {
    obj.getWorldPosition(v);
    const p = v.clone().project(camera);
    return { x: (p.x + 1) * 50, y: (1 - p.y) * 50, z: p.z, world: v.clone() };
  };

  let idleAmp = 0;
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - prev) / 1000);
    prev = now;
    const t = (now - clock0) / 1000;
    // gentle idle sway when nobody is interacting
    const idle = !REDUCED && !hovering && !dragging && now - idleFrom > 2500;
    idleAmp += ((idle ? 1 : 0) - idleAmp) * Math.min(1, dt * 1.5);
    cur.x += (target.x - cur.x) * Math.min(1, dt * 7);
    cur.y += (target.y - cur.y) * Math.min(1, dt * 7);
    const sway = Math.sin(t * 0.35) * (isGlobe ? 0.28 : 0.12) * idleAmp;
    spin.rotation.set(cur.x, cur.y + sway, 0);
    world.update(t, dt);
    scene.updateMatrixWorld();

    if (isGlobe) world.globe.getWorldPosition(center);
    Object.entries(world.anchors).forEach(([id, a]) => {
      const pin = pins[id];
      if (!pin) return;
      if (a.screen) { pin.style.left = a.screen[0] + "%"; pin.style.top = a.screen[1] + "%"; return; }
      const p = project(a);
      pin.style.left = p.x.toFixed(2) + "%";
      pin.style.top = p.y.toFixed(2) + "%";
      let hidden = p.z > 1;
      if (a.userData && a.userData.surface) {
        n.copy(p.world).sub(center).normalize();
        toCam.copy(camera.position).sub(p.world).normalize();
        hidden = n.dot(toCam) < 0.12;
      }
      pin.classList.toggle("pin--behind", hidden);
    });
    labels.forEach((l) => {
      const p = project(l.obj);
      l.el.style.left = p.x.toFixed(2) + "%";
      l.el.style.top = `calc(${p.y.toFixed(2)}% + ${l.dy || 0}px)`;
      l.el.style.display = p.z > 1 ? "none" : "";
    });
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  active = {
    el, focus,
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      labels.forEach((l) => l.el.remove());
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      renderer.dispose();
      canvas.remove();
    }
  };
}

function hideTip() { const t = document.getElementById("tip"); if (t) t.hidden = true; }

function unmount() {
  if (active) { active.destroy(); active = null; }
}

function focus(id) { if (active) active.focus(id); }

window.GR3D = { mount, unmount, focus };
window.dispatchEvent(new Event("gr3d-ready"));
