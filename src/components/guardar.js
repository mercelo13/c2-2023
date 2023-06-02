
function guardar(data) {
  if (!data) {
    console.error("No hay datos para guardar");
    return;
  }
  const jsonData = JSON.stringify(data, null, 2);
  localStorage.setItem('./datos.json', jsonData);
  console.log("Los datos se han guardado correctamente en datos.json");
}

export default guardar;