// ===== Helpers =====
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const machineById = (id) => MACHINES.find((m) => m.id === id);
const worldById = (id) => WORLDS.find((w) => w.id === id);
const machinesIn = (wid) => MACHINES.filter((m) => m.world === wid);
const shuffle = (arr) => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ===== Icons =====
const ICONS = {
  star: '<path d="M12 2l2.6 6.6L21 9.3l-5 4.4 1.5 6.8L12 17l-5.5 3.5L8 13.7 3 9.3l6.4-.7z" fill="currentColor" stroke="none"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  check: '<path d="M5 12l5 5L20 7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  rover: '<rect x="4" y="9" width="16" height="6" rx="1.5"/><path d="M12 9V4M9.5 4h5"/><circle cx="7" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
  moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 1.5A3.3 3.3 0 0 0 7 18z"/>',
  telescope: '<path d="M3 11l13-5 2 5-13 5zM9 14l-3 7M11 14l3 7M18 8l3-1"/>',
  rocket: '<path d="M12 2c4 3 5 8 4 13H8C7 10 8 5 12 2z"/><path d="M8 15l-3 3 3 1M16 15l3 3-3 1M10 19l2 3 2-3"/><circle cx="12" cy="9" r="1.6"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>',
  bolt: '<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="3" y="14" width="4" height="6" rx="1.5"/><rect x="17" y="14" width="4" height="6" rx="1.5"/>',
  planet: '<circle cx="12" cy="12" r="5.5"/><ellipse cx="12" cy="12" rx="10.5" ry="3.5" transform="rotate(-20 12 12)"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
  signal: '<path d="M4 18a10 10 0 0 1 16 0M7 15a6 6 0 0 1 10 0"/><circle cx="12" cy="18" r="1.2" fill="currentColor"/>',
  camera: '<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.5"/><path d="M9 7l1.5-3h3L15 7"/>',
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-2.5z"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a5 5 0 0 1 5.5 5"/>',
  half: '<circle cx="12" cy="12" r="9"/><path d="M12 3v18"/>',
  external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  flag: '<path d="M5 21V4M5 4h12l-3 4 3 4H5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  sound: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12"/>'
};
const icon = (name, size = 20, cls = "") =>
  `<svg class="ic ${cls}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name] || ""}</svg>`;

// ===== Save data (browser copy + Firebase cloud copy) =====
// Judge mode: a separate, sign-in-free session with every tester tool (switched from the tab on the home page)
const JUDGE_KEY = "ghostRovers.judge";
const JUDGE = (() => { try { return localStorage.getItem(JUDGE_KEY) === "1"; } catch (e) { return false; } })();
const SAVE_KEY = JUDGE ? "ghostRovers.save.judge" : "ghostRovers.save.v1";
let USER = null;
let syncState = "";
let cloudTimer = null;
let cloudWarned = false;
let cloudOK = false;
const isTester = () => JUDGE || (!!USER && !!USER.tester);
async function sha256(text) {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
const freshSave = () => ({
  stardust: 0, lifetime: 0, woken: {}, unlocked: { moon: true },
  quizBest: {}, mquizBest: {}, perfectPaid: {}, badges: {}, usedLifeline: false, bestStreak: 0, completed: {},
  messages: [], firstReply: {}, skySpotted: false,
  quizAttempt: {}, quizLive: null, replays: {}, debriefVote: null
});
const localKey = () => (USER ? `${SAVE_KEY}:${USER.uid}` : SAVE_KEY);
function loadSave(key = SAVE_KEY) {
  try {
    const raw = JSON.parse(localStorage.getItem(key));
    return Object.assign(freshSave(), raw || {});
  } catch (e) {
    return freshSave();
  }
}
let S = loadSave();
if (JUDGE && S.stardust < TESTER_START_STARDUST) { S.stardust = TESTER_START_STARDUST; localStorage.setItem(SAVE_KEY, JSON.stringify(S)); }

// The "Judges, start here" arrow shows each visit until it's closed or judge mode is opened
const judgeHintSeen = () => { try { return sessionStorage.getItem("ghostRovers.judgeHint") === "1"; } catch (e) { return false; } };
const hideJudgeHint = () => { try { sessionStorage.setItem("ghostRovers.judgeHint", "1"); } catch (e) { /* storage blocked */ } const h = $(".judgehint"); if (h) h.remove(); };

function toggleJudge(to = "#/") {
  try {
    if (JUDGE) { localStorage.removeItem(JUDGE_KEY); sessionStorage.removeItem("ghostRovers.tour"); }
    else { localStorage.setItem(JUDGE_KEY, "1"); if (to === "#/") sessionStorage.setItem("ghostRovers.tour", "0"); }
  } catch (e) { return; }
  location.hash = to;
  location.reload();
}

function save() {
  try { localStorage.setItem(localKey(), JSON.stringify(S)); } catch (e) { /* storage blocked */ }
  if (USER && window.GR_CLOUD && cloudOK) {
    clearTimeout(cloudTimer);
    setSync("saving");
    cloudTimer = setTimeout(pushCloud, 1200);
  }
}

async function pushCloud() {
  cloudTimer = null;
  if (!USER || !window.GR_CLOUD) return;
  try {
    const progress = JSON.parse(JSON.stringify(S));
    if (JUDGE) await window.GR_CLOUD.save(USER.uid, { progress }, "judge");
    else await window.GR_CLOUD.save(USER.uid, { email: USER.email, stardust: S.stardust, lifetime: S.lifetime, progress });
    setSync("saved");
  } catch (e) {
    console.error("Cloud save failed:", e);
    setSync("error");
    if (!cloudWarned) {
      cloudWarned = true;
      toast("Cloud save failed", cloudErrorText(e), "cloud");
    }
  }
}

function setSync(state) {
  syncState = state;
  const el = $("#sync");
  if (el) { el.className = `sync sync--${state}`; el.title = SYNC_TEXT[state] || ""; }
}
const SYNC_TEXT = { saving: "Saving to the cloud…", saved: "Saved to the cloud", error: "Cloud save failed", loading: "Loading your save…" };

// Explains database errors in plain words (also logged in the browser console)
// Players see a friendly message; testers also see the technical reason (always logged in the console)
function cloudErrorText(e) {
  const text = `${(e && e.code) || ""} ${(e && e.message) || ""}`;
  console.warn("Ghost Rovers cloud:", text);
  if (/offline|network|unavailable/i.test(text)) return "Looks like you’re offline. Your progress is saved on this device for now.";
  if (!isTester()) return "Mission Control can’t reach the cloud right now. Your progress is saved on this device for now.";
  if (/permission.denied/i.test(text)) return "Tester: database rules are blocking saves. Publish the rules from database.rules.json.";
  if (/databaseURL|Can't determine Firebase Database URL/i.test(text)) return "Tester: the Realtime Database address is missing from js/firebase.js.";
  return `Tester: Firebase error ${text.trim() || "unknown"}.`;
}

// ===== Accounts (Firebase Auth) =====
window.addEventListener("gr-auth", async (e) => {
  const user = e.detail;
  cloudOK = false;
  if (!user) {
    USER = null;
    S = loadSave();
    renderHUD();
    route();
    return;
  }
  USER = user;
  try { USER.tester = TESTER_HASHES.includes(await sha256((user.email || "").trim().toLowerCase())); } catch (e) { USER.tester = false; }
  setSync("loading");
  renderHUD();
  let data = null;
  try {
    data = await window.GR_CLOUD.load(user.uid, JUDGE ? "judge" : null);
    cloudOK = true;
  } catch (err) {
    console.error("Cloud load failed:", err);
    toast("Couldn’t load your cloud save", cloudErrorText(err), "cloud");
  }
  if (data && data.progress) {
    S = Object.assign(freshSave(), data.progress);
  } else {
    const mine = loadSave(localKey());
    const guest = loadSave(SAVE_KEY);
    S = mine.lifetime || mine.stardust ? mine : guest.lifetime ? guest : freshSave();
    if (cloudOK && !isTester() && !JUDGE) toast("Account ready!", "Your Stardust now saves to the cloud", "rocket");
  }
  // Tester account: always topped up to at least TESTER_START_STARDUST on sign-in
  if (isTester() && S.stardust < TESTER_START_STARDUST) {
    S.stardust = TESTER_START_STARDUST;
    toast(JUDGE ? "Judge mode" : "Tester account", `${TESTER_START_STARDUST} Stardust loaded`, "rocket");
  }
  if (!cloudOK) setSync("error");
  save();
  renderHUD();
  checkBadges();
  if (location.hash.startsWith("#/signin")) location.hash = "#/";
  else route();
});

const AUTH_ERRORS = {
  "auth/invalid-email": "That email address doesn’t look right.",
  "auth/missing-password": "Please type a password.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/password-does-not-meet-requirements": "Password must be at least 6 characters.",
  "auth/email-already-in-use": "An account with this email already exists. Press Sign in instead.",
  "auth/invalid-credential": "Wrong email or password.",
  "auth/wrong-password": "Wrong email or password.",
  "auth/user-not-found": "No account with that email. Press Create account.",
  "auth/too-many-requests": "Too many tries. Wait a minute and try again.",
  "auth/network-request-failed": "No internet connection.",
  "auth/operation-not-allowed": "Email/Password sign-in is turned off in the Firebase console.",
  "auth/unauthorized-domain": "This website address isn’t in Firebase’s authorized domains."
};

// ===== Stardust economy =====
const rankFor = (n) => RANKS.filter((r) => n >= r.min).pop();
const nextRankFor = (n) => RANKS.find((r) => r.min > n);

function earn(amount, why, countsForRank = true) {
  if (amount <= 0) return;
  const before = rankFor(S.lifetime).name;
  S.stardust += amount;
  if (countsForRank) S.lifetime += amount;
  save();
  toast(`+${amount} Stardust`, why, "star");
  const after = rankFor(S.lifetime).name;
  if (after !== before) {
    toast("Rank up!", `You are now a ${after}`, "trophy");
    confetti();
  }
  renderHUD();
}

function spend(amount) {
  if (S.stardust < amount) {
    toast("Not enough Stardust", `You need ${amount - S.stardust} more.`, "lock");
    return false;
  }
  S.stardust -= amount;
  save();
  renderHUD();
  return true;
}

const allWoken = (wid) => machinesIn(wid).every((m) => S.woken[m.id]);
const BADGE_RULES = {
  first_contact: () => Object.keys(S.woken).length >= 1,
  moonwalker: () => allWoken("moon"),
  red_planet: () => allWoken("mars"),
  cloud_diver: () => allWoken("venus"),
  star_gazer: () => allWoken("orbit"),
  interstellar: () => allWoken("deep"),
  quiz_rookie: () => Object.keys(S.mquizBest).length >= 1,
  world_champ: () => Object.keys(S.quizBest).length >= 1,
  perfect_ten: () => Object.values(S.quizBest).some((v) => v >= ECONOMY.QUIZ.world.length),
  hot_streak: () => S.bestStreak >= 5,
  mission_control: () => S.usedLifeline,
  explorer: () => WORLDS.every((w) => S.unlocked[w.id]),
  quiz_master: () => WORLDS.every((w) => S.quizBest[w.id] !== undefined),
  pen_pal: () => (S.messages || []).some((x) => x.read),
  heritage: () => !!S.debriefVote,
  sky_spotter: () => !!S.skySpotted,
  completionist: () => MACHINES.every((m) => S.woken[m.id])
};

function checkBadges() {
  const fresh = BADGES.filter((b) => !S.badges[b.id] && BADGE_RULES[b.id] && BADGE_RULES[b.id]());
  if (fresh.length) {
    fresh.forEach((b) => { S.badges[b.id] = Date.now(); });
    save();
    fresh.forEach((b) => {
      toast("Badge unlocked!", b.name, b.icon);
      buzz([30, 40, 30]);
      earn(ECONOMY.BADGE, `${b.name} badge`);
    });
    confetti();
  }
  checkDestinations();
  return fresh;
}

// A destination is complete when every story is read and every quiz (machine + Grand) has been taken.
// The bonus is at least ECONOMY.COMPLETE and always enough to unlock the next locked destination,
// so finishing everything can never leave a player stuck, however they scored or spent.
const destinationDone = (wid) =>
  machinesIn(wid).every((m) => S.woken[m.id] && S.mquizBest[m.id] !== undefined) && S.quizBest[wid] !== undefined;

function checkDestinations() {
  WORLDS.forEach((w) => {
    if (S.completed[w.id] || !destinationDone(w.id)) return;
    S.completed[w.id] = Date.now();
    const next = WORLDS.find((x) => !S.unlocked[x.id]);
    toast("Mission complete!", next ? `${w.name} done. ${next.name} is ready to unlock!` : `${w.name} done!`, "trophy");
    if (WORLDS.every((x) => S.completed[x.id])) setTimeout(() => toast("Final mission: debrief", "You explored everything! Open “Left behind” for your mission debrief.", "flag"), 1200);
    earn(ECONOMY.COMPLETE, `${w.name} mission complete`);
    // top-up (doesn't count toward rank) so the next destination is always affordable
    const topUp = next ? next.cost - S.stardust : 0;
    if (topUp > 0) earn(topUp, `Mission Control top-up for ${next.name}`, false);
    confetti();
  });
}

// ===== NASA photos (NASA Image and Video Library API) =====
const PHOTO_API = "https://images-api.nasa.gov/search";
const PHOTO_CACHE = "photos3:";
const PHOTO_MAX = 7;
const PHOTO_AVOID = /\b(press|briefing|conference|panel|ceremony|award|meeting|speaks|speaking|remarks|portrait|audience|reception|signing|interview|celebrat|event|employees|visits?|tour)\b/i;
const photoCache = {};

function cleanText(t, max = 260) {
  const s = String(t || "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
  if (s.length <= max) return s;
  return s.slice(0, s.lastIndexOf(" ", max)) + "…";
}

function getPhotos(m) {
  if (photoCache[m.id]) return photoCache[m.id];
  photoCache[m.id] = (async () => {
    const local = m.img ? [{ src: m.img, big: m.img, title: m.name, desc: "", id: null }] : [];
    try {
      const cached = sessionStorage.getItem(PHOTO_CACHE + m.id);
      if (cached) return local.concat(JSON.parse(cached));
    } catch (e) { /* ignore */ }
    try {
      const res = await fetch(`${PHOTO_API}?q=${encodeURIComponent(m.q)}&media_type=image`);
      const json = await res.json();
      const must = (m.must || "").toLowerCase();
      const scored = ((json.collection && json.collection.items) || [])
        .filter((it) => it.links && it.links[0] && it.links[0].href && it.data && it.data[0])
        .map((it, order) => {
          const d = it.data[0];
          const title = (d.title || "").toLowerCase();
          const text = `${title} ${(d.description || "").toLowerCase()}`;
          let score = 0;
          if (title.includes(must)) score += 3;
          else if (text.includes(must)) score += 1;
          if (PHOTO_AVOID.test(text)) score -= 4;
          return { it, score, order };
        })
        .sort((x, y) => y.score - x.score || x.order - y.order);
      const list = scored.slice(0, PHOTO_MAX).map(({ it }) => {
        const d = it.data[0];
        const thumb = it.links[0].href;
        return {
          src: thumb, big: thumb.replace("~thumb.", "~medium."), id: d.nasa_id,
          title: cleanText(d.title || m.name, 90), desc: cleanText(d.description || d.description_508 || ""),
          year: (d.date_created || "").slice(0, 4)
        };
      });
      try { sessionStorage.setItem(PHOTO_CACHE + m.id, JSON.stringify(list)); } catch (e) { /* ignore */ }
      return local.concat(list);
    } catch (e) {
      return local;
    }
  })();
  return photoCache[m.id];
}

const photoSlot = (m, size = "big", idx = 0, cls = "") =>
  `<div class="photo ${cls}" data-photo="${m.id}" data-idx="${idx}" data-size="${size}">${icon("camera", 28)}<span>Loading NASA photo…</span></div>`;

// Scrollable photo viewer (machine page + world panel): arrows, thumbnails, caption under the photo
const viewerIndex = {};
const viewerHTML = (m, cls = "") => `
  <div class="viewer ${cls}" data-viewer="${m.id}" tabindex="0" aria-label="Photos of ${esc(m.name)}. Use the arrow keys to scroll.">
    <div class="viewer__stage"><div class="photo photo--viewer">${icon("camera", 28)}<span>Loading NASA photos…</span></div></div>
    <div class="viewer__bar" hidden>
      <button class="viewer__btn" data-action="vprev" aria-label="Previous photo">${icon("back", 20)}</button>
      <div class="viewer__thumbs"></div>
      <button class="viewer__btn" data-action="vnext" aria-label="Next photo">${icon("arrow", 20)}</button>
    </div>
    <div class="viewer__cap" aria-live="polite"></div>
  </div>`;

function drawViewer(el) {
  const list = el._list || [];
  const m = machineById(el.dataset.viewer);
  const stage = $(".viewer__stage", el);
  if (!list.length) {
    stage.innerHTML = `<div class="photo photo--viewer photo--none">${icon("camera", 28)}<span>Photos appear here when you’re online</span></div>`;
    return;
  }
  const n = list.length;
  const i = ((viewerIndex[m.id] || 0) % n + n) % n;
  viewerIndex[m.id] = i;
  const p = list[i];
  stage.innerHTML = `<div class="photo photo--viewer"><img src="${esc(p.big)}" alt="${esc(p.title)}"><span class="viewer__count">${i + 1} / ${n}</span></div>`;
  const img = $("img", stage);
  img.onerror = () => { if (img.getAttribute("src") !== p.src) img.src = p.src; };
  const bar = $(".viewer__bar", el);
  bar.hidden = n < 2;
  $(".viewer__thumbs", el).innerHTML = list.map((q, k) =>
    `<button class="viewer__thumb ${k === i ? "is-on" : ""}" data-action="vgo" data-i="${k}" aria-label="Photo ${k + 1}"><img src="${esc(q.src)}" alt="" loading="lazy"></button>`).join("");
  const href = p.id ? `https://images.nasa.gov/details/${encodeURIComponent(p.id)}` : p.big;
  $(".viewer__cap", el).innerHTML = `
    <b>${esc(p.title)}${p.year ? ` <span class="muted">· ${esc(p.year)}</span>` : ""}</b>
    ${p.desc ? `<p>${esc(p.desc)}</p>` : ""}
    <a href="${esc(href)}" target="_blank" rel="noopener">View on NASA Images ${icon("external", 14)}</a>
    ${m.photoNote ? `<span class="muted small">${esc(m.photoNote)}</span>` : ""}`;
}

function stepViewer(el, delta, absolute) {
  const id = el.dataset.viewer;
  viewerIndex[id] = absolute !== undefined ? absolute : (viewerIndex[id] || 0) + delta;
  drawViewer(el);
}

function hydratePhotos(root = document) {
  $$("[data-photo]", root).forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const m = machineById(el.dataset.photo);
    const idx = Number(el.dataset.idx || 0);
    getPhotos(m).then((list) => {
      const p = list[idx];
      if (!p) {
        el.classList.add("photo--none");
        el.innerHTML = `${icon("camera", 28)}<span>No photo found</span>`;
        return;
      }
      const img = new Image();
      img.alt = p.title;
      img.loading = "lazy";
      img.src = el.dataset.size === "big" ? p.big : p.src;
      img.onerror = () => {
        if (img.src !== p.src) img.src = p.src;
        else { el.classList.add("photo--none"); el.innerHTML = `${icon("camera", 28)}<span>Photo unavailable</span>`; }
      };
      el.innerHTML = "";
      el.appendChild(img);
    });
  });
  $$("[data-viewer]", root).forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const m = machineById(el.dataset.viewer);
    el.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); stepViewer(el, 1); }
      if (e.key === "ArrowLeft") { e.preventDefault(); stepViewer(el, -1); }
    });
    let startX = null;
    el.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    el.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) stepViewer(el, dx < 0 ? 1 : -1);
      startX = null;
    });
    getPhotos(m).then((list) => { el._list = list.slice(0, PHOTO_MAX); drawViewer(el); });
  });
}

