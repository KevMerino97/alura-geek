import { APIConnection } from "./API_Connection.js";

const $form = document.querySelector("[data-form");

async function createCar(e) {
  e.preventDefault();

  const name = document.querySelector("[data-name]").value;
  const price = document.querySelector("[data-price]").value;
  const url = document.querySelector("[data-url]").value;

  try {
    await APIConnection.sendCar(name, url, price);
    alert("Envio concluido con éxito");
  } catch (error) {
    alert("Error al tratar de enviar la tarjeta");
    console.log(error);
  }
}

$form.addEventListener("submit", (e) => createCar(e));
