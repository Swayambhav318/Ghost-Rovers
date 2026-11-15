// ===== Comms: real signal times, message replies and sky positions =====
// Distances are approximate (simple orbit maths), good to a few percent: fine for "about" numbers.
const AU_KM = 149597870.7;
const C_KMS = 299792.458;
const D2R = Math.PI / 180;
const OBLIQUITY = 23.439 * D2R;
const norm360 = (a) => ((a % 360) + 360) % 360;
const daysJ2000 = (date) => date.getTime() / 86400000 + 2440587.5 - 2451545.0;

// Deep space probes: distance from the Sun (AU) and speed (AU/year) at a reference date, plus sky position.
// Source: Heavens-Above "Spacecraft escaping the Solar System" table (late 2025).
const PROBE_EPOCH = Date.UTC(2025, 11, 24);
const PROBES = {
  voyager1: { r0: 170.057, v: 3.569, ra: 259.5, dec: 12.23 },
  voyager2: { r0: 142.333, v: 3.219, ra: 302.5, dec: -59.43 },
  pioneer10: { r0: 140.642, v: 2.504, ra: 77.75, dec: 25.95 },
  newhorizons: { r0: 64.159, v: 2.867, ra: 290.5, dec: -20.1 }
};

// Simple circular orbits (ecliptic plane) for Earth, Mars and Venus
const PLANETS = {
  venus: { a: 0.7233, L0: 181.979, n: 1.602131 },
  mars: { a: 1.5237, L0: 355.433, n: 0.524071 }
};

function sunEcl(d) {
  const g = (357.529 + 0.98560028 * d) * D2R;
  const L = 280.459 + 0.98564736 * d + 1.915 * Math.sin(g) + 0.020 * Math.sin(2 * g);
  const R = 1.00014 - 0.01671 * Math.cos(g) - 0.00014 * Math.cos(2 * g);
  return { lon: norm360(L), R };
}
function earthHelio(d) {
  const s = sunEcl(d);
  return { x: -s.R * Math.cos(s.lon * D2R), y: -s.R * Math.sin(s.lon * D2R), z: 0 };
}
function planetHelio(p, d) {
  const L = (p.L0 + p.n * d) * D2R;
  return { x: p.a * Math.cos(L), y: p.a * Math.sin(L), z: 0 };
}
function eqToEclVec(raDeg, decDeg) {
  const ra = raDeg * D2R, dec = decDeg * D2R;
  const x = Math.cos(dec) * Math.cos(ra), y = Math.cos(dec) * Math.sin(ra), z = Math.sin(dec);
  return { x, y: y * Math.cos(OBLIQUITY) + z * Math.sin(OBLIQUITY), z: -y * Math.sin(OBLIQUITY) + z * Math.cos(OBLIQUITY) };
}
function eclToEq(lonDeg, latDeg) {
  const l = lonDeg * D2R, b = latDeg * D2R;
  const ra = Math.atan2(Math.sin(l) * Math.cos(OBLIQUITY) - Math.tan(b) * Math.sin(OBLIQUITY), Math.cos(l));
  const dec = Math.asin(Math.sin(b) * Math.cos(OBLIQUITY) + Math.cos(b) * Math.sin(OBLIQUITY) * Math.sin(l));
  return { ra: norm360(ra / D2R), dec: dec / D2R };
}
const dist3 = (a, b) => Math.hypot(a.x - b.x, a.y - b.y, a.z - b.z);

function probeDistanceAU(id, date) {
  const p = PROBES[id];
  const years = (date.getTime() - PROBE_EPOCH) / (365.25 * 86400000);
  const r = p.r0 + p.v * years;
  const u = eqToEclVec(p.ra, p.dec);
  return dist3({ x: u.x * r, y: u.y * r, z: u.z * r }, earthHelio(daysJ2000(date)));
}
function planetDistanceAU(name, date) {
  const d = daysJ2000(date);
  return dist3(planetHelio(PLANETS[name], d), earthHelio(d));
}

