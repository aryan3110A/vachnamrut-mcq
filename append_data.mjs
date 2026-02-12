
import fs from 'fs';

const cleanData = JSON.parse(fs.readFileSync('output_clean.json', 'utf8'));

// 1. Update src/data/questions.ts
const questionsFile = 'src/data/questions.ts';
let qContent = fs.readFileSync(questionsFile, 'utf8');

// The user manually updated ID 501. Let's find the current ID 501 in the file if it exists, 
// or determine where to append.
// Since I restored from git, the file should have IDs 1-251 plus whatever was there before.
// Actually, let's just append the new questions (252-501) to the rawQuestions array.

const qStartMarker = 'const rawQuestions: QuestionInput[] = [';
const qEndMarker = '];';

const qStartIndex = qContent.indexOf(qStartMarker) + qStartMarker.length;
const qEndIndex = qContent.lastIndexOf(qEndMarker);

if (qStartIndex !== -1 && qEndIndex !== -1) {
    // Get existing questions content
    const existingQuestionsStr = qContent.substring(qStartIndex, qEndIndex).trim();

    // Clean up trailing comma if exists
    let combinedQuestions = existingQuestionsStr;
    if (combinedQuestions.endsWith(',')) {
        combinedQuestions = combinedQuestions.slice(0, -1);
    }

    // Prepare new questions (252-501)
    const newQuestionsStr = cleanData.questions.map(q => '  ' + JSON.stringify(q, null, 2).replace(/\n/g, '\n  ')).join(',\n');

    // Combine
    const finalQuestionsList = '\n' + combinedQuestions + ',\n' + newQuestionsStr + '\n';

    qContent = qContent.substring(0, qStartIndex) + finalQuestionsList + qContent.substring(qEndIndex);
    fs.writeFileSync(questionsFile, qContent, 'utf8');
    console.log('Updated questions.ts (Appended 252-501)');
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
    const existingAnswersStr = aContent.substring(aStartIndex, aEndIndex).trim();

    // Parse existing answers if possible, but simpler to just append new lines
    let combinedAnswers = existingAnswersStr;
    if (combinedAnswers.endsWith(',')) {
        combinedAnswers = combinedAnswers.slice(0, -1);
    }

    const sortedKeys = Object.keys(cleanData.newAnswerKey).sort((a, b) => parseInt(a) - parseInt(b));
    const newAnswersStr = sortedKeys.map(k => `  "${k}": ${cleanData.newAnswerKey[k]}`).join(',\n');

    const finalAnswersObj = '\n' + combinedAnswers + ',\n' + newAnswersStr + '\n';

    aContent = aContent.substring(0, aStartIndex) + finalAnswersObj + aContent.substring(aEndIndex);
    fs.writeFileSync(answersFile, aContent, 'utf8');
    console.log('Updated updateAnswers.ts (Merged keys 252-501)');
} else {
    console.error('Could not find answers markers');
}
