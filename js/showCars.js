import { APIConnection } from "./API_Connection.js";

const $cardsList = document.querySelector(".cards-list"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment();

async function showCars() {
  try {
    const API_list = await APIConnection.getCars();

    API_list.forEach((car) => {
      let $clone = document.importNode($template, true);
      $clone.querySelector("figure").id = car.id;
      $clone.querySelector("img").setAttribute("src", car.url);
      $clone.querySelector("img").setAttribute("alt", car.name);
      $clone.querySelector(".title").textContent = car.name;
      $clone.querySelector(".price").textContent = car.price;
      $fragment.appendChild($clone);
    });
    $cardsList.appendChild($fragment);
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", showCars);
