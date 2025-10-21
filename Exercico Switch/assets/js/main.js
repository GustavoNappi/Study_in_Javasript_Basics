const h1 = document.querySelector('.container h1');
const data = new Date();

function getDiaSemanaTexto(diaSemana) {
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

  return diaSemanaTexto;
}

function getNomeMes(mes) {
  let nomeMes;

  switch (mes) {
    case 0:
      nomeMes = 'Janeiro';
      break;
    case 1:
      nomeMes = 'Fevereiro';
      break;
    case 2:
      nomeMes = 'Março';
      break;
    case 3:
      nomeMes = 'Abril';
      break;
    case 4:
      nomeMes = 'Maio';
      break;
    case 5:
      nomeMes = 'Junho';
      break;
    case 6:
      nomeMes = 'Julho';
      break;
    case 7:
      nomeMes = 'Agosto';
      break;
    case 8:
      nomeMes = 'Setembro';
      break;
    case 9:
      nomeMes = 'Outubro';
      break;
    case 10:
      nomeMes = 'Novembro';
      break;
    case 11:
      nomeMes = 'Dezembro';
      break;
    default:
      nomeMes = 'Mês inválido';
      break;
  }

  return nomeMes;
}

function criaData(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`;
}

h1.innerHTML = criaData(data);
