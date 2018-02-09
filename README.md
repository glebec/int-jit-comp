# Interpreters, JITs, & Compilers (Oh My)

A tiny cross-comparison of code executors and translators for educational purposes.

### Motivation & Disclaimer

The purpose of this repo is to disambiguate via concrete code examples the following concepts:

* Interpretation
* Just-in-Time (JIT) compilation
* Ahead-of-Time (AoT) compilation
* Optimizing AoT compilation

This demo uses an invented, trivial, toy language "QuipScript" which builds up and/or prints a stateful string. It is not intended to be a realistic language, nor are the implementations of these scripts intended to illustrate viable or recommendable techniques for real languages. In particular, compilers typically lex, parse, and generate code according to formal grammars. The compilers shown here on the other hand are practically primordial in their lack of sophistication.

## Contents

In the `src` folder are several files:

Filename | Type | Purpose
---------|------|--------
`hello-world.qs` | QuipScript Program | Source code
`hello-broken.qs` | QuipScript Program | (Incorrect) Source code
`01-interpreter.js` | Interpreter | Reads & executes source code
`02-jit.js` | Just-in-Time (JIT) Compiler | Translates source to JS & runs result
`03-compiler.js` | Ahead-of-Time (AoT) Compiler | Translates source to JS & saves result
`04-opt-compiler.js` | Optimizing AoT Compiler | Translates source, simplifies, & saves result

## Usage

```sh
cs src

node 01-interpreter.js # runs the interpreter

node 02-jit.js # runs the JIT

node 03-compiler.js # runs the compiler
node hello-world.js # runs the compiled program

node 04-opt-compiler.js # runs the optimizing compiler
node hello-world.js # runs the compiled & optimized program
```

Read the code, understand how it works, and see the difference in how the final result is produced. There is also a deliberately broken source QS file (`hello-broken.qs`); try changing the files to load that source code. How do the different modules behave when given incorrect code? (Hint: the interpreter fails in a different way than the compilers do.)

## QuipScript Informal Spec

* A QuipScript program manipulates and/or prints a single stateful string value.
* Blank lines are ignored.
* Any line beginning with `#` is a comment.
* One statement per line, three kinds of statements:
  * `+` adds any following characters to the string.
  * `-N` removes the last N characters from the string.
  * `print` (or any line beginning with `p`) prints the current string state.
