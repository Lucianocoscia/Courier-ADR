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

  } /* else if(pesoDeLaCompra.value > 50 || valorFob.value > 1000){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Recorda que los topes son  U$S 1000 y hasta 50 Kgs por envío. ",
    });
  } */ else {

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
/*       let ImpInt = nuevaBase * parseFloat(categoria.impInterno) * 10000;
      let ImpIntDiv = ((100) - (parseFloat(categoria.impInterno)) * (100)) / 100;
      let impIntSegundaDivision = ImpInt / ImpIntDiv;

      let ImpIntMultiplicacion = nuevaBase * parseFloat(impIntSegundaDivision);
      let suma = ImpIntMultiplicacion + nuevaBase;

      let final = suma * (parseFloat(1.3)) * (parseFloat(categoria.impInterno));
      console.log('esto lo tengo q sumar a impuesto total', final); */



      // Realizo la suma de nuevaBase mas el iva
      let baseIva = nuevaBase * parseFloat(categoria.iva);
      console.log('base Iva', baseIva);

      // Resuelvo suma total de impuestos
      impuestoTotales = baseIva + baseMasImp;
      console.log('ImpTotales', impuestoTotales);

      // Suma de impInterno con ImpTotal
/*       let sumaImpuestoTotales = final + impuestoTotales;
      console.log('ImputotalFianl' , sumaImpuestoTotales); */

      // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
      totalTraerProducto = impuestoTotales + envio;
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
      labelImpuesto.innerText = `U$S ${impuestoTotales.toFixed(2)}`;
      labelTotal.innerText = `U$S ${totalTraerProducto.toFixed(2)}`;

      // Borrar datos de input
      valorFob.value = "";
      pesoDeLaCompra.value = "";
      categoriaElegida.value = "Categorias";
    }
});






// Apuntes cotizador

// const contenedorCarrito = document.getElementById("ContenedorCarrito");
/* // Muebles
let derechosMuebles = 0.17; 
let estadisticasMuebles = 0.03; 
let ivaMuebles = 0.21; 
let impIntMuebles = 0.17; 

// Notebooks
let derechosNotebook = 0; 
let estadisticasNotebook = 0; 
let ivaNotebooks = 0.105; 
let impIntNotebook = 0; 

// Celulares

let derechosCelulares = 0.35; 
let estadisticasCelulares = 0.17; 
let ivaCelulares = 0.21; 
let impIntCelulares = 0;  */


/* // De lo contrario tiene q realizar esta operacion
      if (categoriaElegida.value === "Muebles") {
        // Realizo la primer cuenta baseDerechos
        let baseDerechos =
          (parseFloat(valorFob.value) +
            parseFloat(pesoDeLaCompra.value) * impTres) *
          impUno;
        // console.log(baseDerechos); 

        // Le sumos los impuestos a la base
        let baseMasImp =
          baseDerechos * parseFloat(derechosMuebles) +
          baseDerechos * parseFloat(estadisticasMuebles);
        let nuevaBase =
          baseMasImp +
          baseDerechos; 
        // console.log(nuevaBase); 

        // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaMuebles);
        // console.log(baseIva); 

        // Resuelvo suma total de impuestos
        impuestoTotales = baseIva + baseMasImp;
        // console.log(impuestoTotales);

        // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        // console.log(totalTraerProducto);

        // console.log(`Elegiste ${categoriaElegida.value}`);
      } else if (categoriaElegida.value === "Notebooks") {
        // Realizo la primer cuenta baseDerechos
        let baseDerechos =
          (parseFloat(valorFob.value) +
            parseFloat(pesoDeLaCompra.value) * impTres) *
          impUno;
        // console.log(baseDerechos); 

        // Le sumos los impuestos a la base
        let baseMasImp =
          baseDerechos * parseFloat(derechosNotebook) +
          baseDerechos * parseFloat(estadisticasNotebook);
        let nuevaBase =
          baseMasImp +
          baseDerechos; 
        // console.log(nuevaBase); 

        // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaNotebooks);
        // console.log(baseIva); 

        // Resuelvo suma total de impuestos
        impuestoTotales = baseIva + baseMasImp;
        // console.log(impuestoTotales);

        // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        // console.log(totalTraerProducto);

        // console.log(`Elegiste ${categoriaElegida.value}`);
      } else {
        // Realizo la primer cuenta baseDerechos
        let baseDerechos =
          (parseFloat(valorFob.value) +
            parseFloat(pesoDeLaCompra.value) * impTres) *
          impUno;
        // console.log(baseDerechos); 

        // Le sumos los impuestos a la base
        let baseMasImp =
          baseDerechos * parseFloat(derechosCelulares) +
          baseDerechos * parseFloat(estadisticasCelulares); 
        let nuevaBase =
          baseMasImp +
          baseDerechos; 
        // console.log(nuevaBase); 

        // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaCelulares);
        // console.log(baseIva); 

        // Resuelvo suma total de impuestos
        impuestoTotales = baseIva + baseMasImp;
        console.log(impuestoTotales);

        // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        // console.log(totalTraerProducto); */

        // console.log(`Elegiste ${categoriaElegida.value}`);
      // }

      // Muestro por consola el valor del producto q ingresaron
      // console.log(valorFob.value);
      // console.log(envio);
      // console.log(impuestoTotales);
      // console.log(totalTraerProducto);

      // Muestro los valores en Carrito
      // Swal.fire({
      //   position: "top-end",
      //   icon: "success",
      //   title: "Cotizacion realizada",
      //   showConfirmButton: false,
      //   timer: 1500,
      // });

      // let labelCategoriaElegida = document.getElementById(
      //   "labelCategoriaElegida"
      // );
      // let labelEnvio = document.getElementById("labelEnvio");
      // let labelImpuesto = document.getElementById("labelImpuesto");
      // let labelTotal = document.getElementById("labelTotal");

      // labelCategoriaElegida.innerText = `${categoriaElegida.value}`;
      // labelEnvio.innerText = `U$S ${new Intl.NumberFormat().format(
      //   envio.toFixed()
      // )}`;
      // labelImpuesto.innerText = `U$S ${impuestoTotales.toFixed(2)}`;
      // labelTotal.innerText = `U$S ${totalTraerProducto.toFixed(2)}`;

      // borrarDatos();





