const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade:30,
    endereço:{
        rua:'Av Brasil',
        numero:320
    }
};


// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa
console.log(nome, sobrenome);