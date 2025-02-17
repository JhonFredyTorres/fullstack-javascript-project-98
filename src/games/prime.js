import runGameEngine from '../index.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: `${number}`,
    correctAnswer,
  };
};

const playPrimeGame = () => {
  const description = 'Responde "yes" si el número dado es primo. De lo contrario, responde "no".';
  runGameEngine(description, generateQuestion);
};

export default playPrimeGame;
