/**
 * ============================================================================
 * BOOKNEST | THE SCHOLAR'S SANCTUARY
 * Complete Customer Storefront, Audio Acoustics & State Architecture
 * ============================================================================
 */

/* ----------------------------------------------------------------------------
 * 1. SEED DATA & INITIAL PRESETS (CURATED IN INR ₹)
 * ---------------------------------------------------------------------------- */
const SEED_BOOKS = [
  {
    id: "aurora-101",
    title: "Neuromancer: 40th Anniversary",
    author: "William Gibson",
    genre: "Sci-Fi",
    format: "Hardcover",
    price: 699,
    oldPrice: 999,
    cost: 350,
    stock: 24,
    rating: 4.9,
    reviewsCount: 1420,
    isbn: "978-0441569595",
    pages: 320,
    pubYear: 2024,
    cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["cyberpunk", "quantum-sci-fi"],
    synopsis: "The sky above the port was the color of television, tuned to a dead channel. Case was the sharpest data-thief in the sprawl until rogue employers burnt out his nervous system with a Russian mycotoxin.",
    excerpt: [
      "The sky above the port was the color of television, tuned to a dead channel. 'It's not like I'm using,' Case heard someone say, as he shouldered his way through the crowd around the door of the Chatsubo. 'It's like my body's developed this massive drug deficiency.' It was a Sprawl voice and a Sprawl joke.",
      "The Chatsubo was a bar for professional expatriates; you could drink there for a week and never hear two words in Japanese. The bartender, Ratz, was a monad of prosthetic grace, a steel claw whirring softly as he poured draught Kirin into chipped glasses. Behind Case, the holographic neon hummed with electromagnetic tension."
    ]
  },
  {
    id: "aurora-102",
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    genre: "Technology",
    format: "Paperback",
    price: 1249,
    oldPrice: 1599,
    cost: 620,
    stock: 18,
    rating: 4.95,
    reviewsCount: 3100,
    isbn: "978-1449373320",
    pages: 616,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=600&q=80",
    badge: "staff-pick",
    vibeTags: ["cyberpunk", "deep-philosophy"],
    synopsis: "Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability.",
    excerpt: [
      "The internet era has transformed how software systems are built. Today, most applications are data-intensive rather than compute-intensive. Raw CPU power is rarely the bottleneck; the bigger problems are usually the amount of data, the complexity of data, and the speed at which it is changing.",
      "A well-designed system makes it easy to understand the trade-offs between consistency, availability, and latency. When we examine replication, partitioning, and distributed consensus, we are peeling back the layers that keep global software resilient."
    ]
  },
  {
    id: "aurora-103",
    title: "Meditations: The Emperor's Journal",
    author: "Marcus Aurelius",
    genre: "Philosophy",
    format: "Hardcover",
    price: 499,
    oldPrice: 699,
    cost: 240,
    stock: 45,
    rating: 4.85,
    reviewsCount: 2280,
    isbn: "978-0140449334",
    pages: 256,
    pubYear: 2022,
    cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["deep-philosophy", "dark-academia"],
    synopsis: "Written in Greek without any intention of publication, the personal notes of Marcus Aurelius offer a web of profound reflections on life, duty, resilience, and inner tranquility.",
    excerpt: [
      "When you wake up in the morning, tell yourself: The people I deal with today will be meddling, ungrateful, arrogant, dishonest, jealous, and surly. They are like this because they cannot distinguish good from evil.",
      "But I have seen the beauty of good, and the ugliness of evil, and have recognized that the wrongdoer has a nature related to my own—not of the same blood or birth, but the same mind, and possessing a share of the divine."
    ]
  },
  {
    id: "aurora-104",
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Sci-Fi",
    format: "Hardcover",
    price: 749,
    oldPrice: 949,
    cost: 380,
    stock: 12,
    rating: 4.92,
    reviewsCount: 1950,
    isbn: "978-0593135204",
    pages: 496,
    pubYear: 2024,
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
    badge: "staff-pick",
    vibeTags: ["quantum-sci-fi"],
    synopsis: "Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself are doomed. Except right now, he doesn't know that. He can't even remember his own name.",
    excerpt: [
      "'What's two plus two?' I ask the ceiling. Silence. The monitors continue their rhythmic pulse. My limbs feel leaden, weighed down by an acceleration force I can sense but not yet measure.",
      "Then the memory sparks—not a gentle flame, but a sharp electrical jolt. Sunlight failing. The astrophage swarm darkening the solar spectrum. And a starship voyaging into the deep interstellar void."
    ]
  },
  {
    id: "aurora-105",
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    genre: "Fiction",
    format: "Paperback",
    price: 599,
    oldPrice: 799,
    cost: 290,
    stock: 30,
    rating: 4.88,
    reviewsCount: 1820,
    isbn: "978-0143034902",
    pages: 487,
    pubYear: 2021,
    cover: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["dark-academia", "rainy-cafe"],
    synopsis: "Barcelona, 1945: A city slowly heals from its war wounds. Daniel, an antiquarian book dealer's son who mourns the loss of his mother, finds solace in a mysterious book from the Cemetery of Forgotten Books.",
    excerpt: [
      "I still remember the day my father took me to the Cemetery of Forgotten Books for the first time. The streets of Barcelona were drenched in a morning mist that smelt of damp paper and ancient stone.",
      "'Every book, every volume you see here, has a soul,' my father whispered. 'The soul of the person who wrote it and of those who read it and lived and dreamed with it. Once chosen, you must make sure it is never lost.'"
    ]
  },
  {
    id: "aurora-106",
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    format: "Hardcover",
    price: 849,
    oldPrice: 1099,
    cost: 420,
    stock: 14,
    rating: 4.90,
    reviewsCount: 2600,
    isbn: "978-0756404741",
    pages: 662,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=600&q=80",
    badge: "staff-pick",
    vibeTags: ["cozy-fantasy", "dark-academia"],
    synopsis: "Told in Kvothe's own voice, this is the tale of the magically gifted young man who grows to be the most notorious wizard his world has ever seen.",
    excerpt: [
      "It was night again. The Waystone Inn lay in silence, and it was a silence of three parts. The most obvious part was a hollow, echoing quiet, made by things that were lacking.",
      "The third silence was not an easy thing to notice. If you listened for an hour, you might begin to feel it in the wooden floorboards and in the rough-hewn beams. It was the patient, cut-flower sound of a man waiting to die."
    ]
  },
  {
    id: "aurora-107",
    title: "Clean Code: A Handbook of Agile Software",
    author: "Robert C. Martin",
    genre: "Technology",
    format: "Paperback",
    price: 1199,
    oldPrice: 1499,
    cost: 590,
    stock: 22,
    rating: 4.80,
    reviewsCount: 2150,
    isbn: "978-0132350884",
    pages: 464,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=600&q=80",
    badge: null,
    vibeTags: ["cyberpunk", "deep-philosophy"],
    synopsis: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost due to poorly written code.",
    excerpt: [
      "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers. Code is never written in a vacuum; it is read ten times more often than it is typed.",
      "Clean code is simple and direct. Clean code reads like well-written prose. Clean code never obscures the designer's intent but rather is full of crisp abstractions and straightforward lines of control."
    ]
  },
  {
    id: "aurora-108",
    title: "Atomic Habits: Proven Framework",
    author: "James Clear",
    genre: "Self-Help",
    format: "Hardcover",
    price: 549,
    oldPrice: 749,
    cost: 270,
    stock: 55,
    rating: 4.93,
    reviewsCount: 4200,
    isbn: "978-0735211292",
    pages: 320,
    pubYear: 2024,
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["deep-philosophy", "rainy-cafe"],
    synopsis: "No matter your goals, Atomic Habits offers a proven framework for improving every day. James Clear reveals practical strategies that will teach you how to form good habits and break bad ones.",
    excerpt: [
      "It is so easy to overestimate the importance of one defining moment and underestimate the value of making small improvements on a daily basis. Too often, we convince ourselves that massive success requires massive action.",
      "Meanwhile, improving by 1 percent isn't particularly notable—sometimes it isn't even noticeable—but it can be far more meaningful, especially in the long run. The math of small habits compounds exponentially."
    ]
  },
  {
    id: "aurora-109",
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    genre: "Fiction",
    format: "Paperback",
    price: 529,
    oldPrice: 699,
    cost: 260,
    stock: 8,
    rating: 4.82,
    reviewsCount: 1650,
    isbn: "978-1400079278",
    pages: 505,
    pubYear: 2022,
    cover: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&w=600&q=80",
    badge: "sale",
    vibeTags: ["rainy-cafe", "dark-academia"],
    synopsis: "Comprising two distinct but interrelated plots, the narrative runs back and forth between the stories of Kafka Tamura, a teenage runaway, and Nakata, an aging tracker of lost cats.",
    excerpt: [
      "'Sometimes fate is like a small sandstorm that keeps changing directions,' the boy named Crow whispered. 'You change direction but the sandstorm chases you. You turn again, but the storm adjusts.'",
      "And once the storm is over, you won't remember how you made it through, how you managed to survive. But one thing is certain: when you come out of the storm, you won't be the same person who walked in."
    ]
  },
  {
    id: "aurora-110",
    title: "Deep Work: Rules for Focused Success",
    author: "Cal Newport",
    genre: "Self-Help",
    format: "eBook",
    price: 429,
    oldPrice: 599,
    cost: 210,
    stock: 80,
    rating: 4.87,
    reviewsCount: 1940,
    isbn: "978-1455586691",
    pages: 304,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=600&q=80",
    badge: null,
    vibeTags: ["deep-philosophy"],
    synopsis: "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.",
    excerpt: [
      "In an economy governed by shallow notifications and hyper-connectivity, the ability to concentrate deeply is becoming increasingly rare at exactly the same time it is becoming increasingly valuable.",
      "Those who cultivate this skill, and then make it the core of their working life, will thrive. To leave distraction behind is not just a productivity strategy; it is a profound declaration of mastery."
    ]
  },
  {
    id: "aurora-111",
    title: "Brave New World (Illustrated)",
    author: "Aldous Huxley",
    genre: "Sci-Fi",
    format: "Hardcover",
    price: 899,
    oldPrice: 1199,
    cost: 440,
    stock: 5,
    rating: 4.84,
    reviewsCount: 1720,
    isbn: "978-0060850524",
    pages: 288,
    pubYear: 2024,
    cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&w=600&q=80",
    badge: "sale",
    vibeTags: ["cyberpunk", "deep-philosophy"],
    synopsis: "Aldous Huxley's profoundly prophetic classic set in London in the year of our Ford 632, where citizens are engineered into an intelligence-based social hierarchy.",
    excerpt: [
      "A squat grey building of only thirty-four storeys. Over the main entrance the words: CENTRAL LONDON HATCHERY AND CONDITIONING CENTRE, and, in a shield, the World State's motto, COMMUNITY, IDENTITY, STABILITY.",
      "The enormous room on the ground floor faced towards the north. Cold for all the summer beyond the panes, for all the tropical heat of the room itself, a harsh thin light glared through the windows, hungrily seeking some draped lay figure."
    ]
  },
  {
    id: "aurora-112",
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    format: "Audiobook",
    price: 599,
    oldPrice: 799,
    cost: 290,
    stock: 90,
    rating: 4.79,
    reviewsCount: 3400,
    isbn: "978-0525559474",
    pages: 304,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["rainy-cafe", "cozy-fantasy"],
    synopsis: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    excerpt: [
      "Between life and death there is a library. And within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be different if you had made other choices.",
      "Nora looked at Mrs. Elm, the librarian. The clock hands were perpetually frozen at 00:00:00. 'You don't have to understand life,' Mrs. Elm smiled gently. 'You just have to live it.'"
    ]
  },
  {
    id: "aurora-113",
    title: "Structure & Interpretation of Computer Programs",
    author: "Harold Abelson & Gerald Jay Sussman",
    genre: "Technology",
    format: "Hardcover",
    price: 1899,
    oldPrice: 2299,
    cost: 950,
    stock: 15,
    rating: 4.96,
    reviewsCount: 1100,
    isbn: "978-0262510875",
    pages: 657,
    pubYear: 2022,
    cover: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80",
    badge: "staff-pick",
    vibeTags: ["cyberpunk", "deep-philosophy"],
    synopsis: "The legendary MIT introductory text on computer science that explores procedural abstraction, metalinguistic abstraction, and the beauty of computational models.",
    excerpt: [
      "We are about to study the idea of a computational process. Computational processes are abstract beings that inhabit computers. As they evolve, processes act on other abstract beings called data.",
      "The programs we write are like sorcerer's spells; they conjure the spirits of the computer with rigorous mathematical logic."
    ]
  },
  {
    id: "aurora-114",
    title: "The Way of Kings (Stormlight Archive)",
    author: "Brandon Sanderson",
    genre: "Fantasy",
    format: "Hardcover",
    price: 1099,
    oldPrice: 1399,
    cost: 540,
    stock: 19,
    rating: 4.94,
    reviewsCount: 3800,
    isbn: "978-0765326355",
    pages: 1007,
    pubYear: 2023,
    cover: "https://images.unsplash.com/photo-1532012164546-f432f2e3777a?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["cozy-fantasy", "quantum-sci-fi"],
    synopsis: "Roshar is a world of stone and storms. Uncanny tempests of incredible power sweep across the rocky terrain, shaping civilizations and ancient Knights Radiant.",
    excerpt: [
      "Life before death. Strength before weakness. Journey before destination. The ancient words whispered through the gemstone lanterns as highstorms battered the Shattered Plains.",
      "Kaladin looked out across the chasm. The wind carried the scent of ozone and crushed chasmfiend shells. He reached deep within, and the Stormlight answered."
    ]
  },
  {
    id: "aurora-115",
    title: "Beyond Good and Evil",
    author: "Friedrich Nietzsche",
    genre: "Philosophy",
    format: "Paperback",
    price: 479,
    oldPrice: 649,
    cost: 230,
    stock: 28,
    rating: 4.77,
    reviewsCount: 1490,
    isbn: "978-0140449235",
    pages: 240,
    pubYear: 2021,
    cover: "https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=600&q=80",
    badge: null,
    vibeTags: ["deep-philosophy", "dark-academia"],
    synopsis: "Nietzsche accuses past philosophers of lacking critical sense and blindly accepting dogmatic premises in their consideration of morality and human consciousness.",
    excerpt: [
      "The will to truth, which will still tempt us to many a hazardous enterprise; that celebrated veracity of which all philosophers have hitherto spoken with reverence—what questions has this will to truth already given rise to!",
      "He who fights with monsters might take care lest he thereby become a monster. And if you gaze for long into an abyss, the abyss gazes also into you."
    ]
  },
  {
    id: "aurora-116",
    title: "Dune: Master Deluxe Edition",
    author: "Frank Herbert",
    genre: "Sci-Fi",
    format: "Hardcover",
    price: 1299,
    oldPrice: 1699,
    cost: 650,
    stock: 21,
    rating: 4.93,
    reviewsCount: 4600,
    isbn: "978-0441172719",
    pages: 688,
    pubYear: 2024,
    cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
    badge: "bestseller",
    vibeTags: ["quantum-sci-fi", "cyberpunk"],
    synopsis: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only currency is spice melange.",
    excerpt: [
      "A beginning is the time for taking the most delicate care that the balances are correct. This every sister of the Bene Gesserit knows.",
      "'I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me.'"
    ]
  }
];

