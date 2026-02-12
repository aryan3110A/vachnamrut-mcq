
import fs from 'fs';
import path from 'path';

const cleanData = JSON.parse(fs.readFileSync('output_clean.json', 'utf8'));

// 1. Update src/data/questions.ts
const questionsFile = 'src/data/questions.ts';
let qContent = fs.readFileSync(questionsFile, 'utf8');

// The file has rawQuestions starting at line 13.
// We want to replace everything from the first { "id": 1, to the last }; before export.
// Actually rawQuestions is a const.
const qStartMarker = 'const rawQuestions: QuestionInput[] = [';
const qEndMarker = '];';

const qStartIndex = qContent.indexOf(qStartMarker) + qStartMarker.length;
const qEndIndex = qContent.lastIndexOf(qEndMarker);

if (qStartIndex !== -1 && qEndIndex !== -1) {
    const newQuestionsStr = '\n' + cleanData.questions.map(q => '  ' + JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')).join(',\n') + '\n';
    qContent = qContent.substring(0, qStartIndex) + newQuestionsStr + qContent.substring(qEndIndex);
    fs.writeFileSync(questionsFile, qContent, 'utf8');
    console.log('Updated questions.ts');
} else {
    console.error('Could not find questions markers');
}

// 2. Update src/data/updateAnswers.ts
const answersFile = 'src/data/updateAnswers.ts';
let aContent = fs.readFileSync(answersFile, 'utf8');

const aStartMarker = 'export const answerKey: Record<number, number> = {';
const aEndMarker = '};';

const aStartIndex = aContent.indexOf(aStartMarker) + aStartMarker.length;
const aEndIndex = aContent.lastIndexOf(aEndMarker);

if (aStartIndex !== -1 && aEndIndex !== -1) {
    const sortedKeys = Object.keys(cleanData.newAnswerKey).sort((a, b) => parseInt(a) - parseInt(b));
    const newAnswersStr = '\n' + sortedKeys.map(k => `  "${k}": ${cleanData.newAnswerKey[k]}`).join(',\n') + '\n';
    aContent = aContent.substring(0, aStartIndex) + newAnswersStr + aContent.substring(aEndIndex);
    fs.writeFileSync(answersFile, aContent, 'utf8');
    console.log('Updated updateAnswers.ts');
} else {
    console.error('Could not find answers markers');
}
