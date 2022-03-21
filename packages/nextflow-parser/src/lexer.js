const chevrotain = require("chevrotain");
const { allTokens } = require("./tokens");

const Lexer = chevrotain.Lexer;
const NextflowLexer = new Lexer(allTokens, {
  ensureOptimizations: true,
  // skipValidations: getSkipValidations()
});

module.exports = NextflowLexer;
