// ===== Low-poly 3D machine models (laptop only) =====
// Each machine is built from named parts. Clicking a Tech Lab item turns the model to show that part.
// Models are simplified and not to scale.
import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.170.0/build/three.module.js";

const P = Math.PI;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const mat = (color, m = 0.1, r = 0.7, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: m, roughness: r, flatShading: true, ...extra });
const M = {
  white: mat(0xe9e6de), gold: mat(0xd6a93c, 0.6, 0.35), silver: mat(0xb9c0cc, 0.6, 0.35), grey: mat(0x7d8290, 0.3, 0.6),
  dark: mat(0x2b303b), black: mat(0x15171c, 0.2, 0.5), solar: mat(0x223b8f, 0.35, 0.35), orange: mat(0xff8a3d),
  mesh: mat(0x9aa0aa, 0.4, 0.6, { wireframe: true }), shield: mat(0xc7b6e6, 0.5, 0.35, { side: THREE.DoubleSide }),
  ground: new THREE.MeshStandardMaterial({ color: 0x1c2550, roughness: 1, transparent: true, opacity: 0.35 })
};

// ---------- builder ----------
class Builder {
  constructor() { this.root = new THREE.Group(); this.parts = {}; this.spinners = []; }
  add(part, mesh, parent) {
    mesh.material = mesh.material.clone();
    (parent || this.root).add(mesh);
    if (part) (this.parts[part] = this.parts[part] || []).push(mesh);
    return mesh;
  }
  place(mesh, pos = [0, 0, 0], rot = [0, 0, 0]) { mesh.position.set(...pos); mesh.rotation.set(...rot); return mesh; }
  box(part, m, size, pos, rot, parent) { return this.add(part, this.place(new THREE.Mesh(new THREE.BoxGeometry(...size), m), pos, rot), parent); }
  cyl(part, m, rt, rb, h, pos, rot, seg = 10, parent, open = false) {
    const mesh = this.add(part, this.place(new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg, 1, open), m), pos, rot), parent);
    if (open) mesh.material.side = THREE.DoubleSide;
    return mesh;
  }
  ball(part, m, r, pos, parent) { return this.add(part, this.place(new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), m), pos), parent); }
  cone(part, m, r, h, pos, rot, seg = 10) { return this.add(part, this.place(new THREE.Mesh(new THREE.ConeGeometry(r, h, seg), m), pos, rot)); }
  dish(part, m, r, depth, pos, rot, parent) {
    const pts = Array.from({ length: 7 }, (_, i) => { const x = (i / 6) * r; return new THREE.Vector2(x, depth * (x / r) ** 2); });
    const mm = m.clone(); mm.side = THREE.DoubleSide;
    return this.add(part, this.place(new THREE.Mesh(new THREE.LatheGeometry(pts, 14), mm), pos, rot), parent);
  }
  rod(part, m, a, b, r = 0.03) {
    const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b);
    const len = va.distanceTo(vb);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 6), m);
    mesh.position.copy(va).add(vb).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), vb.clone().sub(va).normalize());
    return this.add(part, mesh);
  }
  wheel(part, m, r, w, pos) { return this.cyl(part, m, r, r, w, pos, [0, 0, P / 2], 12); }
  ground(r = 2.6) { const g = new THREE.Mesh(new THREE.CircleGeometry(r, 32), M.ground); g.rotation.x = -P / 2; g.position.y = -0.01; g.userData.ground = true; this.root.add(g); }
  legs(part, n, r, top, footR = 1.3, start = 0) {
    for (let i = 0; i < n; i++) {
      const a = start + (i / n) * P * 2, c = Math.cos(a), s = Math.sin(a);
      this.rod(part, M.silver, [r * c, top, r * s], [footR * c, 0.06, footR * s], 0.035);
      this.rod(part, M.silver, [r * 0.8 * c, top - 0.3, r * 0.8 * s], [footR * c, 0.06, footR * s], 0.025);
      this.cyl(part, M.silver, 0.16, 0.18, 0.05, [footR * c, 0.04, footR * s]);
    }
  }
}

// ---------- model archetypes ----------
function roverMER(b) {
  b.ground();
  b.box("body", M.white, [1.3, 0.45, 0.95], [0, 0.75, 0]);
  b.box("body", M.gold, [1.25, 0.08, 0.9], [0, 0.5, 0]);
  b.box("solar", M.solar, [1.6, 0.04, 1.25], [0, 1.02, -0.05]);
  b.box("solar", M.solar, [0.55, 0.04, 0.9], [1.07, 1.02, 0.1]);
  b.box("solar", M.solar, [0.55, 0.04, 0.9], [-1.07, 1.02, 0.1]);
  b.box("solar", M.solar, [1.1, 0.04, 0.45], [0, 1.02, -0.9]);
  b.cyl("mast", M.white, 0.04, 0.04, 0.9, [0.45, 1.5, 0.45]);
  b.box("cam", M.silver, [0.38, 0.14, 0.16], [0.45, 2.0, 0.45]);
  b.cyl("cam", M.black, 0.04, 0.04, 0.06, [0.35, 2.0, 0.55], [P / 2, 0, 0], 8);
  b.cyl("cam", M.black, 0.04, 0.04, 0.06, [0.55, 2.0, 0.55], [P / 2, 0, 0], 8);
  b.rod(null, M.silver, [-0.45, 1.04, -0.3], [-0.45, 1.25, -0.3]);
  b.cyl("antenna", M.silver, 0.16, 0.16, 0.03, [-0.45, 1.27, -0.3], [0.6, 0, 0]);
  b.rod("arm", M.silver, [0.45, 0.7, 0.48], [0.55, 0.62, 0.98]);
  b.rod("arm", M.silver, [0.55, 0.62, 0.98], [0.2, 0.55, 1.18]);
  b.box("arm", M.silver, [0.2, 0.2, 0.2], [0.2, 0.48, 1.22]);
  b.cyl("rat", M.dark, 0.07, 0.07, 0.14, [0.2, 0.32, 1.22]);
  [0.6, 0, -0.6].forEach((z) => [-0.78, 0.78].forEach((x) => {
    b.wheel("wheels", M.dark, 0.2, 0.17, [x, 0.21, z]);
    b.rod("wheels", M.silver, [x * 0.82, 0.55, z * 0.6], [x, 0.24, z], 0.025);
  }));
}

