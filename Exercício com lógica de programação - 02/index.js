//  Escreva uma função chamada pasisagem que 
//  recebe dois argumentos, largura e altura
//  de uma imagem(number)
//  Retorne true se a imagem estiver no modo paisagem


const prompt = require('prompt-sync')();


function ePasisagem(largura,altura){
    return largura > altura
}

console.log(ePasisagem(1920,1080))