/* Currency Formatting Utility in Indian Rupees */
function formatINR(amount) {
  return "₹" + Math.round(amount).toLocaleString("en-IN");
}

/* ----------------------------------------------------------------------------
 * 2. STATE CONTROLLER
 * ---------------------------------------------------------------------------- */
class AppState {
  constructor() {
    // Migration versioning to guarantee INR values load cleanly
    const storedVersion = localStorage.getItem("sanctuary_data_version");
    if (storedVersion !== "v2_inr") {
      localStorage.removeItem("aurora_books");
      localStorage.removeItem("aurora_cart");
      localStorage.setItem("sanctuary_data_version", "v2_inr");
    }

    this.books = this.loadFromStorage("aurora_books", SEED_BOOKS);
    this.cart = this.loadFromStorage("aurora_cart", []);
    this.wishlist = this.loadFromStorage("aurora_wishlist", ["aurora-101", "aurora-106"]);
    
    this.theme = localStorage.getItem("aurora_theme") || "light";
    this.viewMode = "grid"; // "grid" | "list"
    
    this.filters = {
      category: "all",
      formats: new Set(["Hardcover", "Paperback", "eBook", "Audiobook"]),
      maxPrice: 2500,
      minRating: 0,
      inStockOnly: false,
      onSaleOnly: false,
      searchQuery: "",
      sort: "featured"
    };

    this.activeVibe = "cyberpunk";
    this.appliedDiscount = null; // { code: 'READ20', percent: 20 } or { code: 'WELCOME10', flat: 100 }
    this.readingTimer = {
      totalSeconds: 25 * 60,
      remainingSeconds: 25 * 60,
      isRunning: false,
      intervalId: null,
      sessionsCompleted: 0,
      pagesLogged: 0
    };
  }

  loadFromStorage(key, fallback) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : fallback;
    } catch (e) {
      console.error(`Failed to load ${key} from localStorage:`, e);
      return fallback;
    }
  }

  saveBooks() {
    localStorage.setItem("aurora_books", JSON.stringify(this.books));
  }

  saveCart() {
    localStorage.setItem("aurora_cart", JSON.stringify(this.cart));
  }

  saveWishlist() {
    localStorage.setItem("aurora_wishlist", JSON.stringify(this.wishlist));
  }
}

const state = new AppState();

