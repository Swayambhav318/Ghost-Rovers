// ===== Game settings: Stardust economy =====
const ECONOMY = {
  WAKE: 15,          // finishing a machine's story
  BADGE: 25,         // every badge unlocked
  FIFTY_FIFTY: 10,   // cost of the 50:50 lifeline
  STEP_BONUS: 2,     // each wake-up decision answered right first try
  DRIVE_BONUS: 3,    // rover drive finished in 2 sols or fewer
  DRIVE_CMDS: 10,    // rover commands allowed per sol (Martian day)
  FIRST_REPLY: 10,   // first message reply read from each machine
  COMPLETE: 100,     // finishing a destination (every story + every quiz); always tops you up to afford the next one
  QUIZ: {
    // correct = per right answer the first time, beatBest = per extra answer above your best,
    // replay = per right answer on later tries, perfect = first full score bonus
    machine: { length: 5, correct: 5, beatBest: 5, replay: 1, perfect: 10 },
    world: { length: 10, correct: 15, beatBest: 15, replay: 3, perfect: 75 },
    replayLimit: 3   // replays per quiz that still pay Stardust (beating your best always pays)
  }
};

const RANKS = [
  { name: "Space Cadet", min: 0 },
  { name: "Rover Driver", min: 150 },
  { name: "Mission Specialist", min: 600 },
  { name: "Flight Director", min: 1300 },
  { name: "Space Legend", min: 2200 }
];

// ===== Test account (gets TESTER_START_STARDUST when the account is first created + tester tools) =====
// Tester accounts, stored as SHA-256 fingerprints of their emails so the emails never appear in the code.
// Make one in a browser console: crypto.subtle.digest("SHA-256", new TextEncoder().encode("you@example.com"))
const TESTER_HASHES = [];
const TESTER_START_STARDUST = 2000;

// ===== Worlds =====
// cost = Stardust needed to unlock. view = scene drawing size, aspect = scene box shape.
const WORLDS = [
  { id: "moon", name: "The Moon", cost: 0, color: "#C4C6D2", era: "1967–1972", view: [100, 100], aspect: "1 / 1",
    tag: "Landers, Moon buggies and a mirror scientists still use today." },
  { id: "mars", name: "Mars", cost: 150, color: "#D9662F", era: "1976–today", view: [200, 100], aspect: "2 / 1",
    tag: "Rovers, landers and a helicopter that hunted for signs of ancient water." },
  { id: "venus", name: "Venus", cost: 300, color: "#E8C27A", era: "1962–1994", view: [100, 100], aspect: "1 / 1",
    tag: "Daring missions to the hottest planet, including one that never made it." },
  { id: "orbit", name: "Space Telescopes", cost: 450, color: "#4FA3FF", era: "1990–today", view: [100, 100], aspect: "1 / 1",
    tag: "Great observatories circling Earth and the Sun, plus famous satellites." },
  { id: "deep", name: "Deep Space", cost: 600, color: "#AEB6DA", era: "1972–today", view: [100, 100], aspect: "1 / 1",
    tag: "Probes still flying away from the Sun, some into interstellar space." }
];

// Non-clickable labels drawn on the scenes (x, y in % of the scene)
const DECOR = {
  mars: [
    { x: 12.8, y: 39.6, label: "Olympus Mons" },
    { x: 33.6, y: 61, label: "Valles Marineris" }
  ],
  venus: [{ x: 88, y: 14, label: "Mariner 2 flew past (1962)" }],
  orbit: [
    { x: 32, y: 66, label: "ISS · ~400 km" },
    { x: 42, y: 41, label: "Landsat 9" },
    { x: 42, y: 66.5, label: "Earth", nodot: true },
    { x: 46, y: 6, label: "Path around the Sun", nodot: true },
    { x: 62, y: 76, label: "to L2 · 1.5 million km", nodot: true }
  ],
  deep: [
    { x: 8, y: 58, label: "Sun", nodot: true },
    { x: 21, y: 54, label: "Jupiter" },
    { x: 28, y: 37, label: "Saturn" },
    { x: 38, y: 62, label: "Uranus" },
    { x: 46, y: 44, label: "Neptune" },
    { x: 54, y: 58, label: "Kuiper Belt", nodot: true },
    { x: 52, y: 9, label: "Heliopause: edge of the Sun’s bubble", nodot: true }
  ]
};

// ===== Machines =====
// Each world's machines live in js/machines/<world>.js and are added to this list.
const MACHINES = [];

// ===== Badges (each gives ECONOMY.BADGE Stardust) =====
const BADGES = [
  { id: "first_contact", name: "First Contact", desc: "Wake your first machine", icon: "signal" },
  { id: "moonwalker", name: "Moonwalker", desc: "Wake every Moon machine", icon: "moon" },
  { id: "red_planet", name: "Red Planet Ranger", desc: "Wake every Mars machine", icon: "rover" },
  { id: "cloud_diver", name: "Cloud Diver", desc: "Wake every Venus machine", icon: "cloud" },
  { id: "star_gazer", name: "Star Gazer", desc: "Wake every space telescope", icon: "telescope" },
  { id: "interstellar", name: "Interstellar", desc: "Wake every Deep Space probe", icon: "rocket" },
  { id: "quiz_rookie", name: "Quiz Rookie", desc: "Finish your first machine quiz", icon: "bulb" },
  { id: "world_champ", name: "Grand Champion", desc: "Finish a 10-question Grand Quiz", icon: "planet" },
  { id: "perfect_ten", name: "Perfect Ten", desc: "Score 10/10 on a Grand Quiz", icon: "trophy" },
  { id: "hot_streak", name: "Hot Streak", desc: "Get 5 answers right in a row", icon: "bolt" },
  { id: "mission_control", name: "Calling Mission Control", desc: "Use a 50:50 lifeline", icon: "headset" },
  { id: "explorer", name: "Solar System Explorer", desc: "Unlock every destination", icon: "planet" },
  { id: "quiz_master", name: "Quiz Master", desc: "Finish the Grand Quiz at every destination", icon: "star" },
  { id: "pen_pal", name: "Pen Pal", desc: "Get a reply from a machine", icon: "mail" },
  { id: "heritage", name: "Heritage Guardian", desc: "Vote in the mission debrief", icon: "flag" },
  { id: "sky_spotter", name: "Sky Spotter", desc: "Point your phone at a machine in the sky", icon: "compass", bonus: "Phone bonus" },
  { id: "completionist", name: "Ghost Whisperer", desc: "Wake every machine in the game", icon: "sparkle" }
];