// Declaro mi array donde sera guardado el objeto con todos los datos guardados

/*         let cotizacion = [];

        const infoCotizacion = {
            valorFob: valorFob.value, 
            impuestoTotales: impuestoTotales,
            envio: envio,
            totalFinal: totalTraerProducto,
            categoriaElegida: categoriaElegida.value,
            id: Math.random
        };
        cotizacion = [...cotizacion, infoCotizacion];

        // const cartIcon = document.getElementById('cartIcon');
        // cartIcon.innerText = cotizacion.length;

        console.log(cotizacion);

        limpiarHTML()

        cotizacion.forEach((cotizacion)=>{

            const { valorFob, impuestoTotales, envio, totalFinal, categoriaElegida} = cotizacion;


            const div = document.createElement('div');
            div.classList.add("contenedor-carrito");
        
            div.innerHTML += `  
                                <table class="table">
                                    <thead>
                                    <tr>
                                        <th scope="col">${categoriaElegida}</th>
                                        <th scope="col"><span id ="Eliminar" class = "boton-eliminar material-symbols-outlined">
                                        delete
                                        </span></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Envio</td>
                                        <td>U$D ${envio}</td>
                                    </tr>
                                    <tr>
                                        <td>Impuesto</td>
                                        <td>U$D ${impuestoTotales}</td>
                                    </tr>
                                    <tr>
                                        <td>TOTAL</td>
                                        <td>U$D ${totalFinal}</td>

                                    </tr>
                                    </tbody>
                                </table> 
                            `
            contenedorCarrito.append(div);


            console.log(cotizacion);

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cotizacion realizada',
                showConfirmButton: false,
                timer: 1500
                })

            // alert('Cotizacion realizada')
            // modalContenedor.classList.toggle("carrito-visible");
        }) */
// Funcion eliminar cotizacion

/*         const botonEliminar = document.getElementById(`Eliminar`);

        botonEliminar.addEventListener("click", () => {
            console.log("Apretando en el boton eliminar");
            limpiarHTML();
        }); */
// Abrir y cerrar carrito

/* const modalContenedor = document.querySelector("#carrito");
const abrirCarrito = document.getElementById("botonCart");
const cerrarCarrito = document.getElementById("cerrar"); */

/* abrirCarrito.addEventListener('click', ()=>{
    console.log('tocando en boton cart');
    modalContenedor.classList.toggle("carrito-visible");
})

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('carrito-visible')
}) */

// Averiguar como eliminar el producto sin id
// Limpiar Html
/* function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
} */

