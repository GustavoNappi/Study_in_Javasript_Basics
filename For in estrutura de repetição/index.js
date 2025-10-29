
// For in -> lê os indices ou chaves do objeto
// const frutas = [
//     'Pera', 'Maçã', 'Uva'
// ];

// for (i = 0; i < frutas.length; i++){
//     console.log(frutas[i])
// }  

// for (let i in frutas){
//     console.log(frutas[i]);
// }
  



const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otavio',
    idade: 30
}

// for (let chaves in pessoa){
//     console.log(chaves)
// }

 
for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}