function sojourner(b) {
  b.ground(2);
  b.box("body", M.white, [0.9, 0.25, 0.62], [0, 0.45, 0]);
  b.box("solar", M.solar, [1.0, 0.03, 0.72], [0, 0.6, 0]);
  [0.38, 0, -0.38].forEach((z) => [-0.55, 0.55].forEach((x) => {
    b.wheel("wheels", M.silver, 0.14, 0.1, [x, 0.14, z]);
    b.rod("wheels", M.silver, [x * 0.8, 0.4, z * 0.7], [x, 0.16, z], 0.02);
  }));
  b.box("cams", M.black, [0.08, 0.07, 0.06], [-0.13, 0.46, 0.34]);
  b.box("cams", M.black, [0.08, 0.07, 0.06], [0.13, 0.46, 0.34]);
  b.box("cams", M.black, [0.07, 0.06, 0.06], [0.25, 0.46, -0.34]);
  b.rod("apxs", M.silver, [0, 0.42, -0.32], [0, 0.3, -0.56], 0.02);
  b.cyl("apxs", M.gold, 0.06, 0.06, 0.08, [0, 0.26, -0.6]);
  b.rod("radio", M.grey, [0.32, 0.62, -0.2], [0.32, 1.3, -0.2], 0.012);
  b.ball("radio", M.grey, 0.03, [0.32, 1.32, -0.2]);
}

function roverMSL(b, percy) {
  b.ground(3);
  b.box("body", M.white, [1.6, 0.6, 1.1], [0, 0.95, 0]);
  b.box("body", M.silver, [1.55, 0.05, 1.05], [0, 1.27, 0]);
  b.cyl("rtg", M.grey, 0.22, 0.22, 0.6, [0, 1.3, -0.8], [0.95, 0, 0], 10);
  for (let i = 0; i < 6; i++) b.box("rtg", M.grey, [0.05, 0.55, 0.42], [0, 1.3, -0.8], [0.95, (i / 6) * P, 0]);
  b.cyl("mast", M.white, 0.06, 0.06, 1.1, [0.5, 1.85, 0.42]);
  b.box("mastcam", M.silver, [0.44, 0.2, 0.22], [0.5, 2.45, 0.44]);
  b.cyl("mastcam", M.black, 0.045, 0.045, 0.06, [0.38, 2.45, 0.57], [P / 2, 0, 0], 8);
  b.cyl("mastcam", M.black, 0.045, 0.045, 0.06, [0.62, 2.45, 0.57], [P / 2, 0, 0], 8);
  b.box("chemcam", M.white, [0.32, 0.26, 0.34], [0.5, 2.68, 0.42]);
  b.cyl("chemcam", M.black, 0.09, 0.09, 0.06, [0.5, 2.68, 0.61], [P / 2, 0, 0], 10);
  if (percy) b.cyl("mic", M.black, 0.03, 0.03, 0.1, [0.72, 2.7, 0.44], [0, 0, P / 2], 8);
  b.rod(null, M.silver, [-0.5, 1.3, -0.2], [-0.5, 1.5, -0.2]);
  b.cyl("antenna", M.silver, 0.26, 0.26, 0.04, [-0.5, 1.52, -0.2], [0.7, 0, 0], 6);
  if (!percy) b.box("rad", M.gold, [0.2, 0.12, 0.2], [-0.15, 1.35, 0.3]);
  b.rod("arm", M.silver, [0.55, 0.9, 0.56], [0.65, 0.75, 1.15], 0.04);
  b.rod("arm", M.silver, [0.65, 0.75, 1.15], [0.1, 0.62, 1.35], 0.04);
  b.box("arm", M.silver, [0.32, 0.32, 0.32], [0.1, 0.5, 1.38]);
  b.cyl("drill", M.dark, 0.04, 0.04, 0.32, [0.1, 0.2, 1.38]);
  if (percy) {
    b.box("caching", M.gold, [0.65, 0.26, 0.24], [0, 0.6, 0.5]);
    b.box("trn", M.black, [0.16, 0.12, 0.1], [-0.45, 0.62, 0.58]);
  }
  [0.75, 0, -0.75].forEach((z) => [-0.98, 0.98].forEach((x) => {
    b.wheel("wheels", M.silver, 0.27, 0.22, [x, 0.27, z]);
    b.rod("wheels", M.silver, [x * 0.82, 0.75, z * 0.6], [x, 0.3, z], 0.035);
  }));
}