/* ----------------------------------------------------------------------------
 * 3. WEB AUDIO AMBIENT SOUND SYNTHESIZER
 * ---------------------------------------------------------------------------- */
class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    
    // Channels
    this.rainGain = null;
    this.rainSource = null;
    this.fireGain = null;
    this.fireTimer = null;
    this.cafeGain = null;
    this.cafeOsc = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  start() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;

    // 1. Rain Synthesizer (Pink Noise + Lowpass sweep)
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.11;
      b6 = white * 0.115926;
    }

    this.rainSource = this.ctx.createBufferSource();
    this.rainSource.buffer = noiseBuffer;
    this.rainSource.loop = true;

    const rainFilter = this.ctx.createBiquadFilter();
    rainFilter.type = "lowpass";
    rainFilter.frequency.setValueAtTime(1200, this.ctx.currentTime);

    this.rainGain = this.ctx.createGain();
    const rainVol = (parseInt(document.getElementById("rain-volume")?.value || 40) / 100) * 0.8;
    this.rainGain.gain.setValueAtTime(rainVol, this.ctx.currentTime);

    this.rainSource.connect(rainFilter);
    rainFilter.connect(this.rainGain);
    this.rainGain.connect(this.ctx.destination);
    this.rainSource.start();

    // 2. Fireplace Crackle (Impulse bursts)
    this.fireGain = this.ctx.createGain();
    const fireVol = (parseInt(document.getElementById("fire-volume")?.value || 30) / 100) * 0.4;
    this.fireGain.gain.setValueAtTime(fireVol, this.ctx.currentTime);
    this.fireGain.connect(this.ctx.destination);

    this.scheduleFireCrackle();

    // 3. Cafe Drone (Harmonic sub warm drone)
    this.cafeOsc = this.ctx.createOscillator();
    this.cafeOsc.type = "triangle";
    this.cafeOsc.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 warm chord

    const cafeFilter = this.ctx.createBiquadFilter();
    cafeFilter.type = "lowpass";
    cafeFilter.frequency.setValueAtTime(320, this.ctx.currentTime);

    this.cafeGain = this.ctx.createGain();
    const cafeVol = (parseInt(document.getElementById("cafe-volume")?.value || 25) / 100) * 0.15;
    this.cafeGain.gain.setValueAtTime(cafeVol, this.ctx.currentTime);

    this.cafeOsc.connect(cafeFilter);
    cafeFilter.connect(this.cafeGain);
    this.cafeGain.connect(this.ctx.destination);
    this.cafeOsc.start();
  }

  scheduleFireCrackle() {
    if (!this.isPlaying) return;
    const nextInterval = Math.random() * 200 + 50;
    this.fireTimer = setTimeout(() => {
      if (this.isPlaying && this.ctx) {
        this.playPop();
        this.scheduleFireCrackle();
      }
    }, nextInterval);
  }

  playPop() {
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "square";
      osc.frequency.setValueAtTime(Math.random() * 600 + 200, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.04);
      osc.connect(gain);
      gain.connect(this.fireGain);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  stop() {
    this.isPlaying = false;
    if (this.rainSource) {
      try { this.rainSource.stop(); } catch (e) {}
      this.rainSource = null;
    }
    if (this.cafeOsc) {
      try { this.cafeOsc.stop(); } catch (e) {}
      this.cafeOsc = null;
    }
    if (this.fireTimer) {
      clearTimeout(this.fireTimer);
      this.fireTimer = null;
    }
  }

  setVolume(channel, percent) {
    if (!this.ctx) return;
    const vol = percent / 100;
    if (channel === "rain" && this.rainGain) {
      this.rainGain.gain.setTargetAtTime(vol * 0.8, this.ctx.currentTime, 0.05);
    } else if (channel === "fire" && this.fireGain) {
      this.fireGain.gain.setTargetAtTime(vol * 0.4, this.ctx.currentTime, 0.05);
    } else if (channel === "cafe" && this.cafeGain) {
      this.cafeGain.gain.setTargetAtTime(vol * 0.15, this.ctx.currentTime, 0.05);
    }
  }

  playChime() {
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.45);
    } catch (e) {}
  }
}

const audio = new AmbientAudioEngine();

/* ----------------------------------------------------------------------------
 * 4. TOAST NOTIFICATION ENGINE
 * ---------------------------------------------------------------------------- */
function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;

  let icon = "fa-circle-info";
  if (type === "success") icon = "fa-circle-check";
  if (type === "error") icon = "fa-circle-exclamation";

  toast.innerHTML = `
    <i class="fa-solid ${icon}"></i>
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

/* ----------------------------------------------------------------------------
 * 5. CATALOG & BOOK RENDERING
 * ---------------------------------------------------------------------------- */
function getFilteredBooks() {
  return state.books.filter(book => {
    // 1. Search Query
    if (state.filters.searchQuery) {
      const q = state.filters.searchQuery.toLowerCase();
      const match = book.title.toLowerCase().includes(q) ||
                    book.author.toLowerCase().includes(q) ||
                    book.genre.toLowerCase().includes(q) ||
                    (book.isbn && book.isbn.toLowerCase().includes(q));
      if (!match) return false;
    }

    // 2. Category
    if (state.filters.category !== "all" && book.genre !== state.filters.category) {
      return false;
    }

    // 3. Format
    if (!state.filters.formats.has(book.format)) {
      return false;
    }

    // 4. Price
    if (book.price > state.filters.maxPrice) {
      return false;
    }

    // 5. Rating
    if (book.rating < state.filters.minRating) {
      return false;
    }

    // 6. Availability
    if (state.filters.inStockOnly && book.stock <= 0) {
      return false;
    }

    // 7. On Sale Deals
    if (state.filters.onSaleOnly && !book.oldPrice) {
      return false;
    }

    return true;
  }).sort((a, b) => {
    switch (state.filters.sort) {
      case "price-asc": return a.price - b.price;
      case "price-desc": return b.price - a.price;
      case "rating-desc": return b.rating - a.rating;
      case "title-asc": return a.title.localeCompare(b.title);
      case "newest": return b.pubYear - a.pubYear;
      default: return (b.reviewsCount || 0) - (a.reviewsCount || 0); // featured
    }
  });
}

function renderCatalog() {
  const container = document.getElementById("books-grid-container");
  const emptyState = document.getElementById("catalog-empty-state");
  const counterBadge = document.getElementById("results-count-badge");
  if (!container) return;

  const filtered = getFilteredBooks();

  if (counterBadge) {
    counterBadge.innerHTML = `Showing <strong>${filtered.length}</strong> of ${state.books.length} volumes`;
  }

  if (filtered.length === 0) {
    container.innerHTML = "";
    emptyState?.classList.remove("hidden");
    return;
  }

  emptyState?.classList.add("hidden");

  container.className = `books-grid ${state.viewMode === "list" ? "list-view" : ""}`;

  container.innerHTML = filtered.map(book => {
    const isWishlisted = state.wishlist.includes(book.id);
    const inStock = book.stock > 0;
    const isLowStock = book.stock > 0 && book.stock < 10;

    let badgeHtml = "";
    if (book.badge === "bestseller") badgeHtml = `<span class="badge-tag bestseller">★ BESTSELLER</span>`;
    else if (book.badge === "staff-pick") badgeHtml = `<span class="badge-tag staff-pick">✦ STAFF PICK</span>`;
    else if (book.oldPrice) badgeHtml = `<span class="badge-tag sale">SALE</span>`;
    if (isLowStock) badgeHtml += `<span class="badge-tag low-stock">Only ${book.stock} Left</span>`;

    return `
      <article class="book-card" data-id="${book.id}">
        <!-- Top Badges -->
        <div class="card-badges-row">
          ${badgeHtml}
        </div>

        <!-- Wishlist Button -->
        <button class="card-wishlist-toggle ${isWishlisted ? "active" : ""}" data-id="${book.id}" title="${isWishlisted ? "Remove from wishlist" : "Add to wishlist"}" aria-label="Toggle Wishlist">
          <i class="fa-${isWishlisted ? "solid" : "regular"} fa-heart"></i>
        </button>

        <!-- 3D Book Cover Presentation -->
        <div class="card-cover-wrapper" onclick="openBookDetailModal('${book.id}')">
          <div class="card-3d-book">
            <div class="card-book-spine"></div>
            <img class="card-book-cover" src="${book.cover}" alt="${book.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
          </div>
        </div>

        <!-- Details -->
        <div class="card-details">
          <div class="card-genre-format">
            <span class="genre-tag">${book.genre}</span>
            <span class="format-tag">${book.format}</span>
          </div>

          <h3 class="card-title" onclick="openBookDetailModal('${book.id}')">${book.title}</h3>
          <p class="card-author">by ${book.author}</p>

          <div class="card-rating-row">
            <span class="stars">
              ${renderStarRating(book.rating)}
            </span>
            <span class="rating-text">${book.rating.toFixed(1)} (${book.reviewsCount || 100})</span>
          </div>

          <div class="card-price-row">
            <div class="card-prices">
              <span class="card-current-price">${formatINR(book.price)}</span>
              ${book.oldPrice ? `<span class="card-old-price">${formatINR(book.oldPrice)}</span>` : ""}
            </div>
            <div class="card-stock-indicator ${inStock ? (isLowStock ? "low-stock" : "in-stock") : "low-stock"}">
              ${inStock ? `<i class="fa-solid fa-check"></i> In Stock` : `<i class="fa-solid fa-xmark"></i> Sold Out`}
            </div>
          </div>

          <!-- Actions -->
          <div class="card-actions-grid">
            <button class="btn btn-secondary" onclick="openReaderModal('${book.id}')" title="Read sample chapter inside">
              <i class="fa-solid fa-book-open"></i> Look Inside
            </button>
            <button class="btn btn-primary btn-glow" onclick="addToCart('${book.id}')" ${!inStock ? "disabled" : ""}>
              <i class="fa-solid fa-cart-plus"></i> ${inStock ? "Add to Bag" : "Out of Stock"}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");

  attachCard3DTilt();
  renderActiveFilterTags();
}

