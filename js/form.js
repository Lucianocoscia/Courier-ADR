const enviarForm = document.getElementById('botonEnviar');

enviarForm.addEventListener('click', () =>{
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Formulario enviado",
    showConfirmButton: false,
    timer: 1500,
  });
})
