import runGameEngine from '../index.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = String(gcd(num1, num2));

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};

const playGcdGame = () => {
  const description = 'Encuentra el máximo común divisor de los números dados.';
  runGameEngine(description, generateQuestion);
};

export default playGcdGame;
