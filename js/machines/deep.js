// ===== Deep space machines =====
MACHINES.push(
  {
    id: "pioneer10", world: "deep", name: "Pioneer 10", short: "Pioneer 10", year: "1972",
    kind: "Deep space probe", status: "silent", statusText: "Silent since 2003", x: 68, y: 80,
    q: "Pioneer 10 spacecraft", must: "Pioneer",
    teaser: "I was the first spacecraft to cross the asteroid belt and visit Jupiter. I carry a message plaque for aliens!",
    logs: [
      { when: "March 2, 1972", title: "Into the unknown", text: "I launched faster than any spacecraft before me. Nobody knew whether a spacecraft could survive the asteroid belt." },
      { when: "1972–1973", title: "Through the asteroid belt", text: "I crossed the asteroid belt safely, the first spacecraft ever to do so." },
      { when: "December 1973", title: "Jupiter close-up", text: "I became the first spacecraft to visit Jupiter. I sent close-up pictures and found its radiation was far stronger than expected." },
      { when: "1983", title: "Past the planets", text: "I crossed the orbit of Neptune, the most distant planet, and kept going out of the solar system." },
      { when: "January 2003", title: "Last whisper", text: "My power faded as I flew away. My last faint signal reached Earth in January 2003. I’m heading toward the star Aldebaran, which I’ll pass in about 2 million years." }
    ],
    tech: [
      ["Nuclear power", "Sunlight is too weak far from the Sun, so I used nuclear generators."],
      ["Dish antenna", "A 2.74 m dish pointed at Earth to send data."],
      ["Spin stabilised", "I spun slowly, like a top, to keep myself steady."],
      ["Pioneer plaque", "A metal plaque with a drawing of a man and a woman, and a map showing where our Sun is."],
      ["Science instruments", "Measured magnetic fields, particles and dust, and took pictures of Jupiter."]
    ],
    facts: [
      "The Pioneer plaque was designed by astronomers Carl Sagan and Frank Drake.",
      "Pioneer 10’s twin, Pioneer 11, visited Jupiter and Saturn.",
      "Pioneer 10 will take about 2 million years to pass the star Aldebaran."
    ],
    science: "Pioneer 10 proved spacecraft could cross the asteroid belt and survive Jupiter’s radiation, paving the way for the Voyagers.",
    stats: [["Launched", "1972"], ["Jupiter flyby", "1973"], ["Last signal", "2003"], ["Status", "Silent"]],
    quiz: [
      ["Pioneer 10 was the first spacecraft to cross…", ["The asteroid belt", "The Atlantic Ocean", "The Moon’s surface", "Saturn’s rings"], "Nobody knew if a spacecraft could survive it."],
      ["Which planet was Pioneer 10 the first to visit?", ["Jupiter", "Saturn", "Neptune", "Mars"], "In December 1973."],
      ["What does the Pioneer plaque show?", ["A man and a woman, and a map to our Sun", "A list of NASA engineers", "A photo of the Moon landing", "Math homework"], "A message for anyone who finds it."],
      ["When did Earth hear Pioneer 10’s last signal?", ["January 2003", "1973", "1990", "2020"], "Its power faded as it flew away."],
      ["Why did Pioneer 10 use nuclear power?", ["Sunlight is too weak far from the Sun", "Solar panels are too heavy", "Nuclear power is free", "Space is dark everywhere"], "Nuclear generators kept it running."],
      ["What did Pioneer 10 discover about Jupiter’s radiation?", ["It was far stronger than expected", "There was none", "It was weaker than Earth’s", "It was made of sound"], "That helped engineers design tougher spacecraft."],
      ["Which star is Pioneer 10 heading toward?", ["Aldebaran", "The Sun", "Polaris", "Sirius"], "It will pass it in about 2 million years."],
      ["Who designed the Pioneer plaque?", ["Carl Sagan and Frank Drake", "Neil Armstrong and Buzz Aldrin", "The Wright brothers", "Edwin Hubble"], "Two famous astronomers."],
      ["How did Pioneer 10 keep itself steady?", ["It spun slowly, like a top", "It used wheels", "It anchored to an asteroid", "It used a parachute"], "This is called spin stabilisation."],
      ["Which planets did Pioneer 10’s twin, Pioneer 11, visit?", ["Jupiter and Saturn", "Mars and Venus", "Uranus and Neptune", "Mercury only"], "Pioneer 10 visited Jupiter."]
    ]
  },
  {
    id: "voyager1", world: "deep", name: "Voyager 1", short: "Voyager 1", year: "1977",
    kind: "Interstellar probe", status: "active", statusText: "Still working", x: 86, y: 18,
    q: "Voyager spacecraft", must: "Voyager",
    teaser: "I’m the farthest human-made object. My radio messages take about a whole day to reach Earth!",
    logs: [
      { when: "September 5, 1977", title: "Second to launch, first to arrive", text: "I launched 16 days after my twin, Voyager 2, but on a faster path, so I reached Jupiter first." },
      { when: "1979", title: "Volcanoes on Io", text: "At Jupiter I discovered active volcanoes on its moon Io, the first erupting volcanoes ever seen beyond Earth." },
      { when: "1980", title: "Saturn and Titan", text: "I flew past Saturn and swung close to its giant moon Titan, which is wrapped in a thick, hazy orange atmosphere." },
      { when: "February 14, 1990", title: "The Pale Blue Dot", text: "Before switching off my cameras, I turned around and photographed Earth from about 6 billion km away. It looked like a tiny speck in a sunbeam." },
      { when: "2012–today", title: "Interstellar!", text: "In 2012 I left the heliosphere, the bubble of particles blown out by the Sun, and entered interstellar space. Engineers switch off my instruments one by one to save my fading power." }
    ],
    tech: [
      ["Nuclear power", "Plutonium heat makes electricity, but the power drops a little every year."],
      ["Golden Record", "A gold-plated record with sounds, music, pictures and greetings in 55 languages."],
      ["Dish antenna", "A 3.7 m dish sends data home with a radio about as powerful as a fridge light bulb."],
      ["Thrusters", "Small rocket thrusters keep my antenna pointed at Earth."],
      ["Magnetometer", "Measures magnetic fields, even out in interstellar space."]
    ],
    facts: [
      "Voyager 1 is the farthest human-made object from Earth.",
      "A radio signal takes about a whole day to travel between Earth and Voyager 1.",
      "The Golden Record includes greetings in 55 languages."
    ],
    science: "Voyager 1 discovered active volcanoes on Jupiter’s moon Io, and it is now measuring interstellar space directly for the first time.",
    stats: [["Launched", "1977"], ["Interstellar since", "2012"], ["Signal travel time", "~1 day"], ["Status", "Still working"]],
    quiz: [
      ["Which Voyager launched first?", ["Voyager 2", "Voyager 1", "They launched at the same moment", "Neither has launched"], "Voyager 1 launched 16 days later on a faster path."],
      ["What does the ‘Pale Blue Dot’ photo show?", ["Earth as a tiny speck, from about 6 billion km away", "Neptune up close", "The Moon", "A blue star"], "Taken on February 14, 1990."],
      ["When did Voyager 1 enter interstellar space?", ["2012", "1977", "1990", "2024"], "It left the heliosphere."],
      ["What is the heliosphere?", ["The bubble of particles blown out by the Sun", "Earth’s atmosphere", "A ring around Saturn", "A cloud of comets"], "Leaving it means entering interstellar space."],
      ["What is on the Golden Record?", ["Sounds, music, pictures and greetings from Earth", "Gold coins", "Maps of every city", "The engineers’ phone numbers"], "A message for the cosmos."],
      ["The Golden Record includes greetings in how many languages?", ["55", "1", "5", "200"], "From many cultures on Earth."],
      ["Voyager 1 discovered active volcanoes on which world?", ["Jupiter’s moon Io", "Mars", "Earth’s Moon", "Saturn’s rings"], "The first erupting volcanoes seen beyond Earth."],
      ["Why are engineers switching off Voyager 1’s instruments?", ["To save its slowly fading nuclear power", "The instruments are finished", "To make it go faster", "To hide from aliens"], "The power drops a little every year."],
      ["About how long does a radio signal take to travel between Earth and Voyager 1?", ["About a day", "1 second", "8 minutes", "1 year"], "It’s the farthest human-made object."],
      ["Which moon did Voyager 1 swing close to at Saturn?", ["Titan, with its thick hazy atmosphere", "Our Moon", "Io", "Phobos"], "In 1980."]
    ]
  },
  {
    id: "voyager2", world: "deep", name: "Voyager 2", short: "Voyager 2", year: "1977",
    kind: "Interstellar probe", status: "active", statusText: "Still working", x: 82, y: 88,
    q: "Voyager 2 Neptune Uranus", must: "Voyager",
    teaser: "I’m the only spacecraft ever to visit Uranus and Neptune.",
    logs: [
      { when: "August 20, 1977", title: "First to launch", text: "Even though I’m called Voyager 2, I launched first. A rare line-up of the outer planets, which happens about once every 176 years, let me visit four of them." },
      { when: "1979–1981", title: "Jupiter and Saturn", text: "I flew past Jupiter in 1979 and Saturn in 1981. Each planet’s gravity swung me on to the next, like a cosmic slingshot." },
      { when: "1986", title: "Hello, Uranus", text: "I became the first and only spacecraft to visit Uranus, where I discovered new moons and rings." },
      { when: "1989", title: "Hello, Neptune", text: "At Neptune I spotted a giant storm called the Great Dark Spot and saw geysers erupting on its moon Triton." },
      { when: "2018–today", title: "Interstellar too", text: "In 2018 I joined Voyager 1 in interstellar space. I still send data home across more than 21 billion km." }
    ],
    tech: [
      ["Gravity assists", "Each planet’s gravity swung me on to the next one, like a cosmic slingshot."],
      ["Golden Record", "I carry a copy of the Golden Record too."],
      ["Scan platform", "A moving platform that pointed my cameras at planets and moons as I zoomed past."],
      ["Nuclear power", "Plutonium heat makes my electricity."],
      ["Dish antenna", "A 3.7 m dish for talking to Earth across billions of kilometres."]
    ],
    facts: [
      "Voyager 2 is the only spacecraft to have visited Uranus and Neptune.",
      "Voyager 2 visited four planets: Jupiter, Saturn, Uranus and Neptune.",
      "The planet line-up that made its Grand Tour possible happens about once every 176 years."
    ],
    science: "Voyager 2 discovered new moons and rings at Uranus and Neptune and saw geysers on Neptune’s moon Triton.",
    stats: [["Launched", "1977"], ["Planets visited", "4"], ["Interstellar since", "2018"], ["Status", "Still working"]],
    quiz: [
      ["Voyager 2 is the only spacecraft to have visited which planets?", ["Uranus and Neptune", "Mars and Venus", "Mercury and Pluto", "Earth and the Moon"], "In 1986 and 1989."],
      ["What giant storm did Voyager 2 spot on Neptune?", ["The Great Dark Spot", "The Great Red Spot", "The Big Blue Eye", "The Pale Blue Dot"], "In 1989."],
      ["What is a gravity assist?", ["Using a planet’s gravity to swing on to the next one", "A rocket that never stops firing", "Landing on a planet to refuel", "Pulling a spacecraft with a rope"], "Like a cosmic slingshot."],
      ["Voyager 2 saw geysers on which moon?", ["Triton", "Titan", "Io", "Phobos"], "Triton is a moon of Neptune."],
      ["When did Voyager 2 enter interstellar space?", ["2018", "2012", "1989", "1977"], "It joined Voyager 1 there."],
      ["How many planets did Voyager 2 visit?", ["4", "1", "2", "8"], "Jupiter, Saturn, Uranus and Neptune."],
      ["When did Voyager 2 launch?", ["August 20, 1977", "September 5, 1977", "July 20, 1969", "January 1, 2000"], "Before Voyager 1!"],
      ["How often does the planet line-up that made Voyager 2’s Grand Tour possible happen?", ["About once every 176 years", "Every year", "Every month", "Only once ever"], "A rare chance."],
      ["What did Voyager 2 discover at Uranus?", ["New moons and rings", "Oceans", "Volcanoes like Io’s", "A Great Red Spot"], "It is the only visitor Uranus has had."],
      ["What helped Voyager 2 point its cameras as it zoomed past?", ["A moving scan platform", "A helicopter", "Astronauts", "Its wheels"], "It aimed at planets and moons."]
    ]
  },
  {
    id: "newhorizons", world: "deep", name: "New Horizons", short: "New Horizons", year: "2006",
    kind: "Pluto and Kuiper Belt explorer", status: "active", statusText: "Still working", x: 56, y: 40,
    q: "New Horizons Pluto", must: "New Horizons",
    teaser: "I flew past Pluto in 2015 and found a giant heart on its surface!",
    logs: [
      { when: "January 19, 2006", title: "Fastest launch", text: "I left Earth so fast that I passed the Moon’s orbit in about 9 hours." },
      { when: "August 2006", title: "Pluto changes name tag", text: "While I was on my way, astronomers decided to call Pluto a dwarf planet. I kept going anyway!" },
      { when: "February 2007", title: "A boost from Jupiter", text: "I swung past Jupiter, and its gravity flung me even faster toward Pluto. To save power, I spent much of the long trip asleep in hibernation." },
      { when: "July 14, 2015", title: "Hello, Pluto!", text: "After a nine-and-a-half-year trip, I zoomed past Pluto and found mountains of water ice, a thin blue haze, and a huge heart-shaped plain of frozen nitrogen." },
      { when: "January 1, 2019", title: "Arrokoth", text: "I flew past Arrokoth, a small icy world in the Kuiper Belt beyond Neptune. It’s the most distant object ever explored up close." }
    ],
    tech: [
      ["Nuclear power", "Near Pluto, sunlight is roughly 1,000 times dimmer than at Earth, so I use a nuclear generator."],
      ["LORRI camera", "A telescope camera that took sharp close-ups of Pluto."],
      ["Ralph and Alice", "Instruments that mapped colours and studied Pluto’s thin air."],
      ["Hibernation mode", "I slept for much of my journey to save power and wear."],
      ["Piano-sized", "My body is about the size of a grand piano."]
    ],
    facts: [
      "New Horizons carries some of the ashes of Clyde Tombaugh, who discovered Pluto in 1930.",
      "Pluto’s heart-shaped region is named Tombaugh Regio.",
      "The Kuiper Belt is a ring of icy worlds beyond Neptune."
    ],
    science: "New Horizons revealed Pluto is an active world with glaciers of nitrogen ice and a thin blue haze, and showed us an untouched Kuiper Belt object.",
    stats: [["Launched", "2006"], ["Pluto flyby", "2015"], ["Arrokoth flyby", "2019"], ["Status", "Still working"]],
    quiz: [
      ["New Horizons found a huge heart-shaped plain on which world?", ["Pluto", "Mars", "Neptune", "The Moon"], "It’s made of frozen nitrogen."],
      ["How fast did New Horizons leave Earth?", ["It passed the Moon’s orbit in about 9 hours", "It took 3 days to pass the Moon", "It took 9 months", "It never passed the Moon"], "The fastest launch of its time."],
      ["What is Arrokoth?", ["A small icy world in the Kuiper Belt", "One of Pluto’s moons", "A comet that hit Earth", "An asteroid near Mars"], "The most distant object ever explored up close."],
      ["New Horizons carries some ashes of which person?", ["Clyde Tombaugh, who discovered Pluto", "Carl Sagan", "Albert Einstein", "Neil Armstrong"], "He discovered Pluto in 1930."],
      ["About how big is New Horizons?", ["About the size of a grand piano", "The size of a phone", "The size of a bus", "The size of a house"], "Small, light and fast."],
      ["When did New Horizons fly past Pluto?", ["July 14, 2015", "July 20, 1969", "January 19, 2006", "December 25, 2021"], "After a nine-and-a-half-year trip."],
      ["Why does New Horizons use nuclear power?", ["Sunlight near Pluto is about 1,000 times dimmer than at Earth", "It’s cheaper than batteries", "Pluto has no air", "To go faster"], "Solar panels wouldn’t work well that far out."],
      ["What did astronomers decide about Pluto in 2006?", ["To call it a dwarf planet", "That it doesn’t exist", "That it is a moon of Neptune", "That it is a star"], "New Horizons kept going anyway."],
      ["How did New Horizons save power on its long journey?", ["It slept in hibernation mode", "It switched off its gravity", "It sailed on the solar wind", "It borrowed power from Jupiter"], "It woke up for important events."],
      ["What is the Kuiper Belt?", ["A ring of icy worlds beyond Neptune", "A belt astronauts wear", "Rings around Saturn", "The asteroid belt near Mars"], "Arrokoth lives there."]
    ]
  }
);