// ===== Small UI pieces =====
const statusChip = (m) => `<span class="chip chip--${m.status}">${esc(m.statusText)}</span>`;
const orb = (wid, size = 96) => `<span class="orb orb--${wid}" style="width:${size}px;height:${size}px" aria-hidden="true"></span>`;
const starLine = (n) => `<span class="stars-earned" aria-label="${n} of 3 stars">${[0, 1, 2].map((i) => icon("star", 34, i < n ? "on" : "off")).join("")}</span>`;

function toast(title, text, ic = "star") {
  const box = $("#toasts");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span class="toast__ic">${icon(ic, 22)}</span><div><strong>${esc(title)}</strong><span>${esc(text || "")}</span></div>`;
  box.appendChild(el);
  setTimeout(() => el.classList.add("out"), 3200);
  setTimeout(() => el.remove(), 3700);
}

function confetti() {
  if (reducedMotion) return;
  const colors = ["#FF8A3D", "#FFD24A", "#5FD39A", "#4FA3FF", "#F5F2EA"];
  const box = document.createElement("div");
  box.className = "confetti";
  for (let i = 0; i < 60; i++) {
    const p = document.createElement("i");
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = Math.random() * 0.6 + "s";
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    box.appendChild(p);
  }
  document.body.appendChild(box);
  setTimeout(() => box.remove(), 3200);
}

let hudShown = null;
// Rolls the header Stardust number up to the new total, with a little sparkle
function animateStardust() {
  const el = $("#hud .pill b");
  if (!el) return;
  const to = S.stardust, from = hudShown === null ? to : hudShown;
  hudShown = to;
  if (to <= from || reducedMotion) { el.textContent = to; return; }
  const pill = el.closest(".pill"), t0 = performance.now(), dur = 700;
  pill.classList.remove("pill--gain"); void pill.offsetWidth; pill.classList.add("pill--gain");
  el.textContent = from;
  const tick = (t) => {
    const k = Math.min(1, (t - t0) / dur);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1 && hudShown === to) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

function renderHUD() {
  setTimeout(setHeaderVar, 0);
  const r = rankFor(S.lifetime);
  const nx = nextRankFor(S.lifetime);
  const pct = nx ? Math.round(((S.lifetime - r.min) / (nx.min - r.min)) * 100) : 100;
  $("#hud").innerHTML = `
    <a class="pill" href="#/badges" title="Your Stardust balance">${icon("star", 22, "gold")}<b>${S.stardust}</b><span>Stardust</span></a>
    <a class="rank" href="#/badges" title="Your rank">
      <span class="rank__name">${esc(r.name)}</span>
      <span class="bar"><span style="width:${pct}%"></span></span>
      <span class="rank__next">${nx ? `${nx.min - S.lifetime} to ${esc(nx.name)}` : "Top rank reached!"}</span>
    </a>
    ${JUDGE && !USER
      ? `<a class="acct acct--judge" href="#/signin" title="Judge mode: sign in or exit"><span class="acct__avatar" aria-hidden="true">J</span><span class="acct__mail">Judge</span><span class="chip chip--gold chip--xs">ALL ACCESS</span></a>`
      : USER
      ? `<a class="acct" href="#/signin" title="Your account"><span id="sync" class="sync sync--${syncState}" title="${SYNC_TEXT[syncState] || ""}"></span><span class="acct__avatar" aria-hidden="true">${esc((USER.email || "?").charAt(0).toUpperCase())}</span><span class="acct__mail">${esc(USER.email)}</span>${JUDGE ? '<span class="chip chip--gold chip--xs">JUDGE</span>' : isTester() ? '<span class="chip chip--gold chip--xs">TESTER</span>' : ""}</a>`
      : `<a class="btn btn--gold btn--sm" href="#/signin">Sign in</a>`}`;
  animateStardust();
}

// ===== Scenes (maps and orbit diagrams) =====
function sceneArt(w) {
  const [vw, vh] = w.view;
  let art = "";
  if (w.id === "moon") {
    art = `
      <defs><radialGradient id="gMoon" cx="40%" cy="35%"><stop offset="0" stop-color="#E6E7EE"/><stop offset="1" stop-color="#8F92A3"/></radialGradient></defs>
      <circle cx="50" cy="50" r="46" fill="url(#gMoon)"/>
      <g fill="#7D8094" opacity=".55">
        <ellipse cx="39" cy="25" rx="12" ry="9"/><ellipse cx="62" cy="28" rx="7" ry="6"/>
        <ellipse cx="73" cy="44" rx="9" ry="7"/><ellipse cx="15" cy="40" rx="8" ry="17"/>
        <ellipse cx="84" cy="36" rx="4" ry="5"/><ellipse cx="38" cy="66" rx="7" ry="5"/>
        <ellipse cx="85" cy="56" rx="4.5" ry="7"/>
      </g>
      <circle cx="43.6" cy="81.4" r="2.2" fill="#F2F2F6" opacity=".8"/>`;
  } else if (w.id === "mars") {
    let grid = "";
    for (let x = 0; x <= 200; x += 200 / 12) grid += `<line x1="${x}" y1="0" x2="${x}" y2="100"/>`;
    for (let y = 0; y <= 100; y += 100 / 6) grid += `<line x1="0" y1="${y}" x2="200" y2="${y}"/>`;
    art = `
      <defs><clipPath id="cMars"><rect width="200" height="100" rx="6"/></clipPath></defs>
      <g clip-path="url(#cMars)">
        <rect width="200" height="100" fill="#C8643A"/>
        <g fill="#8E3F22" opacity=".55">
          <ellipse cx="138" cy="46" rx="8" ry="10"/><ellipse cx="83" cy="24" rx="14" ry="6"/>
          <ellipse cx="78" cy="64" rx="14" ry="6"/><ellipse cx="112" cy="58" rx="10" ry="5"/>
        </g>
        <ellipse cx="139" cy="73" rx="9" ry="6" fill="#E6A27E" opacity=".7"/>
        <path d="M50 56 Q66 60 83 57" stroke="#6E2E14" stroke-width="1.6" fill="none"/>
        <circle cx="25.7" cy="39.6" r="3.6" fill="#E08055" stroke="#8E3F22" stroke-width=".8"/>
        <g fill="#D97A4E" stroke="#8E3F22" stroke-width=".5"><circle cx="38" cy="45" r="1.6"/><circle cx="41" cy="50" r="1.6"/><circle cx="44" cy="54" r="1.6"/></g>
        <rect x="0" y="0" width="200" height="5" fill="#F4EEE8" opacity=".85"/>
        <rect x="0" y="95" width="200" height="5" fill="#F4EEE8" opacity=".85"/>
        <g stroke="#ffffff" stroke-opacity=".08" stroke-width=".4">${grid}</g>
      </g>`;
  } else if (w.id === "venus") {
    art = `
      <defs><radialGradient id="gVenus" cx="40%" cy="35%"><stop offset="0" stop-color="#F6DFA8"/><stop offset="1" stop-color="#B98A45"/></radialGradient></defs>
      <path d="M60 2 Q92 6 99 34" stroke="#AEB6DA" stroke-width=".6" stroke-dasharray="2 2" fill="none" opacity=".7"/>
      <path d="M2 30 Q6 18 11 15" stroke="#FF8A3D" stroke-width=".7" stroke-dasharray="1.5 1.5" fill="none"/>
      <circle cx="3" cy="33" r="2.6" fill="#4FA3FF"/>
      <circle cx="50" cy="56" r="30" fill="url(#gVenus)"/>
      <g fill="none" stroke="#FFF4D6" stroke-opacity=".35" stroke-width="2.4">
        <path d="M24 46 Q50 38 76 46"/><path d="M21 58 Q50 50 79 58"/><path d="M25 70 Q50 63 75 70"/>
      </g>
      <ellipse cx="50" cy="56" rx="44" ry="14" transform="rotate(-12 50 56)" stroke="#AEB6DA" stroke-width=".6" stroke-dasharray="2 1.5" fill="none" opacity=".8"/>`;
  } else if (w.id === "orbit") {
    art = `
      <defs><radialGradient id="gEarth" cx="40%" cy="35%"><stop offset="0" stop-color="#7CC4FF"/><stop offset="1" stop-color="#1E5FB8"/></radialGradient></defs>
      <path d="M5 40 Q20 5 60 2" stroke="#FFD24A" stroke-width=".6" stroke-dasharray="2 2" fill="none" opacity=".7"/>
      <ellipse cx="66" cy="55" rx="30" ry="18" stroke="#AEB6DA" stroke-width=".5" stroke-dasharray="2 1.5" fill="none"/>
      <line x1="42" y1="55" x2="88" y2="86" stroke="#AEB6DA" stroke-width=".5" stroke-dasharray="1.5 2"/>
      <circle cx="42" cy="55" r="14" stroke="#5FD39A" stroke-width=".5" fill="none" opacity=".8"/>
      <ellipse cx="42" cy="55" rx="5" ry="14" stroke="#5FD39A" stroke-width=".4" fill="none" opacity=".5"/>
      <circle cx="42" cy="55" r="8" fill="url(#gEarth)"/>
      <g fill="#5FB36A" opacity=".85"><ellipse cx="39" cy="52" rx="3" ry="2.2"/><ellipse cx="45" cy="58" rx="2.2" ry="1.6"/></g>`;
  } else if (w.id === "deep") {
    art = `
      <circle cx="8" cy="50" r="7" fill="#FFD24A" opacity=".18"/>
      <circle cx="8" cy="50" r="4" fill="#FFD24A"/>
      <g fill="none" stroke="#AEB6DA" stroke-opacity=".35" stroke-width=".4">
        <circle cx="8" cy="50" r="14"/><circle cx="8" cy="50" r="24"/><circle cx="8" cy="50" r="32.3"/><circle cx="8" cy="50" r="38.5"/>
      </g>
      <circle cx="8" cy="50" r="48" fill="none" stroke="#AEB6DA" stroke-opacity=".12" stroke-width="7"/>
      <circle cx="8" cy="50" r="62" fill="none" stroke="#FF8A3D" stroke-width=".6" stroke-dasharray="2 1.5" opacity=".8"/>
      <g fill="#E0B07A"><circle cx="21" cy="54" r="1.8"/></g><g fill="#E8D49A"><circle cx="28" cy="37" r="1.5"/></g>
      <g fill="#9FE3E8"><circle cx="38" cy="62" r="1.3"/></g><g fill="#5B8CFF"><circle cx="46" cy="44" r="1.3"/></g>
      <g stroke="#F5F2EA" stroke-opacity=".25" stroke-width=".4" stroke-dasharray="1 1.5" fill="none">
        <path d="M8 50 Q50 25 86 18"/><path d="M8 50 Q45 75 82 88"/><path d="M8 50 Q40 70 68 80"/><path d="M8 50 Q30 42 56 40"/>
      </g>`;
  }
  return `<svg class="scene__art" viewBox="0 0 ${vw} ${vh}" aria-hidden="true">${art}</svg>`;
}

function sceneHTML(w, selectedId) {
  const pins = machinesIn(w.id).map((m, i) => `
    <button class="pin ${S.woken[m.id] ? "pin--woken" : ""} ${m.id === selectedId ? "is-selected" : ""} pin--${m.status}"
      style="left:${m.x}%;top:${m.y}%" data-action="select" data-id="${m.id}" aria-label="${esc(m.name)}">
      <span>${S.woken[m.id] ? icon("check", 16) : i + 1}</span>
    </button>`).join("");
  const decor = (DECOR[w.id] || []).map((d) =>
    `<span class="decor ${d.nodot ? "decor--text" : ""}" style="left:${d.x}%;top:${d.y}%">${d.nodot ? "" : "<i></i>"}${esc(d.label)}</span>`).join("");
  return `
    <div class="scene scene--${w.id}" data-world="${w.id}" style="aspect-ratio:${w.aspect}">
      ${sceneArt(w)}${decor}${pins}
      <div class="tip" id="tip" role="tooltip" hidden></div>
    </div>`;
}

function showTip(pin) {
  const tip = $("#tip");
  if (!tip) return;
  const m = machineById(pin.dataset.id);
  tip.innerHTML = `
    ${photoSlot(m, "thumb", 0, "photo--tip")}
    <div class="tip__body">
      <strong>${esc(m.name)}</strong>
      <div class="chips"><span class="chip">${esc(m.year)}</span>${statusChip(m)}</div>
      <p>${esc(m.teaser)}</p>
      <span class="tip__hint">Click the pin to select it</span>
    </div>`;
  const px = parseFloat(pin.style.left) || m.x;
  const py = parseFloat(pin.style.top) || m.y;
  const left = px > 55;
  tip.style.left = left ? `calc(${px}% - 26px)` : `calc(${px}% + 26px)`;
  tip.style.top = `${py}%`;
  const ty = py > 62 ? "-88%" : py < 30 ? "-12%" : "-50%";
  tip.style.transform = `translate(${left ? "-100%" : "0"}, ${ty})`;
  tip.hidden = false;
  hydratePhotos(tip);
}
const hideTip = () => { const t = $("#tip"); if (t) t.hidden = true; };

function bindPins() {
  $$(".pin").forEach((p) => {
    p.addEventListener("mouseenter", () => showTip(p));
    p.addEventListener("focus", () => showTip(p));
    p.addEventListener("mouseleave", hideTip);
    p.addEventListener("blur", hideTip);
  });
}

// ===== Views =====
const app = () => $("#app");
const selectedByWorld = {};
const logProgress = {};
let quiz = null;

// ===== Home hero: a live map of the inner solar system, showing where everything is today =====
function heroMapHTML() {
  const now = new Date(), d = daysJ2000(now);
  const C = 230, SC = 128;  // centre and pixels per AU (Mars orbit ~195 px)
  const pos = (v) => [C + v.x * SC, C - v.y * SC];
  const E = pos(earthHelio(d)), M = pos(planetHelio(PLANETS.mars, d)), V = pos(planetHelio(PLANETS.venus, d));
  const lt = (km) => fmtDur(km / C_KMS);
  const mk = (ids) => MACHINES.filter((m) => ids.includes(m.world)).length;
  const go = (wid) => (S.unlocked[wid] ? `#/world/${wid}` : "#/destinations");
  const v1 = eqToEclVec(PROBES.voyager1.ra, PROBES.voyager1.dec);
  const vl = Math.atan2(v1.y, v1.x), vx = C + Math.cos(vl) * 206, vy = C - Math.sin(vl) * 206;
  const vDist = commsInfo(machineById("voyager1"), now).oneWay;
  // labels: try spots around each planet and keep the first that fits on the map without covering another label or planet
  const fs = window.innerWidth <= 720 ? 1.2 : 1;
  const boxes = [];
  const dots = [[C, C, 32], [V[0], V[1], 12], [E[0], E[1], 22], [M[0], M[1], 12]];
  const label = ([x, y], lines, cls) => {
    const w = Math.max(lines[0].length * 9.6, (lines[1] || "").length * 7.7) * fs, h = (16 + (lines.length - 1) * 19) * fs;
    const dx = x - C, dy = y - C, len = Math.hypot(dx, dy) || 1, ux = dx / len, uy = dy / len;
    const spots = [[ux, uy], [0, 1], [0, -1], [1, 0], [-1, 0], [-ux, -uy]];
    let pick = null;
    for (const [sx, sy] of spots) {
      const anchor = Math.abs(sx) < 0.35 ? "middle" : sx > 0 ? "start" : "end";
      const lx = x + sx * 22, cy = y + sy * (22 + h / 2);
      const left = anchor === "start" ? lx : anchor === "end" ? lx - w : lx - w / 2;
      const box = [left, cy - h / 2, left + w, cy + h / 2];
      const inside = box[0] > 2 && box[2] < 458 && box[1] > 2 && box[3] < 452;
      const clear = boxes.every((o) => box[2] < o[0] || box[0] > o[2] || box[3] < o[1] || box[1] > o[3])
        && dots.every(([px, py, r]) => px < box[0] - r || px > box[2] + r || py < box[1] - r || py > box[3] + r);
      if (inside && clear) { pick = { anchor, lx, top: box[1], box }; break; }
      if (!pick) pick = { anchor, lx, top: box[1], box, fallback: true };
    }
    boxes.push(pick.box);
    const base = pick.top + 14 * fs;
    return `<text class="hmap__label ${cls || ""}" x="${pick.lx.toFixed(1)}" y="${base.toFixed(1)}" text-anchor="${pick.anchor}">${lines.map((t, i) => `<tspan x="${pick.lx.toFixed(1)}" dy="${i ? 19 * fs : 0}" class="${i ? "hmap__sub" : ""}">${esc(t)}</tspan>`).join("")}</text>`;
  };
  const lbE = label(E, ["Earth & Moon", `${mk(["moon", "orbit"])} machines nearby`], "hmap__label--earth");
  const lbM = label(M, ["Mars", `${mk(["mars"])} machines · ${lt(planetDistanceAU("mars", now) * AU_KM)}`]);
  const lbV = label(V, ["Venus", `${mk(["venus"])} machines · ${lt(planetDistanceAU("venus", now) * AU_KM)}`]);
  const lbP = label([vx, vy], ["To Voyager 1", `${lt(vDist * C_KMS)} away`], "hmap__label--probe");
  return `
    <svg class="hmap" viewBox="0 0 460 460" role="img" aria-label="Map of where Venus, Earth, the Moon and Mars are today">
      <defs>
        <radialGradient id="hmSun"><stop offset="0" stop-color="#FFE7A3"/><stop offset=".55" stop-color="#FFC94A"/><stop offset="1" stop-color="#FF9F43" stop-opacity="0"/></radialGradient>
        <marker id="hmArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" fill="#9AA3D9"/></marker>
      </defs>
      ${[PLANETS.venus.a, 1, PLANETS.mars.a].map((a) => `<circle class="hmap__orbit" cx="${C}" cy="${C}" r="${(a * SC).toFixed(1)}"/>`).join("")}
      <line class="hmap__probe" x1="${C}" y1="${C}" x2="${vx.toFixed(1)}" y2="${vy.toFixed(1)}" marker-end="url(#hmArrow)"/>
      <path id="hmSignal" d="M${E[0].toFixed(1)} ${E[1].toFixed(1)} L${M[0].toFixed(1)} ${M[1].toFixed(1)}" class="hmap__link"/>
      <circle r="4" class="hmap__pulse"><animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#hmSignal"/></animateMotion></circle>
      <circle cx="${C}" cy="${C}" r="30" fill="url(#hmSun)"/>
      <a href="${go("venus")}"><circle class="hmap__planet" cx="${V[0]}" cy="${V[1]}" r="10" fill="#E9C46A"/></a>
      <a href="${go("moon")}"><circle class="hmap__planet" cx="${E[0]}" cy="${E[1]}" r="11" fill="#4EA8DE"/>
        <circle cx="${E[0] + 15}" cy="${E[1] - 9}" r="4" fill="#D9DCE8"/>
        <circle cx="${E[0]}" cy="${E[1]}" r="20" class="hmap__ring"/></a>
      <a href="${go("mars")}"><circle class="hmap__planet" cx="${M[0]}" cy="${M[1]}" r="9" fill="#E07A4F"/></a>
      ${lbV}${lbE}${lbM}${lbP}
    </svg>
    <p class="hmap__cap">Live map for ${now.toLocaleDateString([], { day: "numeric", month: "short", year: "numeric" })}: real positions today, with signal times from Earth. Sizes not to scale. Tap a planet.</p>`;
}

