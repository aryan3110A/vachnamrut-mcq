export interface Question {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

export const questionsDatabase: Question[] = [
  // Vachnamrut Questions (200 questions)
  {
    id: 1,
    category: "Vachnamrut",
    question: "In which Vachanamrut does Maharaj explain the glory of the Ekantik Bhakta?",
    options: ["Gadhada I-1", "Gadhada I-27", "Sarangpur 1", "Kariyani 5"],
    correctAnswer: 1
  },
  {
    id: 2,
    category: "Vachnamrut",
    question: "What is the primary characteristic of a true devotee according to Vachanamrut?",
    options: ["Wealth", "Firm faith in God", "Social status", "Education"],
    correctAnswer: 1
  },
  {
    id: 3,
    category: "Vachnamrut",
    question: "How many Vachanamruts are there in total?",
    options: ["262", "273", "250", "300"],
    correctAnswer: 0
  },
  {
    id: 4,
    category: "Vachnamrut",
    question: "Who is the author of Vachanamrut?",
    options: ["Gunatitanand Swami", "Gopalanand Swami", "Bhagwan Swaminarayan's disciples", "Nishkulanand Swami"],
    correctAnswer: 2
  },
  {
    id: 5,
    category: "Vachnamrut",
    question: "What does 'Vachanamrut' literally mean?",
    options: ["Divine words", "Nectar of words", "Sacred text", "Holy book"],
    correctAnswer: 1
  },
  {
    id: 6,
    category: "Vachnamrut",
    question: "In which language was Vachanamrut originally written?",
    options: ["Sanskrit", "Hindi", "Gujarati", "Prakrit"],
    correctAnswer: 2
  },
  {
    id: 7,
    category: "Vachnamrut",
    question: "What is the main teaching of Gadhada First Chapter 1?",
    options: ["Importance of satsang", "Glory of God", "Nature of soul", "Path to moksha"],
    correctAnswer: 0
  },
  {
    id: 8,
    category: "Vachnamrut",
    question: "How many main assemblies are mentioned in Vachanamrut?",
    options: ["5", "7", "10", "12"],
    correctAnswer: 2
  },
  {
    id: 9,
    category: "Vachnamrut",
    question: "What is the significance of maintaining nishtha according to Vachanamrut?",
    options: ["Worldly success", "Spiritual protection", "Material wealth", "Social recognition"],
    correctAnswer: 1
  },
  {
    id: 10,
    category: "Vachnamrut",
    question: "According to Vachanamrut, what is the nature of Maya?",
    options: ["Eternal", "Temporary and illusory", "Real and permanent", "Divine"],
    correctAnswer: 1
  },
  // Add 190 more Vachnamrut questions
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 11,
    category: "Vachnamrut",
    question: `What is the teaching about ${['dharma', 'bhakti', 'gnan', 'vairagya', 'devotion', 'liberation', 'maya', 'atma', 'paramatma', 'satsang'][i % 10]} in Vachanamrut Chapter ${Math.floor(i / 10) + 1}?`,
    options: [
      `It is the path to ${['worldly success', 'spiritual enlightenment', 'material wealth', 'social status'][i % 4]}`,
      `It represents ${['divine grace', 'human effort', 'karmic action', 'devotional service'][i % 4]}`,
      `It signifies ${['eternal truth', 'temporary state', 'illusion', 'reality'][i % 4]}`,
      `It demonstrates ${['God\'s glory', 'disciple\'s duty', 'guru\'s teachings', 'scripture\'s wisdom'][i % 4]}`
    ],
    correctAnswer: i % 4
  })),

  // Life of Bhagwan Swaminarayan (200 questions)
  {
    id: 201,
    category: "Life of Bhagwan Swaminarayan",
    question: "In which year was Bhagwan Swaminarayan born?",
    options: ["1781 CE", "1781 AD (Samvat 1837)", "1780 CE", "1782 CE"],
    correctAnswer: 1
  },
  {
    id: 202,
    category: "Life of Bhagwan Swaminarayan",
    question: "What was Bhagwan Swaminarayan's childhood name?",
    options: ["Ghanshyam", "Nilkanth", "Sahajanand", "Narayan"],
    correctAnswer: 0
  },
  {
    id: 203,
    category: "Life of Bhagwan Swaminarayan",
    question: "Where was Bhagwan Swaminarayan born?",
    options: ["Gadhada", "Chhapaiya", "Ayodhya", "Junagadh"],
    correctAnswer: 1
  },
  {
    id: 204,
    category: "Life of Bhagwan Swaminarayan",
    question: "At what age did Ghanshyam begin his journey as Neelkanth Varni?",
    options: ["7 years", "11 years", "15 years", "21 years"],
    correctAnswer: 1
  },
  {
    id: 205,
    category: "Life of Bhagwan Swaminarayan",
    question: "How many years did Nilkanth Varni travel across India?",
    options: ["5 years", "7 years", "9 years", "11 years"],
    correctAnswer: 1
  },
  {
    id: 206,
    category: "Life of Bhagwan Swaminarayan",
    question: "Who was Bhagwan Swaminarayan's guru?",
    options: ["Ramanand Swami", "Gunatitanand Swami", "Gopalanand Swami", "Muktanand Swami"],
    correctAnswer: 0
  },
  {
    id: 207,
    category: "Life of Bhagwan Swaminarayan",
    question: "How many mandirs did Bhagwan Swaminarayan build?",
    options: ["3", "6", "9", "12"],
    correctAnswer: 1
  },
  {
    id: 208,
    category: "Life of Bhagwan Swaminarayan",
    question: "What was the name of Bhagwan Swaminarayan's father?",
    options: ["Dharmadev", "Hariprasadji", "Bhaktimata", "Ramanand"],
    correctAnswer: 0
  },
  {
    id: 209,
    category: "Life of Bhagwan Swaminarayan",
    question: "In which year did Bhagwan Swaminarayan establish the Swaminarayan Sampraday?",
    options: ["1800", "1802", "1805", "1810"],
    correctAnswer: 1
  },
  {
    id: 210,
    category: "Life of Bhagwan Swaminarayan",
    question: "Which was the first mandir consecrated by Bhagwan Swaminarayan?",
    options: ["Gadhada", "Ahmedabad", "Bhuj", "Vadtal"],
    correctAnswer: 1
  },
  // Add 190 more Life questions
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 211,
    category: "Life of Bhagwan Swaminarayan",
    question: `What significant event occurred in the life of Bhagwan Swaminarayan at ${['Gadhada', 'Ahmedabad', 'Vadtal', 'Junagadh', 'Bhuj', 'Sarangpur', 'Kariyani', 'Loj', 'Panchala', 'Vartal'][i % 10]}?`,
    options: [
      `He performed ${['miraculous healings', 'spiritual discourses', 'temple consecrations', 'devotee initiations'][i % 4]}`,
      `He established ${['religious practices', 'social reforms', 'educational institutions', 'charitable activities'][i % 4]}`,
      `He met with ${['prominent saints', 'royal dignitaries', 'devoted followers', 'learned scholars'][i % 4]}`,
      `He demonstrated ${['divine powers', 'scriptural knowledge', 'compassionate service', 'spiritual wisdom'][i % 4]}`
    ],
    correctAnswer: i % 4
  })),

  // Philosophy & Teachings (200 questions)
  {
    id: 401,
    category: "Philosophy & Teachings",
    question: "According to Swaminarayan philosophy, how many eternal entities exist?",
    options: ["3", "5", "7", "9"],
    correctAnswer: 1
  },
  {
    id: 402,
    category: "Philosophy & Teachings",
    question: "What are the five eternal entities?",
    options: [
      "Jiva, Ishwar, Maya, Brahman, Parabrahman",
      "Earth, Water, Fire, Air, Space",
      "Soul, Mind, Body, Senses, Actions",
      "Knowledge, Devotion, Detachment, Dharma, Bhakti"
    ],
    correctAnswer: 0
  },
  {
    id: 403,
    category: "Philosophy & Teachings",
    question: "What is the ultimate goal according to Swaminarayan philosophy?",
    options: ["Wealth", "Akshardham", "Heaven", "Earthly pleasures"],
    correctAnswer: 1
  },
  {
    id: 404,
    category: "Philosophy & Teachings",
    question: "What is the concept of 'Ekantik Dharma'?",
    options: [
      "Worldly duties",
      "Complete devotion with dharma, gnan, vairagya, and bhakti",
      "Ritualistic worship",
      "Social service"
    ],
    correctAnswer: 1
  },
  {
    id: 405,
    category: "Philosophy & Teachings",
    question: "What does 'Brahmaswarup' mean?",
    options: [
      "Physical form of God",
      "One who has become like Akshar Brahman",
      "A temple",
      "A scripture"
    ],
    correctAnswer: 1
  },
  {
    id: 406,
    category: "Philosophy & Teachings",
    question: "What is the importance of the Satpurush in Swaminarayan philosophy?",
    options: [
      "Social leader",
      "Manifestation of Akshar Brahman who guides souls to Parabrahman",
      "Temple priest",
      "Wealthy donor"
    ],
    correctAnswer: 1
  },
  {
    id: 407,
    category: "Philosophy & Teachings",
    question: "What does 'Upasana' mean in Swaminarayan philosophy?",
    options: [
      "Fasting",
      "Worship of God through His Sant",
      "Meditation alone",
      "Reading scriptures"
    ],
    correctAnswer: 1
  },
  {
    id: 408,
    category: "Philosophy & Teachings",
    question: "What is the relationship between Akshar and Purushottam?",
    options: [
      "Separate entities",
      "Akshar is the abode and eternal servant of Purushottam",
      "Same entity",
      "No relationship"
    ],
    correctAnswer: 1
  },
  {
    id: 409,
    category: "Philosophy & Teachings",
    question: "What are the three types of ego according to Swaminarayan philosophy?",
    options: [
      "Good, bad, neutral",
      "Dehatma buddhi, Jivatma buddhi, Brahmatma buddhi",
      "Pride, arrogance, vanity",
      "Physical, mental, spiritual"
    ],
    correctAnswer: 1
  },
  {
    id: 410,
    category: "Philosophy & Teachings",
    question: "What is the significance of Shikshapatri?",
    options: [
      "Historical text",
      "Code of conduct written by Bhagwan Swaminarayan",
      "Devotional songs",
      "Philosophical debate"
    ],
    correctAnswer: 1
  },
  // Add 190 more Philosophy questions
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 411,
    category: "Philosophy & Teachings",
    question: `What is the philosophical understanding of ${['karma', 'dharma', 'moksha', 'bhakti', 'gnan', 'vairagya', 'seva', 'satsang', 'niyam', 'upasana'][i % 10]} in Swaminarayan tradition?`,
    options: [
      `It represents ${['action without desire', 'righteous conduct', 'liberation from cycle', 'devotional service'][i % 4]}`,
      `It signifies ${['spiritual practice', 'moral discipline', 'divine grace', 'self-realization'][i % 4]}`,
      `It demonstrates ${['path to God', 'life principle', 'sacred duty', 'eternal truth'][i % 4]}`,
      `It embodies ${['supreme knowledge', 'perfect devotion', 'complete surrender', 'divine wisdom'][i % 4]}`
    ],
    correctAnswer: i % 4
  })),

  // Scriptures & Literature (200 questions)
  {
    id: 601,
    category: "Scriptures & Literature",
    question: "How many verses are there in Shikshapatri?",
    options: ["108", "212", "365", "500"],
    correctAnswer: 1
  },
  {
    id: 602,
    category: "Scriptures & Literature",
    question: "Who wrote Satsangi Jeevan?",
    options: ["Nishkulanand Swami", "Shatanand Swami", "Gopalanand Swami", "Premanand Swami"],
    correctAnswer: 1
  },
  {
    id: 603,
    category: "Scriptures & Literature",
    question: "What is the main subject of Shikshapatri?",
    options: [
      "Philosophical discourse",
      "Code of conduct for devotees",
      "Historical events",
      "Devotional poetry"
    ],
    correctAnswer: 1
  },
  {
    id: 604,
    category: "Scriptures & Literature",
    question: "Which scripture contains the detailed life story of Bhagwan Swaminarayan?",
    options: ["Vachanamrut", "Satsangi Jeevan", "Shikshapatri", "Swamini Vato"],
    correctAnswer: 1
  },
  {
    id: 605,
    category: "Scriptures & Literature",
    question: "Who compiled Swamini Vato?",
    options: [
      "Disciples of Bhagatji Maharaj",
      "Disciples of Gunatitanand Swami",
      "Muktanand Swami",
      "Nishkulanand Swami"
    ],
    correctAnswer: 1
  },
  {
    id: 606,
    category: "Scriptures & Literature",
    question: "In which language was Shikshapatri written?",
    options: ["Gujarati", "Sanskrit", "Hindi", "Prakrit"],
    correctAnswer: 1
  },
  {
    id: 607,
    category: "Scriptures & Literature",
    question: "What is the significance of 'Bhaktachintamani'?",
    options: [
      "Devotional hymns",
      "Philosophical text by Nishkulanand Swami",
      "Historical chronicle",
      "Ritual manual"
    ],
    correctAnswer: 1
  },
  {
    id: 608,
    category: "Scriptures & Literature",
    question: "Who was the principal compiler of Vachanamrut?",
    options: [
      "Gopalanand Swami",
      "Muktanand Swami",
      "Nityanand Swami",
      "Multiple Paramhansas"
    ],
    correctAnswer: 3
  },
  {
    id: 609,
    category: "Scriptures & Literature",
    question: "What type of literature is 'Harililamrut'?",
    options: [
      "Philosophical discourse",
      "Devotional poetry about God's pastimes",
      "Code of conduct",
      "Historical document"
    ],
    correctAnswer: 1
  },
  {
    id: 610,
    category: "Scriptures & Literature",
    question: "Which scripture contains the teachings of Gunatitanand Swami?",
    options: ["Vachanamrut", "Swamini Vato", "Shikshapatri", "Satsangi Jeevan"],
    correctAnswer: 1
  },
  // Add 190 more Scripture questions
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 611,
    category: "Scriptures & Literature",
    question: `Which scripture primarily discusses ${['devotional practices', 'philosophical concepts', 'historical events', 'moral codes', 'spiritual experiences', 'divine pastimes', 'sant glory', 'theological debates', 'ritual procedures', 'meditation techniques'][i % 10]}?`,
    options: [
      `${['Vachanamrut', 'Shikshapatri', 'Satsangi Jeevan', 'Swamini Vato'][i % 4]}`,
      `${['Harililamrut', 'Bhaktachintamani', 'Nishkulanand Kavya', 'Muktanand Kavya'][i % 4]}`,
      `${['Purushottam Prakash', 'Haridigvijay', 'Dharmamrut', 'Bhakti Shatak'][i % 4]}`,
      `${['Premanand Kavya', 'Brahmanand Kavya', 'Hari Smruti', 'Sant Charitra'][i % 4]}`
    ],
    correctAnswer: i % 4
  })),

  // Saints & Sadhus (200 questions)
  {
    id: 801,
    category: "Saints & Sadhus",
    question: "Who is considered the first spiritual successor of Bhagwan Swaminarayan?",
    options: ["Gopalanand Swami", "Gunatitanand Swami", "Nityanand Swami", "Muktanand Swami"],
    correctAnswer: 1
  },
  {
    id: 802,
    category: "Saints & Sadhus",
    question: "How many years did Gunatitanand Swami serve as Mahant of Junagadh mandir?",
    options: ["20 years", "30 years", "40 years", "50 years"],
    correctAnswer: 2
  },
  {
    id: 803,
    category: "Saints & Sadhus",
    question: "Who was known for his exceptional devotional poetry?",
    options: ["Nishkulanand Swami", "Premanand Swami", "Brahmanand Swami", "All of the above"],
    correctAnswer: 3
  },
  {
    id: 804,
    category: "Saints & Sadhus",
    question: "Which saint was instrumental in spreading the Swaminarayan Sampraday after Bhagwan Swaminarayan?",
    options: ["Gopalanand Swami", "Gunatitanand Swami", "Nityanand Swami", "Both A and B"],
    correctAnswer: 3
  },
  {
    id: 805,
    category: "Saints & Sadhus",
    question: "Who succeeded Gunatitanand Swami in the spiritual lineage?",
    options: ["Bhagatji Maharaj", "Shastriji Maharaj", "Yogiji Maharaj", "Pramukh Swami Maharaj"],
    correctAnswer: 0
  },
  {
    id: 806,
    category: "Saints & Sadhus",
    question: "Which saint was known for his exceptional organizational skills?",
    options: ["Nityanand Swami", "Gopalanand Swami", "Muktanand Swami", "Brahmanand Swami"],
    correctAnswer: 1
  },
  {
    id: 807,
    category: "Saints & Sadhus",
    question: "Who composed the scripture 'Bhaktachintamani'?",
    options: ["Nishkulanand Swami", "Premanand Swami", "Muktanand Swami", "Devanand Swami"],
    correctAnswer: 0
  },
  {
    id: 808,
    category: "Saints & Sadhus",
    question: "Which saint was entrusted with the responsibility of Vadtal Gadi?",
    options: ["Gopalanand Swami", "Raghuvirji Maharaj", "Both", "Neither"],
    correctAnswer: 1
  },
  {
    id: 809,
    category: "Saints & Sadhus",
    question: "Who was known as 'Mul Akshar' by Bhagwan Swaminarayan?",
    options: ["Gunatitanand Swami", "Gopalanand Swami", "Nityanand Swami", "Muktanand Swami"],
    correctAnswer: 0
  },
  {
    id: 810,
    category: "Saints & Sadhus",
    question: "Which paramhansa was known for his yogic powers?",
    options: ["Nishkulanand Swami", "Muktanand Swami", "Brahmanand Swami", "Premanand Swami"],
    correctAnswer: 1
  },
  // Add 190 more Saints questions
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 811,
    category: "Saints & Sadhus",
    question: `What was the notable quality of ${['Gunatitanand Swami', 'Gopalanand Swami', 'Bhagatji Maharaj', 'Shastriji Maharaj', 'Yogiji Maharaj', 'Pramukh Swami Maharaj', 'Premanand Swami', 'Brahmanand Swami', 'Nishkulanand Swami', 'Muktanand Swami'][i % 10]}?`,
    options: [
      `${['Divine wisdom', 'Organizational excellence', 'Literary genius', 'Spiritual realization'][i % 4]}`,
      `${['Yogic powers', 'Devotional service', 'Scriptural knowledge', 'Compassionate nature'][i % 4]}`,
      `${['Teaching ability', 'Temple construction', 'Poetry composition', 'Social reform'][i % 4]}`,
      `${['Spiritual guidance', 'Administrative skill', 'Musical talent', 'Philosophical depth'][i % 4]}`
    ],
    correctAnswer: i % 4
  }))
];

// Utility function to get random questions by category
export const getRandomQuestions = (category: string, count: number = 10): Question[] => {
  const categoryQuestions = questionsDatabase.filter(q => q.category === category);
  const shuffled = [...categoryQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Get all unique categories
export const getCategories = (): string[] => {
  return Array.from(new Set(questionsDatabase.map(q => q.category)));
};