function renderStarRating(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      html += '<i class="fa-solid fa-star"></i>';
    } else if (rating >= i - 0.5) {
      html += '<i class="fa-solid fa-star-half-stroke"></i>';
    } else {
      html += '<i class="fa-regular fa-star"></i>';
    }
  }
  return html;
}

function attachCard3DTilt() {
  const cards = document.querySelectorAll(".book-card");
  cards.forEach(card => {
    const bookEl = card.querySelector(".card-3d-book");
    if (!bookEl) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -y / 14;
      const rotateY = x / 14;
      bookEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
      bookEl.style.transform = "rotateY(-12deg) rotateX(4deg)";
    });
  });
}

function renderActiveFilterTags() {
  const bar = document.getElementById("active-filters-bar");
  const list = document.getElementById("filter-tags-list");
  if (!bar || !list) return;

  const tags = [];
  if (state.filters.searchQuery) {
    tags.push({ key: "query", label: `Search: "${state.filters.searchQuery}"` });
  }
  if (state.filters.category !== "all") {
    tags.push({ key: "category", label: `Domain: ${state.filters.category}` });
  }
  if (state.filters.formats.size < 4) {
    tags.push({ key: "formats", label: `Formats (${state.filters.formats.size})` });
  }
  if (state.filters.maxPrice < 2500) {
    tags.push({ key: "price", label: `Max ${formatINR(state.filters.maxPrice)}` });
  }
  if (state.filters.minRating > 0) {
    tags.push({ key: "rating", label: `${state.filters.minRating}+ Stars` });
  }
  if (state.filters.inStockOnly) {
    tags.push({ key: "inStock", label: "In Stock Only" });
  }
  if (state.filters.onSaleOnly) {
    tags.push({ key: "onSale", label: "Deals Only" });
  }

  if (tags.length === 0) {
    bar.classList.add("hidden");
    list.innerHTML = "";
    return;
  }

  bar.classList.remove("hidden");
  list.innerHTML = tags.map(t => `
    <span class="filter-tag">
      ${t.label}
      <button onclick="removeFilterTag('${t.key}')"><i class="fa-solid fa-xmark"></i></button>
    </span>
  `).join("");
}

