// Criar um método para ler propriedades de um objecto e 
// Exibir somente as propriedades do tipo string que estão nesse objecto

const filme = {
    titulo: 'Vingadores',
    ano: 2021,
    director: 'Kevin Feige',
    personagem: 'Homem de Ferro'
}

const exibirPropriedades = (obj) => {
    for(prop in filme) {
        if (typeof obj[prop] === 'string') 
            console.log(prop,obj[prop]);
    }
};

exibirPropriedades(filme);