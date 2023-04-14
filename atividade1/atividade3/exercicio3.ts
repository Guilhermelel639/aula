const entrada = require("readline-sync");

let f: number = entrada.question("digite um numero: ");

    for ( let i = f - 1; 1 < i ; i--) {
    f = f*i;
    }
    console.log(f);