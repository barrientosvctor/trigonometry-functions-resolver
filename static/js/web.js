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
  const isNotNumber = checkValues(ca, co, h);
  let htmlResult;

  if (isNotNumber === true) htmlResult = `
  <h2>Error</h2>
  Asegurate de que los campos tienen números.
  `;
  else htmlResult = `
  <h2>Results</h2>
  <ul>
    <li>sen(x) = ${seno(co, h)}</li>
    <li>cos(x) = ${coseno(ca, h)}</li>
    <li>sec(x) = ${secante(h, ca)}</li>
    <li>csc(x) = ${cosecante(h, co)}</li>
    <li>tan(x) = ${tangente(co, ca)}</li>
    <li>cot(x) = ${cotangente(ca, co)}</li>
  </ul>`;

  resultField.innerHTML = htmlResult;
}
