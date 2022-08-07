let a = 'Vermelho';
let b = 'Azul';

let c =  a;
a = b;
b = c;

console.log(a);
console.log(b);

// Outro jeito de resolve e chegar ao mesmo resultado


/*
const trocarValor = (azul) => {
    return azul;
 }
 console.log(trocarValor(b));

const trocarValor1 = (Vermelho) => {
   return Vermelho;
}
console.log(trocarValor(a));*/