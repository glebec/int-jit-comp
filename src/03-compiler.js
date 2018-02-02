'use strict';

const SOURCE_CODE_FILENAME = './hello-world.gs'
const OUTPUT_CODE_FILENAME = './hello-world.js'

/**
 * GScript Compiler!
 * This amazing program reads in a GS file, compiles it & then outputs it.
 * Compilation translates source code to object code, in this case JavaScript.
 */

const { readFileSync, writeFileSync } = require('fs')
const sourceCode = readFileSync(SOURCE_CODE_FILENAME, 'utf8')

let program = `let string = '';\n`

sourceCode
.split('\n') // split into lines
.forEach(line => {
	switch (line[0]) {
		case undefined: break; // empty line, do nothing
		case '#': break; // comment line, do nothing
		case '+': // concat, add line to string
			program += `string += '${ line.slice(1) }';\n`;
			break;
		case '-': // remove letters from string
			program += `string = string.slice(0, ${ line });\n`;
			break;
		case 'p': // print string
			program += 'console.log(string);\n';
			break;
		default: throw Error('unexpected token: ' + line);
	}
})

// and now that we've compiled our source code (GS) to object code (JS),
// we output it so the user can run it in the future:

writeFileSync(OUTPUT_CODE_FILENAME, program)

// for debugging:

console.log('Compiled to JS file. For reference:\n')
console.log(program)
