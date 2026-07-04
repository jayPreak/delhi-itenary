// AI Suggestion places not from Jayesh's saved Maps list, added because the
// itinerary needed them (landmarks, or areas with no matching saved pin).
export const AI = {
  indiaGate: { name: "India Gate", why: "A 42m war memorial arch on Rajpath, built in 1931 to honour Indian soldiers of WWI Delhi's most iconic morning-walk spot.", bestTime: "Early morning, before the heat and crowds", duration: "45–60 min", area: "Central Delhi" },
  humayunsTomb: { name: "Humayun's Tomb", why: "A 16th-century Mughal tomb complex, UNESCO-listed, and the design template later used for the Taj Mahal.", bestTime: "Mid-morning", duration: "1.5–2 hr", area: "Nizamuddin, Delhi" },
  khanMarket: { name: "Khan Market", why: "An upscale market lane of boutiques, bookshops and cafes, consistently ranked among the world's priciest retail streets.", bestTime: "Late morning to afternoon", duration: "1–2 hr", area: "Central Delhi" },
  nationalMuseum: { name: "National Museum", why: "Delhi's largest museum, covering Indian art and history from the Harappan era onward a solid indoor fallback near India Gate.", bestTime: "Any time, especially if it's raining", duration: "1.5–2 hr", area: "Janpath, Central Delhi" },
  climbCentral: { name: "Climb Central", why: "An indoor bouldering and climbing gym one of only three Climb Central locations in India.", bestTime: "Weekend mornings from 9am (weekday hours run 2–10pm)", duration: "1.5–2 hr", area: "M3M 65th Avenue Mall, Sector 65, Gurgaon" },
  qutubMinar: { name: "Qutub Minar", why: "A 73m minaret from 1193, the tallest brick minaret in the world and a UNESCO World Heritage Site.", bestTime: "Mid-morning to early afternoon", duration: "1.5–2 hr", area: "Mehrauli, Delhi" },
  majnuKaTilla: { name: "Majnu Ka Tilla", why: "A Tibetan refugee settlement on the Yamuna's bank narrow lanes of momo and laphing stalls, prayer flags, and small monastery shops.", bestTime: "Early evening", duration: "1.5–2 hr", area: "North Delhi" },
  copperChimney: { name: "Copper Chimney", why: "A long-running North Indian/Mughlai chain known for kebabs and biryani a dependable, unhurried pick for a family lunch.", bestTime: "Lunch, 1–3pm", duration: "1.5 hr", area: "Cyber Hub, Gurgaon" },
  openTapDowntown: { name: "Downtown", why: "A Gurgaon pub chain with multiple screens, typically a reliable spot to catch a big live match.", bestTime: "Evening, arrive early for match nights", duration: "2+ hr", area: "Gurgaon (multiple locations)" },
  roasteryCoffeeHouse: { name: "Roastery Coffee House", why: "An all-day cafe at JW Marriott Aerocity a calm, comfortable brunch option minutes from the terminal.", bestTime: "Late morning", duration: "1–1.5 hr", area: "Aerocity" },
  rakabGanjSahib: { name: "Gurudwara Shri Rakab Ganj Sahib", why: "A historic Sikh gurudwara near Parliament Street, marking the site where Guru Tegh Bahadur's body was cremated calm, uncrowded, and a short detour from Central Delhi.", bestTime: "Late morning", duration: "45–60 min", area: "Parliament Street, Central Delhi" },
  chainaRam: { name: "Chaina Ram", why: "A century-old Old Delhi sweet shop near Fatehpuri, famous for karachi halwa a good stop to pick up sweets for the family.", bestTime: "Late morning to afternoon", duration: "20–30 min", area: "Fatehpuri, Old Delhi" },
};

