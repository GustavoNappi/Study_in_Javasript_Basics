/*
Gustavo Nappi tem 22 Anos, pesa 84kg
tem 1.8 de altura e seu IMC é de 25.23123124
*/

const nome = 'Gustavo';
const sobrenome = 'Nappi';
const idade = 22;
const peso = 100;
const altura = 1.85;

let imc = peso / (altura * altura)
let anoNascimento = 2025 - idade 


/*console.log(nome,sobrenome, "tem", idade, "pesa", peso, "tem", altura, 'e seu IMC é de',imc,
 "ano de nascimento do", nome, "é de", anoNascimento)*/


 console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg tem ${altura} e seu IMC é de ${imc} ano de nascimento de ${nome} é de ${anoNascimento}`)

 alert(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso}kg tem ${altura} e seu IMC é de ${imc} ano de nascimento de ${nome} é de ${anoNascimento}`)