import readlineSync from 'readline-sync';
import runGameEngine from '../index.js';

const generateQuestion = () => {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Operador desconocido: ${operator}`);
  }

  return {
    question: `${num1} ${operator} ${num2}`,
    correctAnswer: String(correctAnswer),
  };
};

const playCalcGame = () => {
  const description = '¿Cuál es el resultado de la expresión?';
  runGameEngine(description, generateQuestion);
};

export default playCalcGame;
