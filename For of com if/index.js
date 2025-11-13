const sacolinhaDeMercado = [
  { item: 'Banana', valor: 3.50 },
  { item: 'Maçã', valor: 2.75 },
  { item: 'Leite', valor: 8.99 },
  { item: 'Arroz', valor: 12.30 },
  { item: 'Feijão', valor: 10.20 }
];



for (let produto of sacolinhaDeMercado){
    if (produto.valor < 5){
        console.log(`${produto.item} é barato`);
    } else if (produto.valor >= 5 && produto.valor < 10){
        console.log(`${produto.item} tem um preço médio`)
    }else{
        console.log(`${produto.item} é carao fi`)
    }
}

