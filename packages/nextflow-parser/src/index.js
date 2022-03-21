const NextflowLexer = require("./lexer");

let inputText = `process name {


   input:

   output:

   when:

   script:

}
`
let lexingResult = NextflowLexer.tokenize(inputText)
console.log(lexingResult);
