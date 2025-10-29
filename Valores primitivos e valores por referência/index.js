/*
Primitivos - string, number, boolean, undefined, null (bigint, symbol)
Rereferência (mutável) - array, object, function - Passados por referencia
*/

// let a = [1,2,3];
// let b = a;
// console.log(a,b)

// a.push();
// console.log(a)


// let a  = 'A';
// let b = a;// Cópia
// console.log(a ,b)


// a = 'Outra coisa'
// console.log(a,b)


const a =  {
    nome: 'Luiz',
    sobrenome:'Otavio'
}

const b = a
a.nome = 'João'
console.log(b)