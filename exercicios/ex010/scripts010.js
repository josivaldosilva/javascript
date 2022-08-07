// Estrutura Condicional if... else if(se... senão)

/*if(condicao) {
    codigo a ser executado caso seja true
} else if (outra condicao) {
    oitro codigo a ser executado
} else //caso contrario ou caso false {

}*/



// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : boa tarde
// senão : boa noite!



let hora = new Date().getHours(); 
let minutos = new Date().getMinutes();
console.log(hora + ':' + minutos);



if((hora >= 6) && (hora <= 12)) {
    console.log("Bom dia! são "+ hora + " Horas e " + minutos + ' minutos.');
} 
else if((hora > 12) && (hora <= 18)) {
    console.log("Boa tarde! são " + hora + " Horas e " + minutos + ' minutos.');
 }
else {
    console.log('Boa noite! são '+ hora + ' horas e ' + minutos +' minutos.')
 };
