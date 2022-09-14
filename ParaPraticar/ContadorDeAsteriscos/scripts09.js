// Criar uma função que exibe a quantidade de *
// Que aquela linha possui



function exibirAsteriscos(linhas) {
    let padrao = '';
    let line = 1;
    do {
        padrao += '*';
        console.log(padrao);
    
        line++;
    }
    while(line <= linhas)

}

exibirAsteriscos(10);
