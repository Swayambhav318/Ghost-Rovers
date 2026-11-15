// ===== Left behind: then vs now, what happens to it, and its legacy =====
// then = what it was doing, now = where/what it is today, fate = what its surroundings do to it, legacy = what it led to
const LEGACY = {
  surveyor3: {
    then: "1967: landed by itself to test the Moon’s soil.",
    now: "Still standing in the Ocean of Storms, missing the camera and parts Apollo 12 astronauts took home in 1969.",
    fate: "With no air or weather, only harsh sunlight and tiny meteorites wear it down. The parts brought home showed its paint had changed colour.",
    legacy: "Surveyor landers proved the Moon’s ground could hold a spacecraft, so Apollo astronauts could land safely." },
  apollo11: {
    then: "1969: carried the first people to walk on the Moon.",
    now: "The bottom half of Eagle still stands at Tranquility Base. Lasers from Earth still bounce off the mirror experiment beside it.",
    fate: "Eagle’s engine blew the flag over at lift-off. Decades of strong sunlight have probably bleached the flags left on the Moon white.",
    legacy: "The mirror shows the Moon drifts about 3.8 cm farther from Earth every year. NASA’s Artemis missions plan to return people to the Moon." },
  apollo15lrv: {
    then: "1971: the first car driven on the Moon.",
    now: "Parked at Hadley–Apennine, where Dave Scott and Jim Irwin left it.",
    fate: "Days of about +120 °C and nights of about −170 °C, plus scratchy Moon dust, slowly wear its parts.",
    legacy: "Proved astronauts could travel many kilometres on the Moon. New Moon rovers are being designed for the Artemis missions." },
  apollo17lrv: {
    then: "1972: driven on the last crewed Moon landing.",
    now: "Parked at Taurus–Littrow, still wearing its taped-on map fender. It’s the last vehicle people drove on the Moon.",
    fate: "NASA’s Lunar Reconnaissance Orbiter has photographed the site from orbit, and the rover tracks are still visible.",
    legacy: "Apollo 17’s Moon rocks, including the orange soil, are still studied by scientists today." },
  viking1: {
    then: "1976: the first U.S. lander to work on Mars.",
    now: "Silent on Chryse Planitia since 1982, when a wrong command pointed its antenna away from Earth.",
    fate: "Dust storms slowly coat it in red dust. Orbiters have photographed it from space.",
    legacy: "Its life-hunting tests shaped how every later Mars mission searches for signs of life." },
  sojourner: {
    then: "1997: the first rover on Mars.",
    now: "Sitting a few metres from its lander at Ares Vallis. Contact was lost in 1997.",
    fate: "Fine red dust slowly settles on it after every dust storm.",
    legacy: "It proved rovers could explore Mars, leading to Spirit, Opportunity, Curiosity and Perseverance." },
  spirit: {
    then: "2004: a golf-cart-sized rover built to work for 90 days.",
    now: "Stuck in the sand at a place called Troy in Gusev crater, silent since March 2010.",
    fate: "Without enough power for its heaters, the freezing Martian winter was too much for it.",
    legacy: "Its dragging wheel uncovered signs of ancient hot springs, places where tiny life might once have lived." },
  opportunity: {
    then: "2004: Spirit’s twin, also built for 90 days.",
    now: "Resting in Perseverance Valley on the rim of Endeavour crater, silent since June 2018.",
    fate: "The 2018 dust storm blocked the sunlight its solar panels needed, so it couldn’t keep itself warm.",
    legacy: "It worked for almost 15 years and drove more than 45 km, the farthest any rover had driven on another world at the time." },
  phoenix: {
    then: "2008: dug into the frozen ground near Mars’s north pole.",
    now: "Silent on the arctic plains since late 2008.",
    fate: "Photos from orbit in 2010 showed the weight of winter ice had broken its solar panels.",
    legacy: "It confirmed water ice just under Mars’s soil, which future human explorers might use." },
  curiosity: {
    then: "2012: lowered onto Mars by a sky crane.",
    now: "Still working, climbing Mount Sharp in Gale crater, more than 14 years after landing.",
    fate: "Its nuclear power gets a little weaker every year, and sharp rocks wear its wheels, so drivers plan routes carefully.",
    legacy: "It showed Mars once had lakes with the right chemistry for life. Perseverance was built on its design." },
  insight: {
    then: "2018: landed to listen to the inside of Mars.",
    now: "Silent at Elysium Planitia since December 2022.",
    fate: "Dust kept piling on its solar panels until there wasn’t enough power to wake up.",
    legacy: "It recorded more than 1,300 marsquakes and helped map Mars’s crust, mantle and core." },
  perseverance: {
    then: "2021: landed to collect rocks for a future trip to Earth.",
    now: "Still working in Jezero crater, collecting rock samples in sealed tubes.",
    fate: "Ten sample tubes were left on the ground as a backup, waiting for a future mission to pick them up.",
    legacy: "Its samples could be the first Mars rocks ever brought to Earth. Its MOXIE experiment made oxygen from Mars’s air." },
  ingenuity: {
    then: "2021: the first helicopter to fly on another planet.",
    now: "Grounded in Jezero crater since January 2024, after a rotor blade was damaged on its 72nd flight.",
    fate: "It can’t fly any more, so it stays where it landed, still able to record a little data.",
    legacy: "It proved flying on Mars works. Engineers are now designing bigger Mars helicopters." },
  mariner1: {
    then: "1962: launched toward Venus.",
    now: "Destroyed minutes after launch. Its pieces fell into the Atlantic Ocean.",
    fate: "Nothing of it ever reached Venus. Its story lives on as a famous lesson for engineers.",
    legacy: "It taught NASA to check software very carefully. Its twin, Mariner 2, became the first spacecraft to visit another planet successfully." },
  pioneervenus: {
    then: "1978: four probes dived into Venus’s thick air.",
    now: "The probes lie on Venus’s surface. Their orbiter burned up in Venus’s air in 1992.",
    fate: "At about 465 °C and 90 times Earth’s air pressure, the probes have been baking and corroding for decades.",
    legacy: "It helped show that Venus has a runaway greenhouse effect, which helps scientists understand climate on Earth." },
  magellan: {
    then: "1990: mapped Venus with radar through its clouds.",
    now: "Gone. It dived into Venus’s air in 1994 and burned up, though some pieces may have reached the ground.",
    fate: "Venus’s thick air burned up most of it, just as Earth’s air burns up meteors.",
    legacy: "Its radar maps are still used today to plan new Venus missions such as VERITAS." },
  hubble: {
    then: "1990: launched by a Space Shuttle.",
    now: "Still working about 540 km above Earth, more than 35 years after launch.",
    fate: "Thin air at that height slowly drags it lower. One day it must be boosted higher or brought down safely into the ocean.",
    legacy: "It helped measure how fast the universe is expanding and paved the way for Webb." },
  chandra: {
    then: "1999: launched to see the X-ray universe.",
    now: "Still working, more than 27 years after launch.",
    fate: "Its high orbit is safe for a very long time. Its biggest challenges are ageing parts and the cost of running it.",
    legacy: "Its X-ray images reveal black holes, exploding stars and hot gas between galaxies." },
  spitzer: {
    then: "2003: an infrared telescope chilled with liquid helium.",
    now: "Switched off in January 2020. It keeps drifting around the Sun behind Earth.",
    fate: "It will keep drifting farther behind Earth for years, then, decades from now, slowly come back around near Earth.",
    legacy: "It helped find the seven Earth-sized planets of TRAPPIST-1. Webb carries on its infrared work." },
  kepler: {
    then: "2009: stared at one patch of sky to find planets.",
    now: "Switched off in October 2018, drifting around the Sun behind Earth.",
    fate: "With no fuel left, it drifts silently in its orbit around the Sun.",
    legacy: "It showed that planets are more common than stars in our galaxy. NASA’s TESS carries on the planet hunt." },
  webb: {
    then: "2021: launched folded up on Christmas Day.",
    now: "Still working at L2, about 1.5 million km from Earth.",
    fate: "Tiny rocket burns keep it at L2, and it has fuel for about 20 years. Tiny meteoroids sometimes hit its mirrors.",
    legacy: "It sees some of the first galaxies and studies the air of planets around other stars." },
  pioneer10: {
    then: "1972: the first spacecraft to cross the asteroid belt.",
    now: "Silent since 2003, coasting in the direction of the star Aldebaran.",
    fate: "Its nuclear power got too weak to talk to Earth. It will keep coasting through space, possibly for billions of years.",
    legacy: "It visited Jupiter first and showed the way for the Voyagers." },
  voyager1: {
    then: "1977: launched to Jupiter and Saturn.",
    now: "Still talking to Earth from interstellar space, the most distant human-made object.",
    fate: "Its power drops by about 4 watts every year. NASA is switching instruments off one by one, and it will fall silent in the 2030s.",
    legacy: "In 2012 it became the first spacecraft to enter interstellar space. It carries the Golden Record, a message from Earth." },
  voyager2: {
    then: "1977: launched on a grand tour of the outer planets.",
    now: "Still working in interstellar space, which it entered in 2018.",
    fate: "Like Voyager 1, it loses a little power every year, so NASA is switching instruments off to keep it talking.",
    legacy: "It is the only spacecraft to visit Uranus and Neptune. It also carries a Golden Record." },
  newhorizons: {
    then: "2006: launched toward Pluto.",
    now: "Still working in the Kuiper Belt, far beyond Pluto.",
    fate: "It’s heading out of the solar system and may keep working into the 2040s.",
    legacy: "It showed Pluto has icy mountains and a heart-shaped glacier, then flew past Arrokoth, the farthest world ever explored up close." }
};

