/*
Operadores Lógicos
&& -> AND  -> E -> Todas as expressões tem que ser verdeiras
|| -> OR -> OU -> se uma for verdadeira todas vão retornar verdadaeira se todas forem falsas irá retornar falso
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true;
const expressaoOr  = true || false || true || false;

const user = 'Luiz';
const senha = '123456'
const vaiLogar  = user === 'Luiz'


console.log(expressaoAnd)
console.log(expressaoOr)
console.log(vaiLogar)

