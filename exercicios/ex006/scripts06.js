
let color = "Blue";

function resetColor() {
    color = "";
};

console.log(color);

resetColor(); // Chamada da função
console.log(color);

///Parametros e argumentos 

let siteColor = "green";

function changeColor(cor, tonalidade)  {
    siteColor = cor + tonalidade
};

changeColor("vermelho", " claro");
console.log(siteColor);