// Headline numbers for the Left Behind page (estimates from NASA and published catalogues)
const LEFT_BEHIND_FACTS = [
  ["~187 tonnes", "of human-made material on the Moon, including landers, rovers, tools and flags"],
  ["70+", "spacecraft have landed or crashed on the Moon"],
  ["5", "spacecraft heading out of the solar system: Pioneer 10 and 11, Voyager 1 and 2, New Horizons"]
];

// Mission debrief: the final discussion question
const DEBRIEF = {
  why: [
    ["Bringing things home is very expensive", "Every kilogram you bring back needs much more fuel, and fuel is heavy. Leaving landers and rovers behind made the trips possible."],
    ["Some machines are still working", "The Apollo 11 mirror, the Voyagers and Curiosity are still doing science right where they are."],
    ["Left-behind hardware is a long experiment", "Parts of Surveyor 3, brought home after two and a half years, showed how metal, paint and glass change on the Moon."]
  ],
  question: "What should we do with the machines left behind?",
  options: [
    { id: "protect", title: "Protect them as space heritage sites", plus: "Keeps history safe, like ancient ruins on Earth.", minus: "Future explorers can’t touch or study them up close." },
    { id: "museum", title: "Bring some home to museums", plus: "Everyone could see real Moon and Mars machines.", minus: "Very expensive, and the sites lose their history." },
    { id: "reuse", title: "Let future explorers reuse their parts", plus: "Saves weight and money on new missions.", minus: "Old parts may be worn out, and history is lost." },
    { id: "cleanup", title: "Clean up the junk, starting with Earth orbit", plus: "Makes space safer for satellites and astronauts.", minus: "Cleaning up is hard and costly, and it doesn’t make new discoveries." }
  ],
  realWorld: "In 2020, the United States passed a law, the ‘One Small Step to Protect Human Heritage in Space Act’, asking Moon missions to respect the Apollo landing sites. Countries are still deciding the rules."
};

