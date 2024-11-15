const $url = "http://localhost:3001/cars";
const $title = document.querySelector(".cards-section_title");

async function getCars() {
  try {
    const connection = await fetch($url);

    if (!connection.ok) {
      throw new Error("Error de conexión");
    }

    const parseConnection = await connection.json();

    // Si no hay autos, cambiar el mensaje del <h2>
    if (parseConnection.length === 0) {
      $title.textContent = "No hay autos para mostrar";
    } else {
      $title.textContent = "Mis Autos";
    }

    return parseConnection;
  } catch (error) {
    console.log(`Error de conexión ${error}`);
  }
}

async function sendCar(name, url, price) {
  const connection = await fetch($url, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: name,
      url: url,
      price: price,
    }),
  });

  const parseConnection = await connection.json();

  if (!connection.ok) {
    throw new Error("Ha ocurrido un error al enviar el Ferrari 😢");
  }
  return parseConnection;
}

export const APIConnection = {
  getCars,
  sendCar,
};
