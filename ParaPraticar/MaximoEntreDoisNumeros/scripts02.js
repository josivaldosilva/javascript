
let num1 = 10;
let num2 = 2;

function numeroMaximo() {
    if(num1 > num2) {
        console.log(num1);
    }
    else {
        console.log(num2)
    }
}
numeroMaximo();




// Mais outras forma


function max(n1,n2) {
    if(n1 > n2)
        return n1;
    else return n2;
}

console.log(max(9,4));



// Mais uma sem o else

function max1(n3, n4) {
    if(n3 > n4)
        return n3;
    return n4
}
console.log(max1(2.3,1))



// Com operador ternário


function max2(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
console.log(max2(2,4));



// Outras forma de resolver com arrow functions


const max3 = (n5, n6) => {
    if(n5 > n6)
        return n5;
    return n6;
}

let valorMaior = max3(1,5);
console.log(valorMaior);



// Mais outra forma de se chegar ao mesmo reesultado com arrow functions e operador ternário


const max5 = (n7,n8) => {
    return n7 > n8 ? n7 : n8;  
};

console.log(max5(10,2));
