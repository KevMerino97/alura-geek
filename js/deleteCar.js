import { APIConnection } from "./API_Connection.js";

export default async function deleteCar(id) {
  try {
    // Llamar a la función REMOVE en el archivo API_Connection.js
    await APIConnection.removeCar(id);

    // Eliminar la tarjeta del DOM usando el atributo data-id
    const $carFigure = document.querySelector(`figure[data-id="${id}"]`);
    if ($carFigure) {
      $carFigure.remove();
    }

    console.log(`Auto con ID ${id} eliminado correctamente`);
  } catch (error) {
    console.error("Error al eliminar el auto:", error);
  }
}