function renderHome(scrollTo) {
  const pool = MACHINES.filter((m) => S.unlocked[m.world]);
  const motd = pool[Math.floor(Date.now() / 86400000) % pool.length];
  const nextWorld = WORLDS.find((w) => S.unlocked[w.id] && !allWoken(w.id)) || WORLDS[0];
  app().innerHTML = `
    <section class="hero">
      <div class="hero__text">
        <span class="kicker">MISSION: FIND WHAT WE LEFT BEHIND</span>
        <h1>NASA left many machines across the solar system. <em>What’s left of them today?</em></h1>
        <p class="lead">Some are still working. Some went silent. Some are gone. Explore each machine’s story, wake it up with real Mission Control decisions, and find out what’s happening to it now.</p>
        <div class="row">
          <a class="btn btn--primary btn--lg" href="#/left-behind">See what we left behind ${icon("arrow", 22)}</a>
          <a class="btn btn--ghost btn--lg" href="#/world/${nextWorld.id}">Start exploring</a>
        </div>
        ${JUDGE ? `<div class="nudge nudge--gold">${icon("trophy", 22)}<span><b>Judge mode:</b> ${TESTER_START_STARDUST} Stardust and every tester tool (unlock all, wake all, quiz tools) on the <a href="#/badges">Badges &amp; Stardust</a> page. <button class="linkbtn" data-action="tourstart">Take the 3-minute tour</button>. Use the side tab to go back to the normal site, or <a href="#/signin">sign in</a> with your own account.</span></div>` : USER ? "" : `<div class="nudge">${icon("cloud", 22)}<span>Playing as a guest. <a href="#/signin">Sign in</a> to save your Stardust in the cloud.</span></div>`}
      </div>
      <div class="hero__art">${heroMapHTML()}</div>
    </section>

    ${JUDGE || judgeHintSeen() ? "" : `<div class="judgehint" role="note">
      <span class="judgehint__text"><b>Judges, start here!</b> Every feature unlocked, no sign-in, plus a guided tour.</span>
      <svg class="judgehint__arrow" viewBox="0 0 60 24" aria-hidden="true"><path d="M2 12h48M40 3l12 9-12 9"/></svg>
      <button class="judgehint__x" data-action="judgehintclose" aria-label="Hide this tip">${icon("x", 16)}</button>
    </div>`}
    <button class="judgetab ${JUDGE ? "is-on" : ""}" data-action="judge" title="${JUDGE ? "Leave judge mode and return to the normal site" : "Open the site in judge mode, with every feature unlocked for testing"}">${icon(JUDGE ? "x" : "trophy", 18)}<span>${JUDGE ? "Exit judge mode" : "For judges"}</span></button>

    <section class="quickfacts" aria-label="Quick facts">
      <div class="card fact"><b>~187 tonnes</b><span>of human-made material left on the Moon</span></div>
      <div class="card fact"><b>${MACHINES.filter((m) => m.status === "active").length} of ${MACHINES.length}</b><span>covered machines are still working today</span></div>
      <div class="card fact"><b>${(commsInfo(machineById("voyager1")).km / 1e9).toFixed(1)} billion km</b><span>Voyager 1’s distance from Earth right now</span></div>
      <div class="card fact"><b>${fmtDur(commsInfo(machineById("voyager1")).oneWay)}</b><span>for a radio signal to reach Voyager 1 today</span></div>
    </section>

    <a class="card debriefcta lbcta" href="#/debrief">
      ${icon("compass", 30)}<span><b>Why does NASA leave machines behind?</b><span class="muted small">Find out, then vote in the Mission Debrief on what should happen to them.</span></span>${icon("arrow", 22)}
    </a>

    <section id="destinations" class="section">
      <div class="section__head"><h2>Pick a destination</h2><p class="muted">Complete a destination (wake every machine and take every quiz) to open the next one, then unlock it with Stardust.</p></div>
      <div class="grid grid--worlds">${WORLDS.map(worldCard).join("")}</div>
    </section>

    <section class="section">
      <div class="section__head"><h2>How to play</h2></div>
      <div class="grid grid--4">
        ${[["1", "Find a machine", "Pick a destination and choose a machine on its map. See what it was and what’s left of it today."],
           ["2", "Hear its story", "Read its logs, then complete a wake-up mission, a real NASA decision or a rover drive, to wake it up."],
           ["3", "Ace the quizzes", "Every machine has a 5-question quiz. Finish them all to unlock the 10-question Grand Quiz."],
           ["4", "Decide its future", "Send woken machines a message at light speed, then vote on what should happen to everything we left behind."]]
          .map(([n, t, d]) => `<div class="card step"><span class="step__n">${n}</span><h3>${t}</h3><p>${d}</p></div>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="card motd">
        ${photoSlot(motd, "big", 0, "photo--motd")}
        <div class="motd__text">
          <span class="kicker kicker--gold">MACHINE OF THE DAY</span>
          <h2>${esc(motd.name)}</h2>
          <p class="quote">“${esc(motd.teaser)}”</p>
          <div class="chips"><span class="chip">${esc(worldById(motd.world).name)}</span><span class="chip">${esc(motd.year)}</span>${statusChip(motd)}</div>
          <div class="row"><a class="btn btn--gold" href="#/machine/${motd.id}">Hear my story</a><span class="muted small">+${ECONOMY.WAKE} Stardust for finishing it</span></div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="card about">
        <div class="about__icon">${icon("users", 40)}</div>
        <div class="about__text">
          <span class="kicker">ABOUT US</span>
          <h2>Team Earthlings</h2>
          <p>We are Team Earthlings, a team interested in space. We built Ghost Rovers for the NASA Space Apps Challenge to tell the stories of the robots, probes and telescopes humanity sent across the solar system, and the science they made possible.</p>
        </div>
      </div>
    </section>

    <section id="sources" class="section">
      <div class="section__head"><h2>Sources</h2><p class="muted">Facts are written from NASA mission information. Photos load from the NASA Image and Video Library.</p></div>
      <ul class="sources">
        <li><a href="https://science.nasa.gov/" target="_blank" rel="noopener">NASA Science: mission pages ${icon("external", 14)}</a></li>
        <li><a href="https://nssdc.gsfc.nasa.gov/" target="_blank" rel="noopener">NASA Space Science Data Coordinated Archive ${icon("external", 14)}</a></li>
        <li><a href="https://images.nasa.gov/" target="_blank" rel="noopener">NASA Image and Video Library ${icon("external", 14)}</a></li>
        <li><a href="https://www.jpl.nasa.gov/" target="_blank" rel="noopener">NASA Jet Propulsion Laboratory ${icon("external", 14)}</a></li>
      </ul>
    </section>`;
  hydratePhotos(app());
  if (scrollTo) setTimeout(() => { const el = document.getElementById(scrollTo); if (el) el.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" }); }, 30);
}

function worldCard(w) {
  const list = machinesIn(w.id);
  const woke = list.filter((m) => S.woken[m.id]).length;
  const unlocked = !!S.unlocked[w.id];
  const canBuy = !unlocked && S.stardust >= w.cost && orderReady(w);
  let action;
  if (unlocked) action = `<a class="btn btn--primary btn--block" href="#/world/${w.id}">Explore ${esc(w.name)}</a>`;
  else if (!orderReady(w)) action = `<button class="btn btn--disabled btn--block" disabled>${icon("lock", 18)} Complete ${esc(prevWorld(w).name)} first</button>`;
  else if (canBuy) action = `<button class="btn btn--gold btn--block" data-action="unlock" data-world="${w.id}">${icon("star", 18)} Unlock for ${w.cost} Stardust</button>`;
  else action = `<button class="btn btn--disabled btn--block" disabled>${icon("lock", 18)} Needs ${w.cost} Stardust</button>`;
  return `
    <article class="card world ${unlocked ? "" : "world--locked"}" data-world-card="${w.id}">
      <div class="world__top">${orb(w.id, 84)}<span class="tag">${unlocked ? `${list.length} MACHINES` : "LOCKED"}</span></div>
      <h3>${esc(w.name)}</h3>
      <p>${esc(w.tag)}</p>
      <span class="muted small">${esc(w.era)}</span>
      <div class="progress"><span class="small strong">${woke} of ${list.length} woken</span><span class="bar"><span style="width:${(woke / list.length) * 100}%"></span></span></div>
      ${action}
    </article>`;
}

// Destinations open in order: the one before must be complete first
const prevWorld = (w) => WORLDS[WORLDS.findIndex((x) => x.id === w.id) - 1];
const orderReady = (w) => { const p = prevWorld(w); return !p || !!S.completed[p.id]; };

function renderLocked(w) {
  const canBuy = S.stardust >= w.cost && orderReady(w);
  app().innerHTML = `
    <div class="crumbs"><a href="#/destinations">${icon("back", 18)} All destinations</a></div>
    <section class="card locked">
      ${orb(w.id, 160)}
      <h1>${esc(w.name)} is locked</h1>
      <p class="lead">${esc(w.tag)}</p>
      ${!orderReady(w) ? `<p>Complete <b>${esc(prevWorld(w).name)}</b> first: wake every machine and take every quiz there, including the Grand Quiz. Then it costs <b>${w.cost}</b> Stardust.</p><a class="btn btn--primary btn--lg" href="#/world/${prevWorld(w).id}">Go to ${esc(prevWorld(w).name)}</a>` : `<p>You have <b>${S.stardust}</b> Stardust. Unlocking costs <b>${w.cost}</b>.</p>`}
      ${!orderReady(w) ? "" : canBuy
        ? `<button class="btn btn--gold btn--lg" data-action="unlock" data-world="${w.id}">${icon("star", 20)} Unlock for ${w.cost} Stardust</button>`
        : `<p class="muted">Earn ${w.cost - S.stardust} more by waking machines and acing quizzes.</p><a class="btn btn--primary btn--lg" href="#/destinations">Keep exploring</a>`}
    </section>`;
}

function renderWorld(wid) {
  const w = worldById(wid);
  if (!w) return renderHome();
  if (!S.unlocked[wid]) return renderLocked(w);
  const list = machinesIn(wid);
  const sel = machineById(selectedByWorld[wid]) || list.find((m) => !S.woken[m.id]) || list[0];
  selectedByWorld[wid] = sel.id;
  const woke = list.filter((m) => S.woken[m.id]).length;
  const best = S.quizBest[wid];
  const mqDone = list.filter((m) => S.mquizBest[m.id] !== undefined).length;
  const worldOpen = mqDone === list.length;
  const wq = ECONOMY.QUIZ.world;
  app().innerHTML = `
    <div class="crumbs"><a href="#/destinations">${icon("back", 18)} All destinations</a></div>
    <header class="world-head">
      <div><h1>${esc(w.name)}</h1><span class="muted strong">${woke} of ${list.length} machines woken · ${esc(w.era)}</span>${S.completed[wid] ? ` <span class="chip chip--gold">${icon("trophy", 14)} Mission complete</span>` : ""}</div>
      ${worldOpen
        ? `<a class="btn btn--gold" href="#/quiz/${wid}">${icon("trophy", 20)} Grand Quiz: ${esc(w.name)}</a>`
        : `<span class="chip chip--lockinfo">${icon("lock", 16)} Grand Quiz: ${mqDone}/${list.length} machine quizzes done</span>`}
    </header>
    <div class="world-layout">
      <div class="world-scene">
        ${sceneHTML(w, sel.id)}
        <p class="muted small center scene-hint">Hover over a pin to peek · click to choose · not to scale</p>
      </div>
      <aside class="world-side">${worldSideHTML(w, sel)}      </aside>
    </div>`;
  bindPins();
  hydratePhotos(app());
  mount3D(wid);
}

function worldSideHTML(w, sel) {
  const wid = w.id;
  const list = machinesIn(wid);
  const best = S.quizBest[wid];
  const mqDone = list.filter((m) => S.mquizBest[m.id] !== undefined).length;
  const worldOpen = mqDone === list.length;
  const wq = ECONOMY.QUIZ.world;
  return `
        <div class="card selected">
          ${viewerHTML(sel, "viewer--panel")}
          <div class="chips"><span class="chip">${esc(sel.year)}</span>${statusChip(sel)}${S.woken[sel.id] ? `<span class="chip chip--gold">${icon("check", 14)} Woken</span>` : ""}</div>
          <h2>${esc(sel.name)}</h2>
          <span class="muted strong small">${esc(sel.kind)}</span>
          <p class="quote">“${esc(sel.teaser)}”</p>
          <div class="note"><span class="kicker kicker--gold">SCIENCE IT MADE POSSIBLE</span><p>${esc(sel.science)}</p></div>
          <a class="btn btn--primary btn--block" href="#/machine/${sel.id}">${S.woken[sel.id] ? "Read my story again" : `Hear my story · +${ECONOMY.WAKE} Stardust`}</a>
          <a class="btn btn--ghost btn--block" href="#/mquiz/${sel.id}">${icon("bulb", 18)} ${S.mquizBest[sel.id] === undefined ? "Take my 5-question quiz" : `My quiz · best ${S.mquizBest[sel.id]}/5`}</a>
        </div>
        <div class="card list">
          <h3>Machines here</h3>
          ${list.map((m, i) => `
            <button class="list__row ${m.id === sel.id ? "is-active" : ""}" data-action="select" data-id="${m.id}">
              <span class="list__n">${S.woken[m.id] ? icon("check", 16) : i + 1}</span>
              <span class="list__name">${esc(m.name)}</span>
              <span class="qbadge ${S.mquizBest[m.id] === undefined ? "" : "qbadge--done"}">${S.mquizBest[m.id] === undefined ? "Quiz —" : `Quiz ${S.mquizBest[m.id]}/5`}</span>
            </button>`).join("")}
        </div>
        <div class="card quizcard ${worldOpen ? "quizcard--open" : ""}">
          <h3>${icon(worldOpen ? "trophy" : "lock", 22)} ${esc(w.name)} Grand Quiz</h3>
          ${worldOpen
            ? `<p>${wq.length} questions mixed from every machine quiz at this destination (bank of ${worldBankSize(wid)}). ${best === undefined ? `First try: <b>${wq.correct} Stardust</b> per correct answer, plus <b>${wq.perfect}</b> for a perfect score!` : `Your best: <b>${best}/${wq.length}</b>. Beat it for +${wq.beatBest} per extra answer.`}</p>
               <a class="btn btn--gold btn--block" href="#/quiz/${wid}">Start the Grand Quiz</a>`
            : `<p>Finish the 5-question quiz for every machine here to unlock the ${wq.length}-question quiz, worth up to <b>${wq.length * wq.correct + wq.perfect} Stardust</b>.</p>
               <div class="progress"><span class="small strong">${mqDone} of ${list.length} machine quizzes done</span><span class="bar"><span style="width:${(mqDone / list.length) * 100}%"></span></span></div>`}
        </div>
`;
}

// ===== 3D machine model on laptops (js/model3d.js) =====
const techMore = (m, k) => (typeof TECH_MORE !== "undefined" && TECH_MORE[m.id] && TECH_MORE[m.id][k]) || "";
function mountModel(m) {
  const stage = $(".modelcard__stage");
  if (!stage || !window.GRMODEL || !window.GRMODEL.has(m.id)) return;
  try { window.GRMODEL.mount(stage, m.id, m.tech.map((t) => t[0]), $(".modelcard__cap"), m.short, m.tech.map((t, k) => techMore(m, k))); }
  catch (e) { console.error("3D model failed:", e); }
}
window.addEventListener("grmodel-ready", () => {
  const card = $(".modelcard");
  if (card && !card.querySelector("canvas")) mountModel(machineById(card.dataset.model));
});

// ===== 3D scenes (js/scene3d.js); the flat map stays if 3D can't load =====
function mount3D(wid) {
  const el = $(".scene");
  if (!el || !window.GR3D) return;
  try { window.GR3D.mount(el, wid, selectedByWorld[wid]); }
  catch (e) { console.error("3D scene failed, using the flat map:", e); window.GR3D.unmount(); el.classList.remove("scene--3d"); }
}
window.addEventListener("gr3d-ready", () => {
  const el = $(".scene");
  if (el && !el.classList.contains("scene--3d")) mount3D(el.dataset.world);
});

// Short phone vibration for big moments (ignored on devices without it)
const buzz = (pattern) => { try { if (navigator.vibrate && window.matchMedia("(pointer: coarse)").matches) navigator.vibrate(pattern); } catch (e) { /* not supported */ } };

// ----- Story timeline helpers -----
const placeOf = (m) => (m.kind.split(" · ")[1] || worldById(m.world).name).toUpperCase();
const isLastContact = (m, i) => m.status !== "active" && i === m.logs.length - 1;
// Signal fades over a silent machine's story; working machines stay strong
function signalBars(m, i) {
  if (m.status === "active") return 4;
  if (isLastContact(m, i)) return 0;
  const n = m.logs.length - 1;
  return Math.max(1, Math.round(4 - (3 * i) / Math.max(1, n - 1)));
}
let typeTimer = null;
let mTab = "tech";
let justWoke = null;
// Quickly types the newest log's text, like a transmission arriving (tap to skip)
function typeNewLog() {
  clearInterval(typeTimer);
  const log = $(".log--new");
  if (!log || reducedMotion) return;
  const p = log.querySelector("p"), full = p.textContent;
  const step = Math.max(2, Math.ceil(full.length / 70));
  let n = 0;
  p.textContent = "";
  p.classList.add("typing");
  const done = () => { clearInterval(typeTimer); p.textContent = full; p.classList.remove("typing"); };
  log.addEventListener("click", done, { once: true });
  typeTimer = setInterval(() => { n += step; if (n >= full.length) done(); else p.textContent = full.slice(0, n); }, 18);
}

function renderMachine(id) {
  clearInterval(typeTimer);
  const m = machineById(id);
  if (!m) return renderHome();
  const w = worldById(m.world);
  if (!S.unlocked[m.world]) return renderLocked(w);
  const woken = !!S.woken[m.id];
  const shown = woken ? m.logs.length : Math.max(1, logProgress[m.id] || 1);
  const list = machinesIn(m.world);
  const idx = list.indexOf(m);
  const prev = list[(idx - 1 + list.length) % list.length];
  const next = list[(idx + 1) % list.length];

  let mainBtn;
  if (shown < m.logs.length) mainBtn = `<button class="btn btn--primary btn--lg" data-action="nextlog" data-id="${m.id}">Next log ${icon("arrow", 20)}</button>`;
  else if (!woken) mainBtn = `<button class="btn btn--gold btn--lg pulse" data-action="mission" data-id="${m.id}">${icon("rocket", 20)} Start wake-up mission</button>`;
  else mainBtn = `<a class="btn btn--primary btn--lg" href="#/mquiz/${m.id}">${icon("bulb", 20)} Take my 5-question quiz</a>`;
  const mq = ECONOMY.QUIZ.machine;
  const mBest = S.mquizBest[m.id];
  const wide = window.matchMedia("(min-width: 1025px)").matches;

  app().innerHTML = `
    <div class="crumbs"><a href="#/world/${m.world}">${icon("back", 18)} Back to ${esc(w.name)}</a></div>
    <section class="mhero">
      <div class="mhero__photo ${woken ? "" : "is-asleep"}">${viewerHTML(m, "viewer--hero")}${woken ? "" : `<span class="asleep__tag">${icon("signal", 14)} Asleep</span>`}</div>
      <div class="mhero__text">
        <span class="kicker">${esc(w.name.toUpperCase())} · ${esc(m.kind.toUpperCase())}</span>
        <h1>${esc(m.name)}</h1>
        <p class="quote">“${esc(m.teaser)}”</p>
        ${LEGACY[m.id] ? `<div class="nowstrip nowstrip--${STATUS_GROUP[m.status]}"><span class="nowstrip__tag">NOW</span><span>${esc(LEGACY[m.id].now)}</span></div>` : ""}
        <div class="chips">${listenBtn("machine", m.id)}<span class="chip">${esc(m.year)}</span>${statusChip(m)}${woken ? `<span class="chip chip--gold">${icon("check", 14)} Woken</span>` : ""}</div>
        <div class="dots" aria-label="Story progress">${m.logs.map((_, i) => `<span class="${i < shown ? "on" : ""}"></span>`).join("")}</div>
      </div>
    </section>

    <div class="mlayout">
      <section class="logs logs--timeline" aria-label="Story logs">
        ${m.logs.map((l, i) => {
          const last = isLastContact(m, i);
          const bars = signalBars(m, i);
          return i < shown ? `
          <article class="card log ${i === shown - 1 && !woken ? "log--new" : ""} ${last ? "log--last" : ""}" data-log="${i}">
            <div class="log__top">
              <span class="log__n">${last ? "LAST CONTACT" : `TRANSMISSION ${i + 1}`}</span>
              <span class="log__when">${esc(l.when)}</span>
              <span class="sig sig--${bars}" title="${bars ? "Signal strength" : "No signal"}" aria-hidden="true"><i></i><i></i><i></i><i></i>${bars ? "" : "<em>NO SIGNAL</em>"}</span>
            </div>
            <span class="log__src">${icon("signal", 13)} INCOMING · ${esc(placeOf(m))}</span>
            <h2>${esc(l.title)}</h2>
            <p>${esc(l.text)}</p>
          </article>` : `
          <article class="card log log--locked">
            <div class="log__top"><span class="log__n log__n--off">TRANSMISSION ${i + 1}</span>${icon("lock", 18)}</div>
            <p class="muted">Waiting for signal… Tap “Next log” to keep reading.</p>
          </article>`;
        }).join("")}
        <div class="row logs__next">${mainBtn}<span class="logs__count">Log ${shown} of ${m.logs.length}</span></div>
        ${wide ? `
        <div class="card modelcard" data-model="${m.id}">
          <div class="modelcard__head"><h2>${icon("wrench", 24)} ${esc(m.short)} in 3D</h2><button class="btn btn--ghost btn--sm" data-action="modelreset">Reset view</button></div>
          <div class="modelcard__stage"><div class="photo photo--none">${icon("wrench", 28)}<span>Loading 3D model…</span></div></div>
          <p class="modelcard__cap" aria-live="polite">Click an item in the Tech Lab to see where it is on ${esc(m.short)}.</p>
          <span class="muted small">Drag to spin · a simplified low-poly model, not to scale</span>
        </div>` : ""}
      </section>

      <aside class="mside">
        <div class="card quizcard quizcard--open">
          <h3>${icon("bulb", 22)} ${esc(m.short)}’s quiz</h3>
          <p>5 questions about me. Every answer is on this page, so read my logs, Tech Lab and facts first! ${mBest === undefined ? `First try: <b>${mq.correct} Stardust</b> per correct answer, +${mq.perfect} for 5/5.` : `Your best: <b>${mBest}/5</b>.`}</p>
          <a class="btn btn--gold btn--block" href="#/mquiz/${m.id}">${mBest === undefined ? "Take my quiz" : "Play again"}</a>
        </div>
        ${thenNowHTML(m)}
        ${commsCardHTML(m)}
        <div class="mtabs" role="tablist" aria-label="More about ${esc(m.short)}">
          ${[["tech", "Tech Lab"], ["facts", "Facts"], ["mission", "Mission"]].map(([t, label]) => `<button role="tab" class="mtab ${mTab === t ? "is-on" : ""}" aria-selected="${mTab === t}" data-action="mtab" data-t="${t}">${label}</button>`).join("")}
        </div>
        <div class="card techlab" data-panel="tech" ${mTab === "tech" ? "" : "hidden"}>
          <h2>${icon("wrench", 24)} Tech Lab</h2>
          ${m.tech.map(([t, d], k) => wide
            ? `<button type="button" class="techlab__item techlab__item--btn" data-action="techfocus" data-i="${k}" title="Show it on the 3D model" aria-expanded="false"><b>${esc(t)}</b><span>${esc(d)}</span>${techMore(m, k) ? `<span class="techlab__more">${esc(techMore(m, k))}</span>` : ""}<span class="techlab__hint">${icon("wrench", 14)} Show me on the 3D model</span></button>`
            : `<div class="techlab__item"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}
        </div>
        <div class="card facts" data-panel="facts" ${mTab === "facts" ? "" : "hidden"}>
          <h2>${icon("bulb", 24)} Did you know?</h2>
          <ul>${m.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
        </div>
        <div data-panel="mission" class="mpanel" ${mTab === "mission" ? "" : "hidden"}>
          <div class="card statcard">
            <h2>Mission card</h2>
            <div class="stats">${m.stats.map(([k, v]) => `<div><span class="muted small strong">${esc(k.toUpperCase())}</span><b>${esc(v)}</b></div>`).join("")}</div>
          </div>
          <div class="card note">
            <span class="kicker kicker--gold">SCIENCE IT MADE POSSIBLE</span>
            <p>${esc(m.science)}</p>
          </div>
        </div>
      </aside>
    </div>

    <nav class="pager" aria-label="More machines">
      <a class="btn btn--ghost" href="#/machine/${prev.id}">${icon("back", 18)} ${esc(prev.short)}</a>
      <a class="btn btn--ghost" href="#/machine/${next.id}">${esc(next.short)} ${icon("arrow", 18)}</a>
    </nav>`;
  hydratePhotos(app());
  mountModel(m);
  typeNewLog();
  if (justWoke === m.id) {
    justWoke = null;
    const ph = $(".mhero__photo");
    if (ph) { ph.classList.add("is-waking"); ph.insertAdjacentHTML("beforeend", `<span class="acq">${icon("signal", 18)} SIGNAL ACQUIRED</span>`); }
  }
}

function renderBadges() {
  const r = rankFor(S.lifetime);
  const owned = BADGES.filter((b) => S.badges[b.id] && !b.bonus).length;
  const bonusOwned = BADGES.filter((b) => S.badges[b.id] && b.bonus).length;
  const mq = ECONOMY.QUIZ.machine;
  const wq = ECONOMY.QUIZ.world;
  app().innerHTML = `
    ${isTester() ? `
      <section class="section">
        <div class="card tester">
          <div><span class="kicker kicker--gold">TESTER TOOLS</span><h2>Test account</h2><p class="muted">${JUDGE ? "Judge mode: progress here is separate from players’ and stays on this device." : `Only visible to ${esc(USER.email)}. Changes save to Firebase like normal progress.`}</p></div>
          <div class="row">
            <button class="btn btn--gold btn--sm" data-action="t_stardust">${icon("star", 18)} +1000 Stardust</button>
            <button class="btn btn--ghost btn--sm" data-action="t_unlock">Unlock all destinations</button>
            <button class="btn btn--ghost btn--sm" data-action="t_mquiz">Unlock all Grand Quizzes</button>
            <button class="btn btn--ghost btn--sm" data-action="t_wake">Wake all machines</button>
            <button class="btn btn--ghost btn--sm" data-action="t_reset">Reset to ${TESTER_START_STARDUST} Stardust</button>
          </div>
        </div>
      </section>` : ""}

    <section class="section">
      <div class="section__head"><h1>Your badge collection</h1><p class="muted">${owned} of ${BADGES.filter((b) => !b.bonus).length} unlocked${bonusOwned ? ` + ${bonusOwned} bonus` : ""} · each badge gives +${ECONOMY.BADGE} Stardust</p></div>
      <div class="grid grid--badges">
        ${BADGES.map((b) => `
          <div class="card badge ${S.badges[b.id] ? "badge--on" : ""}">
            <span class="badge__ic">${icon(S.badges[b.id] ? b.icon : "lock", 38)}</span>
            <b>${esc(b.name)}</b><span class="muted small">${esc(b.desc)}</span>${b.bonus ? `<span class="tag tag--bonus">${esc(b.bonus)}</span>` : ""}
          </div>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section__head"><h2>Rank ladder</h2><p class="muted">Your rank is based on all the Stardust you have ever earned (${S.lifetime}), so spending never lowers it.</p></div>
      <div class="grid grid--ranks">
        ${RANKS.map((x) => `<div class="card rankcard ${x.name === r.name ? "is-current" : ""} ${S.lifetime >= x.min ? "is-done" : ""}"><b>${esc(x.name)}</b><span class="small">${x.min} Stardust${x.name === r.name ? " · you are here" : ""}</span></div>`).join("")}
      </div>
    </section>

    <section class="section">
      <div class="section__head"><h2>How Stardust works</h2></div>
      <div class="grid grid--2">
        <div class="card econ">
          <h3>${icon("star", 22, "gold")} Earn</h3>
          <ul>
            <li><span>Finish a machine’s story</span><b>+${ECONOMY.WAKE}</b></li>
            <li><span>Machine quiz: each correct answer (first try)</span><b>+${mq.correct}</b></li>
            <li><span>Machine quiz: first 5/5</span><b>+${mq.perfect}</b></li>
            <li><span>Grand Quiz: each correct answer (first try)</span><b>+${wq.correct}</b></li>
            <li><span>Grand Quiz: first 10/10</span><b>+${wq.perfect}</b></li>
            <li><span>Beat your best score (per extra answer)</span><b>+${mq.beatBest} / +${wq.beatBest}</b></li>
            <li><span>Replays (per correct answer)</span><b>+${mq.replay} / +${wq.replay}</b></li>
            <li><span>Unlock a badge</span><b>+${ECONOMY.BADGE}</b></li>
            <li><span>Complete a destination (every story + every quiz). Always enough to unlock the next one!</span><b>+${ECONOMY.COMPLETE}+</b></li>
          </ul>
        </div>
        <div class="card econ">
          <h3>${icon("lock", 22)} Spend</h3>
          <ul>
            ${WORLDS.filter((w) => w.cost > 0).map((w) => `<li><span>Unlock ${esc(w.name)}</span><b>${w.cost}</b></li>`).join("")}
            <li><span>50:50 lifeline in a quiz</span><b>${ECONOMY.FIFTY_FIFTY}</b></li>
          </ul>
        </div>
      </div>
    </section>`;
}

// ===== Sign in / account page =====
let judgeForm = false;
function renderSignIn() {
  if (JUDGE && !USER && !judgeForm) {
    app().innerHTML = `
      <section class="card auth">
        <span class="kicker kicker--gold">JUDGE MODE</span>
        <h1>No sign-in needed</h1>
        <p class="lead">You have ${TESTER_START_STARDUST} Stardust and every tester tool on the <a href="#/badges">Badges &amp; Stardust</a> page. Progress in judge mode stays on this device and is separate from players’ saves.</p>
        <div class="row row--center">
          <button class="btn btn--gold btn--lg" data-action="judgesignin">${icon("users", 20)} Sign in or create an account</button>
          <button class="btn btn--ghost btn--lg" data-action="judge">${icon("x", 20)} Exit judge mode</button>
        </div>
        <p class="muted small">Signing in keeps judge mode and all its tools, and saves your judge progress to your account. Exit judge mode any time to use the account as a normal player.</p>
      </section>`;
    return;
  }
  if (USER) {
    app().innerHTML = `
      <section class="card auth">
        <span class="kicker">YOUR ACCOUNT</span>
        <h1>Signed in</h1>
        <p class="lead">${esc(USER.email)}${JUDGE ? ' <span class="chip chip--gold">JUDGE</span>' : isTester() ? ' <span class="chip chip--gold">TESTER</span>' : ""}</p>
        ${JUDGE ? `<p class="muted">Judge mode is on: you have every tester tool, and judge progress is saved separately from this account’s normal progress. <button class="linkbtn" data-action="judge">Exit judge mode</button></p>` : ""}
        ${cloudOK
          ? `<p class="muted">Your Stardust (${S.stardust}), badges and progress save to the cloud automatically.</p>`
          : `<p class="auth__warn">${icon("cloud", 18)} ${isTester() ? "Tester: cloud saving isn’t working. Check the Realtime Database rules (see the README), then sign out and back in." : "Cloud saving isn’t working right now, so your progress is saved on this device. Try again later."}</p>`}
        <div class="row row--center">
          <a class="btn btn--primary" href="#/">Keep playing</a>
          <button class="btn btn--ghost" data-action="signout">Sign out</button>
        </div>
      </section>`;
    return;
  }
  const cloudReady = !!window.GR_CLOUD;
  app().innerHTML = `
    <section class="card auth">
      <span class="kicker">SAVE YOUR PROGRESS</span>
      <h1>Sign in to Ghost Rovers</h1>
      <p class="muted">Your Stardust, badges and progress are saved to your account so you can continue on any device.</p>
      ${cloudReady ? "" : `<p class="auth__warn">${icon("cloud", 18)} Sign-in is still loading. If it doesn’t appear, check your internet connection and refresh the page.</p>`}
      <form id="authForm" class="auth__form" novalidate>
        <label for="authEmail">Email</label>
        <input id="authEmail" name="email" type="email" autocomplete="email" required placeholder="you@example.com">
        <label for="authPass">Password</label>
        <input id="authPass" name="password" type="password" autocomplete="current-password" required minlength="6" placeholder="At least 6 characters">
        <p class="auth__err" id="authErr" role="alert"></p>
        <div class="row">
          <button class="btn btn--primary" type="submit" data-mode="signin">Sign in</button>
          <button class="btn btn--ghost" type="submit" data-mode="signup">Create account</button>
        </div>
      </form>
      <a href="#/" class="small">Play as a guest (progress saves on this device only)</a>
    </section>`;
  const form = $("#authForm");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mode = (e.submitter && e.submitter.dataset.mode) || "signin";
    const email = form.email.value.trim();
    const password = form.password.value;
    const err = $("#authErr");
    err.textContent = "";
    if (!window.GR_CLOUD) { err.textContent = "Cloud sign-in isn’t available right now."; return; }
    if (password.length < 6) { err.textContent = "Password must be at least 6 characters."; return; }
    $$("button", form).forEach((b) => { b.disabled = true; });
    try {
      if (mode === "signup") await window.GR_CLOUD.signUp(email, password);
      else await window.GR_CLOUD.signIn(email, password);
    } catch (ex) {
      err.textContent = AUTH_ERRORS[ex.code] || `Something went wrong (${ex.code || ex.message}).`;
      $$("button", form).forEach((b) => { b.disabled = false; });
    }
  });
}

// ===== Quiz (machine quiz = 5 questions, world quiz = 10) =====
const machineBank = (m) => m.quiz.map(([q, opts, why]) => [m.id, q, opts, why]);
const worldBankSize = (wid) => machinesIn(wid).reduce((n, m) => n + m.quiz.length, 0) + (WORLD_EXTRA[wid] || []).length;

// World quiz: mostly questions from the machine quizzes, spread across machines, plus 1–2 world questions
function pickWorldQuestions(wid, total) {
  const extras = shuffle(WORLD_EXTRA[wid] || []).slice(0, Math.min(2, 1 + Math.floor(Math.random() * 2)));
  const pools = shuffle(machinesIn(wid)).map((m) => shuffle(machineBank(m)));
  const picks = [];
  while (picks.length < total - extras.length && pools.some((p) => p.length)) {
    pools.forEach((p) => { if (p.length && picks.length < total - extras.length) picks.push(p.pop()); });
  }
  return shuffle(picks.concat(extras));
}
function worldQuizOpen(wid) {
  return machinesIn(wid).every((m) => S.mquizBest[m.id] !== undefined);
}

// A quiz left part-way (or the page closed) still counts as an attempt, so restarting can't re-earn first-try rewards
function settleQuiz() {
  if (quiz && !quiz.done && (quiz.i > 0 || quiz.picked !== null)) S.quizLive = { pk: `${quiz.kind}_${quiz.key}`, score: quiz.score };
  if (S.quizLive) {
    const { pk, score } = S.quizLive;
    S.quizAttempt[pk] = Math.max(S.quizAttempt[pk] || 0, score);
    S.quizLive = null;
    save();
  }
}

function startQuiz(kind, key) {
  settleQuiz();
  const m = kind === "machine" ? machineById(key) : null;
  const wid = kind === "machine" ? (m && m.world) : key;
  const w = worldById(wid);
  if (!w) return renderHome();
  if (!S.unlocked[wid]) return renderLocked(w);
  if (kind === "world" && !worldQuizOpen(wid)) return renderQuizLocked(w);
  const cfg = ECONOMY.QUIZ[kind];
  const picks = kind === "machine" ? shuffle(machineBank(m)).slice(0, cfg.length) : pickWorldQuestions(wid, cfg.length);
  quiz = {
    kind, key, world: wid, i: 0, picked: null, removed: [], score: 0, streak: 0, done: false, result: null,
    items: picks.map(([mid, q, opts, why]) => ({
      mid, q, why, options: shuffle(opts.map((text, k) => ({ text, correct: k === 0 }))), answeredRight: null
    }))
  };
  renderQuiz();
}

function renderQuizLocked(w) {
  const list = machinesIn(w.id);
  app().innerHTML = `
    <div class="crumbs"><a href="#/world/${w.id}">${icon("back", 18)} Back to ${esc(w.name)}</a></div>
    <section class="card locked">
      ${orb(w.id, 120)}
      <h1>The ${esc(w.name)} Grand Quiz is locked</h1>
      <p class="lead">Finish the 5-question quiz for every machine here first.</p>
      <div class="checklist">
        ${list.map((m) => `<a class="checklist__row ${S.mquizBest[m.id] !== undefined ? "is-done" : ""}" href="#/mquiz/${m.id}">
          <span class="list__n">${S.mquizBest[m.id] !== undefined ? icon("check", 16) : icon("lock", 14)}</span>
          <span class="list__name">${esc(m.name)}</span>
          <span class="qbadge ${S.mquizBest[m.id] !== undefined ? "qbadge--done" : ""}">${S.mquizBest[m.id] !== undefined ? `${S.mquizBest[m.id]}/5` : "Take quiz"}</span></a>`).join("")}
      </div>
    </section>`;
}

function quizTitle() {
  if (quiz.kind === "machine") return `${machineById(quiz.key).short} quiz`;
  return `${worldById(quiz.world).name} Grand Quiz`;
}
const quizBackHref = () => (quiz.kind === "machine" ? `#/machine/${quiz.key}` : `#/world/${quiz.world}`);

function renderQuiz() {
  if (!quiz) return renderHome();
  if (quiz.done) return renderResults();
  const it = quiz.items[quiz.i];
  const m = machineById(it.mid);
  const picked = quiz.picked !== null;
  const total = quiz.items.length;
  const pct = ((quiz.i + (picked ? 1 : 0)) / total) * 100;
  const wasRight = picked && it.options[quiz.picked].correct;
  const canFifty = !picked && quiz.removed.length === 0 && S.stardust >= ECONOMY.FIFTY_FIFTY;

  app().innerHTML = `
    <div class="crumbs"><a href="${quizBackHref()}">${icon("back", 18)} Leave quiz</a></div>
    <section class="quiz">
      <div class="quiz__top">
        <span class="strong">${esc(quizTitle().toUpperCase())} · QUESTION ${quiz.i + 1} OF ${total}</span>
        <span class="quiz__meta"><span>${icon("bolt", 18)} Streak ${quiz.streak}</span><span>${icon("check", 18)} ${quiz.score} right</span></span>
      </div>
      <div class="bar bar--lg"><span style="width:${pct}%"></span></div>

      <div class="card qcard ${quiz.kind === "world" ? "qcard--world" : ""}">
        <div class="qcard__about">${m ? `${photoSlot(m, "thumb", 0, "photo--mini")}<span class="muted small strong">About: ${esc(m.name)}</span>` : `${orb(quiz.world, 44)}<span class="muted small strong">About: ${esc(worldById(quiz.world).name)}</span>`}</div>
        <h1>${esc(it.q)}</h1>
        <div class="options">
          ${it.options.map((o, k) => {
            let state = "";
            if (picked && o.correct) state = "is-right is-fresh";
            else if (picked && k === quiz.picked) state = "is-wrong is-fresh";
            else if (picked || quiz.removed.includes(k)) state = "is-dim";
            return `<button class="option ${state}" data-action="answer" data-k="${k}" ${picked || quiz.removed.includes(k) ? "disabled" : ""}>
              <span class="option__l">${"ABCD"[k]}</span><span class="option__t">${esc(o.text)}</span>
              ${state.startsWith("is-right") ? icon("check", 22) : state.startsWith("is-wrong") ? icon("x", 22) : ""}
            </button>`;
          }).join("")}
        </div>
        <div class="qcard__tools">
          <button class="btn btn--ghost btn--sm" data-action="fifty" ${canFifty ? "" : "disabled"}>${icon("half", 18)} 50:50 · ${ECONOMY.FIFTY_FIFTY} Stardust</button>
          <span class="muted small">You have ${S.stardust} Stardust</span>
        </div>
      </div>

      ${picked ? `
        <div class="feedback ${wasRight ? "feedback--right" : "feedback--wrong"}" role="status">
          <div><strong>${wasRight ? (quiz.streak >= 3 ? `On fire! ${quiz.streak} in a row!` : "Nailed it!") : "Not quite!"}</strong><p>${esc(it.why)}</p></div>
          <button class="btn btn--dark" data-action="nextq">${quiz.i === total - 1 ? "See my rewards" : "Next question"} ${icon("arrow", 18)}</button>
        </div>` : ""}
    </section>`;
  hydratePhotos(app());
  const fb = $(".feedback");
  if (fb) fb.querySelector("button").focus();
}

function answer(k) {
  if (!quiz || quiz.picked !== null || quiz.removed.includes(k)) return;
  const it = quiz.items[quiz.i];
  quiz.picked = k;
  it.answeredRight = it.options[k].correct;
  buzz(it.answeredRight ? 25 : [40, 50, 40]);
  if (it.answeredRight) {
    quiz.score++;
    quiz.streak++;
    if (quiz.streak > S.bestStreak) { S.bestStreak = quiz.streak; save(); }
    if (quiz.streak === 5) checkBadges();
  } else {
    quiz.streak = 0;
  }
  S.quizLive = { pk: `${quiz.kind}_${quiz.key}`, score: quiz.score };
  save();
  renderQuiz();
}

function fiftyFifty() {
  if (!quiz || quiz.picked !== null || quiz.removed.length) return;
  if (!spend(ECONOMY.FIFTY_FIFTY)) return;
  const it = quiz.items[quiz.i];
  const wrong = it.options.map((o, k) => (o.correct ? -1 : k)).filter((k) => k >= 0);
  quiz.removed = shuffle(wrong).slice(0, 2);
  if (!S.usedLifeline) { S.usedLifeline = true; save(); checkBadges(); }
  renderQuiz();
}

function nextQuestion() {
  if (!quiz) return;
  if (quiz.i < quiz.items.length - 1) {
    quiz.i++;
    quiz.picked = null;
    quiz.removed = [];
    renderQuiz();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  const cfg = ECONOMY.QUIZ[quiz.kind];
  const best = quiz.kind === "machine" ? S.mquizBest : S.quizBest;
  const score = quiz.score;
  const total = quiz.items.length;
  const prev = best[quiz.key];
  const perfectKey = `${quiz.kind}_${quiz.key}`;
  S.quizLive = null;
  const before = prev !== undefined ? prev : S.quizAttempt[perfectKey];
  const wasOpen = worldQuizOpen(quiz.world);
  const lines = [];
  if (before === undefined) {
    lines.push([`${score} correct × ${cfg.correct}`, score * cfg.correct]);
  } else {
    const extra = Math.max(0, score - before);
    if (extra) lines.push([`Beat your best by ${extra} × ${cfg.beatBest}`, extra * cfg.beatBest]);
    const n = S.replays[perfectKey] || 0;
    if (n < ECONOMY.QUIZ.replayLimit) {
      S.replays[perfectKey] = n + 1;
      lines.push([`Replay ${n + 1} of ${ECONOMY.QUIZ.replayLimit}: ${score} correct × ${cfg.replay}`, score * cfg.replay]);
    } else if (!extra) lines.push(["Practice round (replay Stardust used up)", 0]);
  }
  if (score === total && !S.perfectPaid[perfectKey]) {
    lines.push(["Perfect score bonus!", cfg.perfect]);
    S.perfectPaid[perfectKey] = true;
  }
  best[quiz.key] = Math.max(prev || 0, score);
  save();
  const earned = lines.reduce((a, l) => a + l[1], 0);
  quiz.done = true;
  quiz.result = { lines, earned, prev: before, opened: quiz.kind === "machine" && !wasOpen && worldQuizOpen(quiz.world) };
  earn(earned, quizTitle());
  quiz.result.badges = checkBadges();
  if (quiz.result.opened) toast("Grand Quiz unlocked!", `The ${worldById(quiz.world).name} Grand Quiz is ready`, "trophy");
  if (score / total >= 0.8) confetti();
  renderResults();
  window.scrollTo(0, 0);
}

function renderResults() {
  const w = worldById(quiz.world);
  const { lines, earned, prev, badges, opened } = quiz.result;
  const score = quiz.score;
  const total = quiz.items.length;
  const ratio = score / total;
  const stars = score === total ? 3 : ratio >= 0.7 ? 2 : ratio >= 0.4 ? 1 : 0;
  const title = score === total ? "Perfect! Mission legend!" : ratio >= 0.8 ? "Brilliant work!" : ratio >= 0.5 ? "Nice job, explorer!" : "Keep exploring!";
  const r = rankFor(S.lifetime);
  const nx = nextRankFor(S.lifetime);
  const pct = nx ? Math.round(((S.lifetime - r.min) / (nx.min - r.min)) * 100) : 100;
  const m = quiz.kind === "machine" ? machineById(quiz.key) : null;
  let nextMachine = null;
  if (m) {
    const list = machinesIn(quiz.world), at = list.findIndex((x) => x.id === m.id);
    const order = list.slice(at + 1).concat(list.slice(0, at));
    nextMachine = order.find((x) => S.mquizBest[x.id] === undefined) || null;
  }
  const nextWorld = WORLDS[WORLDS.findIndex((x) => x.id === quiz.world) + 1];
  app().innerHTML = `
    <section class="card results ${quiz.kind === "world" ? "results--world" : ""}">
      <span class="kicker kicker--gold">${esc(quizTitle().toUpperCase())} COMPLETE</span>
      <h1>${title}</h1>
      ${starLine(stars)}
      <div class="results__score">${score} / ${total}</div>
      ${prev !== undefined ? `<p class="muted">Previous best: ${prev}/${total}</p>` : ""}
      ${quiz.kind === "world" && WORLDS.every((x) => S.completed[x.id]) ? `<div class="nudge nudge--gold">${icon("flag", 22)}<span>You explored every destination! Your final mission: the debrief. Decide what should happen to everything we left behind.</span></div>` : ""}
      ${opened ? `<div class="nudge nudge--gold">${icon("trophy", 22)}<span>You finished every machine quiz on ${esc(w.name)}. The Grand Quiz is unlocked!</span></div>` : ""}
      <div class="grid grid--2 results__grid">
        <div class="card card--inner">
          <span class="muted small strong">STARDUST EARNED</span>
          <b class="big gold">+${earned}</b>
          <ul class="breakdown">${lines.map(([t, v]) => `<li><span>${esc(t)}</span><b>+${v}</b></li>`).join("")}</ul>
        </div>
        <div class="card card--inner">
          <span class="muted small strong">YOUR RANK</span>
          <b class="big">${esc(r.name)}</b>
          <span class="bar"><span style="width:${pct}%"></span></span>
          <span class="muted small">${nx ? `${nx.min - S.lifetime} Stardust to ${esc(nx.name)}` : "Top rank reached!"}</span>
        </div>
      </div>
      ${badges && badges.length ? `
        <div class="newbadges">
          <span class="kicker kicker--gold">NEW BADGE${badges.length > 1 ? "S" : ""} UNLOCKED</span>
          <div class="row row--center">${badges.map((b) => `<div class="badge badge--on badge--big"><span class="badge__ic">${icon(b.icon, 44)}</span><b>${esc(b.name)}</b></div>`).join("")}</div>
        </div>` : ""}
      <div class="row row--center">
        <button class="btn btn--ghost btn--lg" data-action="retry">Play again (new questions)</button>
        ${quiz.kind === "machine"
          ? nextMachine ? `<a class="btn btn--primary btn--lg" href="#/machine/${nextMachine.id}">Next machine: ${esc(nextMachine.short)} ${icon("arrow", 20)}</a>`
            : worldQuizOpen(quiz.world) ? `<a class="btn btn--gold btn--lg" href="#/quiz/${quiz.world}">${icon("trophy", 20)} Grand Quiz: ${esc(w.name)}</a>`
            : `<a class="btn btn--primary btn--lg" href="#/world/${quiz.world}">Back to ${esc(w.name)}</a>`
          : nextWorld ? `<a class="btn btn--gold btn--lg" href="#/destinations">${icon("rocket", 20)} ${S.unlocked[nextWorld.id] ? "Back to destinations" : `Unlock ${esc(nextWorld.name)}`}</a>`
          : `<a class="btn btn--gold btn--lg" href="#/debrief">${icon("flag", 20)} Final mission: debrief</a>`}
      </div>
      <details class="review">
        <summary>Review the answers</summary>
        <ol>${quiz.items.map((it) => `<li class="${it.answeredRight ? "ok" : "bad"}"><b>${esc(it.q)}</b><span>${icon(it.answeredRight ? "check" : "x", 16)} ${esc(it.options.find((o) => o.correct).text)}</span></li>`).join("")}</ol>
      </details>
    </section>`;
}

// ===== Left behind: then vs now card, the Left Behind page and the mission debrief =====
const STATUS_GROUP = { active: "working", silent: "silent", retired: "gone", lost: "gone" };
const STATUS_LABEL = { working: "Still working", silent: "Silent", gone: "Retired or lost" };
let lbFilter = "all";

function thenNowHTML(m) {
  const L = LEGACY[m.id];
  if (!L) return "";
  const g = STATUS_GROUP[m.status];
  return `
    <div class="card thennow">
      <h2>${icon("clock", 24)} Then &amp; now</h2>
      <div class="thennow__row"><span class="thennow__tag">THEN</span><p>${esc(L.then)}</p></div>
      <div class="thennow__row"><span class="thennow__tag thennow__tag--${g}">NOW</span><p>${esc(L.now)}</p></div>
      <div class="thennow__more">
        <p><b>What’s happening to it:</b> ${esc(L.fate)}</p>
        <p><b>Its legacy:</b> ${esc(L.legacy)}</p>
      </div>
    </div>`;
}

function renderLeftBehind() {
  const counts = { working: 0, silent: 0, gone: 0 };
  MACHINES.forEach((m) => counts[STATUS_GROUP[m.status]]++);
  const v1 = commsInfo(machineById("voyager1"));
  const shown = MACHINES.filter((m) => lbFilter === "all" || STATUS_GROUP[m.status] === lbFilter);
  const allDone = WORLDS.every((w) => S.completed[w.id]);
  const chip = (id, label, n) => `<button class="qchip ${lbFilter === id ? "is-on" : ""}" data-action="lbfilter" data-f="${id}">${esc(label)} · ${n}</button>`;
  app().innerHTML = `
    <section class="section">
      <div class="section__head">
        <span class="kicker">THE HARDWARE GRAVEYARD</span>
        <h1>What did we leave behind?</h1>
        <p class="muted">Every machine in Ghost Rovers is still out there: working, silent or gone. Here is what each one is doing today.</p>
      </div>
      <div class="quickfacts lb__facts">
        <div class="card fact"><b>${counts.working}</b><span>of the machines in Ghost Rovers are still working today</span></div>
        ${LEFT_BEHIND_FACTS.map(([b, t]) => `<div class="card fact"><b>${esc(b)}</b><span>${esc(t)}</span></div>`).join("")}
        <div class="card fact"><b>${(v1.km / 1e9).toFixed(1)} billion km</b><span>Voyager 1’s distance from Earth right now, the farthest of them all</span></div>
      </div>
      <a class="card debriefcta ${allDone ? "debriefcta--gold" : ""}" href="#/debrief">
        ${icon("flag", 30)}<span><b>Mission debrief${S.debriefVote ? ": you voted" : ""}</b><span class="muted small">${allDone ? "You’ve explored everything! " : ""}Why does NASA leave machines behind, and what should we do with them? Have your say.</span></span>${icon("arrow", 22)}
      </a>
      <div class="lb__chips">${chip("all", "All", MACHINES.length)}${chip("working", STATUS_LABEL.working, counts.working)}${chip("silent", STATUS_LABEL.silent, counts.silent)}${chip("gone", STATUS_LABEL.gone, counts.gone)}</div>
      ${WORLDS.map((w) => {
        const list = shown.filter((m) => m.world === w.id);
        if (!list.length) return "";
        return `<h2 class="lb__world">${orb(w.id, 34)} ${esc(w.name)}</h2>
          <div class="lb__list">${list.map((m) => {
            const g = STATUS_GROUP[m.status];
            return `<a class="card lbrow" href="#/machine/${m.id}">
              ${photoSlot(m, "thumb", 0, "photo--mini")}
              <span class="lbrow__text"><b>${esc(m.name)}</b><span class="small muted">${esc(LEGACY[m.id].now)}</span></span>
              <span class="lbrow__status lbrow__status--${g}">${esc(m.statusText)}</span>
            </a>`;
          }).join("")}</div>`;
      }).join("")}
    </section>`;
  hydratePhotos(app());
}

function renderDebrief() {
  const voted = S.debriefVote;
  app().innerHTML = `
    <div class="crumbs"><a href="#/left-behind">${icon("back", 18)} What we left behind</a></div>
    <section class="card debrief">
      <span class="kicker kicker--gold">MISSION DEBRIEF</span>
      <h1>Why does NASA leave machines behind?</h1>
      <div class="debrief__why">${DEBRIEF.why.map(([t, d], i) => `<div class="card card--inner"><span class="debrief__n">${i + 1}</span><b>${esc(t)}</b><span class="small">${esc(d)}</span></div>`).join("")}</div>
      <h2>${esc(DEBRIEF.question)}</h2>
      <p class="muted">There’s no single right answer. Think about the good side and the downside of each, then vote.</p>
      <div class="debrief__opts">${DEBRIEF.options.map((o) => `
        <button class="card debrief__opt ${voted === o.id ? "is-on" : ""}" data-action="vote" data-v="${o.id}">
          <b>${esc(o.title)}</b>
          <span class="small"><span class="debrief__plus">+</span> ${esc(o.plus)}</span>
          <span class="small"><span class="debrief__minus">−</span> ${esc(o.minus)}</span>
          <span class="debrief__bar" data-bar="${o.id}" hidden><i></i><em></em></span>
        </button>`).join("")}</div>
      <p class="debrief__status" id="voteStatus">${voted ? "Thanks for voting! You can change your vote any time." : ""}</p>
      <div class="note"><b>In the real world</b><span>${esc(DEBRIEF.realWorld)}</span></div>
    </section>`;
  if (voted) showTally();
}

async function showTally() {
  const status = $("#voteStatus");
  if (!USER || !window.GR_CLOUD || !window.GR_CLOUD.tally) {
    if (status && S.debriefVote) status.textContent = "Thanks for voting! Sign in to see how other explorers voted.";
    return;
  }
  try {
    const counts = await window.GR_CLOUD.tally();
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    if (!total || location.hash !== "#/debrief") return;
    DEBRIEF.options.forEach((o) => {
      const bar = document.querySelector(`[data-bar="${o.id}"]`);
      if (!bar) return;
      const pct = Math.round(((counts[o.id] || 0) / total) * 100);
      bar.hidden = false;
      bar.querySelector("i").style.width = `${pct}%`;
      bar.querySelector("em").textContent = `${pct}%`;
    });
    if (status) status.textContent = `${total} explorer${total === 1 ? " has" : "s have"} voted so far. You can change your vote any time.`;
  } catch (e) {
    console.warn("Ghost Rovers votes:", e);
    if (status) status.textContent = "Thanks for voting! Other explorers’ votes can’t be loaded right now.";
  }
}

// ===== Listen: read stories aloud with the browser's built-in voice =====
const CAN_SPEAK = "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";
let speakingBtn = null;

function listenBtn(what, id) {
  return CAN_SPEAK ? `<button type="button" class="btn btn--ghost btn--sm listen" data-action="listen" data-what="${what}" data-id="${id}" aria-pressed="false">${icon("sound", 18)} <span>Listen</span></button>` : "";
}
function stopSpeaking() {
  if (!CAN_SPEAK) return;
  window.speechSynthesis.cancel();
  if (speakingBtn) { speakingBtn.setAttribute("aria-pressed", "false"); speakingBtn.querySelector("span").textContent = "Listen"; }
  speakingBtn = null;
}
function listenText(what, id) {
  if (what === "machine") {
    const m = machineById(id);
    return [`${m.name}.`, ...m.logs.map((l) => `${l.when}. ${l.title}. ${l.text}`)].join(" ");
  }
  const x = msgList().find((y) => y.id === id);
  if (!x) return "";
  const r = buildReply(x);
  return [r.greeting, r.timing, r.answer, r.signoff.replace("—", ""), "This is a simulated reply, written from real mission facts."].join(" ");
}
function speak(btn) {
  if (!CAN_SPEAK) return;
  if (speakingBtn === btn) { stopSpeaking(); return; }
  stopSpeaking();
  // Listening to a machine reads its whole story, so all its logs open at once
  if (btn.dataset.what === "machine") {
    const m = machineById(btn.dataset.id);
    if ((logProgress[m.id] || 1) < m.logs.length && !S.woken[m.id]) {
      logProgress[m.id] = m.logs.length;
      const y = scrollY;
      if (window.GRMODEL) window.GRMODEL.unmount();
      renderMachine(m.id);
      window.scrollTo(0, y);
      btn = $('.listen[data-what="machine"]') || btn;
    }
  }
  const u = new SpeechSynthesisUtterance(listenText(btn.dataset.what, btn.dataset.id));
  const voices = window.speechSynthesis.getVoices();
  u.voice = voices.find((v) => v.lang === "en-IN") || voices.find((v) => /^en[-_]GB/.test(v.lang)) || voices.find((v) => /^en/.test(v.lang)) || null;
  u.rate = 0.95;
  u.onend = u.onerror = () => { if (speakingBtn === btn) stopSpeaking(); };
  speakingBtn = btn;
  btn.setAttribute("aria-pressed", "true");
  btn.querySelector("span").textContent = "Stop";
  window.speechSynthesis.speak(u);
}

// ===== Judge tour: six stops through the best parts of Ghost Rovers (judge mode only) =====
const TOUR = [
  { hash: "#/", target: ".hmap", title: "Live solar system", text: "Real positions of Venus, Earth and Mars today, with real signal times from Earth." },
  { hash: "#/left-behind", target: ".lb__facts", title: "What we left behind", text: "Every machine NASA left behind, sorted by whether it’s still working, silent or gone." },
  { hash: "#/destinations", target: '[data-world-card="mars"]', title: "Pick a destination", text: "Kids choose where to explore: the Moon, Mars, Venus, space telescopes or deep space. Each one opens after the one before it is complete. Let’s go to Mars!", prep: () => { S.unlocked.mars = true; save(); } },
  { hash: "#/world/mars", target: ".world-layout", title: "Explore a destination", text: "Each destination is a 3D low-poly world. Drag to turn it, hover or tap a glowing pin to peek at a machine, then pick one to hear its story.", prep: () => { S.unlocked.mars = true; save(); } },
  { hash: "#/machine/opportunity", target: ".nowstrip", title: "Then and now", text: "Each machine shows what’s left of it today. Press Listen to hear its story read aloud.", prep: () => { S.unlocked.mars = true; save(); } },
  { hash: "#/machine/opportunity", target: '[data-action="mission"], .comms', title: "Wake-up mission", text: "Kids wake machines up by making real Mission Control decisions. Rovers add a driving test with real signal delay.", prep: () => { S.unlocked.mars = true; logProgress.opportunity = machineById("opportunity").logs.length; save(); } },
  { hash: "#/machine/voyager1", target: ".comms", title: "Messages at light speed", text: "Send a message: replies are simulated from real facts, but the wait uses Voyager 1’s real distance today.", prep: () => { S.unlocked.deep = true; S.woken.voyager1 = true; save(); } },
  { hash: "#/badges", target: "#app .section", title: "Stardust, ranks and badges", text: "Kids earn Stardust for missions and quizzes, climb five ranks from Space Cadet to Space Legend, and collect badges. Stardust unlocks the next destination. Judges: the tester tools at the top unlock everything instantly." },
  { hash: "#/debrief", target: ".debrief__opts", title: "Mission debrief", text: "The game ends on the big question: what should happen to everything we left behind?" }
];
const tourStep = () => { try { const v = sessionStorage.getItem("ghostRovers.tour"); return v === null ? -1 : v === "done" ? TOUR.length : Number(v); } catch (e) { return -1; } };
function setTour(i) {
  try { if (i < 0) sessionStorage.removeItem("ghostRovers.tour"); else sessionStorage.setItem("ghostRovers.tour", i >= TOUR.length ? "done" : String(i)); } catch (e) { /* storage blocked: tour still works this page */ }
  if (i < 0 || i >= TOUR.length) { renderTour(); return; }
  const st = TOUR[i];
  if (st.prep) st.prep();
  if (location.hash === st.hash) route(); else location.hash = st.hash;
}
function renderTour() {
  let bar = $("#tourbar");
  const i = JUDGE ? tourStep() : -1;
  $$(".tour-hl").forEach((el) => el.classList.remove("tour-hl"));
  // after the last stop: a goodbye card under the logo, pointing the way back home
  if (i === TOUR.length && !/^#?\/?$/.test(location.hash)) {
    if (!bar) { bar = document.createElement("div"); bar.id = "tourbar"; document.body.appendChild(bar); }
    bar.className = "tourbar tourbar--done";
    bar.innerHTML = `
      <div class="tourbar__top"><span class="kicker kicker--gold">TOUR COMPLETE</span><button class="tourbar__x" data-action="tourend" aria-label="Close">${icon("x", 18)}</button></div>
      <b>Thanks for visiting Ghost Rovers!</b>
      <p>That’s the whole tour. Click the <strong>Ghost Rovers</strong> logo above any time to go back home, then explore however you like. Have fun, and see you among the stars!</p>
      <div class="tourbar__btns"><a class="btn btn--gold btn--sm" href="#/" data-action="tourend">${icon("rocket", 16)} Back to home</a></div>`;
    $(".logo").classList.add("tour-hl");
    return;
  }
  if (i === TOUR.length) setTour(-1);
  if (i < 0 || i >= TOUR.length) { if (bar) bar.remove(); return; }
  if (!bar) { bar = document.createElement("div"); bar.id = "tourbar"; bar.className = "tourbar"; bar.setAttribute("role", "region"); bar.setAttribute("aria-label", "Judge tour"); document.body.appendChild(bar); }
  bar.className = "tourbar";
  const st = TOUR[i], last = i === TOUR.length - 1;
  bar.innerHTML = `
    <div class="tourbar__top"><span class="kicker kicker--gold">JUDGE TOUR · ${i + 1} OF ${TOUR.length}</span><button class="tourbar__x" data-action="tourend" aria-label="End tour">${icon("x", 18)}</button></div>
    <b>${esc(st.title)}</b><p>${esc(st.text)}</p>
    <div class="tourbar__btns">
      ${i > 0 ? `<button class="btn btn--ghost btn--sm" data-action="tourgo" data-i="${i - 1}">Back</button>` : ""}
      ${last ? `<a class="btn btn--gold btn--sm" href="#/challenge" data-action="tourfinish">See how it answers the challenge</a>` : `<button class="btn btn--gold btn--sm" data-action="tourgo" data-i="${i + 1}">Next ${icon("arrow", 16)}</button>`}
    </div>`;
  if (location.hash === st.hash || (st.hash === "#/" && location.hash === "")) {
    setTimeout(() => {
      const el = document.querySelector(st.target);
      if (!el) return;
      el.classList.add("tour-hl");
      // tall areas scroll to their top (below the header); small ones to the middle of the screen
      const r = el.getBoundingClientRect(), head = window.innerWidth <= 720 ? 0 : ($(".topbar") || { offsetHeight: 0 }).offsetHeight;
      const top = r.height > window.innerHeight * 0.55 || window.innerWidth <= 720 ? r.top + scrollY - head - 16 : r.top + scrollY - (window.innerHeight - r.height) / 2;
      window.scrollTo({ top: Math.max(0, top), behavior: reducedMotion ? "auto" : "smooth" });
    }, 500);
  }
}

// ===== Pop-up window (missions, messages, sky finder) =====
function openModal(html, cls = "") {
  closeModal();
  const wrap = document.createElement("div");
  wrap.className = "modal";
  wrap.innerHTML = `<div class="modal__box ${cls}" role="dialog" aria-modal="true"><button class="modal__x" data-action="closemodal" aria-label="Close">${icon("x", 22)}</button><div class="modal__body"></div></div>`;
  document.body.appendChild(wrap);
  document.body.classList.add("modal-open");
  wrap.addEventListener("click", (e) => { if (e.target === wrap) closeModal(); });
  setModal(html);
}
function setModal(html, focus = true) {
  const body = $(".modal__body");
  if (!body) return;
  body.innerHTML = html;
  if (focus) { const f = body.querySelector("button:not([disabled]), input, a"); if (f) f.focus({ preventScroll: true }); }
}
function closeModal() {
  stopSpeaking();
  stopDrive();
  stopSky();
  openMsgId = null;
  const m = $(".modal");
  if (m) m.remove();
  document.body.classList.remove("modal-open");
}
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && $(".modal")) closeModal(); });

// ===== Wake-up missions =====
// mission: the steps the player is working through for one machine (kept if the pop-up is closed, so they can resume)
let mission = null;

function wakeMachine(m, bonus = 0) {
  if (S.woken[m.id]) return;
  S.woken[m.id] = true;
  save();
  confetti();
  earn(ECONOMY.WAKE, `You woke up ${m.short}!`);
  buzz([60, 40, 120]);
  justWoke = m.id;
  if (bonus) earn(bonus, "Mission bonus");
  checkBadges();
  if (location.hash === `#/machine/${m.id}`) renderMachine(m.id);
}

const missionSteps = (id) => MISSIONS[id] || [];
// Each step's bonus is paid at most once, however many times it's replayed
function payStep(amount, earned) {
  mission.paidNow = earned && !mission.paid[mission.step];
  if (mission.paidNow) { mission.bonus += amount; mission.paid[mission.step] = true; }
}
const curStep = () => mission.steps[mission.step];
const isLastStep = () => mission.step === mission.steps.length - 1;

function openMission(m) {
  const steps = missionSteps(m.id);
  if (!steps.length) { wakeMachine(m); return; }
  if (!mission || mission.mid !== m.id) mission = { mid: m.id, steps, step: 0, bonus: 0, missed: [], paid: {} };
  openModal("", "modal--mission");
  showStep();
}

function showStep() {
  const st = curStep();
  Object.assign(mission, { paidNow: false, firstTry: !mission.missed.includes(mission.step), tried: [], solved: false, order: st.choices ? shuffle(st.choices.map((_, i) => i)) : [] });
  if (st.drive) startDrive(machineById(mission.mid), st);
  else setModal(crisisHTML());
}

function stepHead(label) {
  const dots = mission.steps.map((_, i) => `<i class="${i < mission.step ? "is-done" : i === mission.step ? "is-now" : ""}"></i>`).join("");
  return `<div class="mission__head"><span class="kicker">${label}</span>
    <span class="mission__steps" aria-label="Step ${mission.step + 1} of ${mission.steps.length}">${dots}<b>Step ${mission.step + 1} of ${mission.steps.length}</b></span></div>`;
}

function stepNextBtn() {
  const m = machineById(mission.mid);
  return isLastStep()
    ? `<button class="btn btn--gold btn--lg btn--block" data-action="missionwake">${icon("sparkle", 20)} Wake up ${esc(m.short)}! +${ECONOMY.WAKE + mission.bonus} Stardust</button>`
    : `<button class="btn btn--primary btn--lg btn--block" data-action="missionnext">Next step ${icon("arrow", 20)}</button>`;
}

function crisisHTML(lastWrong) {
  const st = curStep();
  const right = st.choices.findIndex((c) => c[1]);
  const opts = mission.order.map((i) => {
    const wrong = mission.tried.includes(i);
    const state = mission.solved ? (i === right ? "is-right is-fresh" : "is-dim") : wrong ? `is-wrong${i === lastWrong ? " is-fresh" : ""}` : "";
    return `<button class="option ${state}" data-action="crisispick" data-i="${i}" ${mission.solved || wrong ? "disabled" : ""}>
      <span class="option__t">${esc(st.choices[i][0])}</span>${state.startsWith("is-right") ? icon("check", 22) : state.startsWith("is-wrong") ? icon("x", 22) : ""}</button>`;
  }).join("");
  let fb = "";
  if (mission.solved) {
    fb = `<div class="feedback feedback--right"><div><strong>${mission.firstTry ? `Right first time!${mission.paidNow ? ` +${ECONOMY.STEP_BONUS} bonus` : ""}` : "Good call!"}</strong><p>${esc(st.choices[right][2])}</p>
      <p><b>${st.real ? "What really happened:" : "In real life:"}</b> ${esc(st.outcome)}</p></div></div>
      ${stepNextBtn()}`;
  } else if (lastWrong !== undefined) {
    fb = `<div class="feedback feedback--wrong"><div><strong>Not quite!</strong><p>${esc(st.choices[lastWrong][2])} Try another option.</p></div></div>`;
  }
  return `
    ${stepHead(st.real ? "REAL EVENT" : "TRAINING SIMULATION")}
    <h2>${esc(st.title)}</h2>
    <p class="modal__lead">${esc(st.setup)}</p>
    <div class="options options--stack">${opts}</div>
    ${fb}`;
}

function wokeHTML(m, bonus) {
  return `
    <div class="woke">
      <span class="woke__ic">${icon("trophy", 40)}</span>
      <span class="kicker kicker--gold">MISSION COMPLETE</span>
      <h2>${esc(m.short)} is awake!</h2>
      <p>You made ${missionSteps(m.id).length} Mission Control calls. <b>+${ECONOMY.WAKE + bonus} Stardust</b></p>
      <div class="row row--center">
        <button class="btn btn--gold" data-action="msgopen" data-id="${m.id}">${icon("mail", 18)} Send ${esc(m.short)} a message</button>
        <a class="btn btn--ghost" href="#/mquiz/${m.id}">${icon("bulb", 18)} Take my quiz</a>
      </div>
    </div>`;
}

// ----- Rover driving (training simulation) -----
let drive = null;
let driveTimer = null;
const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]];

