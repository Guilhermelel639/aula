const entrada = require('readline-sync')
let vetor: number[] = [];
let maior = 0; let menor = 0;
for (let i = 0; i < 15; i++) {
    vetor[i] = parseFloat(entrada.question(''))
}
maior= vetor[0];
menor= vetor[0]
for (let i = 0; i < 15; i++) {
    if (vetor[i] > maior) {
        maior= vetor[i]
    }
    if (vetor[i] < menor) {
        menor= vetor[i]
    }
}
console.log("maior: ", maior ,"menor: ", menor);