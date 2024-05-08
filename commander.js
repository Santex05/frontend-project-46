import fs from 'fs';
import path from 'path';
import { program } from 'commander';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .usage('[options] <filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .parse(process.argv);

const filepath1 = program.args[0];
const filepath2 = program.args[1];

if (!filepath1 || !filepath2) {
  console.error('Error: Please provide two file paths');
  process.exit(1);
}

const absolutePath1 = path.resolve(filepath1);
const absolutePath2 = path.resolve(filepath2);

const data1 = fs.readFileSync(absolutePath1, 'utf-8');
const data2 = fs.readFileSync(absolutePath2, 'utf-8');

const parsedData1 = JSON.parse(data1);
const parsedData2 = JSON.parse(data2);

console.log(parsedData1);
console.log(parsedData2);

console.log(`Comparing ${filepath1} and ${filepath2}...`);