function lrv(b) {
  b.ground(2.8);
  b.box("chassis", M.silver, [1.2, 0.08, 2.2], [0, 0.55, 0]);
  [[-0.78, 0.85], [0.78, 0.85], [-0.78, -0.85], [0.78, -0.85]].forEach(([x, z]) => {
    b.wheel("wheels", M.mesh, 0.32, 0.22, [x, 0.32, z]);
    b.cyl("motors", M.gold, 0.1, 0.1, 0.14, [x * 0.82, 0.32, z], [0, 0, P / 2], 8);
    b.box("fenders", M.grey, [0.28, 0.03, 0.72], [x, 0.7, z], [x > 0 ? -0.15 : 0.15, 0, 0]);
  });
  [-0.26, 0.26].forEach((x) => {
    b.box("seats", M.grey, [0.42, 0.06, 0.42], [x, 0.75, -0.05]);
    b.box("seats", M.grey, [0.42, 0.42, 0.05], [x, 0.96, -0.27]);
  });
  b.rod("controller", M.black, [0, 0.6, 0.22], [0, 0.95, 0.22], 0.025);
  b.box("controller", M.black, [0.2, 0.04, 0.05], [0, 0.97, 0.22]);
  b.box("nav", M.silver, [0.5, 0.3, 0.1], [0, 0.88, 0.58], [-0.4, 0, 0]);
  b.box("batteries", M.gold, [0.55, 0.2, 0.32], [0, 0.69, 0.92]);
  b.rod("tvcam", M.silver, [0.38, 0.6, 1.0], [0.38, 1.4, 1.0], 0.025);
  b.box("tvcam", M.white, [0.18, 0.15, 0.28], [0.38, 1.47, 1.0]);
  b.rod(null, M.silver, [-0.38, 0.6, 0.95], [-0.38, 1.45, 0.95], 0.025);
  b.dish("antenna", M.white, 0.35, 0.18, [-0.38, 1.45, 0.95], [-0.5, 0, 0]);
  b.box("tools", M.silver, [0.95, 0.36, 0.3], [0, 0.76, -1.02]);
  [-0.3, 0, 0.3].forEach((x) => b.rod("tools", M.grey, [x, 0.9, -1.02], [x, 1.35, -1.02], 0.018));
}

function lunarModule(b) {
  b.ground(2.8);
  b.cyl("body", M.gold, 0.95, 0.95, 0.72, [0, 1.06, 0], [0, P / 8, 0], 8);
  b.cyl("engine", M.dark, 0.18, 0.36, 0.42, [0, 0.52, 0], [0, 0, 0], 10);
  b.legs("legs", 4, 0.9, 1.25, 1.7, P / 2);
  for (let i = 0; i < 5; i++) b.box("ladder", M.silver, [0.3, 0.03, 0.04], [0, 0.95 - i * 0.18, 1.12 + i * 0.13]);
  b.rod("ladder", M.silver, [-0.15, 1.0, 1.1], [-0.15, 0.2, 1.7], 0.02);
  b.rod("ladder", M.silver, [0.15, 1.0, 1.1], [0.15, 0.2, 1.7], 0.02);
  b.box("plaque", M.silver, [0.3, 0.2, 0.02], [0, 1.15, 0.99]);
  b.box("lrrr", M.silver, [0.6, 0.05, 0.46], [1.55, 0.32, 1.35], [-0.45, 0, 0]);
  b.rod("lrrr", M.silver, [1.55, 0, 1.45], [1.55, 0.28, 1.35], 0.02);
  b.cyl("seismo", M.gold, 0.13, 0.13, 0.32, [-1.5, 0.17, 1.5]);
  b.box("seismo", M.solar, [0.5, 0.02, 0.3], [-1.92, 0.22, 1.5]);
  b.box("seismo", M.solar, [0.5, 0.02, 0.3], [-1.08, 0.22, 1.5]);
}

function surveyor(b) {
  b.ground(2.2);
  b.legs("legs", 3, 0.35, 0.95, 1.25, P / 2);
  b.box("body", M.white, [0.62, 0.36, 0.62], [0, 0.85, 0]);
  b.box("body", M.gold, [0.4, 0.2, 0.4], [0.3, 0.7, -0.3]);
  b.cyl("radar", M.silver, 0.22, 0.22, 0.05, [0, 0.6, 0], [0, 0, 0], 12);
  b.rod("solar", M.silver, [0, 1.0, 0], [0, 2.15, 0], 0.03);
  b.box("solar", M.solar, [0.75, 0.02, 0.55], [0.25, 2.18, 0], [0, 0, 0.4]);
  b.box("antenna", M.silver, [0.45, 0.02, 0.45], [-0.28, 2.05, 0], [0, 0, -0.6]);
  b.cyl("camera", M.white, 0.1, 0.1, 0.42, [0.45, 1.08, 0.45]);
  b.box("camera", M.silver, [0.15, 0.02, 0.15], [0.45, 1.33, 0.45], [0.6, 0, 0]);
  b.rod("sampler", M.silver, [-0.3, 0.85, 0.4], [-0.55, 0.5, 1.1], 0.03);
  b.box("sampler", M.grey, [0.13, 0.09, 0.17], [-0.55, 0.45, 1.16]);
}