// ===== Challenge page: each challenge requirement and the feature that answers it =====
// Replace each "need" with the exact line from the official challenge text.
const CHALLENGE = [
  { need: "Tell the stories of hardware NASA has left on other worlds and in space", how: "25 machines across the Moon, Mars, Venus, Earth orbit and deep space, each telling its own story in short logs.", link: "#/destinations", label: "Destinations" },
  { need: "Show where that hardware is and what state it is in today", how: "A Then & now card on every machine, the Left Behind page sorted by status, and a live map with real distances and signal times.", link: "#/left-behind", label: "Left behind" },
  { need: "Explain what happens to hardware left behind, and why it still matters", how: "‘What’s happening to it’ and ‘Its legacy’ on every machine, plus the Mission Debrief on why NASA leaves machines behind.", link: "#/debrief", label: "Mission debrief" },
  { need: "Engage a young audience (ages 10–14)", how: "Wake-up missions based on real NASA decisions, rover driving with real signal delay, quizzes, badges and a phone sky finder.", link: "#/machine/opportunity", label: "Try a machine" },
  { need: "Use NASA data and resources", how: "Facts from NASA mission pages, photos from the NASA Image and Video Library, and positions worked out with published orbit maths.", link: "#/data", label: "Data & methods" },
  { need: "Get people thinking about what should happen next", how: "The Mission Debrief vote: protect, bring home, reuse or clean up the machines left behind, with real-world space heritage rules.", link: "#/debrief", label: "Vote" }
];

// ===== Data & methods page =====
const DATA_SOURCES = [
  ["NASA mission pages (science.nasa.gov, nasa.gov, jpl.nasa.gov)", "Every machine’s story, Tech Lab, facts, quiz questions, Then & now and wake-up missions are written from NASA mission information. Every quiz answer is checked against the text on that machine’s page."],
  ["NASA Image and Video Library (images-api.nasa.gov)", "Machine photos are loaded live from NASA’s image library."],
  ["Planet positions (Venus, Earth, Mars, Moon)", "Worked out in your browser from standard orbit formulas, simplified to circular orbits. Distances are accurate to within a few percent, good enough for ‘about’ signal times."],
  ["Deep-space probes (Voyager 1 & 2, Pioneer 10, New Horizons)", "Distance and direction from a late-2025 snapshot of published positions, moved forward at each probe’s known speed. Accurate to within about 1%."],
  ["Space telescopes", "Hubble (~540 km), Chandra (up to ~139,000 km) and Webb (L2, ~1.5 million km) use NASA’s published distances. Spitzer and Kepler drift around the Sun, so their distance is a rough estimate and marked as one."],
  ["Moon facts on the Left Behind page", "‘About 187 tonnes’ and ‘70+ spacecraft’ are widely published estimates based on catalogues of human-made material on the Moon."]
];
const DATA_SIMULATED = [
  ["Message replies", "Real spacecraft only take commands from NASA. Replies are written by Ghost Rovers from that machine’s real mission facts. The waiting time is real: it uses the machine’s real distance today and the speed of light."],
  ["Wake-up missions", "Steps marked ‘Real event’ are based on things that really happened. Steps marked ‘Training simulation’ are made-up practice situations built from real engineering."],
  ["Rover driving", "A simplified training map. Real rover drivers do plan each Martian day’s commands ahead because of the signal delay."],
  ["3D models", "Simplified models built from basic shapes to show roughly where each part is, not exact engineering models."]
];
