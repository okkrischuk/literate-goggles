// Function to generate a random number within a given range
function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to pick a random item from an array
function getRandomItem<T>(arr: T[]): T {
  const randomIndex = getRandomNumber(0, arr.length - 1);
  return arr[randomIndex];
}

// Array of random messages
const messages = [
  "Hello, world!",
  "How's the weather?",
  "Just testing some random stuff.",
  "TypeScript is awesome!",
  "Randomness is fun!"
];

// Array of random colors
const colors = ["red", "green", "blue", "yellow", "purple"];

// Generate a random number between 1 and 100
const randomNumber = getRandomNumber(1, 100);
console.log(`Random number: ${randomNumber}`);

// Pick a random message and color
const randomMessage = getRandomItem(messages);
const randomColor = getRandomItem(colors);

console.log(`Random message: "${randomMessage}"`);
console.log(`Random color: ${randomColor}`);
