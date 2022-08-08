// Estrutura Condicional Switch case...(troca caso)

// Sintaxe
/* switch (variavel) {
       case: // primeiro caso 
        --> código a ser executado
       break; // para parar Caso essa afirmação for verificada verdadeira.

       case: // segundo caso 
       --> código a ser executado
       break; // para parar caso essa afirmação for verificada verdadeira.

       case: // terceiro caso 
       --> código a ser executado
       break; // para parar caso essa afirmação for verificada verdadeira.

       0bs: Podes colocar qauntos casos quiseres 

       default: // Caso nehuma das condições acima seja verificada então vai cai nesse default

       --> Código a ser executado caso não caía em nenhuma das condições acima
   }
*/

let user;  // comum , premium, gold
user = 'gold'
switch (user) {
    case 'comum':
        console.log('Usuário comum');
    break;

    case 'premium':
        console.log('Usuário premium');
    break;

    case 'gold':
        console.log('Usuário gold');
    break;

    default:
        console.log('Usuário desconhecido');
}