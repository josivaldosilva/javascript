// Laço/Loop de repetição for in...

// Um dos loops que foi feito especificamente para interar sobre as propriedades de um objecto ou elementos de um array

/* for(let key(chave) in objecto) {
    código a ser executado
};*/

// Objecto

let pessoa = {
    nome: 'Josivaldo',
    idade: 23
};

for(let chave in pessoa) {
    console.log(chave, pessoa.idade);
}


// Array 

let cores = ['vermelho', 'azul', 'verde'];

for(let indice in cores) {
    console.log(indice,cores[indice])
}