import { Command } from 'commander';
const program = new Command();
import genDiff from '../ban/index.js'

program
    .name('gendiff')
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .usage('[options] <filepath1> <filepath2>')
    .option('-f, --format <type>', 'output format')
    .action(genDiff)
    .argument('<filepath1>', 'path to file1')
    .argument('<filepath2>', 'path to file2')

program.parse(process.argv);
