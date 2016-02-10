# GLS - General Language Syntax

A single syntax that compiles into your favorite OOP languages.


### Theory

Most object-oriented programming glanguages today are "pretty much" the same. Declaring variables, PEMDAS operations, calling functions, and so on rarely change; the base concept of a compiled or scripting language with managed memory is very common.

GLS provides a common syntax to describe programming functionality in these common managed languages. `.gls` files can be compiled into any of the supported languages, and will work somewhat approximately the same in all of them.


### Syntax

Each line in GLS consits of a function, a colon, and any number of arguments, all separated by spaces.

	print line : "GLS!"
* Function: `print`
* Argument: `"GLS!"`

`print line : GLS` will compile to `System.Console.WriteLine("GLS!")` in C#, `print("GLS!)"`, `console.log("GLS!")` in TypeScript, and so on.

#### Parenthesis

You can keep spaces inside your arguments by wrapping characters in parenthesis. This tells the compiler to treat the space as part of the argument instead of a separator.

	print line : ("Hello world!")

* Function: `print`

* Argument: `"Hello world!"`

#### Recursion

Languages would be pretty useless if you could only do one command each line. To pipe the output of one command, into another, use `{}` brackets to wrap the inner command.

	print line : { operation : 1 plus 2 }


#### Tidbits

* Each GLS command is *idempotent* - it doesn't know or care about any preceding or following commands.

* Commands return information on whitespace to the compiler, so indentation in generated files is semantically correct.


#### Status

Deliverable | Version | Date | Description
--- | --- | --- | ---
C++ compiler | 0.1 | May 2015 | Command-line GLS prototype, written in C++
TypeScript compiler | 0.2 | July 2015 | GLS compiler as a website, written in TypeScript
Dogfooded C# compiler | 0.3 | March 2016 | GLS compiling itself into itself (meta!); tested in C#
Ruby, Python, and Java support | 0.4 | April 2016 | Dogfood working correctly in all three languages
PowerShell, PHP, JavaScript, and misc. | 0.5 | May 2016 | Dogfood or reject those languages
Language specification finalized | 0.6 | June 2016 | Finalized language spec & cleaned internals of code
General release 1.0 | July 2016


## Intentionally Missing Features

No language is perfect. The following are some seemingly obvious omissions in GLS that are due to languages not supporting them:

| Feature             | C# | Java     | Python   | Ruby | TypeScript  |
|---------------------|----|----------|----------|------|-------------|
| Foreach Over Values |    |          |          |      |  Missing!   |
| Multiline Lambdas   |    |          | Missing! |      |             |
| Optional Parameters |    | Missing! |          |      |             |
| String.Replace      |    |          |          |      |  Abnormal!  |
| Switch Statements   |    |          | Missing! |      |             |

This list will grow as features are requested.