function removeFilterTag(key) {
  if (key === "query") {
    state.filters.searchQuery = "";
    const searchInput = document.getElementById("global-search-input");
    if (searchInput) searchInput.value = "";
  } else if (key === "category") {
    state.filters.category = "all";
    document.querySelectorAll(".category-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
  } else if (key === "formats") {
    state.filters.formats = new Set(["Hardcover", "Paperback", "eBook", "Audiobook"]);
    document.querySelectorAll("#format-filter-container input").forEach(cb => cb.checked = true);
  } else if (key === "price") {
    state.filters.maxPrice = 2500;
    const priceSlider = document.getElementById("price-range-slider");
    if (priceSlider) priceSlider.value = "2500";
    const priceVal = document.getElementById("price-slider-value");
    if (priceVal) priceVal.textContent = "₹2,500";
  } else if (key === "rating") {
    state.filters.minRating = 0;
    document.querySelectorAll(".rating-btn").forEach(b => b.classList.toggle("active", b.dataset.rating === "0"));
  } else if (key === "inStock") {
    state.filters.inStockOnly = false;
    const cb = document.getElementById("in-stock-only-toggle");
    if (cb) cb.checked = false;
  } else if (key === "onSale") {
    state.filters.onSaleOnly = false;
    const cb = document.getElementById("on-sale-only-toggle");
    if (cb) cb.checked = false;
  }
  renderCatalog();
}

/* ----------------------------------------------------------------------------
 * 6. AI VIBE MATCHER LOGIC
 * ---------------------------------------------------------------------------- */
const VIBE_DEFINITIONS = {
  "cyberpunk": {
    bookId: "aurora-101",
    matchScore: 99,
    reason: "Pulsing with high-octane cyberspace aesthetics, rogue hacker subculture, and electric noir dystopia."
  },
  "rainy-cafe": {
    bookId: "aurora-105",
    matchScore: 97,
    reason: "Enveloped in atmospheric Barcelona rain, antique bookstore mystery, and melancholic lyrical beauty."
  },
  "dark-academia": {
    bookId: "aurora-103",
    matchScore: 98,
    reason: "Timeless stoic introspections from Roman Emperor Marcus Aurelius on fate, duty, and quiet resilience."
  },
  "quantum-sci-fi": {
    bookId: "aurora-104",
    matchScore: 96,
    reason: "Astrophysics problem-solving, witty interstellar survival, and heartwarming first contact."
  },
  "deep-philosophy": {
    bookId: "aurora-115",
    matchScore: 95,
    reason: "Unflinching intellectual deconstruction of moral dogmas, free thought, and the abyss of existence."
  },
  "cozy-fantasy": {
    bookId: "aurora-106",
    matchScore: 98,
    reason: "Legendary bardic storytelling, ancient magic academy lore, and warmth beside the tavern hearth."
  }
};

function renderVibeMatch(vibeKey) {
  const container = document.getElementById("vibe-result-card");
  if (!container) return;

  const vibe = VIBE_DEFINITIONS[vibeKey] || VIBE_DEFINITIONS["cyberpunk"];
  const book = state.books.find(b => b.id === vibe.bookId) || state.books[0];

  container.innerHTML = `
    <img class="vibe-result-book-cover" src="${book.cover}" alt="${book.title}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
    <div class="vibe-result-info">
      <span class="vibe-match-badge">
        <i class="fa-solid fa-sparkles"></i> ${vibe.matchScore}% Resonance Match
      </span>
      <h3 class="vibe-result-title">${book.title}</h3>
      <p class="vibe-result-author">by ${book.author} &bull; ${book.genre}</p>
      <div class="vibe-match-reason">
        <strong>Why It Fits Your Vibe:</strong> ${vibe.reason}
      </div>
      <div class="vibe-result-actions">
        <button class="btn btn-burgundy-solid" onclick="addToCart('${book.id}')">
          <i class="fa-solid fa-cart-plus"></i> Add to Bag (${formatINR(book.price)})
        </button>
        <button class="btn btn-burgundy-outline" onclick="openReaderModal('${book.id}')">
          <i class="fa-solid fa-book-open"></i> Read Preview
        </button>
      </div>
    </div>
  `;
}

/* ----------------------------------------------------------------------------
 * 7. 3D "LOOK INSIDE" FLIP-BOOK READER MODAL
 * ---------------------------------------------------------------------------- */
let currentReaderBook = null;
let currentReaderPageIndex = 0;

function openReaderModal(bookId) {
  const book = state.books.find(b => b.id === bookId);
  if (!book) return;

  currentReaderBook = book;
  currentReaderPageIndex = 0;

  const overlay = document.getElementById("reader-modal-overlay");
  const title = document.getElementById("reader-book-title");
  const author = document.getElementById("reader-book-author");
  const rightTitle = document.getElementById("reader-right-header-title");
  const buyBtn = document.getElementById("reader-buy-now-btn");

  if (title) title.textContent = book.title;
  if (author) author.textContent = book.author;
  if (rightTitle) rightTitle.textContent = book.title;
  if (buyBtn) {
    buyBtn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Acquire Full Volume (${formatINR(book.price)})`;
    buyBtn.onclick = () => {
      addToCart(book.id);
      closeReaderModal();
    };
  }

  updateReaderPages();
  overlay?.classList.add("active");
  audio.playChime();
}

function updateReaderPages() {
  if (!currentReaderBook) return;

  const leftContent = document.getElementById("reader-left-content");
  const rightContent = document.getElementById("reader-right-content");
  const leftPageNum = document.getElementById("reader-left-page-num");
  const rightPageNum = document.getElementById("reader-right-page-num");
  const prevBtn = document.getElementById("reader-prev-page-btn");
  const nextBtn = document.getElementById("reader-next-page-btn");

  const excerptArray = currentReaderBook.excerpt || [
    "No preview available for this edition.",
    "Please check back later or purchase the full volume."
  ];

  const page1 = excerptArray[currentReaderPageIndex] || "End of preview excerpt.";
  const page2 = excerptArray[currentReaderPageIndex + 1] || "Purchase the full volume to continue reading.";

  if (leftContent) leftContent.innerHTML = `<p>${page1}</p>`;
  if (rightContent) rightContent.innerHTML = `<p>${page2}</p>`;
  if (leftPageNum) leftPageNum.textContent = String(currentReaderPageIndex + 1).padStart(2, "0");
  if (rightPageNum) rightPageNum.textContent = String(currentReaderPageIndex + 2).padStart(2, "0");

  if (prevBtn) prevBtn.disabled = currentReaderPageIndex === 0;
  if (nextBtn) nextBtn.disabled = currentReaderPageIndex + 2 >= excerptArray.length;
}

function closeReaderModal() {
  document.getElementById("reader-modal-overlay")?.classList.remove("active");
  const waves = document.getElementById("sample-audio-waves");
  waves?.classList.remove("active");
}

/* ----------------------------------------------------------------------------
 * 8. BOOK DETAIL MODAL
 * ---------------------------------------------------------------------------- */
function openBookDetailModal(bookId) {
  const book = state.books.find(b => b.id === bookId);
  if (!book) return;

  const overlay = document.getElementById("book-detail-modal-overlay");
  const card = document.getElementById("book-detail-card");
  if (!overlay || !card) return;

  card.innerHTML = `
    <div class="modal-header">
      <div class="modal-title-box">
        <i class="fa-solid fa-book-bookmark modal-icon wine"></i>
        <div>
          <h3>${book.title}</h3>
          <small>by ${book.author}</small>
        </div>
      </div>
      <button class="modal-close-btn" onclick="closeBookDetailModal()"><i class="fa-solid fa-xmark"></i></button>
    </div>

    <div class="modal-body">
      <div style="display: grid; grid-template-columns: 220px 1fr; gap: 28px; margin-bottom: 24px;">
        <img src="${book.cover}" alt="${book.title}" style="width: 100%; border-radius: var(--radius-md); box-shadow: var(--shadow-md);" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
        <div>
          <div style="display: flex; gap: 8px; margin-bottom: 12px;">
            <span class="badge-tag bestseller">${book.genre}</span>
            <span class="badge-tag staff-pick">${book.format}</span>
          </div>

          <div class="spotlight-rating" style="margin-bottom: 14px;">
            <span class="stars">${renderStarRating(book.rating)}</span>
            <span class="rating-val">${book.rating.toFixed(1)} rating based on ${book.reviewsCount || 100} scholarly reviews</span>
          </div>

          <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${book.synopsis}</p>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; background: var(--bg-surface-elevated); padding: 14px; border-radius: var(--radius-md); margin-bottom: 20px; font-size: 0.82rem;">
            <div><span style="color: var(--text-muted); display: block;">ISBN-13</span><strong>${book.isbn || "N/A"}</strong></div>
            <div><span style="color: var(--text-muted); display: block;">Pages</span><strong>${book.pages || 320} folios</strong></div>
            <div><span style="color: var(--text-muted); display: block;">Published</span><strong>${book.pubYear || 2024}</strong></div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 14px; border-top: 1px solid var(--border-subtle);">
            <div>
              <span style="font-family: var(--font-mono); font-size: 1.6rem; font-weight: 800; color: var(--color-deep-burgundy);">${formatINR(book.price)}</span>
              ${book.oldPrice ? `<span style="font-family: var(--font-mono); font-size: 1rem; color: var(--text-muted); text-decoration: line-through; margin-left: 8px;">${formatINR(book.oldPrice)}</span>` : ""}
            </div>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-burgundy-outline" onclick="openReaderModal('${book.id}'); closeBookDetailModal();">
                <i class="fa-solid fa-book-open"></i> Look Inside
              </button>
              <button class="btn btn-burgundy-solid" onclick="addToCart('${book.id}'); closeBookDetailModal();">
                <i class="fa-solid fa-cart-plus"></i> Add to Bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  overlay.classList.add("active");
}

function closeBookDetailModal() {
  document.getElementById("book-detail-modal-overlay")?.classList.remove("active");
}

/* ----------------------------------------------------------------------------
 * 9. SHOPPING CART & CHECKOUT LOGIC (INR ₹ SYSTEM)
 * ---------------------------------------------------------------------------- */
function addToCart(bookId) {
  const book = state.books.find(b => b.id === bookId);
  if (!book) return;

  if (book.stock <= 0) {
    showToast(`Sorry, "${book.title}" is currently out of stock!`, "error");
    return;
  }

  const existing = state.cart.find(item => item.id === bookId);
  if (existing) {
    if (existing.qty >= book.stock) {
      showToast(`Cannot add more. Max available stock is ${book.stock}.`, "error");
      return;
    }
    existing.qty += 1;
  } else {
    state.cart.push({
      id: book.id,
      title: book.title,
      author: book.author,
      price: book.price,
      format: book.format,
      cover: book.cover,
      qty: 1
    });
  }

  state.saveCart();
  updateCartUI();
  audio.playChime();
  showToast(`Added "${book.title}" to your Book Bag!`, "success");
}

function updateCartQty(bookId, delta) {
  const item = state.cart.find(i => i.id === bookId);
  const book = state.books.find(b => b.id === bookId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    state.cart = state.cart.filter(i => i.id !== bookId);
  } else if (book && item.qty > book.stock) {
    item.qty = book.stock;
    showToast(`Stock limit reached for this volume (${book.stock} max).`, "info");
  }

  state.saveCart();
  updateCartUI();
}

function removeFromCart(bookId) {
  state.cart = state.cart.filter(i => i.id !== bookId);
  state.saveCart();
  updateCartUI();
  showToast("Item removed from your Book Bag.", "info");
}

function updateCartUI() {
  const badge = document.getElementById("cart-badge");
  const navTotal = document.getElementById("cart-nav-total");
  const drawerCount = document.getElementById("drawer-item-count");
  const list = document.getElementById("cart-items-list");
  const emptyView = document.getElementById("cart-empty-view");
  const footer = document.getElementById("cart-drawer-footer");

  const totalItems = state.cart.reduce((acc, i) => acc + i.qty, 0);
  const rawSubtotal = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);

  let discountAmount = 0;
  if (state.appliedDiscount) {
    if (state.appliedDiscount.percent) {
      discountAmount = (rawSubtotal * state.appliedDiscount.percent) / 100;
    } else if (state.appliedDiscount.flat) {
      discountAmount = Math.min(rawSubtotal, state.appliedDiscount.flat);
    }
  }

  const subtotalAfterDiscount = Math.max(0, rawSubtotal - discountAmount);
  const isFreeShipping = subtotalAfterDiscount >= 499;
  const shipping = totalItems > 0 ? (isFreeShipping ? 0 : 49) : 0;
  const tax = Math.round(subtotalAfterDiscount * 0.05);
  const grandTotal = subtotalAfterDiscount + shipping + tax;

  if (badge) badge.textContent = totalItems;
  if (navTotal) navTotal.textContent = formatINR(grandTotal);
  if (drawerCount) drawerCount.textContent = `${totalItems} ${totalItems === 1 ? "item" : "items"}`;

  // Shipping Progress Bar (₹499 threshold)
  const shippingFill = document.getElementById("shipping-progress-fill");
  const shippingText = document.getElementById("shipping-tracker-text");
  if (shippingFill && shippingText) {
    if (subtotalAfterDiscount >= 499) {
      shippingFill.style.width = "100%";
      shippingText.innerHTML = `🎉 <strong>Congratulations!</strong> You unlocked <strong>FREE Courier Delivery across India!</strong>`;
    } else {
      const remaining = 499 - subtotalAfterDiscount;
      const pct = Math.min(100, (subtotalAfterDiscount / 499) * 100);
      shippingFill.style.width = `${pct}%`;
      shippingText.innerHTML = `Add <strong>${formatINR(remaining)}</strong> more to unlock <strong>FREE Courier Delivery!</strong>`;
    }
  }

  // Cart Items Render
  if (state.cart.length === 0) {
    if (list) list.innerHTML = "";
    emptyView?.classList.remove("hidden");
    footer?.classList.add("hidden");
  } else {
    emptyView?.classList.add("hidden");
    footer?.classList.remove("hidden");

    if (list) {
      list.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <img class="cart-item-thumb" src="${item.cover}" alt="${item.title}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
          <div>
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-format">${item.format}</span>
            <div class="cart-item-price">${formatINR(item.price * item.qty)}</div>
          </div>
          <div class="cart-item-controls">
            <div class="cart-qty-spinner">
              <button onclick="updateCartQty('${item.id}', -1)">-</button>
              <span>${item.qty}</span>
              <button onclick="updateCartQty('${item.id}', 1)">+</button>
            </div>
            <button class="cart-item-remove-btn" onclick="removeFromCart('${item.id}')">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      `).join("");
    }
  }

  // Financial Breakdown Values
  const subtotalEl = document.getElementById("cart-subtotal-val");
  const discountRow = document.getElementById("cart-discount-row");
  const discountVal = document.getElementById("cart-discount-val");
  const promoName = document.getElementById("promo-name-applied");
  const shippingEl = document.getElementById("cart-shipping-val");
  const taxEl = document.getElementById("cart-tax-val");
  const grandTotalEl = document.getElementById("cart-grand-total-val");
  const payableEl = document.getElementById("checkout-payable-total");

  if (subtotalEl) subtotalEl.textContent = formatINR(rawSubtotal);
  if (discountRow) {
    if (discountAmount > 0) {
      discountRow.classList.remove("hidden");
      if (discountVal) discountVal.textContent = `-${formatINR(discountAmount)}`;
      if (promoName) promoName.textContent = state.appliedDiscount.code;
    } else {
      discountRow.classList.add("hidden");
    }
  }
  if (shippingEl) shippingEl.textContent = shipping === 0 ? "FREE" : formatINR(shipping);
  if (taxEl) taxEl.textContent = formatINR(tax);
  if (grandTotalEl) grandTotalEl.textContent = formatINR(grandTotal);
  if (payableEl) payableEl.textContent = formatINR(grandTotal);
}

function openCartDrawer() {
  document.getElementById("cart-drawer-overlay")?.classList.add("active");
  document.getElementById("cart-drawer")?.classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer-overlay")?.classList.remove("active");
  document.getElementById("cart-drawer")?.classList.remove("active");
}

/* ----------------------------------------------------------------------------
 * 10. WISHLIST MANAGEMENT
 * ---------------------------------------------------------------------------- */
function toggleWishlist(bookId) {
  const index = state.wishlist.indexOf(bookId);
  const book = state.books.find(b => b.id === bookId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed "${book ? book.title : "volume"}" from your Wishlist.`, "info");
  } else {
    state.wishlist.push(bookId);
    showToast(`Saved "${book ? book.title : "volume"}" to your Wishlist!`, "success");
    audio.playChime();
  }

  state.saveWishlist();
  updateWishlistUI();
  renderCatalog();
}

function updateWishlistUI() {
  const badge = document.getElementById("wishlist-badge");
  if (badge) badge.textContent = state.wishlist.length;

  const container = document.getElementById("wishlist-items-container");
  const emptyView = document.getElementById("wishlist-empty-view");
  if (!container) return;

  const wishlistBooks = state.books.filter(b => state.wishlist.includes(b.id));

  if (wishlistBooks.length === 0) {
    container.innerHTML = "";
    emptyView?.classList.remove("hidden");
    return;
  }

  emptyView?.classList.add("hidden");
  container.innerHTML = wishlistBooks.map(book => `
    <div style="display: flex; align-items: center; gap: 14px; padding: 12px 0; border-bottom: 1px solid var(--border-subtle);">
      <img src="${book.cover}" alt="${book.title}" style="width: 44px; height: 60px; object-fit: cover; border-radius: 4px;" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
      <div style="flex: 1;">
        <h4 style="font-size: 0.9rem; margin-bottom: 2px;">${book.title}</h4>
        <span style="font-size: 0.75rem; color: var(--text-muted);">${book.author} &bull; ${formatINR(book.price)}</span>
      </div>
      <button class="btn btn-burgundy-solid" style="padding: 6px 12px; font-size: 0.78rem;" onclick="addToCart('${book.id}')">
        <i class="fa-solid fa-cart-plus"></i> Move to Bag
      </button>
      <button onclick="toggleWishlist('${book.id}')" style="color: var(--color-rose); font-size: 0.9rem; padding: 6px;">
        <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `).join("");
}

function openWishlistModal() {
  updateWishlistUI();
  document.getElementById("wishlist-modal-overlay")?.classList.add("active");
}

function closeWishlistModal() {
  document.getElementById("wishlist-modal-overlay")?.classList.remove("active");
}

/* ----------------------------------------------------------------------------
 * 11. MULTI-STEP CHECKOUT SYSTEM (INR ₹)
 * ---------------------------------------------------------------------------- */
let checkoutStep = 1;

function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Your Book Bag is empty! Add volumes first.", "error");
    return;
  }
  closeCartDrawer();
  checkoutStep = 1;
  setCheckoutStep(1);
  document.getElementById("checkout-modal-overlay")?.classList.add("active");
}

