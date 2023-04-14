var entrada = require('readline-sync');
var vetor = [];
var maior = 0;
var menor = 0;
for (var i = 0; i < 15; i++) {
    vetor[i] = parseFloat(entrada.question(''));
}
maior = vetor[0];
menor = vetor[0];
for (var i = 0; i < 15; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
    }
    if (vetor[i] < menor) {
        menor = vetor[i];
    }
}
console.log("maior: ", maior, "menor: ", menor);