// Distance from Earth (km) and how the machine describes where it is
function commsInfo(m, date = new Date()) {
  let km, where, estimate = false;
  if (m.world === "moon") { km = 384400; where = "I’m on the Moon, about 384,400 km from Earth."; }
  else if (m.world === "mars") {
    km = planetDistanceAU("mars", date) * AU_KM;
    where = `I’m on Mars, about ${fmtKm(km)} from Earth today. That changes as Earth and Mars travel around the Sun.`;
  } else if (m.id === "mariner1") {
    km = 0; where = "My pieces are at the bottom of the Atlantic Ocean, right here on Earth, so your message reached me almost instantly!";
  } else if (m.world === "venus") {
    km = planetDistanceAU("venus", date) * AU_KM;
    where = `I’m at Venus, about ${fmtKm(km)} from Earth today. That changes as Earth and Venus travel around the Sun.`;
  } else if (m.id === "hubble") { km = 540; where = "I orbit about 540 km above Earth, so your message reached me in a tiny fraction of a second."; }
  else if (m.id === "chandra") { km = 139000; where = "My long, stretched orbit swings out to about 139,000 km from Earth, about a third of the way to the Moon."; }
  else if (m.id === "webb") { km = 1500000; where = "I’m at L2, about 1.5 million km from Earth."; }
  else if (m.id === "spitzer" || m.id === "kepler") {
    km = 160000000; estimate = true;
    where = "I’m drifting around the Sun far behind Earth, more than 100 million km away, and I drift a little farther every year.";
  } else if (PROBES[m.id]) {
    const au = probeDistanceAU(m.id, date);
    km = au * AU_KM;
    where = `I’m about ${fmtKm(km)} from Earth, about ${Math.round(au)} times farther than Earth is from the Sun.`;
    if (m.id === "pioneer10") where += " Nobody has heard from me since 2003, but scientists can still work out where I am.";
  } else { km = 0; where = ""; }
  return { km, oneWay: km / C_KMS, where, estimate };
}

function fmtKm(km) {
  if (km >= 1e9) return `${(km / 1e9).toFixed(1)} billion km`;
  if (km >= 1e7) return `${Math.round(km / 1e6)} million km`;
  if (km >= 1e6) return `${(km / 1e6).toFixed(1)} million km`;
  return `${Math.round(km).toLocaleString("en")} km`;
}
function fmtDur(s) {
  if (s < 0.05) return "almost no time at all";
  if (s < 1) return "less than a second";
  if (s < 60) return `${s < 10 ? s.toFixed(1) : Math.round(s)} seconds`;
  if (s < 3600) { const m = Math.round(s / 60); return `${m} minute${m === 1 ? "" : "s"}`; }
  const h = Math.floor(s / 3600), mm = Math.round((s % 3600) / 60);
  return `${h} hour${h === 1 ? "" : "s"}${mm ? ` ${mm} min` : ""}`;
}

// ===== Preset questions (kids pick one; replies use only facts from the machine's page) =====
const MSG_QUESTIONS = [
  { id: "far", text: "How far away are you?" },
  { id: "best", text: "What was your best day?" },
  { id: "part", text: "What’s your coolest part?" },
  { id: "discover", text: "What did you discover?" },
  { id: "secret", text: "Tell me a secret!" },
  { id: "working", text: "Are you still working?" }
];

const hashStr = (s) => { let h = 0; for (const c of String(s)) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; };