function viking(b) {
  b.ground(2.4);
  b.legs("legs", 3, 0.75, 0.75, 1.4, P / 2);
  b.cyl("body", M.white, 0.9, 0.9, 0.36, [0, 0.78, 0], [0, 0, 0], 6);
  b.box("biolab", M.gold, [0.42, 0.26, 0.36], [0, 1.08, 0.05]);
  [-0.55, 0.55].forEach((x) => {
    b.cyl("rtg", M.grey, 0.16, 0.16, 0.36, [x, 1.15, -0.38], [0, 0, 0], 8);
    for (let i = 0; i < 4; i++) b.box("rtg", M.grey, [0.42, 0.3, 0.03], [x, 1.15, -0.38], [0, (i / 4) * P, 0]);
  });
  b.rod(null, M.silver, [0.3, 0.95, -0.15], [0.3, 1.45, -0.15]);
  b.dish("antenna", M.white, 0.4, 0.13, [0.3, 1.5, -0.15], [-0.9, 0, 0]);
  [-0.3, 0.3].forEach((x) => { b.cyl("cameras", M.white, 0.09, 0.09, 0.46, [x, 1.18, 0.58]); b.ball("cameras", M.silver, 0.1, [x, 1.44, 0.58]); });
  b.box("arm", M.silver, [0.12, 0.12, 0.95], [-0.6, 0.9, 0.82]);
  b.box("arm", M.grey, [0.16, 0.12, 0.16], [-0.6, 0.85, 1.32]);
  b.rod("boom", M.silver, [0.62, 1.0, 0.3], [1.1, 1.65, 0.3], 0.03);
  b.box("boom", M.silver, [0.16, 0.1, 0.1], [1.12, 1.7, 0.3]);
}

function phoenixLike(b, insight) {
  b.ground(2.8);
  b.legs("legs", 3, 0.5, 0.75, 1.0, P / 2);
  b.cyl("body", M.white, 0.62, 0.62, 0.26, [0, 0.82, 0], [0, 0, 0], 10);
  [-1.35, 1.35].forEach((x) => { b.cyl("solar", M.solar, 0.75, 0.75, 0.03, [x, 0.96, 0], [0, 0, 0], 10); b.cyl("solar", M.gold, 0.74, 0.74, 0.02, [x, 0.94, 0], [0, 0, 0], 10); });
  b.rod("arm", M.white, [0.3, 0.96, 0.4], [0.7, 1.45, 0.9], 0.04);
  b.rod("arm", M.white, [0.7, 1.45, 0.9], [0.95, 0.6, 1.4], 0.04);
  b.box("arm", M.silver, [0.16, 0.12, 0.2], [0.97, 0.52, 1.45]);
  if (!insight) {
    for (let i = 0; i < 4; i++) b.box("ovens", M.gold, [0.13, 0.14, 0.13], [-0.35 + i * 0.16, 1.03, 0.3]);
    b.box("wetlab", M.silver, [0.3, 0.18, 0.25], [-0.25, 1.04, -0.25]);
    b.rod("weather", M.silver, [0.35, 0.95, -0.35], [0.35, 1.95, -0.35], 0.025);
    b.box("weather", M.silver, [0.12, 0.08, 0.08], [0.42, 1.95, -0.35]);
    b.box("weather", M.black, [0.14, 0.14, 0.14], [0.15, 1.03, -0.4]);
  } else {
    const dome = new THREE.Mesh(new THREE.SphereGeometry(0.36, 12, 6, 0, P * 2, 0, P / 2), M.white);
    b.add("seismo", b.place(dome, [0.45, 0, 1.55]));
    b.cyl("mole", M.gold, 0.14, 0.14, 0.38, [-0.7, 0.19, 1.45]);
    b.rod("mole", M.grey, [-0.7, 0.05, 1.3], [-0.2, 0.8, 0.4], 0.012);
    b.cone("radio", M.silver, 0.08, 0.18, [-0.35, 1.08, 0.2], [0, 0, 0], 4);
    b.cone("radio", M.silver, 0.08, 0.18, [-0.15, 1.08, -0.3], [0, 0, 0], 4);
    b.rod("weather", M.silver, [0.5, 0.95, -0.4], [0.9, 1.15, -0.4], 0.02);
  }
}

function ingenuity(b) {
  b.ground(1.8);
  [[0.5, 0.5], [-0.5, 0.5], [0.5, -0.5], [-0.5, -0.5]].forEach(([x, z]) => b.rod("legs", M.silver, [x * 0.3, 0.45, z * 0.3], [x, 0.03, z], 0.02));
  b.box("body", M.silver, [0.36, 0.3, 0.36], [0, 0.55, 0]);
  b.box("cameras", M.black, [0.09, 0.07, 0.07], [0.08, 0.38, 0.14]);
  b.box("cameras", M.black, [0.07, 0.06, 0.06], [-0.08, 0.38, 0.14]);
  b.cyl("mast", M.silver, 0.03, 0.03, 0.75, [0, 1.05, 0], [0, 0, 0], 8);
  [1.0, 1.18].forEach((y, i) => {
    const g = new THREE.Group(); g.position.y = y; b.root.add(g);
    b.add("rotors", new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.02, 0.16), M.white), g);
    b.spinners.push({ obj: g, speed: i ? -6 : 6 });
  });
  b.box("solar", M.solar, [0.55, 0.02, 0.42], [0, 1.44, 0]);
}

