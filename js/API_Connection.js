const $url = "http://localhost:3001/cars";

async function getCars() {
  const connection = await fetch($url);

  const parseConnection = await connection.json();

  return parseConnection;
}

export const APIConnection = {
  getCars,
};
