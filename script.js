const dia = window.document.getElementById("dia");
const hora = window.document.getElementById("hora");
const minuto = window.document.getElementById("minuto");
const segundo = window.document.getElementById("segundo");

const niver = new Date("2024-01-31");

function countDown(){
  const hoje = new Date();

  const segTotal = (niver.getTime() - hoje.getTime()) / 1000;

  const finalDias = Math.floor(segTotal / 60 / 60 / 24);
  const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  const finalMinutos = Math.floor(segTotal / 60) % 60;
  const finalSegundos = Math.floor(segTotal) % 60;

  dia.innerHTML = finalDias;
  hora.innerHTML = formatoTempo(finalHoras);
  minuto.innerHTML = formatoTempo(finalMinutos);
  segundo.innerHTML = formatoTempo(finalSegundos);
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);

/* countDown é  responsável por calcular e exibir um contador regressivo */

/*getTime é usado para obter o valor numérico correspondente a uma data e hora específica, ele obten o valor numerico em milissegundos desde 1 de janeiro de 1970*/