function mariner(b) {
  b.cyl("bus", M.gold, 0.5, 0.5, 0.35, [0, 0, 0], [0, 0, 0], 6);
  [-1.3, 1.3].forEach((x) => b.box("solar", M.solar, [1.6, 0.02, 0.62], [x, 0.1, 0]));
  b.rod(null, M.silver, [0, -0.18, 0], [0, -0.45, 0]);
  b.dish("antenna", M.silver, 0.38, 0.12, [0, -0.6, 0.1], [P + 0.4, 0, 0]);
  b.dish("microwave", M.white, 0.22, 0.06, [0.38, 0.38, 0.32], [-0.6, 0, 0]);
  b.box("infrared", M.black, [0.13, 0.13, 0.13], [-0.35, 0.36, 0.34]);
  [[0.35, 0.35], [-0.35, 0.35], [0, -0.45]].forEach(([x, z]) => b.rod("mast", M.silver, [x, 0.18, z], [0, 1.9, 0], 0.018));
  b.box("magnetometer", M.white, [0.14, 0.14, 0.14], [0, 1.95, 0]);
}

function pioneerVenus(b) {
  b.cyl("bus", M.solar, 1.1, 1.1, 0.6, [0, 0, 0], [0, 0, 0], 12);
  b.cyl("bus", M.silver, 1.12, 1.12, 0.06, [0, 0.3, 0], [0, 0, 0], 12);
  b.cone("large", M.white, 0.55, 0.45, [0, 0.62, 0], [0, 0, 0], 12);
  b.ball("large", M.silver, 0.32, [0, 0.42, 0]);
  [0.25, -0.25].forEach((x) => b.rod("sensors", M.orange, [x, 0.5, 0.2], [x * 2.6, 0.62, 0.55], 0.02));
  b.cyl("parachute", M.orange, 0.1, 0.1, 0.12, [0.32, 0.42, -0.25]);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * P * 2 + 0.5;
    b.cone("small", M.white, 0.24, 0.22, [0.78 * Math.cos(a), 0.48, 0.78 * Math.sin(a)], [0, 0, 0], 10);
    b.ball("small", M.silver, 0.15, [0.78 * Math.cos(a), 0.38, 0.78 * Math.sin(a)]);
  }
  b.rod("antenna", M.silver, [0, -0.3, 0], [0, -0.9, 0], 0.03);
  b.ball("antenna", M.silver, 0.06, [0, -0.92, 0]);
}

function magellan(b) {
  b.box("bus", M.gold, [0.7, 0.7, 0.7], [0, 0, 0]);
  b.box("bus", M.silver, [0.5, 0.35, 0.5], [0, -0.5, 0]);
  b.dish("dish", M.white, 1.15, 0.38, [0, 0.4, 0]);
  b.rod("dish", M.silver, [0, 0.4, 0], [0, 1.2, 0], 0.025);
  [-1.25, 1.25].forEach((x) => { b.rod(null, M.silver, [x * 0.3, -0.1, 0], [x * 0.75, -0.1, 0]); b.box("solar", M.solar, [1.0, 0.02, 1.0], [x, -0.1, 0]); });
  b.box("altimeter", M.silver, [0.15, 0.15, 0.4], [0.42, 0.25, 0.3], [0.5, 0, 0]);
}

function hubble(b) {
  b.cyl("tube", M.silver, 0.55, 0.55, 2.4, [0, 0, 0.25], [P / 2, 0, 0], 12);
  b.cyl("bays", M.silver, 0.62, 0.62, 0.9, [0, 0, -1.4], [P / 2, 0, 0], 12);
  for (let i = 0; i < 4; i++) b.rod("bays", M.gold, [0.63 * Math.cos(i * P / 2), 0.63 * Math.sin(i * P / 2), -1.8], [0.63 * Math.cos(i * P / 2), 0.63 * Math.sin(i * P / 2), -1.0], 0.02);
  b.cyl("door", M.silver, 0.56, 0.56, 0.04, [0, 0.62, 1.55], [0.35, 0, 0], 12);
  b.cyl("mirror", M.silver, 0.47, 0.47, 0.06, [0, 0, -0.75], [P / 2, 0, 0], 16);
  [-1.45, 1.45].forEach((x) => { b.rod(null, M.silver, [x * 0.38, 0, -0.5], [x * 0.6, 0, -0.5]); b.box("solar", M.solar, [1.55, 0.02, 0.6], [x, 0, -0.5]); });
  [-1, 1].forEach((y) => { b.rod("antennas", M.silver, [0, y * 0.6, -1.0], [0, y * 1.1, -1.0], 0.02); b.dish("antennas", M.white, 0.22, 0.07, [0, y * 1.12, -1.0], [y > 0 ? 0 : P, 0, 0]); });
}

function chandra(b) {
  b.cyl("tube", M.white, 0.45, 0.45, 3.4, [0, 0, 0], [P / 2, 0, 0], 10);
  b.cyl("door", M.white, 0.46, 0.46, 0.04, [0, 0.5, 1.8], [0.4, 0, 0], 10);
  [0.12, 0.2, 0.28, 0.36].forEach((r) => b.cyl("mirrors", M.silver, r, r * 0.92, 0.6, [0, 0, 1.0], [P / 2, 0, 0], 16, undefined, true));
  b.box("cameras", M.silver, [0.8, 0.8, 0.5], [0, 0, -1.95]);
  [-1, 1].forEach((x) => b.box("solar", M.solar, [1.3, 0.02, 0.55], [x * 1.1, 0, 0.55]));
}

function spitzer(b) {
  b.cyl("bus", M.silver, 0.6, 0.6, 0.35, [0, -1.05, 0], [0, 0, 0], 6);
  b.cyl("cryostat", M.silver, 0.45, 0.45, 1.0, [0, -0.35, 0], [0, 0, 0], 10);
  b.cyl("telescope", M.dark, 0.42, 0.42, 0.95, [0, 0.62, 0], [0, 0, 0], 10, undefined, true);
  b.cyl("mirror", M.silver, 0.38, 0.38, 0.05, [0, 0.22, 0], [0, 0, 0], 16);
  b.box("solar", M.solar, [1.4, 2.4, 0.05], [0, 0.05, -0.75], [-0.12, 0, 0]);
}

