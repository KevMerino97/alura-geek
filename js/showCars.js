import { APIConnection } from "./API_Connection.js";
import deleteCar from "./deleteCar.js";

const $cardsList = document.querySelector(".cards-list"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment();

async function showCars() {
  try {
    const API_list = await APIConnection.getCars();

    API_list.forEach((car) => {
      let $clone = document.importNode($template, true);
      //Asignar ID al elemento figure usando data-id
      $clone.querySelector("figure").dataset.id = car.id;

      //Asignar atributos a la imagen
      $clone.querySelector("img").setAttribute("src", car.url);
      $clone.querySelector("img").setAttribute("alt", car.name);

      //Asignar nombre y precio del auto
      $clone.querySelector(".title").textContent = car.name;
      $clone.querySelector(".price").textContent = car.price;

      // Configurar el botón "Eliminar"
      const $deleteButton = $clone.querySelector(".delete");
      $deleteButton.addEventListener("click", async () => {
        await deleteCar(car.id);
      });

      $fragment.appendChild($clone);
    });
    $cardsList.appendChild($fragment);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", showCars);