function closeCheckoutModal() {
  document.getElementById("checkout-modal-overlay")?.classList.remove("active");
}

function setCheckoutStep(step) {
  checkoutStep = step;
  document.querySelectorAll(".wizard-step").forEach(s => {
    s.classList.toggle("active", parseInt(s.dataset.step) <= step);
  });
  document.querySelectorAll(".checkout-step-content").forEach(c => {
    c.classList.remove("active");
  });
  document.getElementById(`checkout-step-${step}`)?.classList.add("active");
}

function completeOrderPlacement() {
  const name = document.getElementById("ship-name")?.value || "Aarav Sharma";
  const email = document.getElementById("ship-email")?.value || "aarav.sharma@sanctuary.in";
  const address = document.getElementById("ship-address")?.value || "Flat 402, Heritage Heights";

  const rawSubtotal = state.cart.reduce((acc, i) => acc + i.price * i.qty, 0);
  let discountAmount = 0;
  if (state.appliedDiscount?.percent) {
    discountAmount = (rawSubtotal * state.appliedDiscount.percent) / 100;
  } else if (state.appliedDiscount?.flat) {
    discountAmount = state.appliedDiscount.flat;
  }
  const subAfterDiscount = Math.max(0, rawSubtotal - discountAmount);
  const shipping = subAfterDiscount >= 499 ? 0 : 49;
  const tax = Math.round(subAfterDiscount * 0.05);
  const total = subAfterDiscount + shipping + tax;

  const orderId = "#SANCT-" + Math.floor(10000 + Math.random() * 90000);
  const now = new Date();

  // Deduct inventory stock
  state.cart.forEach(cartItem => {
    const book = state.books.find(b => b.id === cartItem.id);
    if (book) {
      book.stock = Math.max(0, book.stock - cartItem.qty);
    }
  });
  state.saveBooks();

  // Populate Receipt
  const receiptOrderId = document.getElementById("receipt-order-id");
  const receiptName = document.getElementById("receipt-customer-name");
  const receiptEmail = document.getElementById("receipt-customer-email");
  const receiptAddress = document.getElementById("receipt-customer-address");
  const receiptDate = document.getElementById("receipt-date");
  const receiptItemsList = document.getElementById("receipt-items-list");
  const receiptTotalPaid = document.getElementById("receipt-total-paid");

  if (receiptOrderId) receiptOrderId.textContent = orderId;
  if (receiptName) receiptName.textContent = name;
  if (receiptEmail) receiptEmail.textContent = email;
  if (receiptAddress) receiptAddress.textContent = address;
  if (receiptDate) receiptDate.textContent = now.toLocaleDateString("en-IN", { month: "short", day: "numeric", year: "numeric" });
  if (receiptTotalPaid) receiptTotalPaid.textContent = formatINR(total);

  if (receiptItemsList) {
    receiptItemsList.innerHTML = state.cart.map(i => `
      <div class="receipt-item-row">
        <span>${i.title} (${i.format})</span>
        <span class="text-center">${i.qty}</span>
        <span class="text-right">${formatINR(i.price * i.qty)}</span>
      </div>
    `).join("");
  }

  // Clear Cart
  state.cart = [];
  state.appliedDiscount = null;
  state.saveCart();
  updateCartUI();

  // Transition to step 3 (Receipt)
  setCheckoutStep(3);
  audio.playChime();
  showToast("Acquisition confirmed! Folio invoice generated.", "success");
}

/* ----------------------------------------------------------------------------
 * 12. READING SANCTUARY TIMER
 * ---------------------------------------------------------------------------- */
