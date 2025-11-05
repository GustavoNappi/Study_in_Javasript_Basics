// const nomes = ['luiz', 'otavio', 'henrique'];


// For classico - Geralmente com iteráveis(array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteraveis, arrays ou strings)



// for (let i = 0; i < nome.length ; i++ ){
//     console.log(nome[i])
// }



// for (let i in nome ){
//     console.log(nome[i])
// }


// console.log("#######")

// for (let valor of nome){
//     console.log(valor)
// }



// nomes.forEach(function(valor, indice, array) {
//     console.log(valor, indice, array);
// });




const pessoa = {
    nome:'Gustavo',
    sobrenome:'Nappi'
};

for(let i in pessoa){
    console.log(i)
}