function startDrive(m, st) {
  const grid = st.map.map((r) => [...r]);
  let start = { x: 0, y: 0, dir: 0 };
  grid.forEach((r, y) => r.forEach((c, x) => { if (c === "S") start = { x, y, dir: 0 }; }));
  drive = { mid: m.id, grid, start, pos: { ...start }, queue: [], sol: 1, busy: false, done: false, msg: st.intro };
  setModal(driveHTML());
}
function stopDrive() { clearTimeout(driveTimer); driveTimer = null; drive = null; }

function driveHTML() {
  const m = machineById(drive.mid);
  if (drive.done) {
    const good = drive.sol <= 2;
    return `
      ${stepHead("TRAINING SIMULATION · ROVER DRIVING")}
      <h2>Target reached in ${drive.sol} sol${drive.sol > 1 ? "s" : ""}!</h2>
      <div class="feedback feedback--right"><div><strong>${good ? `Great driving!${mission.paidNow ? ` +${ECONOMY.DRIVE_BONUS} bonus` : ""}` : "You made it!"}</strong>
        <p>Real rover drivers plan every sol like this, because signals take minutes to reach Mars.${good ? "" : " Reach the rock in 2 sols or fewer for bonus Stardust."}</p></div></div>
      ${stepNextBtn()}`;
  }
  const cells = drive.grid.map((row, y) => row.map((c, x) => {
    const here = drive.pos.x === x && drive.pos.y === y;
    const cls = c === "R" ? "rock" : c === "s" ? "sand" : c === "F" ? "flag" : "";
    const inner = here ? `<span class="drive__rover" style="transform:rotate(${drive.pos.dir * 90}deg)">${icon("rover", 24)}</span>` : c === "F" ? icon("flag", 22) : "";
    return `<div class="drive__cell ${cls} ${here ? "is-here" : ""}">${inner}</div>`;
  }).join("")).join("");
  const label = { F: "↑ Forward", L: "↺ Left", R: "↻ Right" };
  const queue = drive.queue.map((c) => `<span class="drive__chip">${label[c]}</span>`).join("") || `<span class="muted small">No commands yet. Add some below.</span>`;
  const full = drive.queue.length >= ECONOMY.DRIVE_CMDS;
  const dis = drive.busy ? "disabled" : "";
  return `
    ${stepHead("TRAINING SIMULATION · ROVER DRIVING")}
    <h2>Drive ${esc(m.short)} to the target rock</h2>
    <p class="modal__lead small">Real rover drivers can’t steer live: signals take about ${fmtDur(commsInfo(m).oneWay)} to reach Mars. Plan a sol’s commands, send them, then watch.</p>
    <div class="drive__grid" style="grid-template-columns:repeat(${drive.grid[0].length},minmax(0,1fr))">${cells}</div>
    <div class="drive__legend"><span><i class="dot dot--rock"></i>Boulder</span><span><i class="dot dot--sand"></i>Soft sand</span><span>${icon("flag", 14)} Target rock</span></div>
    <div class="drive__queue">${queue}</div>
    <div class="drive__pad">
      <button class="btn btn--ghost btn--sm" data-action="dcmd" data-c="L" ${dis || (full ? "disabled" : "")}>↺ Left</button>
      <button class="btn btn--ghost btn--sm" data-action="dcmd" data-c="F" ${dis || (full ? "disabled" : "")}>↑ Forward</button>
      <button class="btn btn--ghost btn--sm" data-action="dcmd" data-c="R" ${dis || (full ? "disabled" : "")}>↻ Right</button>
      <button class="btn btn--ghost btn--sm" data-action="dundo" ${dis || (drive.queue.length ? "" : "disabled")}>Undo</button>
    </div>
    <div class="drive__go">
      <span class="small strong">Sol ${drive.sol} · ${drive.queue.length}/${ECONOMY.DRIVE_CMDS} commands</span>
      <button class="btn btn--primary" data-action="dsend" ${drive.busy || !drive.queue.length ? "disabled" : ""}>Send ${icon("signal", 18)}</button>
    </div>
    <p class="drive__msg" aria-live="polite">${esc(drive.msg)}</p>`;
}
const renderDrive = () => { if (drive) setModal(driveHTML(), false); };

