

// Operadores Aritméticos(Matemáticos)
// Operadores Aritméticos de Incremento (+1) e de Decremento (-1)
// Operadores de Atribuição
// Operadores de Compraração
// Operadores Lógicos 
// Operadores Bitwise





/* Operadores Aritméticos (Matemáticos)

+ -> mais (soma);
- -> menos (subtração); 
* -> multiplicação; 
/ -> Divisão; 
** -> Exponênciação

*/

let salario = 100;

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);



//--------------------------------------------------------------------------------------------------



// Operadores de Aritméticos de Incrementação e de Decrementação

let age = 23;

// Incremento (++)
console.log(++age);

//Decremento (--)

console.log(--age);



//--------------------------------------------------------------------------------------------------



// Operadores de atribuição no JavaScript (=)

//                Op.Atrib
let valorTecladoGamer = 1500;

console.log(valorTecladoGamer);

//valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;

console.log(valorTecladoGamer);

// Simplificando
valorTecladoGamer += valorTecladoGamer;

console.log(valorTecladoGamer);



//--------------------------------------------------------------------------------------------------



// Operadores de igualdade no JavaScript (==)

// Igualdade estrita (===)
// Muito recomendado

console.log(1 === 1);
console.log(1 === '1');
console.log(2 === 1);

// Igualdade (==) 
// Não muito recomendado

console.log(1 == 1);
console.log(1 == '1');
console.log(1 == '2');
console.log(2 == 'two');



//--------------------------------------------------------------------------------------------------



// Operador Ternário


let points = 110;
let types = points > 100 ? "premium" : "Comum";
console.log(types);





//--------------------------------------------------------------------------------------------------



// Operadores Lógicos no JavaScript

// AND (&&)
// OR (||)
// NOT (!)

//Operador lógico E (&&)
// retorna true se as duas condiçoes a serem comparadas forem true

console.log(true && true);
console.log(false && false);
console.log(false && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);

// Operador Logico OR  (ou) (||)
/// Retorna true se pelo menos uma das condições a serem comparadas for true. Se ambas forem true também retornará true


console.log(true || true); 
console.log(false || false);
console.log(false || true);


let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade ||possuiCarteiraDeTrabalho;

console.log(podeAplicar);




//--------------------------------------------------------------------------------------------------


// Operador Lógico Not (não) (!)
// Este operador basicamente refuta afirmação 

let candidatoRecusado = !podeAplicar;
console.log(candidatoRecusado);