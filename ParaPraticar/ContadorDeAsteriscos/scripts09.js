// Criar uma função que exibe a quantidade de *
// Que aquela linha possui



function exibirAsteriscos(linhas) {
    let padrao = '';
    let line = 1;
    while(line <= linhas) {
        padrao += '*';
        console.log(padrao);
    
        line++;
    }

}

exibirAsteriscos(10   );