function driveSend() {
  if (!drive || drive.busy || !drive.queue.length) return;
  const m = machineById(drive.mid);
  const cmds = drive.queue.slice();
  drive.queue = [];
  drive.busy = true;
  drive.msg = `Sending to Mars… (the real signal takes about ${fmtDur(commsInfo(m).oneWay)}; sped up for training)`;
  renderDrive();
  let i = 0;
  const endSol = (msg) => { drive.busy = false; drive.sol++; drive.msg = msg; renderDrive(); };
  const step = () => {
    if (!drive) return;
    if (i >= cmds.length) return endSol("Commands done, but not at the target yet. Plan the next sol!");
    const c = cmds[i++];
    if (c === "L") drive.pos.dir = (drive.pos.dir + 3) % 4;
    else if (c === "R") drive.pos.dir = (drive.pos.dir + 1) % 4;
    else {
      const nx = drive.pos.x + DIRS[drive.pos.dir][0], ny = drive.pos.y + DIRS[drive.pos.dir][1];
      const cell = (drive.grid[ny] || [])[nx];
      if (cell === undefined || cell === "R") return endSol("Hazard ahead! My cameras spotted a boulder (or the edge of the map) and stopped me safely. Plan the next sol.");
      drive.pos.x = nx; drive.pos.y = ny;
      if (cell === "s") {
        renderDrive();
        drive.busy = true;
        driveTimer = setTimeout(() => { if (!drive) return; drive.pos = { ...drive.start }; endSol("Stuck in soft sand, just like Spirit at Troy! The training restarts from the landing spot."); }, 700);
        return;
      }
      if (cell === "F") { drive.busy = false; drive.done = true; payStep(ECONOMY.DRIVE_BONUS, drive.sol <= 2); renderDrive(); return; }
    }
    renderDrive();
    driveTimer = setTimeout(step, reducedMotion ? 150 : 420);
  };
  driveTimer = setTimeout(step, reducedMotion ? 300 : 1400);
}