function kepler(b) {
  b.cyl("bus", M.silver, 0.65, 0.65, 0.4, [0, -1.25, 0], [0, 0, 0], 6);
  for (let i = 0; i < 4; i++) { const a = (i / 4) * P * 2 + P / 4; b.cyl("wheels", M.gold, 0.15, 0.15, 0.08, [0.62 * Math.cos(a), -1.25, 0.62 * Math.sin(a)], [0, -a, P / 2], 10); }
  b.cyl("tube", M.dark, 0.6, 0.6, 2.0, [0, 0, 0], [0, 0, 0], 12);
  b.box("tube", M.dark, [1.2, 0.7, 0.05], [0, 1.25, -0.55], [0.35, 0, 0]);
  b.cyl("mirror", M.silver, 0.52, 0.52, 0.06, [0, -0.85, 0], [0, 0, 0], 16);
  b.box("camera", M.gold, [0.45, 0.12, 0.45], [0, 0.05, 0]);
  b.box("solar", M.solar, [1.7, 2.3, 0.04], [0, -0.1, -0.9]);
  b.dish("antenna", M.white, 0.25, 0.08, [0.5, -1.6, 0.4], [P, 0, 0]);
}

function webb(b) {
  const g = new THREE.Group(); g.position.set(0, 1.05, 0.15); g.rotation.x = -0.2; b.root.add(g);
  const s = 0.3;
  for (let q = -2; q <= 2; q++) for (let r = -2; r <= 2; r++) {
    const d = Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r));
    if (d === 0 || d > 2) continue;
    const hex = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.97, s * 0.97, 0.05, 6), M.gold);
    hex.position.set(s * Math.sqrt(3) * (q + r / 2), s * 1.5 * r, 0);
    hex.rotation.set(P / 2, 0, 0);
    b.add("mirror", hex, g);
  }
  [[0, 1.2], [-1.05, -0.6], [1.05, -0.6]].forEach(([x, y]) => b.rod("secondary", M.silver, [x, 1.05 + y * 0.85, 0.2], [0, 1.0, 1.85], 0.02));
  b.cyl("secondary", M.gold, 0.12, 0.12, 0.04, [0, 1.0, 1.85], [P / 2, 0, 0], 6);
  b.box("instruments", M.silver, [0.6, 0.6, 0.4], [0, 1.0, -0.45]);
  const shape = new THREE.Shape([new THREE.Vector2(0, 2.2), new THREE.Vector2(1.2, 0.2), new THREE.Vector2(0, -2.0), new THREE.Vector2(-1.2, 0.2)]);
  for (let i = 0; i < 5; i++) {
    const layer = new THREE.Mesh(new THREE.ShapeGeometry(shape), M.shield);
    b.add("sunshield", b.place(layer, [0, -0.1 - i * 0.07, 0], [-P / 2, 0, P / 2]));
  }
  b.box("bus", M.dark, [0.6, 0.3, 0.6], [0, -0.65, 0]);
}

function pioneer10(b) {
  b.dish("dish", M.white, 1.15, 0.32, [0, 0.35, 0]);
  [0, 1, 2].forEach((i) => { const a = i * 2.1; b.rod("dish", M.silver, [0.95 * Math.cos(a), 0.6, 0.95 * Math.sin(a)], [0, 1.15, 0], 0.015); });
  b.cyl("bus", M.gold, 0.45, 0.45, 0.35, [0, -0.15, 0], [0, 0, 0], 6);
  [0.6, 2.7].forEach((a) => {
    b.rod("rtg", M.silver, [0.3 * Math.cos(a), -0.2, 0.3 * Math.sin(a)], [1.55 * Math.cos(a), -0.25, 1.55 * Math.sin(a)], 0.025);
    [1.25, 1.6].forEach((r) => b.cyl("rtg", M.grey, 0.12, 0.12, 0.3, [r * Math.cos(a), -0.25, r * Math.sin(a)], [0, -a, P / 2], 8));
  });
  b.rod("boom", M.grey, [0, -0.2, -0.4], [0, -0.3, -2.3], 0.015);
  b.ball("boom", M.white, 0.08, [0, -0.3, -2.35]);
  b.box("plaque", M.gold, [0.32, 0.2, 0.02], [0, -0.15, 0.48]);
}

function voyager(b) {
  b.dish("dish", M.white, 1.25, 0.36, [0, 0.55, 0]);
  b.rod("dish", M.silver, [0, 0.55, 0], [0, 1.25, 0], 0.02);
  b.cyl("bus", M.silver, 0.55, 0.55, 0.4, [0, 0, 0], [0, 0, 0], 10);
  b.cyl("record", M.gold, 0.22, 0.22, 0.03, [0, 0, 0.57], [P / 2, 0, 0], 16);
  b.rod("rtg", M.silver, [-0.5, -0.05, 0], [-1.95, -0.35, 0], 0.025);
  [-1.3, -1.6, -1.9].forEach((x) => b.cyl("rtg", M.grey, 0.12, 0.12, 0.26, [x, -0.3, 0], [0, 0, P / 2], 8));
  b.rod("scan", M.silver, [0.5, 0, 0], [1.75, 0.15, 0], 0.025);
  b.box("scan", M.silver, [0.3, 0.25, 0.25], [1.85, 0.15, 0]);
  b.cyl("scan", M.black, 0.06, 0.06, 0.32, [1.85, 0.15, 0.25], [P / 2, 0, 0], 8);
  b.rod("magnetometer", M.grey, [0, 0, -0.5], [0, 0.2, -3.0], 0.014);
  b.ball("magnetometer", M.white, 0.06, [0, 0.2, -3.02]);
  [0, 2.1, 4.2].forEach((a) => b.cone("thrusters", M.dark, 0.06, 0.14, [0.45 * Math.cos(a), -0.27, 0.45 * Math.sin(a)], [P, 0, 0], 6));
}

