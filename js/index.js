import {categorias} from './categorias.js'
// Elementos
const categoriaElegida = document.getElementById("CategoriaElegida");
const valorFob = document.getElementById("ValorDeLaCompra");
const pesoDeLaCompra = document.getElementById("PesoDeLaCompra");
const agregarItem = document.getElementById("BotonAgregar");

// Variables

// Declaro impuestos fijos
let impTres = parseFloat(3.8);
let impUno = parseFloat(1.03);

// Declaro variables q luego le asigno valor en los ifs
let envio;
let impuestoTotales;
let totalTraerProducto;

agregarItem.addEventListener("click", () => {
  // ENVIO
  function peso() {
    if (pesoDeLaCompra.value <= 5) {
      envio = pesoDeLaCompra.value * 31;
      // console.log(envio); /* Valor q muestro por carrito */
    } else if (pesoDeLaCompra.value > 5 && pesoDeLaCompra.value < 10) {
      envio = pesoDeLaCompra.value * 26;
      // console.log(envio); /* Valor q muestro por carrito */
    } else {
      envio = pesoDeLaCompra.value * 24;
      // console.log(envio); /* Valor q muestro por carrito */
    }
  }
  peso();

  // console.log(envio);

  // validacion de categoria
  if (categoriaElegida.value === "Categorias") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por Favor elija una categoria valida.",
    });

  } else if (valorFob.value === "" || pesoDeLaCompra.value === "" ) {
    // validacion si valor fob y peso estan completados
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor complete todos los campos.",
    });

  } else if(pesoDeLaCompra.value > 50 || valorFob.value > 1000){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Recorda que los topes son  U$S 1000 y hasta 50 Kgs por envío. ",
    });
  } else {

      // De lo contrario tiene q realizar esta operacion
      let categoria = categorias.find((elemento) => elemento.nombre === categoriaElegida.value);
      console.log(categoria);

      // Funcionalidad de calculadora
      let baseDerechos =
            (parseFloat(valorFob.value) +
              parseFloat(pesoDeLaCompra.value) * impTres) *
            impUno;
      console.log('baseDerechos', baseDerechos);

      // Le sumos los impuestos a la base
      let baseMasImp =
          baseDerechos * parseFloat(categoria.derechos) +
          baseDerechos * parseFloat(categoria.estadisticas);

      console.log('baseMasImp', baseMasImp);

      let nuevaBase =
          baseMasImp +
          baseDerechos; /* genero una nueva base sumando la basederechos con la basemasimpuestos */
      console.log('nuevabase', nuevaBase);

   // En el caso q tenga impuesto interno realiza esta operacion
    let tasa = (parseFloat(categoria.impInterno) * 10000) / (100 - (parseFloat(categoria.impInterno)) * 100);
    let tasa1 = tasa / 100;
    let tasaPorNuevaBase = tasa1 * nuevaBase;
    let tasa2 = tasaPorNuevaBase + nuevaBase;
    let tasaFinal = tasa2 * parseFloat(1.3) * parseFloat(categoria.impInterno);
    console.log("tasa final", tasaFinal);


      // Realizo la suma de nuevaBase mas el iva
      let baseIva = nuevaBase * parseFloat(categoria.iva);
      console.log('base Iva', baseIva);

      // Resuelvo suma total de impuestos
      impuestoTotales = baseIva + baseMasImp;
      console.log('ImpTotales', impuestoTotales);

      // Suma de impInterno con ImpTotal
      let totalImpuestos = impuestoTotales + tasaFinal;
      console.log("total impuestos con tasa incluida", totalImpuestos);

      // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
      totalTraerProducto = totalImpuestos + envio;
      console.log('Total', totalTraerProducto);

      // Muestro por consola el valor del producto q ingresaron

      // console.log(valorFob.value);
      // console.log(envio);
      // console.log(impuestoTotales);
      // console.log(totalTraerProducto);

      // Muestro los valores en Carrito

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Cotizacion realizada",
        showConfirmButton: false,
        timer: 1500,
      });

      let labelCategoriaElegida = document.getElementById(
        "labelCategoriaElegida"
      );
      let labelEnvio = document.getElementById("labelEnvio");
      let labelImpuesto = document.getElementById("labelImpuesto");
      let labelTotal = document.getElementById("labelTotal");

      labelCategoriaElegida.innerText = `${categoriaElegida.value}`;
      labelEnvio.innerText = `U$S ${new Intl.NumberFormat().format(
        envio.toFixed(2)
      )}`;
      labelImpuesto.innerText = `U$S ${totalImpuestos.toFixed(2)}`;
      labelTotal.innerText = `U$S ${totalTraerProducto.toFixed(2)}`;

      // Borrar datos de input
      valorFob.value = "";
      pesoDeLaCompra.value = "";
      categoriaElegida.value = "Categorias";
    }
});






