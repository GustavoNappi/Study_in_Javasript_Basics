const data = new Date();
const diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break;
    case 1:
        diaSemanaTexto = 'Segunda-feira';
        break;
    case 2:
        diaSemanaTexto = 'Terça-feira';
        break;
    case 3:
        diaSemanaTexto = 'Quarta-feira';
        break;
    case 4:
        diaSemanaTexto = 'Quinta-feira';
        break;
    case 5:
        diaSemanaTexto = 'Sexta-feira';
        break;
    case 6:
        diaSemanaTexto = 'Sábado';
        break;
    default:
        diaSemanaTexto = 'Dia inválido';
        break;
}




// if (diaSemana === 0){
//     diaSemanaTexto = 'Domingo';
// } else if (diaSemana === 1){
//     diaSemanaTexto = 'Segunda'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Terça'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Quarta'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Quarta'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Quinta'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Sexta'
// }
// else if (diaSemana === 1){
//     diaSemanaTexto = 'Sabado'
// }

console.log(diaSemana);


