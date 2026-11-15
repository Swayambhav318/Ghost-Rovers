// ===== Tech Lab: longer "what is it used for?" explanations =====
// One entry per Tech Lab item, in the same order as the machine's `tech` list in js/machines/<world>.js.
// Shown when a Tech Lab item is clicked on laptops.
const TECH_MORE = {
  surveyor3: [
    "Scientists used the pictures to map rocks and craters around the landing site and to watch the claw dig. The camera even photographed Earth passing in front of the Sun, an eclipse seen from the Moon.",
    "It worked like a tiny digger: scooping, pressing and dropping soil so engineers could see how much weight the ground could hold before astronauts stepped on it.",
    "Without radar, the lander couldn’t tell how fast it was falling. The computer used the radar’s numbers to fire the engines at just the right moments.",
    "Three legs always touch the ground evenly, like a camera tripod, so the lander doesn’t wobble on bumpy ground.",
    "The panel turned sunlight into electricity and the batteries stored some for later. During the two-week lunar night there was no sunlight at all, which is why Surveyor 3 shut down."
  ],
  apollo11: [
    "Splitting the lander in two meant the astronauts didn’t have to lift the heavy landing gear and fuel tanks off the Moon again, which saved lots of fuel.",
    "Being able to turn the engine up and down let Neil Armstrong hover and fly sideways to find a safe, flat place to land.",
    "The honeycomb crushed like a car’s crumple zone, so the legs took the bump instead of the crew. Wide footpads stopped the lander sinking into the dust.",
    "A corner-cube mirror always sends light straight back toward where it came from, so a laser fired from Earth returns to the same telescope.",
    "It listened for moonquakes and meteorite impacts. Those vibrations tell scientists what the Moon is like deep inside."
  ],
  apollo15lrv: [
    "Electric motors work without air, unlike petrol engines, which need oxygen to burn fuel. With one motor per wheel, the buggy could keep going even if one failed.",
    "The springy mesh flexed over rocks, gripped the dusty ground and could never get a flat tyre. Metal treads on the mesh added extra grip.",
    "With both ends steering, the buggy could make tight turns around craters and boulders without having to reverse.",
    "There’s no GPS on the Moon and a magnetic compass doesn’t work there, so a gyroscope and wheel counters worked out the direction and distance back to the lander.",
    "It let people on Earth watch the astronauts explore live. Radio signals take over a second to reach the Moon, so engineers had to send their camera commands a little early."
  ],
  apollo17lrv: [
    "Spinning wheels throw dust into the air. Fenders catch it so it doesn’t coat the astronauts, cameras and batteries.",
    "Push forward to go, pull back to brake or reverse, tilt left or right to steer: all with one hand, which was easier than holding a wheel in stiff spacesuit gloves.",
    "They didn’t need recharging during the short mission. Covers and radiators helped stop them overheating in the strong sunlight.",
    "Engineers in Houston could turn and zoom the camera from Earth. It filmed the lunar module blasting off from the Moon.",
    "Keeping tools within reach meant the crew spent less time walking back and forth, and more time collecting rocks during their limited hours outside."
  ],
  viking1: [
    "Each experiment tested a different idea, like feeding the soil nutrients, adding gases or heating it, then watching for signs that something living had used them.",
    "The arm stretched out like a tape measure, then dug, scooped and even pushed rocks aside to reach the soil hidden underneath.",
    "Unlike solar panels, nuclear generators keep working at night, in winter and during dust storms. That’s how Viking 1 lasted more than six years.",
    "Instead of snapping a photo all at once, each camera slowly swept across the view line by line, like a scanner.",
    "Holding the sensors up and away from the lander’s body gave cleaner readings of the real Martian air."
  ],
  sojourner: [
    "The panel made only a small amount of power, so Sojourner drove slowly and did most of its work in the middle of the day.",
    "Linked arms let each wheel rise and fall on its own, so the rover could roll over small rocks without tipping over.",
    "It gave off tiny amounts of radiation and measured what bounced back. Each chemical element gives a different ‘fingerprint’.",
    "The front cameras saw in 3D to spot rocks in the way, and laser beams helped Sojourner detect hazards ahead.",
    "Sojourner’s small radio couldn’t reach Earth, so the lander acted as a relay station, like a walkie-talkie talking to a big base station."
  ],
  spirit: [
    "Its two cameras sat apart like human eyes, giving 3D views. Colour filters helped scientists tell different minerals apart.",
    "Dust and weathering hide what a rock is really made of. Grinding a shallow circle let the other tools study the fresh rock inside.",
    "The microscope camera took close-ups of tiny grains, and the spectrometers worked out which elements and minerals a rock contained.",
    "Winter sunlight and dusty panels meant less power, so the team parked Spirit on slopes tilted toward the Sun.",
    "When the right front wheel broke, the other five dragged it along. Driving backwards made that easier."
  ],
  opportunity: [
    "Engineers used its pictures to plan each day’s drive, and scientists used them to choose which rocks to study.",
    "It ground a shallow hole in a rock’s surface so the arm’s tools could study what lay underneath the dust.",
    "One of the spectrometers was great at spotting iron minerals, like the hematite in the ‘blueberries’.",
    "Every cleaning event gave a big power boost, letting the rover work longer and drive farther each day.",
    "The suspension kept all six wheels on the ground, which helped Opportunity drive into and out of craters safely."
  ],
  phoenix: [
    "The scoop had a rasp, a small spinning tool, for scraping hard, icy soil that a normal scoop couldn’t dig.",
    "The ovens heated samples to about 1,000 °C. Different substances turn into gas at different temperatures, which helps identify them.",
    "Mixing soil with water showed how salty or acidic it is, which tells scientists whether tiny living things could survive there.",
    "The laser fired upward and measured light bouncing back off dust and clouds, so Phoenix could watch the weather above it.",
    "The panels opened like paper fans after landing. Near the pole, long summer days gave lots of light, but winter brought darkness."
  ],
  curiosity: [
    "It works the same in summer, winter and dust storms, and its spare heat keeps the rover’s insides warm.",
    "The laser makes a tiny spark of glowing gas, and the colours of that light reveal which chemical elements are in the rock.",
    "Rock powder is dropped into labs inside the rover that identify minerals and sniff out carbon-based chemicals.",
    "It takes the colour photos and videos the team uses to explore, plan drives and stitch together giant panoramas.",
    "Mars has thin air and no global magnetic field to block space radiation, so knowing how much there is helps plan future astronaut missions."
  ],
  insight: [
    "It was so sensitive it could feel shaking smaller than the width of an atom.",
    "Measuring the heat escaping from inside Mars would have shown how warm the planet still is deep down.",
    "It used a grabber to lift the seismometer and heat probe off the deck and set them gently on the ground.",
    "How Mars wobbles as it spins depends on its core, a bit like how a raw egg spins differently from a boiled one.",
    "Each round panel was about 2.2 m across. Dust slowly covered them, which ended the mission."
  ],
  perseverance: [
    "Each tube is sealed so the rock inside stays clean, ready for scientists on Earth to study with powerful lab machines if the samples ever come back.",
    "Sounds help engineers check how the rover’s machines are working, and teach scientists about the wind and Mars’s thin air.",
    "SuperCam zaps rocks with a laser from a distance, while PIXL maps chemical elements in tiny spots up close, looking for patterns life might leave.",
    "It let Perseverance aim for a rocky, risky landing spot that earlier rovers couldn’t safely try.",
    "Like Curiosity’s, its generator works day and night and keeps the rover’s parts warm."
  ],
  ingenuity: [
    "Spinning in opposite directions stops the body from twisting around, so the helicopter doesn’t need a tail rotor.",
    "Mars’s gravity is weaker than Earth’s, but its air is very thin, so every gram mattered for getting off the ground.",
    "It made many decisions every second to keep Ingenuity balanced, because Earth was too far away to steer it live.",
    "It charged the batteries during the day, and a lot of that power went into heaters to survive the freezing Martian nights.",
    "The downward camera tracked the ground to work out how Ingenuity was moving. The colour camera took aerial photos to help Perseverance plan its route."
  ],
  mariner1: [
    "Venus is closer to the Sun than Earth, so the panels got even more sunlight as the spacecraft travelled.",
    "It had to stay pointed at Earth so the faint signal could be heard across millions of kilometres.",
    "Microwaves pass through clouds, so this instrument could sense heat coming from Venus’s surface.",
    "Infrared is heat glow, so this instrument measured how warm or cold the cloud tops were.",
    "It sat on a tall mast, away from the spacecraft’s own electronics, and checked for a magnetic field like Earth’s."
  ],
  pioneervenus: [
    "Plunging into the atmosphere at high speed creates fierce heat. The shields took the heat so the instruments inside stayed safe.",
    "Titanium is strong and light. The shells kept the instruments sealed as the air pressure rose higher and higher.",
    "Measuring all the way down built a picture of Venus’s air from the cloud tops to the ground.",
    "Slowing down gave the large probe more time to measure the clouds. Then it let go of the parachute and fell faster.",
    "As winds pushed the probes sideways, their radio signals shifted slightly, which let scientists measure the wind speed."
  ],
  magellan: [
    "Smooth ground reflects radar weakly and rough ground strongly, so the radar pictures showed lava flows, cracks and craters.",
    "Using one dish for two jobs saved weight: Magellan took radar pictures near Venus, then turned the dish toward Earth to send them home.",
    "Each dip through the thin upper air slowed Magellan a little, gradually shrinking its orbit without burning much fuel.",
    "Reusing well-tested parts cut costs and risk. Its big dish was a spare from the Voyager mission.",
    "Places with extra mass underground pull slightly harder, speeding Magellan up a tiny bit. These changes reveal what’s below the surface."
  ],
  hubble: [
    "A bigger mirror collects more light, so Hubble can see fainter and farther objects. Its surface is coated with a thin layer of aluminium.",
    "From space, Hubble can also see ultraviolet light, which Earth’s atmosphere blocks.",
    "Astronauts replaced cameras, gyroscopes, batteries and solar panels, so Hubble kept getting better over the years.",
    "They let Hubble hold its aim steady for hours, which it needs for long exposures of faint galaxies.",
    "Hubble passes through Earth’s shadow on every orbit, so batteries store power for the dark part of each trip."
  ],
  chandra: [
    "Four pairs of these nested mirrors gather the X-rays and focus them onto the cameras.",
    "The smoother the mirror, the sharper the picture. Chandra’s X-ray images are the sharpest ever taken.",
    "They record the energy and arrival time of each X-ray, telling scientists which elements are glowing and how hot they are.",
    "Spending most of its time far from Earth means fewer interruptions, so Chandra can stare at one target for many hours.",
    "Chandrasekhar worked out the largest mass a white dwarf star can have. It’s now called the Chandrasekhar limit."
  ],
  spitzer: [
    "Many newborn stars hide inside clouds of dust. Infrared lets astronomers see them, like a heat camera seeing through smoke.",
    "The mirror was made of beryllium, a light, strong metal that keeps its shape at super-cold temperatures.",
    "At such low temperatures, the telescope’s own heat glow was too faint to spoil the faint infrared light from space.",
    "Far from Earth, Spitzer avoided Earth’s warmth, which made it easier to keep cold.",
    "In 1946 Lyman Spitzer wrote about why telescopes in space would be so useful, long before any were launched."
  ],
  kepler: [
    "With 42 sensors, it measured the brightness of many thousands of stars about every half hour.",
    "The large mirror gathered enough light to measure tiny brightness changes in faint, distant stars.",
    "It had to be this precise because an Earth-sized planet blocks only a tiny fraction of its star’s light.",
    "Speeding up or slowing down a wheel turns the spacecraft the other way, so it can point without using fuel.",
    "How much the star dims tells you the planet’s size, and how often it dims tells you how long its year is."
  ],
  webb: [
    "A bigger mirror collects more light, letting Webb see faint galaxies billions of light-years away.",
    "The side facing the Sun gets hot while the telescope side stays super cold. Each layer blocks more of the heat.",
    "The segments had to line up to within a tiny fraction of a hair’s width so they could work together like one giant mirror.",
    "Light from the earliest galaxies has been stretched into infrared as the universe expanded, so infrared eyes are needed to see it.",
    "From L2, Webb can keep its sunshield between the telescope and the Sun, Earth and Moon all the time."
  ],
  pioneer10: [
    "The generators sat on long arms, keeping their radiation away from the science instruments.",
    "The big dish caught Earth’s faint commands and sent data home across billions of kilometres.",
    "Spinning about five times a minute kept the spacecraft steady without using much fuel.",
    "It shows our Sun’s position using pulsars, special spinning stars, so anyone who finds it might work out where it came from.",
    "They measured Jupiter’s magnetic field and radiation belts, and checked how much dust there is in the asteroid belt."
  ],
  voyager1: [
    "Each year the generators make about 4 watts less power, so engineers carefully choose what stays switched on.",
    "It includes sounds like thunder, birdsong and a baby crying, plus music from around the world.",
    "By the time the signal reaches Earth it’s incredibly faint, so NASA uses giant dishes up to 70 m wide to catch it.",
    "Small puffs of gas turn Voyager so its dish stays pointed at Earth, about a whole light-day away.",
    "It measures magnetic fields in interstellar space, helping scientists understand the space between the stars."
  ],
  voyager2: [
    "Without these slingshots, reaching Neptune would have taken about 30 years instead of 12.",
    "Pictures on its cover show how to play it, using diagrams instead of words.",
    "Turning just the cameras, instead of the whole spacecraft, meant Voyager 2 could keep its dish pointed at Earth while photographing planets.",
    "Far from the Sun, solar panels would be useless, so heat from plutonium powers everything.",
    "Its signal now takes many hours to reach Earth, even travelling at the speed of light."
  ],
  newhorizons: [
    "Power is tight, so the instruments take turns and the spacecraft runs on very little electricity.",
    "It spotted Pluto from very far away, and later took the sharpest close-up pictures of its surface.",
    "Ralph made colour maps and found ices on Pluto’s surface, while Alice studied the gases in its thin atmosphere.",
    "Sleeping saved wear and tear on its parts and cut the work for its team, with a check-in signal once a week.",
    "Being small and light helped it launch at record speed toward Pluto."
  ]
};
