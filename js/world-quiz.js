// ===== World quiz extras =====
// A world quiz is mostly questions drawn from that world's machine quizzes, plus 1–2 of these.
// Each answer must appear on the page of the machine it is tagged with.
// Format: [machine id, question, [CORRECT answer FIRST, wrong, wrong, wrong], explanation]
const WORLD_EXTRA = {
  moon: [
    ["apollo15lrv", "How many Moon buggies were left on the Moon?", ["Three", "One", "Six", "Twelve"], "Apollo 15 was the first of three missions to carry one, and all three were left behind."],
    ["apollo11", "How many Apollo missions landed astronauts on the Moon?", ["6", "1", "3", "11"], "Apollo 11 was the first of six."]
  ],
  mars: [
    ["spirit", "What is a day on Mars called?", ["A sol", "A moonday", "A marsweek", "A dusk"], "A sol is about 40 minutes longer than an Earth day."],
    ["viking1", "How thick is Mars’s air compared with Earth’s?", ["Less than 1% as thick", "About the same", "Twice as thick", "Ten times thicker"], "Mars’s air is thin and mostly carbon dioxide."]
  ],
  venus: [
    ["pioneervenus", "Which is the hottest planet in our solar system?", ["Venus", "Mercury", "Mars", "Jupiter"], "Its thick carbon dioxide air traps heat."],
    ["mariner1", "Which planet did Mariner 2 become the first spacecraft to successfully visit?", ["Venus", "Mars", "Jupiter", "Mercury"], "It flew past on December 14, 1962."]
  ],
  orbit: [
    ["hubble", "About how high does the International Space Station orbit Earth?", ["About 400 km", "About 36,000 km", "About 1.5 million km", "About 40 km"], "It orbits lower than Hubble."],
    ["spitzer", "Which two retired telescopes orbit the Sun, trailing behind Earth?", ["Spitzer and Kepler", "Hubble and Chandra", "Webb and Hubble", "Chandra and Webb"], "Both drift a little farther behind Earth every year."]
  ],
  deep: [
    ["voyager2", "Which two spacecraft have been confirmed to reach interstellar space?", ["Voyager 1 and Voyager 2", "Pioneer 10 and New Horizons", "Hubble and Webb", "Spirit and Opportunity"], "Voyager 1 in 2012 and Voyager 2 in 2018."],
    ["newhorizons", "Where is the Kuiper Belt?", ["Beyond Neptune", "Between Mars and Jupiter", "Around Earth", "Inside the Sun"], "It’s a ring of icy worlds, where Arrokoth is."]
  ]
};