// ===== Messages across space (real light-time delays) =====
let msgDraft = null;
let openMsgId = null;
let lastMsgRender = 0;

const msgList = () => S.messages || (S.messages = []);
function msgStatus(x, now = Date.now()) {
  if (now < x.arriveAt) return { stage: 0, text: `Travelling… arrives in ${fmtDur((x.arriveAt - now) / 1000)}` };
  if (now < x.replyAt) return { stage: 1, text: `Arrived! The reply is on its way back: ${fmtDur((x.replyAt - now) / 1000)} to go` };
  return { stage: 2, text: x.read ? "Reply read" : "Reply ready! Tap to read it" };
}
function msgProgress(x, now = Date.now()) {
  const total = x.replyAt - x.sentAt;
  return total <= 0 ? 100 : Math.min(100, Math.max(0, ((now - x.sentAt) / total) * 100));
}

function composeHTML() {
  const m = machineById(msgDraft.mid);
  const info = commsInfo(m);
  return `
    <span class="kicker">MESSAGE TO ${esc(m.short.toUpperCase())}</span>
    <h2>What do you want to ask?</h2>
    <div class="simtag">${icon("signal", 14)} Simulated reply · real distance</div>
    <div class="qchips">${MSG_QUESTIONS.map((q) => `<button class="qchip ${msgDraft.q === q.id ? "is-on" : ""}" data-action="msgq" data-q="${q.id}">${esc(q.text)}</button>`).join("")}</div>
    <label class="field">Sign your message <span class="muted">(first name only, optional)</span>
      <input id="msgName" maxlength="20" autocomplete="off" placeholder="e.g. Aarav" value="${esc(msgDraft.name || "")}"></label>
    <p class="field__err" id="msgErr" role="alert"></p>
    <p class="muted small">The reply is written by Ghost Rovers from ${esc(m.short)}’s real facts, but the wait is real. Signals travel at the speed of light. To ${esc(m.short)} that takes <b>${fmtDur(info.oneWay)}</b> each way${info.estimate ? " (estimate)" : ""}, so the reply comes back in about <b>${fmtDur(info.oneWay * 2)}</b>.</p>
    <button class="btn btn--primary btn--lg btn--block" data-action="msgsend" ${msgDraft.q ? "" : "disabled"}>${icon("signal", 20)} Send message</button>`;
}