export const DAYS = [
  {
    id: "day1",
    date: "2026-07-15",
    label: "Wed, 15 July",
    heading: "Touchdown in Gurgaon",
    blocks: [
      {
        key: "evening",
        emoji: "🌆",
        title: "Soft Landing",
        text: "Check in, unpack slowly, let the trip actually begin then a sit-down dinner somewhere nice. No rush tonight; this whole block is a suggestion, not a schedule.",
        items: [
          { kind: "place", id: "cincin-golf-course-road" },
          { kind: "place", id: "qla" },
        ],
      },
      {
        key: "night",
        emoji: "🌙",
        title: "Semi-Final Lights",
        text: "Drinks, and the FIFA World Cup semi-final on a big screen.",
        items: [
          { kind: "place", id: "open-tap-south-point" },
          { kind: "ai", ...AI.openTapDowntown },
          { kind: "place", id: "gonzo-asian-tapas-bar" },
        ],
      },
    ],
    tips: {
      travel: "Everything tonight is within Gurgaon 10–20 min hops.",
      transport: "Uber/local cab. Not worth involving the metro for short in-city hops at night.",
      cost: "≈ ₹1,500–2,500 for two at dinner, ₹1,000–2,000 for two on drinks.",
      photoSpot: "Golden-hour light through the hotel window; South Point Mall's entrance lights after dark.",
      sunset: "≈ 7:20 PM",
      rainBackup: "Everything tonight is already indoors no backup needed.",
    },
  },
  {
    id: "day2",
    date: "2026-07-16",
    label: "Thu, 16 July",
    heading: "All of Delhi",
    blocks: [
      {
        key: "morning",
        emoji: "🌞",
        title: "Golden Steps at India Gate",
        text: "A slow morning walk before the day heats up, then breakfast nearby.",
        items: [
          { kind: "ai", ...AI.indiaGate },
          { kind: "place", id: "central-delhi-cp-minar" },
          { kind: "ai", ...AI.rakabGanjSahib },
        ],
      },
      {
        key: "day",
        emoji: "☀️",
        title: "Tombs & Tea",
        text: "Humayun's Tomb, then Khan Market chosen over Red Fort/Old Delhi or Lotus Temple because it keeps the whole day in one tight Central Delhi arc. Old Delhi is ~40–50 min north of India Gate and would mean backtracking the same distance again for Basant Lok this evening; Lotus Temple is a similar detour southeast. Humayun's Tomb is 10–15 min from India Gate, and Khan Market another 10 min past that no wasted driving.",
        items: [
          { kind: "ai", ...AI.humayunsTomb },
          { kind: "ai", ...AI.khanMarket },
        ],
      },
      {
        key: "evening",
        emoji: "🌆",
        title: "Basant Lok Buzz",
        text: "Basant Lok Market for drinks. These lean casual by reputation and format (dive-bar/lounge style, no dress-code chatter found) rather than confirmed written policy door policies can change, so carrying valid ID is always a good idea regardless.",
        items: [
          { kind: "ai", name: "Uncle's: Dive & Dine", why: "A self-described everyday dive bar casual by its own branding, karaoke on Wednesdays.", bestTime: "Evening", duration: "1.5–2 hr", area: "Basant Lok, Vasant Vihar" },
          { kind: "ai", name: "Perch", why: "A low-key wine-and-coffee bar, open from 8am to 1am the calmest option in the market.", bestTime: "Evening", duration: "1–1.5 hr", area: "Basant Lok, Vasant Vihar" },
          { kind: "ai", name: "Strangr", why: "A cosy baithak-style lounge with live jazz/acoustic sets relaxed, conversational vibe.", bestTime: "Evening", duration: "1.5–2 hr", area: "Basant Lok, Vasant Vihar" },
        ],
      },
      {
        key: "night",
        emoji: "🌙",
        title: "Back to Base",
        text: "Head back toward Gurgaon one more drink somewhere new, or call it a night if today ran long.",
        items: [
          { kind: "place", id: "zuru-zuru" },
          { kind: "place", id: "kiara-soul-kitchen" },
        ],
      },
    ],
    tips: {
      travel: "Gurgaon → India Gate: 45–75 min depending on traffic. Central Delhi → Basant Lok: 25–40 min. Basant Lok → Gurgaon: 30–45 min.",
      transport: "Uber for the Gurgaon↔Delhi legs metro would mean 1hr+ with transfers and doesn't reach either end door-to-door.",
      cost: "≈ ₹450–750 each way Gurgaon↔Delhi, ₹150–350 for the Basant Lok leg. Add ₹1,500–3,000 for the day's food and drinks combined.",
      photoSpot: "India Gate's lawns in early light; Humayun's Tomb framed through the char-bagh garden's central axis; Khan Market's colourful lane facades.",
      sunset: "≈ 7:20 PM",
      rainBackup: "Swap the Humayun's Tomb + Khan Market walk for the National Museum (also near India Gate) and keep Basant Lok as-is it's all indoor seating anyway.",
    },
  },
  {
    id: "day3",
    date: "2026-07-17",
    label: "Fri, 17 July",
    heading: "A Slow Gurgaon Day",
    blocks: [
      {
        key: "morning",
        emoji: "🌞",
        title: "Coffee & Cowork",
        text: "A cute cafe, breakfast, and laptop-friendly cowork vibes no rush to leave.",
        items: [
          { kind: "place", id: "tono-tokyo-coffee" },
          { kind: "place", id: "the-drop-coffee-cocktails" },
        ],
      },
      {
        key: "day",
        emoji: "☀️",
        title: "Lunch with Mum",
        text: "Lunch with his mum — an upscale-but-unhurried North Indian spot that works well for mixed ages.",
        items: [{ kind: "ai", ...AI.copperChimney }],
      },
      {
        key: "evening",
        emoji: "🛍️",
        title: "Galleria Wander",
        text: "Shopping, coffee, and cute corners around Galleria Market, DLF Phase 4 one of Gurgaon's easiest strips to wander without a plan.",
        items: [
          { kind: "place", id: "mi-piaci-galleria" },
          { kind: "place", id: "firenze-gelateria" },
          { kind: "place", id: "wafflesome" },
        ],
      },
      {
        key: "night",
        emoji: "🌙",
        title: "Karaoke & Cocktails",
        text: "Private karaoke booths, plus a cocktail bar nearby arcade/bowling venues in Gurgaon's malls are worth a live check since these change often, so we've kept this to what's actually confirmed.",
        items: [
          { kind: "place", id: "hi-ktv-karaoke-cafe" },
          { kind: "place", id: "cocktails-and-dreams" },
        ],
      },
    ],
    tips: {
      travel: "Everything today stays inside Gurgaon 10–20 min hops at most.",
      transport: "Uber/local cab throughout.",
      cost: "≈ ₹2,500–4,000 for the family lunch (3 people), ₹1,500–2,500 for the evening's cafes and karaoke combined.",
      photoSpot: "Galleria Market's outdoor seating strip at golden hour.",
      sunset: "≈ 7:18 PM",
      rainBackup: "Almost the entire day is indoors already no real backup needed.",
    },
  },
  {
    id: "day4",
    date: "2026-07-18",
    label: "Sat, 18 July",
    heading: "Climb & Old Delhi Lanes",
    blocks: [
      {
        key: "morning",
        emoji: "🧗",
        title: "Chalk & Climb",
        text: "Climb Central opens at 9am on weekends (2pm on weekdays) a proper reason to be up and out, then brunch nearby.",
        items: [
          { kind: "ai", ...AI.climbCentral },
          { kind: "place", id: "cafe-de-flora" },
        ],
      },
      {
        key: "day",
        emoji: "☀️",
        title: "Qutub Wandering",
        text: "Qutub Minar over Lotus Temple or Humayun's Tomb (already done Thursday) it's the closest of the remaining big sights to Sector 65, so the day starts moving without a long backtrack.",
        items: [{ kind: "ai", ...AI.qutubMinar }],
      },
      {
        key: "evening",
        emoji: "🥟",
        title: "Laphing Lanes",
        text: "Majnu Ka Tilla laphing, momos, and a walk through the lanes. Heads-up on routing: this is the trip's longest travel stretch (Qutub Minar → Majnu Ka Tilla → Hauz Khas/GK for tonight adds up to 90+ min of combined driving, since Majnu Ka Tilla sits in North Delhi while the other two are south). If you'd rather cut the driving, momo counters are common in Hauz Khas/GK too skipping this detour is an easy substitution. Chaina Ram (Fatehpuri) is close enough to swing by on the way for sweets to bring home to the family.",
        items: [{ kind: "ai", ...AI.majnuKaTilla }, { kind: "ai", ...AI.chainaRam }],
      },
      {
        key: "night",
        emoji: "🌙",
        title: "Green Park Glow",
        text: "Hauz Khas / Green Park corner for a last coffee or drink",
        items: [
          { kind: "place", id: "clayful-cafe-gk" },
          { kind: "place", id: "casa-pasta-bar" },
        ],
      },
    ],
    tips: {
      travel: "Sector 65 → Qutub Minar: ≈ 20–35 min. Qutub Minar → Majnu Ka Tilla: ≈ 45–60 min. Majnu Ka Tilla → Hauz Khas/GK: ≈ 40–50 min.",
      transport: "Uber for all of today this route doesn't line up well with any single metro line.",
      cost: "≈ ₹1,500–2,000 for Climb Central (two sessions), ₹1,000–1,500 for the evening's food and drinks.",
      photoSpot: "Climb Central's coloured bouldering wall; Qutub Minar's carved sandstone against the sky; Majnu Ka Tilla's prayer-flag lanes at dusk.",
      sunset: "≈ 7:16 PM",
      rainBackup: "Climb Central is already indoors. If it's pouring for the Qutub Minar leg, swap in a museum visit instead and keep the evening plan as-is.",
    },
  },
  {
    id: "day5",
    date: "2026-07-19",
    label: "Sun, 19 July",
    heading: "One Last Slow Morning",
    blocks: [
      {
        key: "morning",
        emoji: "🌤️",
        title: "Last Slow Morning",
        text: "Staying near Aerocity/Dwarka today, close to the airport. A relaxed brunch, coffee, a short walk nothing that needs rushing.",
        items: [{ kind: "ai", ...AI.roasteryCoffeeHouse }],
      },
      {
        key: "day",
        emoji: "🛫",
        title: "See You Soon",
        text: "A last walk, then the airport drop. Aerocity is basically at IGI's doorstep, so there's no real travel buffer to worry about.",
        items: [
          { kind: "ai", name: "Aerocity walk", why: "Aerocity's pedestrian promenade open-air, lined with cafes and hotel lobbies, an easy last wander.", bestTime: "Late morning", duration: "30–45 min", area: "Aerocity" },
        ],
      },
    ],
    tips: {
      travel: "Aerocity to IGI Airport is a 5–10 min drive practically at the terminal.",
      transport: "Uber, or the hotel shuttle if staying at an Aerocity property.",
      cost: "≈ ₹1,000–1,500 for brunch and coffee for two.",
      photoSpot: "Aerocity's open piazza; one last photo at the departures board.",
      sunset: "≈ 7:15 PM (for whoever's still on the ground to see it)",
      rainBackup: "Brunch and the promenade are both easily shortened everything today is a 5–10 min drive from shelter.",
    },
  },
];
