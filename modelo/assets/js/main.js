function calIMC() {
  const peso = parseFloat(document.getElementById("inputPeso").value);
  const altura = parseFloat(document.getElementById("inputAltura").value);

  if (isNaN(peso) || isNaN(altura) || altura <= 0) {
    return null;
  }

  const resultado = peso / (altura * altura);

  return {
    peso,
    altura,
    resultado,
  };
}

function Envio(event) {
  event.preventDefault();

  const cIMC = calIMC();
  const resultadoContainer = document.getElementById("resultadoIMC");
  resultadoContainer.innerHTML = ""; // Limpa o resultado anterior

  const p = document.createElement("p");

  if (!cIMC) {
    p.innerText = "Insira um valor válido para peso e altura.";
    resultadoContainer.appendChild(p);
    return;
  }

  const imc = cIMC.resultado.toFixed(1); // arredonda com 1 casa decimal

  let classificacao = "";

  if (imc < 16) {
    classificacao = "Magreza grave (grau III)";
  } else if (imc < 17) {
    classificacao = "Magreza moderada (grau II)";
  } else if (imc < 18.5) {
    classificacao = "Magreza leve (grau I)";
  } else if (imc < 25) {
    classificacao = "Eutrofia (peso normal)";
  } else if (imc < 30) {
    classificacao = "Pré-obesidade";
  } else if (imc < 35) {
    classificacao = "Obesidade grau I";
  } else if (imc < 40) {
    classificacao = "Obesidade grau II";
  } else {
    classificacao = "Obesidade grau III (mórbida)";
  }

  p.innerText = `Seu IMC é ${imc} - ${classificacao}`;
  resultadoContainer.appendChild(p);
}

document.getElementById("form").addEventListener("submit", Envio);