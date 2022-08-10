// Receber uma quantidade de valores para avaviar
// Função exibe se cada valor é par ou ímpar

const exibirTipo = (limite) => {
    for (let i = 0; i <= limite; i++) {
       if (i % 2 === 0 )
            console.log(i + ' Par')
       else {
            console.log(i + ' ímpar')
        }
    }
}

exibirTipo(5);