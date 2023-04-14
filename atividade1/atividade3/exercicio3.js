var entrada = require("readline-sync");
var f = entrada.question("digite um numero: ");
for (var i = f - 1; 1 < i; i--) {
    f = f * i;
}
console.log(f);
