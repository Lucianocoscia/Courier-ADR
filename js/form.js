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

window.sr = ScrollReveal();
  sr.reveal('.texto-home, .p-home', {
      duration: 3000,
      origin:'top',
      distance: '-100px'
  })