function updateTimerDisplay() {
  const display = document.getElementById("timer-display");
  const ring = document.getElementById("timer-progress-ring");
  const completedVal = document.getElementById("sessions-completed-val");
  const pagesVal = document.getElementById("pages-logged-val");

  const mins = Math.floor(state.readingTimer.remainingSeconds / 60);
  const secs = state.readingTimer.remainingSeconds % 60;
  const timeStr = `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;

  if (display) display.textContent = timeStr;

  if (ring) {
    const totalCircumference = 534; // 2 * PI * 85
    const progress = state.readingTimer.remainingSeconds / state.readingTimer.totalSeconds;
    const offset = totalCircumference * (1 - progress);
    ring.style.strokeDashoffset = offset;
  }

  if (completedVal) completedVal.textContent = state.readingTimer.sessionsCompleted;
  if (pagesVal) pagesVal.textContent = state.readingTimer.pagesLogged;
}

function toggleReadingTimer() {
  const startBtn = document.getElementById("timer-start-btn");

  if (state.readingTimer.isRunning) {
    clearInterval(state.readingTimer.intervalId);
    state.readingTimer.isRunning = false;
    if (startBtn) startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Resume Session`;
  } else {
    state.readingTimer.isRunning = true;
    if (startBtn) startBtn.innerHTML = `<i class="fa-solid fa-pause"></i> Pause Session`;

    state.readingTimer.intervalId = setInterval(() => {
      if (state.readingTimer.remainingSeconds > 0) {
        state.readingTimer.remainingSeconds--;
        updateTimerDisplay();
      } else {
        clearInterval(state.readingTimer.intervalId);
        state.readingTimer.isRunning = false;
        state.readingTimer.sessionsCompleted++;
        state.readingTimer.pagesLogged += Math.floor(state.readingTimer.totalSeconds / 60 * 0.8);
        state.readingTimer.remainingSeconds = state.readingTimer.totalSeconds;
        updateTimerDisplay();
        audio.playChime();
        showToast("🌟 Focus reading session complete! Great work.", "success");
        if (startBtn) startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Begin Session`;
      }
    }, 1000);
  }
}

function resetReadingTimer() {
  clearInterval(state.readingTimer.intervalId);
  state.readingTimer.isRunning = false;
  state.readingTimer.remainingSeconds = state.readingTimer.totalSeconds;
  updateTimerDisplay();
  const startBtn = document.getElementById("timer-start-btn");
  if (startBtn) startBtn.innerHTML = `<i class="fa-solid fa-play"></i> Begin Session`;
}

/* ----------------------------------------------------------------------------
 * 13. GLOBAL EVENT LISTENERS & INITIALIZATION
 * ---------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Theme setup
  document.documentElement.setAttribute("data-theme", state.theme);
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.innerHTML = `<i class="fa-solid ${state.theme === "dark" ? "fa-sun" : "fa-moon"}"></i>`;
    themeToggle.addEventListener("click", () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("aurora_theme", state.theme);
      themeToggle.innerHTML = `<i class="fa-solid ${state.theme === "dark" ? "fa-sun" : "fa-moon"}"></i>`;
    });
  }

  // 2. Global Search Input & Dropdown Autocomplete
  const searchInput = document.getElementById("global-search-input");
  const searchDropdown = document.getElementById("search-dropdown-results");
  const clearSearchBtn = document.getElementById("clear-search-btn");

  searchInput?.addEventListener("input", (e) => {
    const q = e.target.value.trim();
    state.filters.searchQuery = q;
    clearSearchBtn?.classList.toggle("hidden", q.length === 0);

    if (q.length >= 2) {
      const matches = state.books.filter(b =>
        b.title.toLowerCase().includes(q.toLowerCase()) ||
        b.author.toLowerCase().includes(q.toLowerCase()) ||
        b.genre.toLowerCase().includes(q.toLowerCase())
      ).slice(0, 5);

      if (matches.length > 0 && searchDropdown) {
        searchDropdown.classList.remove("hidden");
        searchDropdown.innerHTML = matches.map(b => `
          <div class="search-result-item" onclick="openBookDetailModal('${b.id}'); document.getElementById('search-dropdown-results').classList.add('hidden');">
            <img class="search-result-thumb" src="${b.cover}" alt="${b.title}" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80';">
            <div class="search-result-info">
              <div class="search-result-title">${b.title}</div>
              <div class="search-result-meta">by ${b.author} &bull; ${b.genre}</div>
            </div>
            <span class="search-result-price">${formatINR(b.price)}</span>
          </div>
        `).join("");
      } else {
        searchDropdown?.classList.add("hidden");
      }
    } else {
      searchDropdown?.classList.add("hidden");
    }

    renderCatalog();
  });

  clearSearchBtn?.addEventListener("click", () => {
    if (searchInput) searchInput.value = "";
    state.filters.searchQuery = "";
    clearSearchBtn.classList.add("hidden");
    searchDropdown?.classList.add("hidden");
    renderCatalog();
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#nav-search-container")) {
      searchDropdown?.classList.add("hidden");
    }
  });

  // 3. Category Filter Buttons (Sidebar & Navbar)
  document.querySelectorAll(".category-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".category-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.filters.category = pill.dataset.category;
      renderCatalog();
    });
  });

  document.querySelectorAll(".nav-filter-link").forEach(navLink => {
    navLink.addEventListener("click", () => {
      const cat = navLink.dataset.cat;
      if (cat) {
        state.filters.category = cat;
        document.querySelectorAll(".category-pill").forEach(p => {
          p.classList.toggle("active", p.dataset.category === cat);
        });
        renderCatalog();
      }
    });
  });

  // 4. Format Checkboxes
  document.querySelectorAll("#format-filter-container input").forEach(cb => {
    cb.addEventListener("change", () => {
      if (cb.checked) {
        state.filters.formats.add(cb.value);
      } else {
        state.filters.formats.delete(cb.value);
      }
      renderCatalog();
    });
  });

  // 5. Price Slider (INR Range 200 - 2500)
  const priceSlider = document.getElementById("price-range-slider");
  const priceVal = document.getElementById("price-slider-value");
  priceSlider?.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    state.filters.maxPrice = val;
    if (priceVal) priceVal.textContent = formatINR(val);
    renderCatalog();
  });

  // 6. Rating Filter
  document.querySelectorAll(".rating-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".rating-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.filters.minRating = parseFloat(btn.dataset.rating);
      renderCatalog();
    });
  });

  // 7. In-Stock & Deals Toggles
  document.getElementById("in-stock-only-toggle")?.addEventListener("change", (e) => {
    state.filters.inStockOnly = e.target.checked;
    renderCatalog();
  });

  document.getElementById("on-sale-only-toggle")?.addEventListener("change", (e) => {
    state.filters.onSaleOnly = e.target.checked;
    renderCatalog();
  });

  // 8. Sort Dropdown
  document.getElementById("catalog-sort")?.addEventListener("change", (e) => {
    state.filters.sort = e.target.value;
    renderCatalog();
  });

  // 9. View Mode Toggle (Grid vs List)
  document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".view-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.viewMode = btn.dataset.view;
      renderCatalog();
    });
  });

  // 10. Reset Filters Button
  const resetAllBtn = () => {
    state.filters.category = "all";
    state.filters.formats = new Set(["Hardcover", "Paperback", "eBook", "Audiobook"]);
    state.filters.maxPrice = 2500;
    state.filters.minRating = 0;
    state.filters.inStockOnly = false;
    state.filters.onSaleOnly = false;
    state.filters.searchQuery = "";
    state.filters.sort = "featured";

    document.querySelectorAll(".category-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
    document.querySelectorAll("#format-filter-container input").forEach(cb => cb.checked = true);
    if (priceSlider) priceSlider.value = "2500";
    if (priceVal) priceVal.textContent = "₹2,500";
    document.querySelectorAll(".rating-btn").forEach(b => b.classList.toggle("active", b.dataset.rating === "0"));
    const inStockToggle = document.getElementById("in-stock-only-toggle");
    if (inStockToggle) inStockToggle.checked = false;
    const onSaleToggle = document.getElementById("on-sale-only-toggle");
    if (onSaleToggle) onSaleToggle.checked = false;
    if (searchInput) searchInput.value = "";
    clearSearchBtn?.classList.add("hidden");

    renderCatalog();
    showToast("Filters reset to default.", "info");
  };

  document.getElementById("reset-filters-btn")?.addEventListener("click", resetAllBtn);
  document.getElementById("empty-state-reset-btn")?.addEventListener("click", resetAllBtn);
  document.getElementById("clear-all-tags-btn")?.addEventListener("click", resetAllBtn);

  // 11. AI Vibe Chip Selector
  document.querySelectorAll(".vibe-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll(".vibe-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeVibe = chip.dataset.vibe;
      renderVibeMatch(state.activeVibe);
    });
  });

  // 12. Spotlight Card Actions
  document.getElementById("spotlight-add-cart-btn")?.addEventListener("click", () => addToCart("aurora-101"));
  document.getElementById("spotlight-preview-btn")?.addEventListener("click", () => openReaderModal("aurora-101"));

  // 13. Cart Drawer Events
  document.getElementById("nav-cart-btn")?.addEventListener("click", openCartDrawer);
  document.getElementById("close-cart-btn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-drawer-overlay")?.addEventListener("click", closeCartDrawer);
  document.getElementById("cart-empty-shop-btn")?.addEventListener("click", closeCartDrawer);
  document.getElementById("start-checkout-btn")?.addEventListener("click", openCheckoutModal);

  // Promo Code Application (INR coupons)
  document.getElementById("apply-promo-btn")?.addEventListener("click", () => {
    const input = document.getElementById("promo-code-input");
    const feedback = document.getElementById("promo-feedback");
    const code = input?.value.trim().toUpperCase();

    if (code === "READ20") {
      state.appliedDiscount = { code: "READ20", percent: 20 };
      if (feedback) {
        feedback.className = "promo-feedback success";
        feedback.textContent = "✓ Coupon READ20 applied! 20% discount granted.";
        feedback.classList.remove("hidden");
      }
      showToast("Coupon READ20 applied (20% OFF)!", "success");
    } else if (code === "STUDENT50") {
      state.appliedDiscount = { code: "STUDENT50", percent: 50 };
      if (feedback) {
        feedback.className = "promo-feedback success";
        feedback.textContent = "✓ Student scholarship coupon applied! 50% OFF.";
        feedback.classList.remove("hidden");
      }
      showToast("Student discount applied (50% OFF)!", "success");
    } else if (code === "WELCOME10") {
      state.appliedDiscount = { code: "WELCOME10", flat: 100 };
      if (feedback) {
        feedback.className = "promo-feedback success";
        feedback.textContent = "✓ Welcome coupon applied! ₹100 discount granted.";
        feedback.classList.remove("hidden");
      }
      showToast("Welcome discount applied (₹100 OFF)!", "success");
    } else {
      if (feedback) {
        feedback.className = "promo-feedback error";
        feedback.textContent = "Invalid code. Try READ20, STUDENT50, or WELCOME10.";
        feedback.classList.remove("hidden");
      }
    }
    updateCartUI();
  });

  // 14. Wishlist Events
  document.getElementById("nav-wishlist-btn")?.addEventListener("click", openWishlistModal);
  document.getElementById("close-wishlist-modal-btn")?.addEventListener("click", closeWishlistModal);
  document.getElementById("wishlist-modal-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "wishlist-modal-overlay") closeWishlistModal();
  });

  // Wishlist clicks delegation
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".card-wishlist-toggle");
    if (btn) {
      e.stopPropagation();
      toggleWishlist(btn.dataset.id);
    }
  });

  // 15. 3D Reader Modal Events
  document.getElementById("close-reader-modal-btn")?.addEventListener("click", closeReaderModal);
  document.getElementById("reader-modal-overlay")?.addEventListener("click", (e) => {
    if (e.target.id === "reader-modal-overlay") closeReaderModal();
  });

  document.getElementById("reader-prev-page-btn")?.addEventListener("click", () => {
    if (currentReaderPageIndex > 0) {
      currentReaderPageIndex -= 2;
      updateReaderPages();
      audio.playChime();
    }
  });

  document.getElementById("reader-next-page-btn")?.addEventListener("click", () => {
    if (currentReaderBook && currentReaderPageIndex + 2 < (currentReaderBook.excerpt || []).length) {
      currentReaderPageIndex += 2;
      updateReaderPages();
      audio.playChime();
    }
  });

  // Reader themes
  document.querySelectorAll(".reader-color-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".reader-color-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const bookFrame = document.getElementById("double-page-container");
      if (bookFrame) bookFrame.setAttribute("data-theme", btn.dataset.readertheme);
    });
  });

  // Audio excerpt narration simulation
  document.getElementById("audio-sample-play-btn")?.addEventListener("click", function() {
    const waves = document.getElementById("sample-audio-waves");
    if (waves?.classList.contains("active")) {
      waves.classList.remove("active");
      this.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
      waves?.classList.add("active");
      this.innerHTML = `<i class="fa-solid fa-pause"></i>`;
      audio.playChime();
    }
  });

  // 16. Ambient Audio Lounge Mixer Events
  const masterSoundBtn = document.getElementById("sound-master-btn");
  const masterBtnText = document.getElementById("master-btn-text");

  masterSoundBtn?.addEventListener("click", () => {
    if (audio.isPlaying) {
      audio.stop();
      masterSoundBtn.classList.remove("playing");
      if (masterBtnText) masterBtnText.textContent = "Play Audio";
      document.querySelectorAll(".sound-slider").forEach(s => s.disabled = true);
      document.getElementById("rain-status").textContent = "Paused";
      document.getElementById("fire-status").textContent = "Paused";
      document.getElementById("cafe-status").textContent = "Paused";
    } else {
      audio.start();
      masterSoundBtn.classList.add("playing");
      if (masterBtnText) masterBtnText.textContent = "Pause Audio";
      document.querySelectorAll(".sound-slider").forEach(s => s.disabled = false);
      document.getElementById("rain-status").textContent = "Synthesizing";
      document.getElementById("fire-status").textContent = "Synthesizing";
      document.getElementById("cafe-status").textContent = "Synthesizing";
      showToast("Ambient soundscape active.", "info");
    }
  });

  document.getElementById("rain-volume")?.addEventListener("input", (e) => {
    document.getElementById("rain-val").textContent = `${e.target.value}%`;
    audio.setVolume("rain", e.target.value);
  });

  document.getElementById("fire-volume")?.addEventListener("input", (e) => {
    document.getElementById("fire-val").textContent = `${e.target.value}%`;
    audio.setVolume("fire", e.target.value);
  });

  document.getElementById("cafe-volume")?.addEventListener("input", (e) => {
    document.getElementById("cafe-val").textContent = `${e.target.value}%`;
    audio.setVolume("cafe", e.target.value);
  });

  // 17. Reading Timer Events
  document.getElementById("timer-start-btn")?.addEventListener("click", toggleReadingTimer);
  document.getElementById("timer-reset-btn")?.addEventListener("click", resetReadingTimer);

  document.querySelectorAll(".timer-preset-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".timer-preset-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const mins = parseInt(btn.dataset.mins);
      state.readingTimer.totalSeconds = mins * 60;
      resetReadingTimer();
    });
  });

  // 18. Multi-Step Checkout Navigation
  document.getElementById("shipping-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    setCheckoutStep(2);
  });

  document.getElementById("back-to-step-1-btn")?.addEventListener("click", () => {
    setCheckoutStep(1);
  });

  document.getElementById("payment-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    completeOrderPlacement();
  });

  document.getElementById("print-receipt-btn")?.addEventListener("click", () => window.print());
  document.getElementById("finish-order-btn")?.addEventListener("click", closeCheckoutModal);
  document.getElementById("close-checkout-modal-btn")?.addEventListener("click", closeCheckoutModal);

  // 19. Newsletter Form
  document.getElementById("footer-newsletter-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email")?.value;
    showToast(`Welcome! Promo code WELCOME10 (₹100 OFF) activated for ${email}`, "success");
    e.target.reset();
  });

  // 20. Countdown timer for Deal of the Day
  let dealSeconds = 8 * 3600 + 45 * 60 + 12;
  setInterval(() => {
    if (dealSeconds > 0) dealSeconds--;
    const h = Math.floor(dealSeconds / 3600);
    const m = Math.floor((dealSeconds % 3600) / 60);
    const s = dealSeconds % 60;
    const timerEl = document.getElementById("deal-countdown");
    if (timerEl) {
      timerEl.textContent = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
    }
  }, 1000);

  // 21. Cinematic Hero Video Atmosphere Controller
  initHeroVideoController();

  // Initial Renders
  renderCatalog();
  renderVibeMatch(state.activeVibe);
  updateCartUI();
  updateWishlistUI();
  updateTimerDisplay();
});

/**
 * Controller for Aesthetic Hero Background Video
 */
function initHeroVideoController() {
  const video = document.getElementById("hero-bg-video");
  if (!video) return;

  // Clear legacy scene overrides from storage
  try {
    localStorage.removeItem("sanctuary_hero_scene_url");
    localStorage.removeItem("sanctuary_hero_scene_name");
  } catch (err) {}

  // Guarantee loop & autoplay
  video.muted = true;
  video.loop = true;

  // Additional listener to prevent any browser hitching when video ends
  video.addEventListener("ended", () => {
    video.currentTime = 0;
    video.play().catch(() => {});
  });

  // Start playback
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(err => {
      console.log("Autoplay policy note:", err);
    });
  }

  // Resume playback on user interaction if autoplay was blocked by browser
  const resumeOnInteraction = () => {
    if (video.paused) {
      video.play().catch(() => {});
    }
    document.removeEventListener("click", resumeOnInteraction);
    document.removeEventListener("scroll", resumeOnInteraction);
    document.removeEventListener("touchstart", resumeOnInteraction);
  };
  document.addEventListener("click", resumeOnInteraction, { once: true });
  document.addEventListener("scroll", resumeOnInteraction, { once: true });
  document.addEventListener("touchstart", resumeOnInteraction, { once: true });

  // Pause video when page is hidden to save battery & system resources
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      if (!video.paused) {
        video.pause();
        video.dataset.pausedByVisibility = "true";
      }
    } else {
      if (video.dataset.pausedByVisibility === "true") {
        video.dataset.pausedByVisibility = "false";
        video.play().catch(() => {});
      }
    }
  });
}


