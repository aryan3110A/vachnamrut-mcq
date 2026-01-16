const fs = require('fs');
const path = require('path');

const answersFile = path.resolve(__dirname, 'temp_new_answers.txt');
const updateAnswersFile = path.resolve(__dirname, 'src/data/updateAnswers.ts');

const answersContent = fs.readFileSync(answersFile, 'utf8');

// Regex to match (૧), (૨), (૩) or (1), (2), (3)
const regex = /\((\d+|[૧૨૩])\)/g;
let matches = [];
let match;

const gujaratiToNum = {
    '૧': 0, '1': 0,
    '૨': 1, '2': 1,
    '૩': 2, '3': 2
};

while ((match = regex.exec(answersContent)) !== null) {
    const digit = match[1];
    if (gujaratiToNum.hasOwnProperty(digit)) {
        matches.push(gujaratiToNum[digit]);
    } else {
        console.warn(`Unknown digit found: ${digit}`);
    }
}

console.log(`Found ${matches.length} answers.`);

if (matches.length !== 251) {
    console.warn(`WARNING: Expected 251 answers, but found ${matches.length}. Please verify the input list.`);
}

let newAnswerKey = 'export const answerKey: Record<number, number> = {\n';
matches.forEach((ans, index) => {
    newAnswerKey += `  "${index + 1}": ${ans},\n`;
});
newAnswerKey += '};\n\nexport const getCorrectAnswer = (id: number): number => {\n  return answerKey[id] ?? 0;\n};\n';

fs.writeFileSync(updateAnswersFile, newAnswerKey);
console.log('Successfully updated src/data/updateAnswers.ts');
