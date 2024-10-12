interface Word {
  korean: string;
  english: string;
  options: string[];
}

const wordSets: { [key: string]: Word[] } = {
  1: [
    {
      korean: "사과",
      english: "apple",
      options: ["apple", "banana", "orange", "grape"],
    },
    {
      korean: "책",
      english: "book",
      options: ["book", "pen", "pencil", "notebook"],
    },
    {
      korean: "집",
      english: "house",
      options: ["house", "car", "bike", "boat"],
    },
    {
      korean: "물",
      english: "water",
      options: ["water", "fire", "earth", "air"],
    },
    {
      korean: "친구",
      english: "friend",
      options: ["friend", "enemy", "stranger", "family"],
    },
  ],
  2: [
    {
      korean: "행복",
      english: "happiness",
      options: ["happiness", "sadness", "anger", "fear"],
    },
    {
      korean: "도전",
      english: "challenge",
      options: ["challenge", "easy", "simple", "difficult"],
    },
    {
      korean: "성공",
      english: "success",
      options: ["success", "failure", "attempt", "try"],
    },
    {
      korean: "여행",
      english: "travel",
      options: ["travel", "stay", "live", "work"],
    },
    {
      korean: "경험",
      english: "experience",
      options: ["experience", "knowledge", "wisdom", "skill"],
    },
  ],
  3: [
    {
      korean: "지속가능성",
      english: "sustainability",
      options: ["sustainability", "development", "growth", "progress"],
    },
    {
      korean: "인공지능",
      english: "artificial intelligence",
      options: [
        "artificial intelligence",
        "machine learning",
        "deep learning",
        "neural network",
      ],
    },
    {
      korean: "글로벌화",
      english: "globalization",
      options: [
        "globalization",
        "localization",
        "nationalization",
        "internationalization",
      ],
    },
    {
      korean: "다양성",
      english: "diversity",
      options: ["diversity", "uniformity", "similarity", "homogeneity"],
    },
    {
      korean: "혁신",
      english: "innovation",
      options: ["innovation", "tradition", "convention", "custom"],
    },
  ],
  4: [
    {
      korean: "양자역학",
      english: "quantum mechanics",
      options: [
        "quantum mechanics",
        "classical mechanics",
        "relativity",
        "thermodynamics",
      ],
    },
    {
      korean: "암호화폐",
      english: "cryptocurrency",
      options: [
        "cryptocurrency",
        "fiat currency",
        "digital currency",
        "virtual currency",
      ],
    },
    {
      korean: "신경과학",
      english: "neuroscience",
      options: ["neuroscience", "psychology", "biology", "chemistry"],
    },
    {
      korean: "나노기술",
      english: "nanotechnology",
      options: [
        "nanotechnology",
        "biotechnology",
        "information technology",
        "cognitive science",
      ],
    },
    {
      korean: "유전공학",
      english: "genetic engineering",
      options: [
        "genetic engineering",
        "bioengineering",
        "chemical engineering",
        "mechanical engineering",
      ],
    },
  ],
  5: [
    {
      korean: "초끈이론",
      english: "string theory",
      options: [
        "string theory",
        "loop quantum gravity",
        "supersymmetry",
        "M-theory",
      ],
    },
    {
      korean: "메타인지",
      english: "metacognition",
      options: ["metacognition", "cognition", "perception", "attention"],
    },
    {
      korean: "양자얽힘",
      english: "quantum entanglement",
      options: [
        "quantum entanglement",
        "superposition",
        "wave function collapse",
        "quantum tunneling",
      ],
    },
    {
      korean: "의식의 흐름",
      english: "stream of consciousness",
      options: [
        "stream of consciousness",
        "free association",
        "interior monologue",
        "soliloquy",
      ],
    },
    {
      korean: "초현실주의",
      english: "surrealism",
      options: ["surrealism", "realism", "impressionism", "expressionism"],
    },
  ],
};

export default wordSets;
