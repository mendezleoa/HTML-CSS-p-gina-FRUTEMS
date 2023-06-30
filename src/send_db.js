async function enviar() {
  let nombre = document.getElementById('nombre').value
  let apellido = document.getElementById('apellido').value
  let telefono = document.getElementById('telefono').value
  let correo = document.getElementById('correo').value
  datos = {Nombre: nombre, Apellido: apellido, Telefono: telefono, Correo: correo}

  let data = JSON.stringify(datos);

  await fetch("http://localhost:3000",{
      method: 'Post',
      body: data
    })
    .then(x => console.log("Se envio el registro", x))
    .catch(err => console.log(err))
}