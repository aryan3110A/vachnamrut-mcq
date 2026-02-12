
import fs from 'fs';

const content = fs.readFileSync('src/data/updateAnswers.ts', 'utf8');
const lines = content.split('\n');
const entries = [];

lines.forEach(line => {
    const match = line.match(/"(\d+)": (\d+)/);
    if (match) {
        entries.push(`  "${match[1]}": ${match[2]}`);
    }
});

// Remove duplicates if any
const uniqueEntriesMap = new Map();
entries.forEach(e => {
    const [k, v] = e.trim().split(': ');
    uniqueEntriesMap.set(k.replace(/"/g, ''), v.replace(/,/g, ''));
});

const sortedKeys = Array.from(uniqueEntriesMap.keys()).sort((a, b) => parseInt(a) - parseInt(b));
const sortedEntries = sortedKeys.map(k => `  "${k}": ${uniqueEntriesMap.get(k)}`);

const newContent = `export const answerKey: Record<number, number> = {
${sortedEntries.join(',\n')}
};

export const getCorrectAnswer = (id: number): number => {
  return answerKey[id] ?? 0;
};
`;

fs.writeFileSync('src/data/updateAnswers.ts', newContent, 'utf8');
console.log('Fixed updateAnswers.ts');
