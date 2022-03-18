const chevrotain = require("chevrotain");

const createToken = chevrotain.createToken

// using createToken API

const ProcessStart = createToken({ name: "process", pattern: /process\s+\w+\s+{\s/ })

const ProcessEnd = createToken({ name: "process", pattern: /\}/ })

const Input = createToken({ name: "input", pattern: /input:/ })

const Output = createToken({ name: "output", pattern: /output:/ })

const When = createToken({ name: "when", pattern: /when:/ })

const Script = createToken({ name: "script", pattern: /script:/ })

const WhiteSpace = createToken({
  name: "WhiteSpace",
  pattern: /\s+/,
  group: chevrotain.Lexer.SKIPPED
})

// note we are placing WhiteSpace first as it is very common thus it will speed up the lexer.
let allTokens = [
  WhiteSpace,
  // "keywords" appear before the Identifier
  ProcessStart,
  ProcessEnd,
  // The Identifier must appear after the keywords because all keywords are valid identifiers.
  Input,
  Output,
  When,
  Script
]
const Lexer = chevrotain.Lexer;
let SelectLexer = new Lexer(allTokens)

let inputText = `process name {


   input:

   output:

   when:

   script:

}
`
let lexingResult = SelectLexer.tokenize(inputText)
console.log(lexingResult);
