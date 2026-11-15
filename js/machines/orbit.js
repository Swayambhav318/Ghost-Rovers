// ===== Space telescope machines =====
MACHINES.push(
  {
    id: "hubble", world: "orbit", name: "Hubble Space Telescope", short: "Hubble", year: "1990",
    kind: "Telescope · low Earth orbit (~540 km)", status: "active", statusText: "Still working", x: 52, y: 45,
    q: "Hubble Space Telescope in orbit", must: "Hubble",
    teaser: "I’ve circled Earth since 1990, taking some of the most famous space pictures ever.",
    logs: [
      { when: "April 24, 1990", title: "Launch day", text: "Space Shuttle Discovery carried me to orbit about 540 km above Earth. I circle the planet about every 95 minutes." },
      { when: "1990", title: "A blurry start", text: "My first pictures were blurry. My main mirror had been ground to the wrong shape by a tiny fraction of a hair’s width, enough to blur everything." },
      { when: "December 1993", title: "Space glasses", text: "Astronauts flew up and fitted me with corrective optics, like a pair of glasses. My pictures became crystal clear. Astronauts visited me five times in all, between 1993 and 2009." },
      { when: "December 1995", title: "The Hubble Deep Field", text: "I stared at a tiny, empty-looking patch of sky for about 10 days. It turned out to hold about 3,000 galaxies!" },
      { when: "Today", title: "Still exploring", text: "I helped measure the age of the universe, about 13.8 billion years, and showed that its expansion is speeding up." }
    ],
    tech: [
      ["2.4 m mirror", "Collects light from very faint, faraway objects."],
      ["Above the air", "Earth’s atmosphere blurs and blocks some light. Up here, stars don’t twinkle."],
      ["Built to be fixed", "Designed so astronauts could swap and repair parts."],
      ["Gyroscopes", "Spinning gyroscopes help me point very precisely at my targets."],
      ["Solar panels", "Power my cameras and instruments."]
    ],
    facts: [
      "Hubble is named after astronomer Edwin Hubble, who showed the universe is expanding.",
      "Hubble has made more than 1.5 million observations.",
      "The International Space Station orbits lower than Hubble, about 400 km up."
    ],
    science: "Hubble’s deep field images revealed thousands of galaxies in a tiny patch of sky, showing how galaxies grew over cosmic time.",
    stats: [["Launched", "1990"], ["Orbit", "~540 km"], ["Servicing missions", "5"], ["Status", "Still working"]],
    quiz: [
      ["What was wrong with Hubble when it first launched?", ["Its mirror was the wrong shape, so pictures were blurry", "It couldn’t switch on", "Its lens cap was stuck", "It pointed at Earth"], "Off by a tiny fraction of a hair’s width."],
      ["How was Hubble’s blurry vision fixed?", ["Astronauts fitted corrective optics in 1993", "NASA launched a new telescope", "A laser reshaped the mirror from Earth", "It was never fixed"], "Like giving Hubble glasses."],
      ["How many times did astronauts visit Hubble?", ["5", "1", "0", "20"], "Between 1993 and 2009."],
      ["Hubble helped measure the age of the universe. About how old is it?", ["13.8 billion years", "4.5 billion years", "6,000 years", "100 billion years"], "And its expansion is speeding up."],
      ["Why put a telescope in space?", ["Earth’s atmosphere blurs and blocks some light", "Space is closer to the stars", "It’s cheaper", "Telescopes don’t work on the ground"], "Above the air, stars don’t twinkle."],
      ["Which Space Shuttle launched Hubble?", ["Discovery", "Columbia", "Atlantis", "Apollo 11"], "On April 24, 1990."],
      ["Who is Hubble named after?", ["Edwin Hubble, who showed the universe is expanding", "Isaac Newton", "Galileo Galilei", "Carl Sagan"], "A famous astronomer."],
      ["About how many galaxies were found in the Hubble Deep Field?", ["About 3,000", "About 3", "About 30", "None"], "In a tiny, empty-looking patch of sky."],
      ["About how long does Hubble take to circle Earth once?", ["About 95 minutes", "About 95 days", "About 1 year", "About 9 seconds"], "It orbits about 540 km up."],
      ["What helps Hubble point very precisely?", ["Spinning gyroscopes", "A compass", "Wings", "A steering wheel"], "They keep it steady on its targets."]
    ]
  },
  {
    id: "chandra", world: "orbit", name: "Chandra X-ray Observatory", short: "Chandra", year: "1999",
    kind: "X-ray telescope · stretched Earth orbit", status: "active", statusText: "Still working", x: 81, y: 39.4,
    q: "Chandra X-ray Observatory spacecraft", must: "Chandra",
    teaser: "I see X-rays from black holes and exploding stars. I’m named after Indian-American scientist Subrahmanyan Chandrasekhar!",
    logs: [
      { when: "July 23, 1999", title: "A record-setting launch", text: "Space Shuttle Columbia launched me, the heaviest cargo a Shuttle ever carried. Commander Eileen Collins was the first woman to command a Shuttle mission." },
      { when: "1999", title: "A long, stretched orbit", text: "My orbit swings out about a third of the way to the Moon, and one lap takes about 64 hours. That keeps me clear of Earth’s radiation belts most of the time, so I can watch the sky for long stretches." },
      { when: "1999", title: "X-ray eyes", text: "Earth’s air blocks X-rays, so I must observe from space. X-rays come from incredibly hot places, like gas swirling around black holes and the wreckage of exploded stars." },
      { when: "2006", title: "Proof of dark matter", text: "I studied the Bullet Cluster, two galaxy clusters smashing together. My X-ray images helped show that invisible dark matter is real." },
      { when: "Today", title: "Still watching", text: "I’m still working, often teaming up with Hubble and Webb to study the same objects in different kinds of light." }
    ],
    tech: [
      ["Nested mirrors", "X-rays only reflect at shallow, skimming angles, like a stone skipping on water, so my mirrors are nested tubes."],
      ["Super-smooth mirrors", "If Earth were as smooth as my mirrors, its highest mountain would be under 2 m tall."],
      ["X-ray cameras", "Special detectors that record each X-ray that arrives."],
      ["Stretched orbit", "A long, oval path that takes about 64 hours to complete."],
      ["Named for a hero", "Subrahmanyan Chandrasekhar won the 1983 Nobel Prize in Physics for his work on how stars live and die."]
    ],
    facts: [
      "Chandra’s name was chosen in a public naming contest.",
      "In Sanskrit, ‘Chandra’ means ‘Moon’ or ‘luminous’.",
      "Chandra is the heaviest cargo ever carried by a Space Shuttle."
    ],
    science: "Chandra helped prove dark matter is real by studying colliding galaxy clusters such as the Bullet Cluster, and it maps the hottest places in the universe.",
    stats: [["Launched", "1999"], ["Sees", "X-rays"], ["One orbit", "~64 hours"], ["Status", "Still working"]],
    quiz: [
      ["What kind of light does Chandra see?", ["X-rays", "Radio waves", "Only visible light", "Sound"], "X-rays come from incredibly hot places."],
      ["Chandra is named after which scientist?", ["Subrahmanyan Chandrasekhar", "Kalpana Chawla", "Homi Bhabha", "C. V. Raman"], "He won the 1983 Nobel Prize in Physics."],
      ["Why must an X-ray telescope be in space?", ["Earth’s air blocks X-rays", "X-rays only exist near the Sun", "It needs to be near the Moon", "Gravity bends X-rays on Earth"], "That same blocking protects us on the ground."],
      ["Why are Chandra’s mirrors nested tubes?", ["X-rays only reflect at shallow, skimming angles", "To save money", "To look cool", "So astronauts can climb inside"], "Like a stone skipping on water."],
      ["How far out does Chandra’s orbit swing?", ["About a third of the way to the Moon", "Just 10 km up", "All the way to Mars", "Around the Sun"], "A long, stretched orbit."],
      ["Who commanded the Shuttle mission that launched Chandra?", ["Eileen Collins, the first woman Shuttle commander", "Sally Ride", "Neil Armstrong", "Kalpana Chawla"], "On Columbia in July 1999."],
      ["What did Chandra’s images of the Bullet Cluster help prove?", ["Dark matter is real", "Mars has water", "The Moon is hollow", "Black holes don’t exist"], "Two galaxy clusters smashing together."],
      ["About how long does Chandra take to complete one orbit?", ["About 64 hours", "About 90 minutes", "About 1 year", "About 6 minutes"], "Its orbit is long and oval."],
      ["What does ‘Chandra’ mean in Sanskrit?", ["Moon or luminous", "Sun", "Fire", "Star"], "Its name was chosen in a contest."],
      ["If Earth were as smooth as Chandra’s mirrors, how tall would its highest mountain be?", ["Under 2 m", "About 2 km", "About 9 km", "About 200 km"], "Super smooth!"]
    ]
  },
  {
    id: "spitzer", world: "orbit", name: "Spitzer Space Telescope", short: "Spitzer", year: "2003",
    kind: "Infrared telescope · trailing Earth around the Sun", status: "retired", statusText: "Retired 2020", x: 29, y: 11,
    q: "Spitzer Space Telescope", must: "Spitzer",
    teaser: "I saw the universe in infrared ‘heat’ light and helped discover seven Earth-sized planets around one star.",
    logs: [
      { when: "August 25, 2003", title: "A cool orbit", text: "I settled into an orbit around the Sun, slowly trailing behind Earth. Staying far from Earth’s warmth helped keep me cold." },
      { when: "2003–2009", title: "Kept cold", text: "Infrared telescopes must be very cold, or their own heat would drown out the faint glow they’re trying to see. Liquid helium kept my instruments just a few degrees above absolute zero." },
      { when: "2009", title: "Running out of coolant", text: "My liquid helium ran out, but some of my cameras still worked, so I kept observing in a ‘warm mission’ for more than 10 more years." },
      { when: "2009", title: "A giant hidden ring", text: "I discovered a huge, faint ring around Saturn, made of dust and ice and far larger than its famous bright rings." },
      { when: "2017–2020", title: "Seven worlds", text: "I helped find seven Earth-sized planets around the star TRAPPIST-1. NASA switched me off in January 2020, after more than 16 years in space. I’m still drifting around the Sun." }
    ],
    tech: [
      ["Infrared eyes", "Sees heat glow, which passes through dust that blocks normal light."],
      ["85 cm mirror", "Collected faint infrared light from distant stars and galaxies."],
      ["Liquid helium", "Kept my instruments just a few degrees above absolute zero."],
      ["Earth-trailing orbit", "Following Earth around the Sun kept me away from Earth’s heat."],
      ["Named for a pioneer", "Lyman Spitzer was the first to suggest putting telescopes in space."]
    ],
    facts: [
      "Spitzer was the last of NASA’s four Great Observatories: Hubble, Compton, Chandra and Spitzer.",
      "Infrared light is the heat glow you can feel from a warm object but can’t see with your eyes.",
      "The retired Spitzer and Kepler telescopes both orbit the Sun, trailing behind Earth."
    ],
    science: "Spitzer peered through cosmic dust to see newborn stars, measured light from planets around other stars, and discovered a huge, faint ring around Saturn.",
    stats: [["Launched", "2003"], ["Sees", "Infrared"], ["Ended", "2020"], ["Status", "Retired"]],
    quiz: [
      ["What kind of light did Spitzer see?", ["Infrared (heat glow)", "X-rays", "Ultraviolet only", "Sound"], "It passes through dust that blocks normal light."],
      ["Why do infrared telescopes need to be very cold?", ["Their own heat would drown out the faint glow they’re looking for", "So they don’t melt", "To save batteries", "Cold glass is clearer"], "Spitzer used liquid helium."],
      ["Spitzer helped find seven Earth-sized planets around which star?", ["TRAPPIST-1", "The Sun", "Sirius", "Polaris"], "It was switched off in 2020."],
      ["Spitzer discovered a huge, faint ring around which planet?", ["Saturn", "Earth", "Mars", "Venus"], "Made of dust and ice."],
      ["Where is the retired Spitzer telescope now?", ["Orbiting the Sun, trailing behind Earth", "Crashed on the Moon", "Burned up in Earth’s air", "Parked at the space station"], "Kepler is trailing Earth too."],
      ["What happened to Spitzer in 2009?", ["Its coolant ran out, but it kept working", "It crashed into the Moon", "Astronauts repaired it", "It was launched"], "Its ‘warm mission’ lasted 10 more years."],
      ["When was Spitzer switched off?", ["January 2020", "December 1990", "July 1969", "It’s still working"], "After more than 16 years in space."],
      ["Who was Spitzer named after?", ["Lyman Spitzer, who first suggested telescopes in space", "A NASA dog", "A famous footballer", "The inventor of the telescope"], "A true space pioneer."],
      ["How many Great Observatories did NASA launch?", ["Four", "One", "Ten", "Two"], "Hubble, Compton, Chandra and Spitzer."],
      ["How wide was Spitzer’s mirror?", ["85 cm", "6.5 m", "2.4 m", "8.5 m"], "Smaller than Hubble’s 2.4 m mirror, but perfect for infrared."]
    ]
  },
  {
    id: "kepler", world: "orbit", name: "Kepler Space Telescope", short: "Kepler", year: "2009",
    kind: "Planet hunter · trailing Earth around the Sun", status: "retired", statusText: "Retired 2018", x: 14, y: 24.5,
    q: "Kepler spacecraft", must: "Kepler",
    teaser: "I stared at one patch of sky and found thousands of planets around other stars.",
    logs: [
      { when: "March 2009", title: "A planet hunter launches", text: "I launched into an orbit around the Sun, trailing behind Earth, so Earth would never block my view." },
      { when: "2009–2013", title: "One patch of sky", text: "I stared at about 150,000 stars in the constellations Cygnus and Lyra without blinking, watching for tiny dips in brightness." },
      { when: "2009–2013", title: "Catching shadows", text: "When a planet passes in front of its star, the star dims very slightly. Measuring these dips, called transits, told scientists a planet’s size and how long its year is." },
      { when: "2013", title: "A clever fix", text: "Two of my four reaction wheels broke, so I couldn’t point steadily. Engineers used the gentle push of sunlight to balance me and began a new mission called K2." },
      { when: "October 2018", title: "Out of fuel", text: "I ran out of fuel and was retired, after confirming more than 2,600 planets. I still orbit the Sun, trailing behind Earth." }
    ],
    tech: [
      ["Huge camera", "42 light sensors (CCDs): the largest camera NASA had sent to space at the time."],
      ["1.4 m mirror", "Collected starlight from my patch of sky."],
      ["Super-precise light meter", "Sensitive enough to notice a dip like a flea crawling across a car headlight."],
      ["Reaction wheels", "Spinning wheels used to point the telescope without using fuel."],
      ["Transit method", "Finds planets by the tiny dips in starlight they cause."]
    ],
    facts: [
      "Kepler is named after Johannes Kepler, who worked out the laws of how planets move.",
      "Kepler found planets in the ‘habitable zone’, where liquid water could exist.",
      "Kepler showed planets are common: most stars probably have them."
    ],
    science: "Kepler showed planets are common: most stars likely have them, and many are small and rocky like Earth.",
    stats: [["Launched", "2009"], ["Planets confirmed", "2,600+"], ["Ended", "2018"], ["Status", "Retired"]],
    quiz: [
      ["How did Kepler find planets around other stars?", ["By watching for tiny dips in starlight as planets passed in front", "By taking close-up photos of each planet", "By listening for radio signals", "By sending probes to each star"], "This is the transit method."],
      ["About how many planets did Kepler confirm?", ["More than 2,600", "8", "50", "1 million"], "Before it ran out of fuel."],
      ["After two reaction wheels broke, what helped steady Kepler?", ["The gentle push of sunlight", "A rope to the ISS", "Magnets", "A second telescope"], "This started the K2 mission."],
      ["Why was Kepler retired in 2018?", ["It ran out of fuel", "It was hit by an asteroid", "It flew into the Sun", "Its mirror cracked"], "It still orbits the Sun."],
      ["About how many stars did Kepler watch at the same time?", ["About 150,000", "About 15", "Exactly 1", "About 150 billion"], "In one patch of sky."],
      ["How many light sensors (CCDs) did Kepler’s camera have?", ["42", "1", "4", "4,200"], "The largest camera NASA had sent to space at the time."],
      ["Who is Kepler named after?", ["Johannes Kepler, who worked out how planets move", "A famous astronaut", "A computer programmer", "A volcano"], "He lived about 400 years ago."],
      ["In which constellations was Kepler’s patch of sky?", ["Cygnus and Lyra", "Orion and Taurus", "The Big Dipper", "The Southern Cross"], "It stared there without blinking."],
      ["Kepler’s light meter could notice a dip as tiny as…", ["A flea crawling across a car headlight", "A cloud passing the Sun", "A plane passing the Moon", "A bird passing a lamp"], "Super precise!"],
      ["What is the ‘habitable zone’?", ["The area around a star where liquid water could exist", "The part of Earth where people live", "The inside of a spacecraft", "The centre of a galaxy"], "Kepler found planets there."]
    ]
  },
  {
    id: "webb", world: "orbit", name: "James Webb Space Telescope", short: "Webb", year: "2021",
    kind: "Infrared telescope · L2, 1.5 million km away", status: "active", statusText: "Still working", x: 88, y: 86,
    q: "James Webb Space Telescope mirror", must: "Webb",
    teaser: "I’m the biggest space telescope ever launched, and I unfolded like origami on my way!",
    logs: [
      { when: "December 25, 2021", title: "A Christmas launch", text: "An Ariane 5 rocket launched me from French Guiana. I was built by NASA with the European and Canadian space agencies, and I was too big to launch unfolded." },
      { when: "Late 2021–January 2022", title: "Unfolding", text: "Over about two weeks I unfolded my tennis-court-sized sunshield and my 6.5 m golden mirror, made of 18 hexagon-shaped segments." },
      { when: "January 2022", title: "Arriving at L2", text: "About a month after launch I reached L2, a balance point 1.5 million km from Earth. Tiny motors then moved each mirror segment until they all focused together." },
      { when: "July 2022", title: "First pictures", text: "My first images were released, including the deepest, sharpest infrared view of the distant universe ever taken at the time." },
      { when: "Today", title: "Looking back in time", text: "I spot galaxies from when the universe was very young, and I study the air of planets around other stars. I made the first clear detection of carbon dioxide in one of them." }
    ],
    tech: [
      ["Golden mirror", "18 gold-coated segments make a 6.5 m mirror. Gold reflects infrared light very well."],
      ["Sunshield", "5 thin layers, as big as a tennis court, keep the telescope colder than −220 °C."],
      ["Adjustable segments", "Tiny motors move each mirror segment to bring everything into focus."],
      ["Infrared instruments", "Cameras and spectrometers that see heat glow from very distant and dusty places."],
      ["L2 orbit", "A balance point that moves with Earth around the Sun, keeping Sun, Earth and Moon behind my shield."]
    ],
    facts: [
      "Webb is named after James Webb, who led NASA in the 1960s during the Apollo era.",
      "Webb’s mirror is about 2.7 times wider than Hubble’s.",
      "Webb took about a month to reach L2."
    ],
    science: "Webb has found surprisingly bright galaxies from the early universe and studied the air of planets around other stars.",
    stats: [["Launched", "2021"], ["Mirror", "6.5 m"], ["Distance", "1.5 million km"], ["Status", "Still working"]],
    quiz: [
      ["How many hexagon segments make up Webb’s main mirror?", ["18", "1", "6", "100"], "Together they form a 6.5 m mirror."],
      ["Why is Webb’s mirror coated in gold?", ["Gold reflects infrared light very well", "To look fancy", "Gold is the cheapest metal", "To keep aliens away"], "Webb sees in infrared."],
      ["Where is Webb located?", ["At L2, about 1.5 million km from Earth", "400 km up, near the ISS", "On the Moon", "Orbiting Mars"], "A balance point that moves with Earth."],
      ["About how big is Webb’s sunshield?", ["A tennis court", "A phone", "A football stadium", "A car"], "Five thin layers."],
      ["When did Webb launch?", ["Christmas Day 2021", "July 4, 1976", "January 1, 2000", "Halloween 2010"], "On an Ariane 5 rocket."],
      ["What kind of light does Webb mainly see?", ["Infrared", "X-rays", "Radio waves", "Only visible light"], "Heat glow from distant, dusty places."],
      ["Which space agencies built Webb with NASA?", ["The European and Canadian space agencies", "No other agencies", "Only private companies", "Only the Russian space agency"], "A big international team."],
      ["How do Webb’s mirror segments get focused?", ["Tiny motors move each segment", "Astronauts adjust them by hand", "They melt into shape", "They never needed focusing"], "Done after arriving at L2."],
      ["Who is Webb named after?", ["James Webb, who led NASA during the Apollo era", "A famous footballer", "The inventor of the telescope", "A spider scientist"], "He ran NASA in the 1960s."],
      ["How cold does Webb’s sunshield keep the telescope?", ["Colder than −220 °C", "About 20 °C", "About 0 °C", "Hotter than 100 °C"], "Infrared telescopes must be super cold."]
    ]
  }
);