function newHorizons(b) {
  b.cyl("body", M.gold, 0.75, 0.75, 0.45, [0, 0, 0], [0, P / 6, 0], 3);
  b.dish("dish", M.white, 0.72, 0.2, [0, 0.25, 0]);
  b.rod("rtg", M.silver, [0.45, 0, 0.2], [0.85, 0, 0.45], 0.03);
  b.cyl("rtg", M.grey, 0.15, 0.15, 0.85, [1.05, 0, 0.55], [0, -0.6, P / 2], 8);
  for (let i = 0; i < 4; i++) b.box("rtg", M.grey, [0.75, 0.03, 0.34], [1.05, 0, 0.55], [i * P / 4, -0.6, 0]);
  b.cyl("lorri", M.silver, 0.12, 0.12, 0.5, [-0.3, -0.05, 0.5], [P / 2, 0, 0], 10);
  b.box("ralph", M.silver, [0.26, 0.2, 0.22], [0.2, 0.05, 0.48]);
  b.box("ralph", M.white, [0.18, 0.16, 0.26], [-0.62, 0.08, 0.2]);
}

// machine id -> [builder, Tech Lab parts in order (null = the whole spacecraft), parts to see through]
const MODELS = {
  surveyor3: [surveyor, ["camera", "sampler", "radar", "legs", "solar"]],
  apollo11: [lunarModule, ["body", "engine", "legs", "lrrr", "seismo"]],
  apollo15lrv: [lrv, ["motors", "wheels", "wheels", "nav", "tvcam"]],
  apollo17lrv: [lrv, ["fenders", "controller", "batteries", "tvcam", "tools"]],
  viking1: [viking, ["biolab", "arm", "rtg", "cameras", "boom"]],
  sojourner: [sojourner, ["solar", "wheels", "apxs", "cams", "radio"]],
  spirit: [roverMER, ["cam", "rat", "arm", "solar", "wheels"]],
  opportunity: [roverMER, ["cam", "rat", "arm", "solar", "wheels"]],
  phoenix: [(b) => phoenixLike(b, false), ["arm", "ovens", "wetlab", "weather", "solar"]],
  curiosity: [(b) => roverMSL(b, false), ["rtg", "chemcam", "drill", "mastcam", "rad"]],
  insight: [(b) => phoenixLike(b, true), ["seismo", "mole", "arm", "radio", "solar"]],
  perseverance: [(b) => roverMSL(b, true), ["caching", "mic", "chemcam", "trn", "rtg"]],
  ingenuity: [ingenuity, ["rotors", "body", "body", "solar", "cameras"]],
  mariner1: [mariner, ["solar", "antenna", "microwave", "infrared", "magnetometer"]],
  pioneervenus: [pioneerVenus, ["large", "small", "sensors", "parachute", "antenna"]],
  magellan: [magellan, ["dish", "dish", "solar", "dish", null]],
  hubble: [hubble, ["mirror", null, "bays", "bays", "solar"], { mirror: ["tube", "door", "bays"] }],
  chandra: [chandra, ["mirrors", "mirrors", "cameras", null, null], { mirrors: ["tube", "door"] }],
  spitzer: [spitzer, ["telescope", "mirror", "cryostat", null, null], { mirror: ["telescope"] }],
  kepler: [kepler, ["camera", "mirror", "camera", "wheels", null], { camera: ["tube"], mirror: ["tube"] }],
  webb: [webb, ["mirror", "sunshield", "mirror", "instruments", null]],
  pioneer10: [pioneer10, ["rtg", "dish", null, "plaque", "boom"]],
  voyager1: [voyager, ["rtg", "record", "dish", "thrusters", "magnetometer"]],
  voyager2: [voyager, [null, "record", "scan", "rtg", "dish"]],
  newhorizons: [newHorizons, ["rtg", "lorri", "ralph", null, "body"]]
};

// ---------- viewer ----------
let active = null;

