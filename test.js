'use strict';
/* eslint-disable id-length */

const test = require('blue-tape')
const { exec } = require('child_process')
const { promisify } = require('util')

const execAsync = promisify(exec)

const scriptSequence = [
	'01-interpreter.js',
	'02-jit.js',
	'03-compiler.js',
	'hello-world.js',
	'04-opt-compiler.js',
	'hello-world.js',
]

test('sniff test', async (t) => {
	for (const filename of scriptSequence) {
		await execAsync(`node ${filename}`, { cwd: 'src' })
	}
	t.pass()
})
