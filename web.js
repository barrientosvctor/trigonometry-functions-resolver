import { seno, coseno, secante, cosecante, tangente, cotangente } from "./functions.js";

const dataForm = document.querySelector("#dataForm");

dataForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(dataForm);

  const ca = data.get("ca");
  const co = data.get("co");
  const h = data.get("h");

  showResults(ca, co, h);
});

function checkValues(ca, co, h) {
  return isNaN(ca) || isNaN(co) || isNaN(h);
}

function showResults(ca, co, h) {
  const resultField = document.querySelector("div.results");
  const isNumber = checkValues(ca, co, h);
  let htmlResult;

  if (isNumber === true) htmlResult = `
  <h2>Error</h2>
  Asegurate de que los campos tienen números.
  `
  else htmlResult = `
  <h2>Resultados</h2>
  seno(x) = ${seno(co, h)}
  coseno(x) = ${coseno(ca, h)}
  secante(x) = ${secante(h, ca)}
  cosecante(x) = ${cosecante(h, co)}
  tangente(x) = ${tangente(co, ca)}
  cotangente(x) = ${cotangente(ca, co)}
  `

  resultField.innerHTML = htmlResult;
}