function transmissionHTML(x) {
  const m = machineById(x.mid);
  const st = msgStatus(x);
  const p = msgProgress(x);
  const long = x.replyAt - Date.now() > 90000;
  return `
    <span class="kicker">${st.stage === 2 ? "INCOMING SIGNAL" : "MESSAGE SENT"}</span>
    <h2>${st.stage === 2 ? `${esc(m.short)} replied!` : `On its way to ${esc(m.short)}`}</h2>
    <div class="signal">
      <span class="signal__end">Earth</span>
      <div class="signal__track"><i class="${st.stage === 1 ? "is-back" : ""}" style="left:${(st.stage === 0 ? p : st.stage === 1 ? 100 - p : 0).toFixed(1)}%"></i></div>
      <span class="signal__end">${esc(m.short)}</span>
    </div>
    <p class="signal__status" id="sigStatus">${esc(st.text)}</p>
    ${st.stage === 2
      ? `<button class="btn btn--gold btn--lg btn--block" data-action="msgread" data-id="${x.id}">${icon("mail", 20)} Read the reply</button>`
      : long ? `<p class="muted small">That’s real space distance! You can close this and keep exploring. We’ll tell you when the reply arrives, and you’ll find it in <a href="#/messages">Messages</a>.</p>` : ""}`;
}
function updateTransmission() {
  const x = msgList().find((y) => y.id === openMsgId);
  if (!x || !$(".modal")) return;
  setModal(transmissionHTML(x), false);
}

function replyHTML(x) {
  const m = machineById(x.mid);
  const r = buildReply(x);
  const q = MSG_QUESTIONS.find((y) => y.id === x.q);
  const when = (t) => new Date(t).toLocaleString([], { dateStyle: "medium", timeStyle: "short" });
  return `
    <span class="kicker kicker--gold">INCOMING SIGNAL · ${esc(m.short.toUpperCase())}</span>
    <div class="simtag">${icon("signal", 14)} Simulated reply · real distance</div>
    <div class="reply">
      <p class="muted small">You asked: “${esc(q ? q.text : "")}” · Sent ${when(x.sentAt)} · Reply ${when(x.replyAt)}</p>
      <p><b>${esc(r.greeting)}</b> ${esc(r.timing)}</p>
      <p>${esc(r.answer)}</p>
      <p class="reply__sign">${esc(r.signoff)}</p>
      ${listenBtn("reply", x.id)}
    </div>
    <p class="muted small"><b>This is a simulated reply.</b> Ghost Rovers wrote it from ${esc(m.short)}’s real mission facts. The waiting time was real: it used ${esc(m.short)}’s real distance today and the speed of light. Real spacecraft only receive commands from NASA. <a href="#/data">How this works</a></p>
    <button class="btn btn--ghost btn--block" data-action="msgopen" data-id="${m.id}">${icon("mail", 18)} Send another message</button>`;
}

function readReply(x) {
  if (!x || Date.now() < x.replyAt) return;
  openModal(replyHTML(x), "modal--reply");
  if (!x.read) {
    x.read = true;
    S.firstReply = S.firstReply || {};
    if (!S.firstReply[x.mid]) { S.firstReply[x.mid] = true; earn(ECONOMY.FIRST_REPLY, `First reply from ${machineById(x.mid).short}`); }
    save();
    checkBadges();
    updateMsgBadge();
  }
}

function sendMessage() {
  const name = ($("#msgName") ? $("#msgName").value : "").trim();
  const err = $("#msgErr");
  if (name && !/^[A-Za-zÀ-ɏऀ-ॿ][A-Za-zÀ-ɏऀ-ॿ .'-]{0,19}$/.test(name)) {
    if (err) err.textContent = "Please use your first name only (letters, no numbers or symbols).";
    return;
  }
  const m = machineById(msgDraft.mid);
  const now = Date.now();
  const oneWayMs = commsInfo(m, new Date(now)).oneWay * 1000;
  const x = { id: now.toString(36) + Math.random().toString(36).slice(2, 6), mid: m.id, q: msgDraft.q, name, sentAt: now, arriveAt: now + oneWayMs, replyAt: now + 2 * oneWayMs, read: false, notified: false };
  msgList().push(x);
  if (S.messages.length > 60) S.messages = S.messages.slice(-60);
  save();
  openMsgId = x.id;
  setModal(transmissionHTML(x), false);
}

function renderMessages() {
  lastMsgRender = Date.now();
  const list = msgList().slice().reverse();
  app().innerHTML = `
    <section class="section">
      <div class="section__head"><h1>Messages</h1><p class="muted">Replies are simulated from each machine’s real mission facts, but the waiting time is real: messages travel at the speed of light, so Voyager 1’s replies take about two days! <a href="#/data">How this works</a></p></div>
      ${list.length ? `<div class="msglist">${list.map((x) => {
        const m = machineById(x.mid), st = msgStatus(x), q = MSG_QUESTIONS.find((y) => y.id === x.q);
        return `<button class="card msgrow ${st.stage === 2 && !x.read ? "is-new" : ""}" data-action="${st.stage === 2 ? "msgread" : "msgview"}" data-id="${x.id}">
          ${photoSlot(m, "thumb", 0, "photo--mini")}
          <span class="msgrow__text"><b>${esc(m.short)}</b><span class="muted small">${esc(q ? q.text : "")}</span>
          <span class="msgrow__status">${esc(st.text)}</span>
          ${st.stage < 2 ? `<span class="bar"><span style="width:${msgProgress(x).toFixed(1)}%"></span></span>` : ""}</span>
          ${icon(st.stage === 2 ? "mail" : "signal", 22)}
        </button>`;
      }).join("")}</div>`
      : `<div class="card empty">${icon("mail", 36)}<p>No messages yet. Wake up a machine, then open <b>Comms</b> on its page to send it a message.</p><a class="btn btn--primary" href="#/destinations">Find a machine</a></div>`}
    </section>`;
  hydratePhotos(app());
}

function updateMsgBadge() {
  const n = msgList().filter((x) => Date.now() >= x.replyAt && !x.read).length;
  const b = $("#msgBadge");
  if (b) { b.textContent = n; b.hidden = !n; }
}

function commsTick() {
  const now = Date.now();
  let changed = false;
  msgList().forEach((x) => {
    if (!x.notified && now >= x.replyAt) {
      x.notified = true;
      changed = true;
      if (openMsgId !== x.id) toast(`Reply from ${machineById(x.mid).short}!`, "Open Messages to read it.", "mail");
    }
  });
  if (changed) save();
  updateMsgBadge();
  if (openMsgId) updateTransmission();
  const st = $("#sigStatus");
  if (location.hash === "#/messages" && now - lastMsgRender > 4000 && !$(".modal")) renderMessages();
  return st;
}
setInterval(commsTick, 1000);

function commsCardHTML(m) {
  const info = commsInfo(m);
  const last = msgList().filter((x) => x.mid === m.id).pop();
  const tgt = isPhone() ? skyTarget(m) : null;
  return `
    <div class="card comms">
      <h3>${icon("signal", 22)} Comms with ${esc(m.short)}</h3>
      <span class="simtag">Simulated replies · real signal time</span>
      <p class="small muted">Signal time from Earth right now: <b>${fmtDur(info.oneWay)}</b> each way${info.estimate ? " (estimate)" : ""}.</p>
      ${S.woken[m.id]
        ? `<button class="btn btn--gold btn--block" data-action="msgopen" data-id="${m.id}">${icon("mail", 18)} Send a message</button>`
        : `<p class="small comms__locked">${icon("lock", 14)} Wake ${esc(m.short)} up to open comms.</p>`}
      ${last ? `<a class="small comms__last" href="#/messages">${esc(msgStatus(last).text)}</a>` : ""}
      ${tgt ? `<button class="btn btn--ghost btn--block" data-action="skyopen" data-id="${m.id}">${icon("compass", 18)} Find ${esc(tgt.label)} in the sky</button>` : ""}
    </div>`;
}

// ===== Sky finder (phones): point the phone at where a machine is in the sky =====
let sky = null;
const isPhone = () => window.matchMedia("(max-width: 900px) and (pointer: coarse)").matches;

function skyIntroHTML(m, t) {
  return `
    <span class="kicker">SKY FINDER</span>
    <h2>Find ${esc(t.label)} in the sky</h2>
    <p class="modal__lead">Hold your phone up and point the <b>back</b> of it at the sky. The arrow will guide you to where ${esc(m.short)} is right now.</p>
    <p class="muted small">Ghost Rovers needs your phone’s motion sensors and your location. Your location stays on your phone.</p>
    <button class="btn btn--primary btn--lg btn--block" data-action="skystart" data-id="${m.id}">${icon("compass", 20)} Start</button>
    <p class="sky__warn small">${icon("bolt", 14)} Never look at the Sun.</p>`;
}
function skyLiveHTML() {
  return `
    <span class="kicker">SKY FINDER</span>
    <h2>Finding ${esc(sky.t.label)}…</h2>
    <div class="sky"><div class="sky__ring" id="skyRing">
      <svg class="sky__arrow" id="skyArrow" viewBox="0 0 100 100" aria-hidden="true"><path d="M50 6 L68 42 H57 V86 H43 V42 H32 Z"/></svg>
      <span class="sky__center"></span></div></div>
    <p class="sky__hint" id="skyHint">Move your phone slowly…</p>
    <p class="muted small" id="skyInfo"></p>
    <p class="sky__warn small" id="skyWarn">${icon("bolt", 14)} Never look at the Sun.</p>`;
}

async function startSky(m) {
  const t = skyTarget(m);
  if (!t) return;
  try {
    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const res = await DeviceOrientationEvent.requestPermission();
      if (res !== "granted") { setModal(`<h2>Motion access needed</h2><p>Allow motion and orientation access in your browser to use the sky finder.</p>`); return; }
    }
  } catch (e) { /* not supported: carry on, directions are still shown */ }
  if (!navigator.geolocation) { setModal(`<h2>Location needed</h2><p>Your browser can’t share your location, so the sky finder can’t work here.</p>`); return; }
  setModal(`<h2>Finding where you are…</h2><p class="muted">Allow location access when your phone asks.</p>`, false);
  navigator.geolocation.getCurrentPosition((pos) => {
    sky = { m, t, lat: pos.coords.latitude, lon: pos.coords.longitude, phone: null, target: null, found: false, gotSensor: false };
    setModal(skyLiveHTML(), false);
    skyUpdateTarget();
    sky.targetTimer = setInterval(skyUpdateTarget, 5000);
    sky.handler = (e) => skyOrient(e);
    sky.evt = "ondeviceorientationabsolute" in window ? "deviceorientationabsolute" : "deviceorientation";
    window.addEventListener(sky.evt, sky.handler);
    sky.noSensor = setTimeout(() => { if (sky && !sky.gotSensor) skyStatic(); }, 3000);
  }, () => {
    setModal(`<h2>Location needed</h2><p>The sky finder needs your location to work out where ${esc(m.short)} is in your sky. Please allow location access and try again.</p>`);
  }, { enableHighAccuracy: false, timeout: 15000, maximumAge: 600000 });
}

