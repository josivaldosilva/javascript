// Velocidade máxima de até 70
// A cada 5kmm acima do limite você 1 ponto na carteira


const verificarVelocidade = (velocidade) => {
    const velocidadeMaxima = 70;
    const pontosPorKm = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / pontosPorKm));
        if (pontos >= 12) 
            console.log('Carteira suspensa');
        else 
            console.log('Pontos:',pontos)
    }
};

verificarVelocidade();  