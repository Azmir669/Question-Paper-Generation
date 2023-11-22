const prompt = require("prompt-sync")();

class Question {
  constructor(question, subject, topic, difficulty, marks) {
    this.question = question;
    this.subject = subject;
    this.topic = topic;
    this.difficulty = difficulty;
    this.marks = marks;
  }
}

const questionStore = [
  new Question("What is the speed of light", "Physics", "Waves", "Easy", 10),
  new Question(
    "Define Newton's First Law of Motion",
    "Physics",
    "Motion",
    "Medium",
    10
  ),
  new Question(
    "Explain the concept of gravitational force",
    "Physics",
    "Gravity",
    "Medium",
    10
  ),
  new Question(
    "List the basic properties of magnets",
    "Physics",
    "Magnetism",
    "Easy",
    10
  ),
  new Question(
    "What is the formula for kinetic energy",
    "Physics",
    "Energy",
    "Medium",
    10
  ),
  new Question(
    "Describe the process of photosynthesis",
    "Physics",
    "Biology",
    "Hard",
    10
  ),
  new Question(
    "State Archimedes' Principle",
    "Physics",
    "Fluids",
    "Medium",
    10
  ),
  new Question("Explain the Doppler Effect", "Physics", "Waves", "Hard", 10),
  new Question("Define Ohm's Law", "Physics", "Electricity", "Easy", 10),
  new Question(
    "What is the structure of an atom",
    "Physics",
    "Chemistry",
    "Medium",
    10
  ),
  new Question("How does a rainbow form", "Physics", "Optics", "Easy", 6),
  new Question(
    "List the types of simple machines",
    "Physics",
    "Mechanics",
    "Medium",
    10
  ),
  new Question(
    "Explain the concept of nuclear fission",
    "Physics",
    "Nuclear Physics",
    "Hard",
    10
  ),
  new Question(
    "What is the law of conservation of energy",
    "Physics",
    "Energy",
    "Medium",
    10
  ),
  new Question("Define Hubble's Law", "Physics", "Cosmology", "Hard", 10),
  new Question(
    "How does a refrigerator work",
    "Physics",
    "Thermodynamics",
    "Medium",
    10
  ),
  new Question(
    "What is the principle behind a telescope",
    "Physics",
    "Optics",
    "Medium",
    10
  ),
  new Question(
    "Explain the concept of sound waves",
    "Physics",
    "Acoustics",
    "Easy",
    10
  ),
  new Question(
    "Define the concept of entropy",
    "Physics",
    "Thermodynamics",
    "Hard",
    10
  ),
  new Question(
    "List the fundamental forces in nature",
    "Physics",
    "Particle Physics",
    "Medium",
    10
  ),
];

function getUserInput() {
  const totalMarks = parseInt(
    prompt("Enter total marks for the question paper: ")
  );

  const difficultyDistribution = {};
  const difficultyLevels = ["easy", "medium", "hard"];

  difficultyLevels.forEach((difficulty) => {
    const percentage = parseFloat(
      prompt(`Enter percentage for ${difficulty} questions: `)
    );
    difficultyDistribution[difficulty] = percentage / 100;
  });

  const topicDistribution = {};
  const uniqueTopics = [...new Set(questionStore.map((q) => q.topic))];

  uniqueTopics.forEach((topic) => {
    const percentage = parseFloat(
      prompt(`Enter percentage for ${topic} questions: `)
    );
    topicDistribution[topic] = percentage / 100;
  });

  return { totalMarks, difficultyDistribution, topicDistribution };
}

function generateQuestionPaper(
  totalMarks,
  difficultyDistribution,
  topicDistribution
) {
  const questionPaper = [];
  const difficultyLevels = Object.keys(difficultyDistribution);

  difficultyLevels.forEach((difficulty) => {
    const marksForDifficulty = totalMarks * difficultyDistribution[difficulty];
    const questionsForDifficulty = questionStore.filter(
      (question) => question.difficulty === difficulty
    );

    shuffleArray(questionsForDifficulty);

    let accumulatedMarks = 0;
    for (const question of questionsForDifficulty) {
      if (
        accumulatedMarks + question.marks <= marksForDifficulty &&
        topicDistribution[question.topic] > 0
      ) {
        questionPaper.push(question);
        accumulatedMarks += question.marks;
        topicDistribution[question.topic] -= question.marks / totalMarks;
      }
    }
  });

  return questionPaper;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const { totalMarks, difficultyDistribution, topicDistribution } =
  getUserInput();
const paper = generateQuestionPaper(
  totalMarks,
  difficultyDistribution,
  topicDistribution
);

console.log("\nGenerated Question Paper:");
console.log(paper);