function skyUpdateTarget() {
  if (!sky) return;
  const now = new Date();
  const rd = sky.t.raDec(now);
  sky.target = altAz(rd.ra, rd.dec, sky.lat, sky.lon, now);
  const sun = sunRaDec(now);
  const sunAlt = altAz(sun.ra, sun.dec, sky.lat, sky.lon, now).alt;
  const nearSun = angularSep(rd, sun) < 25 && sunAlt > -5;
  const info = $("#skyInfo"), warn = $("#skyWarn");
  if (info) {
    info.textContent = sky.target.alt >= 0
      ? `${sky.t.label} is ${Math.round(sky.target.alt)}° above the horizon, toward the ${compassName(sky.target.az)}.`
      : `${sky.t.label} is below your horizon right now, on the other side of Earth. Point down through the ground!`;
  }
  if (warn) warn.innerHTML = nearSun
    ? `${icon("bolt", 14)} <b>${esc(sky.t.label)} is close to the Sun in the sky right now. Don’t look toward the Sun!</b>`
    : `${icon("bolt", 14)} Never look at the Sun.`;
}

function skyOrient(e) {
  if (!sky || !sky.target) return;
  let alpha = e.alpha;
  if (typeof e.webkitCompassHeading === "number") alpha = 360 - e.webkitCompassHeading;
  if (alpha === null || alpha === undefined || e.beta === null) return;
  sky.gotSensor = true;
  const a = alpha * D2R, b = e.beta * D2R, g = (e.gamma || 0) * D2R;
  const sA = Math.sin(a), cA = Math.cos(a), sB = Math.sin(b), cB = Math.cos(b), sG = Math.sin(g), cG = Math.cos(g);
  // direction the back of the phone points (x = east, y = north, z = up)
  const vx = -(cG * sA * sB + cA * sG), vy = -(sA * sG - cA * cG * sB), vz = -cB * cG;
  const phoneAz = norm360(Math.atan2(vx, vy) / D2R);
  const phoneAlt = Math.asin(Math.max(-1, Math.min(1, vz))) / D2R;
  let dAz = sky.target.az - phoneAz;
  dAz = ((dAz + 540) % 360) - 180;
  const dAlt = sky.target.alt - phoneAlt;
  const arrow = $("#skyArrow"), hint = $("#skyHint"), ring = $("#skyRing");
  if (!arrow) return;
  const close = Math.abs(dAz) < 8 && Math.abs(dAlt) < 8;
  arrow.style.transform = `rotate(${Math.atan2(dAz, dAlt) / D2R}deg)`;
  arrow.style.opacity = close ? 0 : 1;
  ring.classList.toggle("is-found", close);
  if (close) {
    hint.textContent = `You’re pointing at ${sky.t.label}!`;
    if (!sky.found) {
      sky.found = true;
      if (navigator.vibrate) navigator.vibrate(200);
      if (!S.skySpotted) { S.skySpotted = true; save(); checkBadges(); }
    }
  } else {
    const parts = [];
    if (Math.abs(dAz) >= 8) parts.push(`turn ${dAz > 0 ? "right" : "left"} ${Math.round(Math.abs(dAz))}°`);
    if (Math.abs(dAlt) >= 8) parts.push(`tilt ${dAlt > 0 ? "up" : "down"} ${Math.round(Math.abs(dAlt))}°`);
    hint.textContent = parts.join(" · ").replace(/^./, (c) => c.toUpperCase());
  }
}

function skyStatic() {
  const hint = $("#skyHint"), arrow = $("#skyArrow");
  if (arrow) arrow.style.opacity = 0.25;
  if (hint && sky && sky.target) hint.textContent = `Your phone isn’t sharing its compass, so here are directions: face ${compassName(sky.target.az)} and look ${sky.target.alt >= 0 ? `${Math.round(sky.target.alt)}° up` : "down (it’s below the horizon)"}.`;
}

function stopSky() {
  if (!sky) return;
  if (sky.handler) window.removeEventListener(sky.evt, sky.handler);
  clearInterval(sky.targetTimer);
  clearTimeout(sky.noSensor);
  sky = null;
}

// ===== Actions (clicks) =====
function testerOnly(fn) {
  return (el) => {
    if (!isTester()) return;
    fn(el);
    save();
    renderHUD();
    renderBadges();
  };
}

const ACTIONS = {
  select(el) {
    const m = machineById(el.dataset.id);
    selectedByWorld[m.world] = m.id;
    const scene = $(".scene");
    const side = $(".world-side");
    if (scene && side && scene.dataset.world === m.world) {
      side.innerHTML = worldSideHTML(worldById(m.world), m);
      $$(".pin", scene).forEach((p) => p.classList.toggle("is-selected", p.dataset.id === m.id));
      hydratePhotos(side);
      if (window.GR3D) window.GR3D.focus(m.id);
    } else {
      renderWorld(m.world);
    }
    if (window.innerWidth < 900) { const s = $(".selected"); if (s) s.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" }); }
  },
  unlock(el) {
    const w = worldById(el.dataset.world);
    if (S.unlocked[w.id] || !orderReady(w) || !spend(w.cost)) return;
    S.unlocked[w.id] = true;
    save();
    toast("Destination unlocked!", `Welcome to ${w.name}`, "planet");
    confetti();
    checkBadges();
    const target = `#/world/${w.id}`;
    if (location.hash === target) route();
    else location.hash = target;
  },
  nextlog(el) {
    const m = machineById(el.dataset.id);
    logProgress[m.id] = Math.min(m.logs.length, (logProgress[m.id] || 1) + 1);
    renderMachine(m.id);
    const fresh = $(".log--new");
    if (fresh) fresh.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
  },
  wake(el) { wakeMachine(machineById(el.dataset.id)); },
  mission(el) { openMission(machineById(el.dataset.id)); },
  crisispick(el) {
    if (!mission || mission.solved) return;
    const i = Number(el.dataset.i);
    if (curStep().choices[i][1]) { buzz(25); mission.solved = true; payStep(ECONOMY.STEP_BONUS, mission.firstTry); setModal(crisisHTML()); }
    else { mission.firstTry = false; mission.missed.push(mission.step); mission.tried.push(i); setModal(crisisHTML(i), false); }
  },
  missionnext() {
    if (!mission || isLastStep()) return;
    if (!(mission.solved || (drive && drive.done))) return;
    stopDrive();
    mission.step++;
    showStep();
  },
  missionwake() {
    if (!mission || !isLastStep() || !(mission.solved || (drive && drive.done))) return;
    const m = machineById(mission.mid), bonus = mission.bonus;
    stopDrive();
    mission = null;
    wakeMachine(m, bonus);
    setModal(wokeHTML(m, bonus));
  },
  dcmd(el) { if (drive && !drive.busy && drive.queue.length < ECONOMY.DRIVE_CMDS) { drive.queue.push(el.dataset.c); renderDrive(); } },
  dundo() { if (drive && !drive.busy) { drive.queue.pop(); renderDrive(); } },
  dsend() { driveSend(); },
  msgopen(el) {
    const m = machineById(el.dataset.id);
    if (!S.woken[m.id]) return;
    msgDraft = { mid: m.id, q: null, name: "" };
    openMsgId = null;
    if ($(".modal")) setModal(composeHTML()); else openModal(composeHTML(), "modal--msg");
  },
  msgq(el) { msgDraft.name = $("#msgName") ? $("#msgName").value : ""; msgDraft.q = el.dataset.q; setModal(composeHTML(), false); },
  msgsend() { if (msgDraft && msgDraft.q) sendMessage(); },
  msgread(el) { readReply(msgList().find((x) => x.id === el.dataset.id)); },
  msgview(el) { const x = msgList().find((y) => y.id === el.dataset.id); if (x) { openModal(transmissionHTML(x), "modal--msg"); openMsgId = x.id; } },
  skyopen(el) { const m = machineById(el.dataset.id); const t = skyTarget(m); if (t) openModal(skyIntroHTML(m, t), "modal--sky"); },
  skystart(el) { startSky(machineById(el.dataset.id)); },
  closemodal() { closeModal(); },
  judge() { hideJudgeHint(); toggleJudge(); },
  judgehintclose() { hideJudgeHint(); },
  listen(el) { speak(el); },
  mtab(el) {
    mTab = el.dataset.t;
    $$(".mtab").forEach((b) => { const on = b.dataset.t === mTab; b.classList.toggle("is-on", on); b.setAttribute("aria-selected", on); });
    $$("[data-panel]").forEach((p) => { p.hidden = p.dataset.panel !== mTab; });
  },
  tourgo(el) { setTour(Number(el.dataset.i)); },
  tourstart() { setTour(0); },
  tourfinish() { setTour(TOUR.length); location.hash = "#/challenge"; },
  tourend(el) { setTour(-1); const to = el && el.getAttribute("href"); if (to) location.hash = to; },
  judgesignin() { judgeForm = true; renderSignIn(); },
  lbfilter(el) { lbFilter = el.dataset.f; renderLeftBehind(); },
  vote(el) {
    const first = !S.debriefVote;
    S.debriefVote = el.dataset.v;
    save();
    if (USER && window.GR_CLOUD && window.GR_CLOUD.vote) window.GR_CLOUD.vote(USER.uid, S.debriefVote).catch((e) => console.warn("Ghost Rovers votes:", e)).finally(() => { if (location.hash === "#/debrief") showTally(); });
    if (first) checkBadges();
    renderDebrief();
  },
  techfocus(el) {
    $$(".techlab__item--btn").forEach((b) => { b.classList.toggle("is-active", b === el); b.setAttribute("aria-expanded", b === el ? "true" : "false"); });
    if (window.GRMODEL) window.GRMODEL.focus(Number(el.dataset.i));
    // bring the 3D model into view if it's partly off screen
    const card = $(".modelcard");
    if (card) {
      const r = card.getBoundingClientRect();
      const top = ($(".topbar") ? $(".topbar").offsetHeight : 0) + 8;
      if (r.top < top || r.bottom > window.innerHeight) card.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
    }
  },
  modelreset() {
    $$(".techlab__item--btn").forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-expanded", "false"); });
    if (window.GRMODEL) window.GRMODEL.reset();
  },
  vprev(el) { stepViewer(el.closest(".viewer"), -1); },
  vnext(el) { stepViewer(el.closest(".viewer"), 1); },
  vgo(el) { stepViewer(el.closest(".viewer"), 0, Number(el.dataset.i)); },
  answer(el) { answer(Number(el.dataset.k)); },
  fifty() { fiftyFifty(); },
  nextq() { nextQuestion(); },
  retry() { startQuiz(quiz.kind, quiz.key); window.scrollTo(0, 0); },
  async signout() {
    if (cloudTimer) { clearTimeout(cloudTimer); await pushCloud(); }
    if (window.GR_CLOUD) await window.GR_CLOUD.signOut();
    toast("Signed out", "See you soon, explorer!", "rocket");
  },
  reset() {
    if (!confirm("Reset all your Stardust, badges and progress?")) return;
    clearSession();
    S = freshSave();
    if (isTester()) S.stardust = TESTER_START_STARDUST;
    save();
    renderHUD();
    location.hash = "#/";
    route();
    toast("Progress reset", "Fresh start, explorer!", "rocket");
  },
  t_stardust: testerOnly(() => { S.stardust += 1000; toast("+1000 Stardust", "Tester top-up", "star"); }),
  t_unlock: testerOnly(() => { WORLDS.forEach((w) => { S.unlocked[w.id] = true; }); checkBadges(); }),
  t_mquiz: testerOnly(() => { MACHINES.forEach((m) => { if (S.mquizBest[m.id] === undefined) S.mquizBest[m.id] = 0; }); checkBadges(); }),
  t_wake: testerOnly(() => { MACHINES.forEach((m) => { S.woken[m.id] = true; }); checkBadges(); }),
  t_reset: testerOnly(() => { clearSession(); S = freshSave(); S.stardust = TESTER_START_STARDUST; toast("Tester reset", `${TESTER_START_STARDUST} Stardust loaded`, "rocket"); })
};

document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-action]");
  if (!el || el.disabled) return;
  const fn = ACTIONS[el.dataset.action];
  if (fn) { e.preventDefault(); fn(el, e); }
});

// Forget everything held in memory for this visit (used by the reset buttons)
function clearSession() {
  closeModal();
  mission = null;
  quiz = null;
  msgDraft = null;
  Object.keys(logProgress).forEach((k) => delete logProgress[k]);
  Object.keys(selectedByWorld).forEach((k) => delete selectedByWorld[k]);
}

function renderChallenge() {
  app().innerHTML = `
    <section class="section">
      <div class="section__head">
        <span class="kicker">NASA SPACE APPS CHALLENGE</span>
        <h1>How Ghost Rovers answers the challenge</h1>
        <p class="muted">Each part of the challenge, and where to see it in the game.</p>
      </div>
      <div class="chlist">${CHALLENGE.map((c, i) => `
        <div class="card chrow">
          <span class="chrow__n">${i + 1}</span>
          <div class="chrow__text"><b>${esc(c.need)}</b><span>${esc(c.how)}</span></div>
          <a class="btn btn--ghost btn--sm" href="${c.link}">${esc(c.label)} ${icon("arrow", 16)}</a>
        </div>`).join("")}</div>
    </section>`;
}

function renderData() {
  app().innerHTML = `
    <section class="section">
      <div class="section__head">
        <span class="kicker">DATA &amp; METHODS</span>
        <h1>Where our facts and numbers come from</h1>
        <p class="muted">We want every number in Ghost Rovers to be honest. Here is where each one comes from, how accurate it is, and what is simulated.</p>
      </div>
      <h2 class="datahead">${icon("check", 22)} Real data</h2>
      <div class="datalist">${DATA_SOURCES.map(([t, d]) => `<div class="card datarow"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div>
      <h2 class="datahead">${icon("signal", 22)} Simulated (and labelled)</h2>
      <div class="datalist">${DATA_SIMULATED.map(([t, d]) => `<div class="card datarow datarow--sim"><b>${esc(t)}</b><span>${esc(d)}</span></div>`).join("")}</div>
      <p class="muted small">Sky finder positions use the same orbit maths, turned into directions in your sky using your location and the date and time. Your location stays on your phone.</p>
    </section>`;
}

function renderLost() {
  app().innerHTML = `
    <section class="card locked">
      ${icon("compass", 64)}
      <h1>Lost in space!</h1>
      <p class="lead">We couldn’t find that page. It may have drifted off into deep space.</p>
      <a class="btn btn--primary btn--lg" href="#/destinations">Back to destinations</a>
    </section>`;
}

// ===== Router =====
function route() {
  const [view, arg] = location.hash.replace(/^#\/?/, "").split("/");
  hideTip();
  closeModal();
  stopSpeaking();
  clearInterval(typeTimer);
  settleQuiz();
  if (window.GR3D) window.GR3D.unmount();
  if (window.GRMODEL) window.GRMODEL.unmount();
  const known = { world: worldById, quiz: worldById, machine: machineById, mquiz: machineById };
  if (known[view] && !known[view](arg)) { renderLost(); window.scrollTo(0, 0); return; }
  switch (view) {
    case "": case undefined: renderHome(); break;
    case "world": renderWorld(arg); break;
    case "machine": renderMachine(arg); break;
    case "quiz": startQuiz("world", arg); break;
    case "mquiz": startQuiz("machine", arg); break;
    case "badges": renderBadges(); break;
    case "messages": renderMessages(); break;
    case "left-behind": renderLeftBehind(); break;
    case "debrief": renderDebrief(); break;
    case "challenge": renderChallenge(); break;
    case "data": renderData(); break;
    case "signin": renderSignIn(); break;
    case "worlds": case "destinations": renderHome("destinations"); break;
    case "about": renderHome("about"); break;
    default: renderLost();
  }
  if (view !== "worlds" && view !== "destinations" && view !== "about") window.scrollTo(0, 0);
  $$(".nav a").forEach((a) => a.classList.toggle("is-active", a.getAttribute("href") === `#/${view}`));
  const appEl = app();
  if (!reducedMotion) { appEl.classList.remove("page-in"); void appEl.offsetWidth; appEl.classList.add("page-in"); }
  renderTour();
}

// Keeps the sticky 3D model card just below the header, whatever its height
function setHeaderVar() {
  const bar = $(".topbar");
  if (bar) document.documentElement.style.setProperty("--header-h", `${bar.offsetHeight}px`);
}
window.addEventListener("resize", setHeaderVar);

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches && !reducedMotion) {
  document.addEventListener("mousemove", (e) => {
    const card = e.target.closest && e.target.closest(".world");
    $$(".world.is-tilt").forEach((c) => { if (c !== card) { c.classList.remove("is-tilt"); c.style.transform = ""; } });
    if (!card) return;
    const r = card.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    card.classList.add("is-tilt");
    card.style.transform = `perspective(700px) rotateY(${(x * 8).toFixed(2)}deg) rotateX(${(-y * 8).toFixed(2)}deg) translateY(-4px)`;
  });
}

window.addEventListener("hashchange", route);
window.addEventListener("gr-cloud-ready", () => { if (location.hash.startsWith("#/signin")) route(); });
renderHUD();
route();
checkBadges();
