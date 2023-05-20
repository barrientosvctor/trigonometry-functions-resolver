import { sen, cos, sec, csc, tan, cot } from "./functions.js";
import { ResultBuilder } from "./ResultBuilder.js";

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
  else {
    const builder = new ResultBuilder(ca, co, h);

    htmlResult = `
  <h2>Results</h2>
  <ul>
    <li>${builder.showResult(sen)}</li>
    <li>${builder.showResult(cos)}</li>
    <li>${builder.showResult(sec)}</li>
    <li>${builder.showResult(csc)}</li>
    <li>${builder.showResult(tan)}</li>
    <li>${builder.showResult(cot)}</li>
  </ul>`;
  }

  resultField.innerHTML = htmlResult;
}
