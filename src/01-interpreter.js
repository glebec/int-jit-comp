'use strict';

const SOURCE_CODE_FILENAME = './hello-world.gs'

/**
 * GScript Interpreter!
 * This amazing program reads in a GS file and interpets it.
 * Interpretation executes the desired behavior "live" as source code is read.
 */

const { readFileSync } = require('fs')
const sourceCode = readFileSync(SOURCE_CODE_FILENAME, 'utf8')

let string = ''

sourceCode
.split('\n') // split into lines
.forEach(line => {
	switch (line[0]) {
		case undefined: break; // empty line, do nothing
		case '#': break; // comment line, do nothing
		case '+': string += line.slice(1); break; // concat, add line to string
		case '-': string = string.slice(0, -line[1]); break; // remove letters
		case 'p': console.log(string); break;
		default: throw Error('unexpected token: ' + line);
	}
})