function mount(stage, machineId, techTitles, captionEl, shortName, techMore = []) {
  unmount();
  const spec = MODELS[machineId];
  if (!spec || !stage) return false;
  const [build, techParts, xray = {}] = spec;
  const b = new Builder();
  build(b);

  // centre and scale the model so every machine fills the view
  const box = new THREE.Box3();
  b.root.children.forEach((c) => { if (!c.userData.ground) box.expandByObject(c); });
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const scale = 3.6 / Math.max(size.x, size.y, size.z);
  b.root.children.forEach((c) => { c.position.sub(center); });
  const model = new THREE.Group();
  model.add(b.root);
  model.scale.setScalar(scale);

  const centroids = {};
  b.root.updateMatrixWorld(true);
  Object.entries(b.parts).forEach(([name, meshes]) => {
    const pb = new THREE.Box3();
    meshes.forEach((m) => pb.expandByObject(m));
    centroids[name] = pb.getCenter(new THREE.Vector3());
  });

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  canvas.className = "modelcard__canvas";
  canvas.setAttribute("aria-hidden", "true");
  stage.innerHTML = "";
  stage.appendChild(canvas);
  const tag = document.createElement("span");
  tag.className = "modelcard__tag";
  tag.hidden = true;
  stage.appendChild(tag);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  camera.position.set(0, 1.1, 8.2);
  camera.lookAt(0, 0, 0);
  scene.add(model);
  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.DirectionalLight(0xffffff, 2.4); key.position.set(-4, 5, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0x8fb3ff, 0.8); rim.position.set(5, -2, -5); scene.add(rim);

  const home = { x: 0.18, y: -0.6 };
  const target = { ...home }, cur = { ...home };
  let focused = null, autoSpin = !REDUCED, dragging = false, last = null, raf = 0, visible = true, prev = performance.now();

  function setXray(on) {
    Object.values(xray).flat().forEach((name) => (b.parts[name] || []).forEach((m) => {
      m.material.transparent = on; m.material.opacity = on ? 0.18 : 1; m.material.depthWrite = !on;
    }));
  }

  function focus(i) {
    if (focused) (b.parts[focused] || []).forEach((m) => { m.material.emissive.setHex(0x000000); });
    setXray(false);
    const part = techParts[i];
    focused = part && b.parts[part] ? part : null;
    autoSpin = false;
    if (!focused) {
      target.x = home.x; target.y = home.y;
      tag.hidden = true;
      if (captionEl) captionEl.innerHTML = `<b>${esc(techTitles[i])}</b> is about the whole mission, so here’s all of ${esc(shortName)}. ${esc(techMore[i] || "")}`;
      return;
    }
    const c = centroids[focused];
    let y = -Math.atan2(c.x, c.z);
    if (Math.hypot(c.x, c.z) < 0.15) y = cur.y;
    while (y - cur.y > P) y -= P * 2;
    while (y - cur.y < -P) y += P * 2;
    target.y = y;
    target.x = Math.max(-0.5, Math.min(0.7, Math.atan2(c.y, Math.hypot(c.x, c.z) + 0.6) * 0.8 + 0.12));
    if (xray[focused]) setXray(true);
    tag.textContent = techTitles[i];
    tag.hidden = false;
    if (captionEl) captionEl.innerHTML = `<b>${esc(techTitles[i])}</b> (glowing): ${esc(techMore[i] || "This is roughly where it sits on " + shortName + ".")}`;
  }

  function reset() {
    if (focused) (b.parts[focused] || []).forEach((m) => { m.material.emissive.setHex(0x000000); });
    setXray(false);
    focused = null; tag.hidden = true;
    target.x = home.x; target.y = home.y; autoSpin = !REDUCED;
    if (captionEl) captionEl.innerHTML = `Click an item in the Tech Lab to see where it is on ${esc(shortName)}.`;
  }

  const onDown = (e) => { dragging = true; autoSpin = false; last = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); stage.classList.add("is-dragging"); };
  const onMove = (e) => {
    if (!dragging) return;
    target.y += (e.clientX - last.x) * 0.01;
    target.x = Math.max(-0.6, Math.min(0.9, target.x + (e.clientY - last.y) * 0.008));
    last = { x: e.clientX, y: e.clientY };
  };
  const onUp = () => { dragging = false; stage.classList.remove("is-dragging"); };
  canvas.addEventListener("pointerdown", onDown);
  canvas.addEventListener("pointermove", onMove);
  canvas.addEventListener("pointerup", onUp);
  canvas.addEventListener("pointercancel", onUp);

  function resize() {
    const w = stage.clientWidth, h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize); ro.observe(stage); resize();
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }); io.observe(stage);

  const tmp = new THREE.Vector3();
  function frame(now) {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(0.05, (now - prev) / 1000); prev = now;
    if (!visible || !stage.offsetParent) return;
    if (autoSpin) target.y += dt * 0.35;
    cur.x += (target.x - cur.x) * Math.min(1, dt * 6);
    cur.y += (target.y - cur.y) * Math.min(1, dt * 6);
    model.rotation.set(cur.x, cur.y, 0);
    if (!REDUCED) b.spinners.forEach((s) => { s.obj.rotation.y += s.speed * dt; });
    if (focused) {
      const glow = 0.45 + 0.35 * Math.sin(now / 220);
      b.parts[focused].forEach((m) => { m.material.emissive.setHex(0xffd24a); m.material.emissiveIntensity = glow; });
      model.updateMatrixWorld();
      tmp.copy(centroids[focused]); b.root.localToWorld(tmp); tmp.project(camera);
      tag.style.left = `${((tmp.x + 1) * 50).toFixed(1)}%`;
      tag.style.top = `${((1 - tmp.y) * 50).toFixed(1)}%`;
    }
    renderer.render(scene, camera);
  }
  raf = requestAnimationFrame(frame);

  active = {
    focus, reset,
    destroy() {
      cancelAnimationFrame(raf); ro.disconnect(); io.disconnect();
      scene.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      renderer.dispose(); canvas.remove(); tag.remove();
    }
  };
  return true;
}

function unmount() { if (active) { active.destroy(); active = null; } }

window.GRMODEL = {
  mount, unmount,
  focus: (i) => active && active.focus(i),
  reset: () => active && active.reset(),
  has: (id) => !!MODELS[id]
};
window.dispatchEvent(new Event("grmodel-ready"));
