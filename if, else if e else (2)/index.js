const numero = 10;

// se (numero >= 0 && numero <= 5) ocorrer, faça isso {codigo}
//Se não faça isso {o codigo}

// if (numero >= 0 && numero <= 5) {
//   console.log("Sim o numero é maior ou igual a zero.");
// } else {
//   console.log('O número não está entre 0 e 5');
// }

if(1 === 1){
    console.log('literalmente')
}

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0e 5.");
} else if (numero >= 6 && numero <= 8) {
    console.log("O número está entre 6 e 8.")
}  else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11')
}else{
    console.log('O número não está entre 0 e 11')
}
console.log('...restante do codigo')