function buildReply(msg) {
  const m = MACHINES.find((x) => x.id === msg.mid);
  const info = commsInfo(m, new Date(msg.arriveAt));
  const pick = (arr) => arr[hashStr(msg.id) % arr.length];
  let answer = "";
  switch (msg.q) {
    case "far": answer = `${info.where} Your message took ${fmtDur(info.oneWay)} to reach me, and this reply took the same time to get back.`; break;
    case "best": {
      const log = m.logs[(typeof BEST_LOG !== "undefined" && BEST_LOG[m.id] !== undefined) ? BEST_LOG[m.id] : 1] || m.logs[0];
      answer = `My best day was ${log.when}: ${log.text}`; break;
    }
    case "part": {
      const k = hashStr(msg.id) % m.tech.length;
      const more = (typeof TECH_MORE !== "undefined" && TECH_MORE[m.id]) ? TECH_MORE[m.id][k] : "";
      answer = `My coolest part is my ${m.tech[k][0]}. ${m.tech[k][1]} ${more}`; break;
    }
    case "discover": answer = `Here’s what I helped discover: ${m.science}`; break;
    case "secret": answer = `Psst… ${pick(m.facts)}`; break;
    case "working": {
      const last = m.logs[m.logs.length - 1];
      answer = m.status === "active"
        ? `Yes, I’m still working! ${last.text}`
        : `Not any more. ${last.text} But you woke my story up in Ghost Rovers, so here I am!`;
      break;
    }
  }
  return {
    greeting: `Hi ${msg.name || "explorer"}!`,
    timing: info.oneWay >= 1 && msg.q !== "far" ? `Your message reached me ${fmtDur(info.oneWay)} after you sent it.` : "",
    answer,
    signoff: `— ${m.short}`
  };
}

// ===== Sky positions for the phone sky finder =====
function moonEcl(d) {
  const L = 218.316 + 13.176396 * d, M = (134.963 + 13.064993 * d) * D2R, F = (93.272 + 13.229350 * d) * D2R;
  return { lon: norm360(L + 6.289 * Math.sin(M)), lat: 5.128 * Math.sin(F) };
}
function planetGeoEcl(name, d) {
  const p = planetHelio(PLANETS[name], d), e = earthHelio(d);
  return { lon: norm360(Math.atan2(p.y - e.y, p.x - e.x) / D2R), lat: 0 };
}

// What the sky finder points at for each machine (null = not available)
function skyTarget(m) {
  if (PROBES[m.id]) return { label: m.short, raDec: () => ({ ra: PROBES[m.id].ra, dec: PROBES[m.id].dec }) };
  if (m.world === "moon") return { label: "the Moon", raDec: (date) => { const e = moonEcl(daysJ2000(date)); return eclToEq(e.lon, e.lat); } };
  if (m.world === "mars") return { label: "Mars", raDec: (date) => { const e = planetGeoEcl("mars", daysJ2000(date)); return eclToEq(e.lon, e.lat); } };
  if (m.id === "pioneervenus" || m.id === "magellan") return { label: "Venus", raDec: (date) => { const e = planetGeoEcl("venus", daysJ2000(date)); return eclToEq(e.lon, e.lat); } };
  if (m.id === "webb") return { label: "Webb’s direction (opposite the Sun)", raDec: (date) => eclToEq(norm360(sunEcl(daysJ2000(date)).lon + 180), 0) };
  return null;
}
function sunRaDec(date) { return eclToEq(sunEcl(daysJ2000(date)).lon, 0); }

// Altitude/azimuth (degrees) for a place on Earth. Azimuth: 0 = north, 90 = east.
function altAz(ra, dec, lat, lon, date) {
  const d = daysJ2000(date);
  const H = norm360(280.46061837 + 360.98564736629 * d + lon - ra) * D2R;
  const phi = lat * D2R, dl = dec * D2R;
  const alt = Math.asin(Math.sin(phi) * Math.sin(dl) + Math.cos(phi) * Math.cos(dl) * Math.cos(H));
  const az = Math.atan2(-Math.cos(dl) * Math.sin(H), Math.sin(dl) * Math.cos(phi) - Math.cos(dl) * Math.cos(H) * Math.sin(phi));
  return { alt: alt / D2R, az: norm360(az / D2R) };
}
function angularSep(a, b) {
  const r1 = a.ra * D2R, d1 = a.dec * D2R, r2 = b.ra * D2R, d2 = b.dec * D2R;
  return Math.acos(Math.min(1, Math.sin(d1) * Math.sin(d2) + Math.cos(d1) * Math.cos(d2) * Math.cos(r1 - r2))) / D2R;
}
const COMPASS = ["north", "north-east", "east", "south-east", "south", "south-west", "west", "north-west"];
const compassName = (az) => COMPASS[Math.round(norm360(az) / 45) % 8];
