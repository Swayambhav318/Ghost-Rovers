// ===== Mars machines =====
MACHINES.push(
  {
    id: "viking1", world: "mars", name: "Viking 1 lander", short: "Viking 1", year: "1976",
    kind: "Lander · Chryse Planitia", status: "silent", statusText: "Silent", x: 36.7, y: 37.6,
    q: "Viking 1 lander Mars surface", must: "Viking",
    teaser: "I was NASA’s first Mars lander, and I sent home the first clear photos from the surface of Mars!",
    logs: [
      { when: "August 1975", title: "A two-part explorer", text: "I launched as part of a pair: an orbiter to map Mars from above, and me, the lander. After about ten months in space we reached orbit around Mars." },
      { when: "July 20, 1976", title: "Hello, Mars!", text: "Exactly seven years after Apollo 11 landed on the Moon, I landed on a plain called Chryse Planitia. Minutes later I sent home a photo of my own footpad on Martian ground." },
      { when: "1976", title: "Looking for life", text: "My robot arm scooped soil into a mini biology lab that tested for signs of tiny living things. The results were puzzling. Most scientists decided unusual soil chemistry, not life, caused them, but some still debate it." },
      { when: "1976–1982", title: "Weather reporter", text: "Every day I measured temperature, wind and air pressure. I found the air pressure rises and falls with the seasons, as carbon dioxide freezes and thaws at the poles." },
      { when: "November 1982", title: "A wrong command", text: "I worked for more than six years. Then a mistaken command pointed my antenna away from Earth, and I fell silent." }
    ],
    tech: [
      ["Biology lab", "Three experiments that fed nutrients to soil and watched for gases living things might make."],
      ["Robot arm", "Scooped up soil samples for the experiments."],
      ["Nuclear power", "Two generators made electricity from the heat of decaying plutonium."],
      ["Scanning cameras", "Two cameras swept slowly across the scene to build panoramas."],
      ["Weather boom", "An arm with sensors for temperature, wind and air pressure."]
    ],
    facts: [
      "Chryse Planitia means ‘Plain of Gold’.",
      "Viking 1 had a twin, Viking 2, which landed on a different plain on Mars in 1976.",
      "Mars’s air is mostly carbon dioxide and very thin: less than 1% as thick as Earth’s."
    ],
    science: "Viking showed Mars’s surface is cold, dry and covered in chemically reactive soil. It set the stage for every Mars lander and rover that followed.",
    stats: [["Landed", "1976"], ["Worked for", "6+ years"], ["Power", "Nuclear"], ["Status", "Silent"]],
    quiz: [
      ["What was special about the date Viking 1 landed?", ["Exactly 7 years after Apollo 11 landed on the Moon", "It was New Year’s Day", "It was Christmas Day", "It was the day Sputnik launched"], "Both happened on July 20."],
      ["What was the first thing Viking 1 photographed on Mars?", ["Its own footpad on the ground", "A Martian sunset", "Earth in the sky", "Olympus Mons"], "It sent the photo minutes after landing."],
      ["What did Viking 1’s biology lab test the soil for?", ["Signs of tiny living things", "Gold", "Oil", "Dinosaur bones"], "The results were puzzling."],
      ["What do most scientists think caused Viking’s puzzling biology results?", ["Unusual soil chemistry", "Tiny Martian animals", "Water from Earth", "A broken camera"], "Some still debate it."],
      ["Why did Viking 1 finally go silent?", ["A mistaken command pointed its antenna away from Earth", "A meteor hit it", "It ran out of fuel", "A dust storm buried it"], "It had worked for more than six years."],
      ["What powered Viking 1?", ["Nuclear generators using heat from plutonium", "Solar panels", "Petrol", "Wind"], "Two generators made its electricity."],
      ["What does Chryse Planitia mean?", ["Plain of Gold", "Valley of Fire", "Red Mountain", "Sea of Dust"], "It’s where Viking 1 landed."],
      ["What did Viking 1 discover about Mars’s air pressure?", ["It rises and falls with the seasons", "It never changes", "It’s higher than Earth’s", "There is no air on Mars"], "Carbon dioxide freezes and thaws at the poles."],
      ["What travelled to Mars together with the Viking 1 lander?", ["An orbiter that mapped Mars from above", "A crew of astronauts", "A helicopter", "A rover"], "They reached Mars orbit after about ten months."],
      ["What is Mars’s air mostly made of?", ["Carbon dioxide", "Oxygen", "Water vapour", "Helium"], "It’s also less than 1% as thick as Earth’s air."]
    ]
  },
  {
    id: "sojourner", world: "mars", name: "Sojourner rover", short: "Sojourner", year: "1997",
    kind: "Rover · Ares Vallis", status: "silent", statusText: "Silent", x: 40.8, y: 41.5,
    q: "Sojourner rover Mars Pathfinder", must: "Sojourner",
    teaser: "I’m about the size of a microwave oven, but I was the first rover to drive on another planet!",
    logs: [
      { when: "December 1996", title: "A small passenger", text: "I launched tucked inside the Mars Pathfinder lander. Pathfinder was a ‘faster, better, cheaper’ mission to test new ways of landing on Mars." },
      { when: "July 4, 1997", title: "Bouncing in", text: "Pathfinder hit Mars wrapped in giant airbags and bounced across the ground before rolling to a stop in Ares Vallis, an ancient flood channel." },
      { when: "1997", title: "Down the ramp", text: "I rolled down a ramp onto the ground: the first rover ever to drive on another planet. I weighed just 10.6 kg, about the size of a microwave oven." },
      { when: "1997", title: "Rock detective", text: "I drove up to rocks nicknamed Barnacle Bill and Yogi and pressed my spectrometer against them to find out which chemical elements they contained." },
      { when: "September 1997", title: "Built for a week", text: "I was designed to work for 7 days. I kept going for about 83 days, until my lander, which passed my messages to Earth, went quiet." }
    ],
    tech: [
      ["Solar panel", "A flat solar panel on my back gave me power."],
      ["Rocker-bogie wheels", "A clever suspension that let my 6 wheels climb over rocks. Later rovers used it too."],
      ["APXS spectrometer", "Told scientists which chemical elements were in a rock."],
      ["Cameras", "Two cameras at the front helped me avoid hazards, and one at the back took colour pictures."],
      ["Radio link", "I sent my data by radio to the Pathfinder lander, which passed it on to Earth."]
    ],
    facts: [
      "Sojourner was named after Sojourner Truth, an American who fought against slavery and for women’s rights. The name was chosen in a student essay contest.",
      "The Pathfinder lander was later renamed the Carl Sagan Memorial Station.",
      "Pathfinder’s photos showed rounded pebbles that hinted water once flowed there."
    ],
    science: "Sojourner proved a small rover could explore Mars, and Pathfinder’s rounded pebbles hinted that water once flowed through Ares Vallis.",
    stats: [["Landed", "1997"], ["Mass", "10.6 kg"], ["Lasted", "~83 days"], ["Status", "Silent"]],
    quiz: [
      ["About how big is Sojourner?", ["About the size of a microwave oven", "The size of a bus", "The size of a house", "The size of a phone"], "It weighed just 10.6 kg."],
      ["Sojourner was the first…", ["Rover to drive on another planet", "Spacecraft to reach the Moon", "Helicopter on Mars", "Object in space"], "It rolled down Pathfinder’s ramp in 1997."],
      ["How was Mars Pathfinder cushioned when it landed?", ["Giant airbags", "A sky crane", "Landing legs", "Nothing at all"], "It bounced across the ground."],
      ["Sojourner was designed for 7 days. About how long did it last?", ["About 83 days", "1 day", "15 years", "Exactly 7 days"], "It kept going until its lander went quiet."],
      ["Which lander carried Sojourner to Mars?", ["Mars Pathfinder", "Viking 1", "Phoenix", "InSight"], "It launched in December 1996."],
      ["What nicknames did scientists give rocks Sojourner studied?", ["Barnacle Bill and Yogi", "Tom and Jerry", "Rocky and Pebble", "Sun and Moon"], "It pressed its spectrometer against them."],
      ["What helped Sojourner’s 6 wheels climb over rocks?", ["Rocker-bogie suspension", "Air cushions", "Caterpillar tracks", "Springs made of rubber"], "Later rovers use it too."],
      ["Who was Sojourner named after?", ["Sojourner Truth, who fought against slavery and for women’s rights", "A NASA engineer", "A Roman god", "A famous racehorse"], "The name was chosen in a student essay contest."],
      ["What is Ares Vallis?", ["An ancient flood channel", "A volcano", "A polar ice cap", "A moon of Mars"], "Pathfinder landed there."],
      ["How did Sojourner send its data to Earth?", ["By radio to the Pathfinder lander, which passed it on", "By a long cable", "By posting memory cards", "Directly with a giant laser"], "When the lander went quiet, Sojourner did too."]
    ]
  },
  {
    id: "spirit", world: "mars", name: "Spirit rover", short: "Spirit", year: "2004",
    kind: "Rover · Gusev crater", status: "silent", statusText: "Silent", x: 96, y: 58.1,
    q: "Spirit rover Mars Gusev", must: "Spirit",
    teaser: "I’m Opportunity’s twin. When one of my wheels broke, I drove backwards, and that led to my biggest discovery!",
    logs: [
      { when: "January 4, 2004", title: "Twin rovers", text: "I bounced onto Mars in airbags and landed in Gusev crater. Three weeks later my twin, Opportunity, landed on the other side of Mars." },
      { when: "2004–2005", title: "Mountain climber", text: "I drove to a range named the Columbia Hills, after the crew of the Space Shuttle Columbia, and climbed all the way to the top of Husband Hill." },
      { when: "2005", title: "Dust devil photographer", text: "I filmed whirlwinds called dust devils racing across the plains. Some passed over me and swept dust off my solar panels, giving me surprise power boosts." },
      { when: "2007", title: "A lucky broken wheel", text: "My right front wheel stopped turning, so I drove backwards, dragging it. The stuck wheel scraped up bright white soil that was almost pure silica, a sign of ancient hot springs or steam vents." },
      { when: "2009–2011", title: "Stuck in sand", text: "In 2009 my wheels sank into soft sand at a place called Troy. I couldn’t escape, so I became a stationary science station until I fell silent in 2010. NASA ended my mission in 2011." }
    ],
    tech: [
      ["Pancam", "Two cameras on a mast for 3D colour panoramas."],
      ["Rock Abrasion Tool", "Ground away rock surfaces to see the fresh rock inside."],
      ["Arm instruments", "A microscope camera and spectrometers that worked out what rocks were made of."],
      ["Solar panels", "My only power source, so dust was always a worry."],
      ["Six motorised wheels", "Each wheel had its own motor, so I could keep going even when one failed."]
    ],
    facts: [
      "Spirit and Opportunity were each planned to last just 90 Martian days.",
      "A Martian day, called a sol, is about 40 minutes longer than an Earth day.",
      "Spirit drove about 7.7 km in total."
    ],
    science: "Spirit found evidence that hot water once flowed through Gusev crater. On Earth, places like hot springs are full of microbes.",
    stats: [["Planned", "90 sols"], ["Worked for", "~6 years"], ["Drove", "~7.7 km"], ["Status", "Silent"]],
    quiz: [
      ["Who was Spirit’s twin rover?", ["Opportunity", "Curiosity", "Sojourner", "Perseverance"], "They landed three weeks apart in 2004."],
      ["Where did Spirit land?", ["Gusev crater", "Jezero crater", "Gale crater", "Olympus Mons"], "It bounced in on airbags."],
      ["How long was Spirit’s mission planned to last?", ["90 Martian days", "1 Earth day", "10 years", "1 month"], "It worked for about six years."],
      ["How did Spirit discover the white silica soil?", ["By dragging a broken wheel while driving backwards", "By drilling a deep hole", "A meteorite uncovered it", "A dust devil blew it open"], "The stuck wheel scraped away the top layer."],
      ["What does Spirit’s silica discovery suggest?", ["Mars once had hot springs or steam vents", "Mars has active volcanoes today", "Mars was covered in plants", "Mars has snowy mountains"], "On Earth, hot springs are full of microbes."],
      ["What ended Spirit’s driving days?", ["It got stuck in soft sand at Troy", "It drove off a cliff", "It ran out of fuel", "Its camera broke"], "It became a stationary science station."],
      ["What gave Spirit surprise power boosts?", ["Dust devils sweeping its solar panels clean", "Lightning", "Batteries dropped from orbit", "Volcanoes"], "Whirlwinds sometimes passed right over it."],
      ["The Columbia Hills were named after…", ["The crew of the Space Shuttle Columbia", "A country in South America", "A famous movie", "Christopher Columbus’s ship"], "Spirit climbed Husband Hill there."],
      ["How long is a sol, a day on Mars?", ["About 40 minutes longer than an Earth day", "Exactly one Earth week", "About one hour", "Half an Earth day"], "Rover missions are planned in sols."],
      ["Which of Spirit’s wheels stopped turning?", ["The right front wheel", "All six wheels", "The left rear wheel", "None of them"], "So Spirit drove backwards."]
    ]
  },
  {
    id: "opportunity", world: "mars", name: "Opportunity rover", short: "Oppy", year: "2004",
    kind: "Rover · Meridiani Planum", status: "silent", statusText: "Silent", x: 48.5, y: 51.1,
    q: "Opportunity rover Mars", must: "Opportunity",
    teaser: "They built me to last 90 days. I kept exploring Mars for almost 15 years!",
    logs: [
      { when: "January 25, 2004", title: "A bouncy hole-in-one", text: "Wrapped in giant airbags, I bounced and rolled across Meridiani Planum and ended up inside a small crater. Scientists called it a hole-in-one, because its walls showed rock layers I could study up close." },
      { when: "2004", title: "Blueberries! (Not the tasty kind)", text: "The ground was covered in tiny round pebbles nicknamed ‘blueberries’. They’re made of hematite, a mineral that on Earth often forms in water. Together with the rock layers, they were strong evidence this place was once wet." },
      { when: "2004–2011", title: "Way past 90 days", text: "My mission was planned for 90 Martian days. Everyone expected dust to cover my solar panels, but gusts of wind kept blowing them clean, so I kept driving from crater to crater." },
      { when: "2011", title: "Endeavour crater", text: "After a three-year drive I reached Endeavour, a crater about 22 km wide. Its rim held clay minerals and bright veins of gypsum, which formed from water flowing through cracks." },
      { when: "March 2015", title: "A marathon on Mars", text: "I passed 42.2 km of driving, a full marathon. It took me about 11 years! In the end I drove more than 45 km." },
      { when: "June 2018", title: "The great dust storm", text: "A dust storm covered the whole planet and blocked out the Sun. My batteries ran down and I went silent. NASA sent more than 1,000 commands trying to wake me before ending my mission in 2019." }
    ],
    tech: [
      ["Panoramic camera", "Two ‘eyes’ on a mast for 3D colour pictures."],
      ["Rock grinder", "Ground away a rock’s dusty outside to see the fresh rock underneath."],
      ["Robot arm tools", "A microscope camera and spectrometers that worked out which minerals a rock contained."],
      ["Solar panels", "Wind ‘cleaning events’ blew dust off them and kept me going for years."],
      ["Rocker-bogie wheels", "Six wheels on a suspension that let me roll over rocks."]
    ],
    facts: [
      "Opportunity and Spirit were named by Sofi Collis, a 9-year-old student who won a naming contest.",
      "Opportunity holds the record for the longest drive on another world: more than 45 km.",
      "Opportunity has a mass of about 185 kg."
    ],
    science: "Opportunity found strong evidence that Meridiani Planum once had liquid water, so long ago it could have been a place where life was possible.",
    stats: [["Planned", "90 sols"], ["Actual", "~15 years"], ["Distance", "45+ km"], ["Mass", "~185 kg"]],
    quiz: [
      ["How long was Opportunity’s mission planned to last?", ["90 Martian days", "1 Earth year", "15 years", "1 week"], "It kept going for almost 15 years!"],
      ["Opportunity’s ‘blueberries’ are made of which mineral?", ["Hematite", "Ice", "Gold", "Diamond"], "On Earth, hematite like this often forms in water."],
      ["Why did Opportunity’s first landing spot get called a hole-in-one?", ["It rolled into a small crater full of rock layers", "It landed on a golf course", "It landed in a lake", "It made a hole in the ground"], "Its walls showed rock layers up close."],
      ["What kept Opportunity’s solar panels working for so long?", ["Gusts of wind blowing them clean", "Astronauts cleaning them", "A windscreen wiper", "Rain"], "Engineers called these cleaning events."],
      ["What famous distance did Opportunity pass in 2015?", ["A marathon (42.2 km)", "1 km", "The distance to the Moon", "1,000 km"], "It took about 11 years."],
      ["What ended Opportunity’s mission?", ["A dust storm covered the whole planet and blocked out the Sun", "A meteor strike", "It drove into a lake", "It fell over"], "Its batteries ran down."],
      ["How many commands did NASA send trying to wake Opportunity?", ["More than 1,000", "Just 1", "About 10", "None"], "The mission ended in 2019."],
      ["What did Opportunity find in the rim of Endeavour crater?", ["Clay minerals and veins of gypsum formed by water", "Gold nuggets", "Fossils", "Fresh lava"], "Water once flowed through cracks there."],
      ["Who named Spirit and Opportunity?", ["Sofi Collis, a 9-year-old student", "The President", "A famous astronaut", "A computer"], "She won a naming contest."],
      ["What record does Opportunity hold?", ["The longest drive on another world", "The fastest rover ever", "The heaviest rover", "The first rover on Mars"], "More than 45 km."]
    ]
  },
  {
    id: "phoenix", world: "mars", name: "Phoenix lander", short: "Phoenix", year: "2008",
    kind: "Lander · Arctic plains", status: "silent", statusText: "Silent", x: 15.1, y: 12.1,
    q: "Phoenix Mars lander", must: "Phoenix",
    teaser: "I landed near Mars’s north pole and dug up water ice. Then I watched it vanish into thin air!",
    logs: [
      { when: "August 2007", title: "Rising from the ashes", text: "I was built partly from an earlier lander that never launched. That’s why I’m named after the phoenix, a mythical bird reborn from ashes." },
      { when: "May 25, 2008", title: "Landing in the Arctic", text: "I came down on rocket thrusters onto icy plains near Mars’s north pole, farther north than any lander before me." },
      { when: "June 2008", title: "Disappearing ice", text: "My scoop dug a trench and uncovered bright white chunks. A few days later they had vanished: water ice turning straight into gas in the thin Martian air." },
      { when: "2008", title: "Tasting the soil", text: "My mini ovens heated soil samples and water vapour came out, confirming the ice. My wet chemistry lab found a salt called perchlorate in the soil." },
      { when: "November 2008", title: "Winter comes", text: "As winter arrived, sunlight faded and I lost power. Later photos from orbit showed heavy frost had broken my solar panels." }
    ],
    tech: [
      ["Robotic arm + scoop", "An arm about 2.4 m long that dug trenches into the icy soil."],
      ["Mini ovens", "Heated soil samples to see what gases came out."],
      ["Wet chemistry lab", "Mixed soil with water to find out what salts it contained."],
      ["Weather station", "A laser pointed at the sky detected snow falling from clouds."],
      ["Solar panels", "Two round, fan-shaped panels that unfolded after landing."]
    ],
    facts: [
      "The snow Phoenix saw evaporated before it reached the ground.",
      "Phoenix worked for about five months, longer than its planned three.",
      "Phoenix landed farther north than any other Mars lander."
    ],
    science: "Phoenix confirmed water ice just under the surface near Mars’s north pole and even saw snow falling from Martian clouds.",
    stats: [["Landed", "2008"], ["Worked for", "~5 months"], ["Found", "Water ice"], ["Status", "Silent"]],
    quiz: [
      ["Where on Mars did Phoenix land?", ["Near the north pole", "On top of Olympus Mons", "At the equator", "On the moon Phobos"], "Farther north than any lander before it."],
      ["What were the white chunks that vanished from Phoenix’s trench?", ["Water ice turning into gas", "Salt", "Snow from Earth", "Paint"], "Exposed ice disappeared in the thin air."],
      ["What did Phoenix’s laser detect falling from Martian clouds?", ["Snow", "Rain", "Hail", "Meteors"], "It evaporated before reaching the ground."],
      ["What came out when Phoenix heated soil in its mini ovens?", ["Water vapour", "Gold", "Smoke from fire", "Nothing"], "That confirmed the ice."],
      ["Why is the lander called Phoenix?", ["It was built partly from an earlier lander that never launched", "It was very hot", "It could fly", "It was painted red"], "A phoenix is a mythical bird reborn from ashes."],
      ["Which salt did Phoenix find in the soil?", ["Perchlorate", "Table salt", "Sugar", "Baking soda"], "Its wet chemistry lab found it."],
      ["How did Phoenix land?", ["On rocket thrusters", "Inside airbags", "With a sky crane", "Gliding on wings"], "It came down on three legs."],
      ["What ended Phoenix’s mission?", ["Winter: it lost power and frost broke its solar panels", "It drove into a crater", "A dust devil carried it off", "It ran out of fuel"], "Polar winters on Mars are long and dark."],
      ["About how long did Phoenix work on Mars?", ["About five months", "About five years", "About five minutes", "About fifty years"], "Longer than its planned three months."],
      ["About how long is Phoenix’s robotic arm?", ["About 2.4 m", "About 24 cm", "About 24 m", "It had no arm"], "It dug trenches into the icy soil."]
    ]
  },
  {
    id: "curiosity", world: "mars", name: "Curiosity rover", short: "Curiosity", year: "2012",
    kind: "Rover · Gale crater", status: "active", statusText: "Still working", x: 88.2, y: 54,
    q: "Curiosity rover selfie Mars", must: "Curiosity",
    teaser: "I’m as big as a car and nuclear-powered. I’ve been climbing a 5 km-tall mountain for years!",
    logs: [
      { when: "November 2011", title: "Too big for airbags", text: "I launched toward Mars. With a mass of about 900 kg, I’m as big as a car, far too heavy to land in airbags like earlier rovers." },
      { when: "August 6, 2012", title: "Seven minutes of terror", text: "A rocket-powered ‘sky crane’ lowered me on cables into Gale crater, then flew away. Engineers called the landing ‘seven minutes of terror’." },
      { when: "2013", title: "An ancient lake", text: "I drilled into a rock at a place called Yellowknife Bay and found that Gale crater once held a lake. Its water was calm and not too salty, the kind of place where microbes could have lived." },
      { when: "2014", title: "Up the mountain", text: "I reached Mount Sharp, a 5 km-tall mountain of rock layers in the middle of the crater, and started climbing. Each layer is like a page in Mars’s history book." },
      { when: "Today", title: "Still exploring", text: "I’ve found organic molecules preserved in ancient rocks and measured the radiation future astronauts would face, and I’m still climbing." }
    ],
    tech: [
      ["Nuclear power", "Turns heat from decaying plutonium into electricity, day and night."],
      ["ChemCam laser", "Zaps rocks from metres away and reads the light from the tiny spark to see what they’re made of."],
      ["Drill + onboard labs", "Powders rock and analyses it inside my body."],
      ["Mastcam", "Colour cameras on my mast that take detailed pictures and videos."],
      ["Radiation detector", "Measures the radiation on Mars that astronauts would need protection from."]
    ],
    facts: [
      "Curiosity takes ‘selfies’ by stitching together many photos from a camera on its robotic arm.",
      "Sharp rocks have dented and torn holes in Curiosity’s aluminium wheels.",
      "Organic molecules contain carbon. They can come from life or from non-living chemistry, so they are clues, not proof."
    ],
    science: "Curiosity showed Mars once had places where microbes could have lived, and it found organic molecules preserved in ancient rocks.",
    stats: [["Landed", "2012"], ["Mass", "~900 kg"], ["Power", "Nuclear"], ["Status", "Still working"]],
    quiz: [
      ["How did Curiosity land on Mars?", ["A rocket-powered sky crane lowered it on cables", "It bounced in airbags", "It used a parachute only", "Astronauts helped it down"], "It was too heavy for airbags."],
      ["What powers Curiosity?", ["Heat from decaying plutonium (nuclear power)", "Solar panels", "Petrol", "Wind"], "It works day and night."],
      ["What did Curiosity discover Gale crater once held?", ["A lake", "A forest", "A frozen ocean", "A city"], "Its calm, not-too-salty water could have suited microbes."],
      ["What mountain is Curiosity climbing?", ["Mount Sharp", "Mount Everest", "Olympus Mons", "Husband Hill"], "It’s about 5 km tall."],
      ["What does Curiosity’s ChemCam do?", ["Zaps rocks with a laser to find out what they’re made of", "Only takes selfies", "Cooks food", "Measures marsquakes"], "It reads the light from the spark."],
      ["About how heavy is Curiosity?", ["About 900 kg, as big as a car", "About 10 kg", "About 90 tonnes", "About 900 g"], "Far too heavy for airbags."],
      ["What did engineers call Curiosity’s landing?", ["Seven minutes of terror", "The great bounce", "The long sleep", "The slow ride"], "So much had to go right in a few minutes."],
      ["At which place did Curiosity drill the rock that showed an ancient lake?", ["Yellowknife Bay", "Troy", "Shorty crater", "Barnacle Bill"], "Log 3 names the spot."],
      ["How does Curiosity take selfies?", ["By stitching together many photos from a camera on its arm", "A helicopter takes them", "Astronauts take them", "A satellite zooms in"], "That’s why the arm is hidden in the pictures."],
      ["What are organic molecules?", ["Carbon-containing chemicals that can come from life or non-living chemistry", "Living bacteria", "Fossils of fish", "Plant seeds"], "They are clues, not proof of life."]
    ]
  },
  {
    id: "insight", world: "mars", name: "InSight lander", short: "InSight", year: "2018",
    kind: "Lander · Elysium Planitia", status: "silent", statusText: "Silent", x: 87.2, y: 45.5,
    q: "InSight lander Mars seismometer", must: "InSight",
    teaser: "I listened to Mars’s heartbeat and felt more than 1,300 marsquakes!",
    logs: [
      { when: "May 2018", title: "A planet doctor", text: "I launched from California, the first planetary mission to launch from the US West Coast. My job: check Mars’s ‘vital signs’, like a doctor." },
      { when: "November 26, 2018", title: "Sitting still", text: "I landed on a flat plain called Elysium Planitia. I didn’t drive anywhere. Instead, my robotic arm placed my instruments on the ground." },
      { when: "April 2019", title: "The first marsquake", text: "My seismometer felt the first marsquake ever detected. Over about four years I felt more than 1,300, and the way the waves travelled revealed what’s inside Mars." },
      { when: "2019–2021", title: "The stubborn mole", text: "My heat probe, nicknamed ‘the mole’, was meant to hammer itself 5 m down. The soil was too clumpy to grip, so it never dug deep enough." },
      { when: "December 2022", title: "A dusty goodbye", text: "Dust slowly covered my solar panels. My last message reached Earth in December 2022." }
    ],
    tech: [
      ["Seismometer", "Felt tiny ground shakes. It sat under a dome that shielded it from wind and temperature changes."],
      ["Heat probe ‘the mole’", "A self-hammering spike meant to measure heat flowing out of Mars."],
      ["Robotic arm", "Lifted my instruments off my deck and set them on the ground."],
      ["Radio wobble experiment", "Used my radio signal to track tiny wobbles in how Mars spins."],
      ["Solar panels", "My only power source."]
    ],
    facts: [
      "InSight’s quake data showed Mars has a large liquid metal core.",
      "Big meteorite impacts on Mars also shook InSight’s seismometer.",
      "InSight’s name comes from ‘Interior Exploration using Seismic Investigations, Geodesy and Heat Transport’."
    ],
    science: "InSight gave us the first map of Mars’s insides: its crust, its mantle and a large liquid metal core.",
    stats: [["Landed", "2018"], ["Marsquakes", "1,300+"], ["Ended", "2022"], ["Status", "Silent"]],
    quiz: [
      ["What was InSight’s main job?", ["Studying the inside of Mars", "Driving around to find water", "Flying over craters", "Collecting rocks for Earth"], "Like a doctor checking vital signs."],
      ["About how many marsquakes did InSight feel?", ["More than 1,300", "Exactly 1", "About 13", "None"], "Over about four years."],
      ["Why didn’t InSight’s ‘mole’ dig deep enough?", ["The soil was too clumpy to grip", "It was too hot", "It hit an underground lake", "It was never switched on"], "It was meant to reach 5 m down."],
      ["Why was InSight’s seismometer covered by a dome?", ["To shield it from wind and temperature changes", "To keep aliens away", "To collect rain", "To make it look nice"], "Even a breeze could shake it."],
      ["What powered InSight?", ["Solar panels", "Nuclear generators", "A petrol engine", "Wind turbines"], "Dust slowly covered them."],
      ["When did InSight’s mission end?", ["December 2022", "1976", "2004", "It’s still working"], "Its last message reached Earth then."],
      ["What was special about InSight’s launch?", ["It was the first planetary mission to launch from the US West Coast", "It launched from the Moon", "It launched on Christmas Day", "It launched from a ship"], "It launched from California."],
      ["What did InSight’s quake data reveal about Mars?", ["It has a large liquid metal core", "It is hollow", "It has no core", "It is made of ice inside"], "Quake waves change as they pass through layers."],
      ["Where did InSight land?", ["Elysium Planitia", "Jezero crater", "Gale crater", "The north pole"], "A flat plain, good for a lander that stays put."],
      ["When was the first marsquake ever detected?", ["April 2019", "July 1969", "January 2004", "It hasn’t happened yet"], "InSight’s seismometer felt it."]
    ]
  },
  {
    id: "perseverance", world: "mars", name: "Perseverance rover", short: "Percy", year: "2021",
    kind: "Rover · Jezero crater", status: "active", statusText: "Still working", x: 71.5, y: 39.8,
    q: "Perseverance rover Mars", must: "Perseverance",
    teaser: "I’m collecting rock samples in tubes so a future mission might bring them back to Earth.",
    logs: [
      { when: "July 30, 2020", title: "Launch with a passenger", text: "I launched toward Mars with a tiny helicopter, Ingenuity, tucked under my belly." },
      { when: "February 18, 2021", title: "Landing in an old lake", text: "I landed in Jezero crater, which held a lake and a river delta billions of years ago, a great place to look for signs of ancient life. During landing I compared my camera views with a map to dodge hazards." },
      { when: "2021", title: "Making oxygen", text: "I carried an experiment called MOXIE that made oxygen from the carbon dioxide in Mars’s air. Future astronauts might use that trick to breathe and to make rocket fuel." },
      { when: "2021", title: "Listening to Mars", text: "My microphones recorded the first sounds from the surface of Mars, including the wind and the hum of Ingenuity’s blades." },
      { when: "2022–2023", title: "Sample collector", text: "I drill rock cores and seal them in tubes. I left ten tubes on the ground in a ‘sample depot’ for a possible future mission to pick up." }
    ],
    tech: [
      ["Sample caching system", "A drill and sealed tubes to store rock cores."],
      ["Microphones", "Recorded the first sounds from the surface of Mars."],
      ["SuperCam & PIXL", "Lasers and X-rays that study rocks up close, hunting for signs of past life."],
      ["Terrain-relative navigation", "Compared camera views with a map during landing to dodge hazards."],
      ["Nuclear power", "Heat from decaying plutonium makes my electricity, like Curiosity."]
    ],
    facts: [
      "Perseverance was named by Alex Mather, a seventh-grade student who won a naming contest.",
      "Perseverance has a mass of about 1,025 kg.",
      "MOXIE made oxygen from carbon dioxide, which makes up most of Mars’s air."
    ],
    science: "Perseverance found rocks shaped by water in Jezero crater and is collecting the best samples ever gathered on another planet.",
    stats: [["Landed", "2021"], ["Mass", "~1,025 kg"], ["Power", "Nuclear"], ["Status", "Still working"]],
    quiz: [
      ["What is Perseverance storing in sealed tubes?", ["Rock samples for a possible return to Earth", "Water", "Air for astronauts", "Fuel"], "It drills rock cores."],
      ["What did Perseverance’s MOXIE experiment make?", ["Oxygen from carbon dioxide", "Water from ice", "Food", "Gold"], "Useful for future astronauts."],
      ["Where did Perseverance land?", ["Jezero crater", "Gale crater", "Gusev crater", "On the Moon"], "In February 2021."],
      ["Why was Jezero crater chosen?", ["It once held a lake and a river delta", "It’s the hottest place on Mars", "It has the tallest mountain", "It’s closest to Earth"], "A great place to look for signs of ancient life."],
      ["What did Perseverance record for the first time on Mars’s surface?", ["Sounds, like the wind", "Rain", "Music from aliens", "Earthquakes on Earth"], "Its microphones listened to Mars."],
      ["Which tiny helicopter rode to Mars under Perseverance’s belly?", ["Ingenuity", "Dragonfly", "Sojourner", "Phoenix"], "It flew 72 times."],
      ["How many sample tubes did Perseverance leave in its sample depot?", ["Ten", "One", "A hundred", "None"], "For a possible future mission."],
      ["What powers Perseverance?", ["Nuclear power from plutonium heat", "Solar panels", "Batteries charged from Earth", "Wind"], "Like Curiosity."],
      ["How did Perseverance dodge hazards while landing?", ["It compared camera views with a map", "A pilot steered it from Earth", "It bounced off them", "It closed its eyes and hoped"], "This is called terrain-relative navigation."],
      ["Who named Perseverance?", ["Alex Mather, a seventh-grade student", "A famous astronaut", "The President", "A robot"], "He won a naming contest."]
    ]
  },
  {
    id: "ingenuity", world: "mars", name: "Ingenuity helicopter", short: "Ginny", year: "2021",
    kind: "Helicopter · Jezero crater", status: "retired", statusText: "Retired", x: 75, y: 35,
    q: "Ingenuity Mars helicopter", must: "Ingenuity",
    teaser: "I made the first powered, controlled flight on another planet, carrying a tiny piece of the Wright brothers’ plane!",
    logs: [
      { when: "2020–2021", title: "A hitchhiker", text: "I rode to Mars tucked under Perseverance’s belly. After landing, the rover set me down on the ground and drove away to give me space." },
      { when: "April 19, 2021", title: "A Wright brothers moment", text: "I lifted off, hovered about 3 m up for around 40 seconds, and landed: the first powered, controlled flight on another planet! My airfield was named Wright Brothers Field." },
      { when: "2021", title: "A piece of history", text: "I carried a tiny piece of fabric from the Wright brothers’ plane, which made the first powered flight on Earth in 1903." },
      { when: "2021–2023", title: "Way beyond the plan", text: "I was planned for up to 5 test flights. I flew 72 times, scouting ahead for Perseverance, for more than 2 hours of flying in total." },
      { when: "January 2024", title: "Grounded", text: "On my 72nd flight my rotor blades were damaged. I can’t fly any more, but I still stand in Jezero crater." }
    ],
    tech: [
      ["Twin rotors", "Two sets of blades spinning in opposite directions, about 2,400 times a minute."],
      ["Featherweight body", "I weigh only about 1.8 kg."],
      ["Smartphone brain", "I used a processor like the ones in smartphones."],
      ["Solar panel", "A small panel on top recharged my batteries."],
      ["Cameras", "A navigation camera looked down to track the ground, and a colour camera took photos."]
    ],
    facts: [
      "Mars’s air is so thin that flying there is like flying more than 30 km high on Earth.",
      "Ingenuity’s first airfield was named Wright Brothers Field.",
      "Across 72 flights, Ingenuity flew for more than 2 hours in total."
    ],
    science: "Ingenuity proved aircraft can fly on Mars, opening the door for future flying explorers there.",
    stats: [["First flight", "2021"], ["Flights", "72"], ["Mass", "1.8 kg"], ["Status", "Retired"]],
    quiz: [
      ["Ingenuity made the first…", ["Powered, controlled flight on another planet", "Landing on Mars", "Footprints on Mars", "Rocket launch from Mars"], "On April 19, 2021."],
      ["How many flights did Ingenuity make?", ["72", "5", "1", "300"], "It was planned for up to 5."],
      ["What did Ingenuity carry from aviation history?", ["A tiny piece of fabric from the Wright brothers’ plane", "A pilot’s helmet", "A jet engine part", "A kite string"], "The Wright brothers flew first on Earth in 1903."],
      ["Why do Ingenuity’s blades spin so fast?", ["Mars’s air is very thin", "To scare away dust", "To make music", "Mars has no gravity"], "Like flying more than 30 km high on Earth."],
      ["About how much does Ingenuity weigh?", ["About 1.8 kg", "About 180 kg", "About 18 g", "About 1.8 tonnes"], "It had to be very light."],
      ["How long did Ingenuity’s first flight last?", ["About 40 seconds", "About 4 hours", "About 4 days", "Less than 1 second"], "It hovered about 3 m up."],
      ["What ended Ingenuity’s flying days?", ["Damage to its rotor blades", "It ran out of fuel", "A dust devil carried it away", "Perseverance ran over it"], "On its 72nd flight."],
      ["What was Ingenuity’s first airfield called?", ["Wright Brothers Field", "Armstrong Airport", "Mars Base One", "Jezero Junction"], "A tribute to the first flight on Earth."],
      ["How do Ingenuity’s two sets of blades spin?", ["In opposite directions", "In the same direction", "Only one set spins", "They don’t spin, they flap"], "About 2,400 times a minute."],
      ["How did Ingenuity recharge its batteries?", ["With a small solar panel on top", "By plugging into Perseverance", "With a nuclear generator", "It never recharged"], "Sunlight kept it flying."]
    ]
  }
);
