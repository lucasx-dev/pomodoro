let temaBtn = document.querySelector("body");
let tempo;
let descanso;
let segundos = parseInt(document.querySelector("#segundos").innerHTML);
let minutos = parseInt(document.querySelector("#minutos").innerHTML);
let horas = parseInt(document.querySelector("#horas").innerHTML);
let segundosDesc = parseInt(
  document.querySelector("#segundosDescanso").innerHTML
);
let minutosDesc = parseInt(
  document.querySelector("#minutosDescanso").innerHTML
);
minutos = 25;
segundos = 0;
segundosDesc = 0;
minutosDesc = 5;
function mudarTema() {
  temaBtn.classList.toggle("tema-claro");
}
function removeBtnIniciar() {
  let botao1 = document.querySelector("#btnIniciar");
  botao1.classList.add("hide");
}
function addBtnIniciar() {
  let botao2 = document.querySelector("#btnIniciar");
  botao2.classList.remove("hide");
}
function removeBtnDescanso() {
  let botao3 = document.querySelector("#btnDescanso");
  botao3.classList.add("hide");
}
function addBtnDescanso() {
  let botao4 = document.querySelector("#btnDescanso");
  botao4.classList.remove("hide");
}
function iniciarCronometro() {
  removeBtnIniciar();
  tempo = setInterval(function () {
    if (segundos === 0) {
      if (minutos === 0) {
        if (horas === 0) {
          clearInterval(tempo);
          addBtnIniciar();
          removeBtnDescanso();
          return;
        }
        horas -= 1;
        minutos = 59;
      } else {
        minutos -= 1;
      }
      segundos = 59;
    } else {
      segundos -= 1;
    }

    document.querySelector("#segundos").innerHTML = String(segundos).padStart(
      2,
      "0"
    );
    document.querySelector("#minutos").innerHTML = String(minutos).padStart(
      2,
      "0"
    );
    document.querySelector("#horas").innerHTML = String(horas).padStart(2, "0");
  }, 1000);
}
function blocoCronometro() {
  minutos += 25;
  document.querySelector("#minutos").innerHTML = String(minutos).padStart(
    2,
    "0"
  );
  if (minutos >= 60) {
    minutos = minutos - 60;
    horas += 1;
    document.querySelector("#minutos").innerHTML = String(minutos).padStart(
      2,
      "0"
    );
    document.querySelector("#horas").innerHTML = String(horas).padStart(2, "0");
  }
}
function tempoDescanso() {
  removeBtnDescanso();
  descanso = setInterval(function () {
    if (segundosDesc === 0) {
      if (minutosDesc === 0) {
        minutosDesc = 5;
        segundosDesc = 0;
        clearInterval(descanso);
        removeBtnDescanso();
      } else {
        minutosDesc -= 1;
        segundosDesc = 59;
      }
    } else {
      segundosDesc -= 1;
    }
    document.querySelector("#segundosDescanso").innerHTML = String(
      segundosDesc
    ).padStart(2, "0");
    document.querySelector("#minutosDescanso").innerHTML = String(
      minutosDesc
    ).padStart(2, "0");
  }, 1000);
}
function pausarCronometro() {
  removeBtnIniciar();
  addBtnIniciar();
  clearInterval(tempo);
}
function reiniciarCronometro() {
  clearInterval(tempo);
  clearInterval(descanso);
  minutos = 25;
  segundos = 0;
  horas = 0;
  minutosDesc = 5;
  segundosDesc = 0;
  document.querySelector("#segundosDescanso").innerHTML = "00";
  document.querySelector("#minutosDescanso").innerHTML = "05";
  document.querySelector("#segundos").innerHTML = "00";
  document.querySelector("#minutos").innerHTML = "25";
  document.querySelector("#horas").innerHTML = "00";
  addBtnIniciar();
  addBtnDescanso();
}
