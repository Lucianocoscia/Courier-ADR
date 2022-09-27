//  Paso 1, necesito los datos de los inputs en variables. con getelementbyid.value
//  paso 2 guardar en variables los datos de la tabla 

// De 0 a 5 = se multiplica el peso del producto por 31
// De 5 a 10 = se multiplica el peso del producto por 26
// De 10 a 50 = se multiplica el peso del producto por 24


// Elementos
const categoriaElegida = document.getElementById('CategoriaElegida') ;
const valorFob = document.getElementById('ValorDeLaCompra');
const pesoDeLaCompra = document.getElementById('PesoDeLaCompra');
const agregarItem = document.getElementById('BotonAgregar')

// Variables

// Declaro impuestos fijos
let impTres = parseFloat(3.8);
let impUno = parseFloat(1.03);

// Muebles
let derechosMuebles = 0.17 ; /*  D6 */
let estadisticasMuebles = 0.03 ; /*  E6 */
let ivaMuebles = 0.21 ; /* F6 */
let impIntMuebles = 0.17 ; /* G6 */

// Notebooks
let derechosNotebook = 0; /* D7 */
let estadisticasNotebook = 0;  /* E7 */
let ivaNotebooks = 0.1050; /* F7 */
let impIntNotebook = 0; /* G7 */

// Celulares

let derechosCelulares = 0.35; /* D8 */
let estadisticasCelulares = 0.17; /* E8 */
let ivaCelulares = 0.21; /* F8  */
let impIntCelulares = 0; /* G8 */

//  el if global es la categoria. por el momento tres categorias Muebles, Notebooks, Celulares.
// iMPUESTOAFI = (((I6 + H6*3,8)*1,03)*D6) + (((I6+H6*3,8)*1,03)*E6) 

// ImpuestoAfi = ((((I6+H6*3,8)*1,03)*D6) + (((I6+H6*3,8)*1,03)*E6) + (((I6+H6*3,8)*1,03) + (((I6+H6*3,8)*1,03)*D6) + (((I6+H6*3,8)*1,03)*E6))*F6)+ (((((I6+H6*3,8)*1,03) + (((I6+H6*3,8)*1,03)*D6) + (((I6+H6*3,8)*1,03)*E6))) * ((G6*10000) / (100-(G6*100))/100) + ((((I6+H6*3,8)*1,03) + (((I6+H6*3,8)*1,03)*D6) + (((I6+H6*3,8)*1,03)*E6)))) *1,3 *G6 

// ImpuestoAfiMuebles = ((((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)* derechosMuebles) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)* estadisticasMuebles) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)*derechosMuebles) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)*estadisticasMuebles))*ivaMuebles) + (((((valorFobMuebles + pesoDeLaCompra*3,8)*1,03) + (((valorFobMuebles + pesoDeLaCompra * 3,8)*1,03)* derechosMuebles) + (((valorFobMuebles + pesoDeLaCompra *3,8)*1,03)*estadisticasMuebles))) * ((impIntMuebles*10000) / (100 - (impIntMuebles*100))/100) + ((((valorFobMuebles + pesoDeLaCompra*3,8)*1,03) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)*derechosMuebles) + (((valorFobMuebles + pesoDeLaCompra*3,8)*1,03)*estadisticasMuebles)))) * 1,3 * impIntMuebles
let envio;
let impuestoTotales;
let totalTraerProducto;

agregarItem.addEventListener('click', () =>{


    // ENVIO
    function peso(){
    if(pesoDeLaCompra.value <= 5){
        envio = pesoDeLaCompra.value * 31;
        console.log(envio); /* Valor q muestro por carrito */

    } else if (pesoDeLaCompra.value > 5 && pesoDeLaCompra.value < 10){
        envio = pesoDeLaCompra.value * 26;
        console.log(envio); /* Valor q muestro por carrito */

    } else {
        envio = pesoDeLaCompra.value * 24;
        console.log(envio); /* Valor q muestro por carrito */

    }
    }
    peso();

        // console.log(envio);

    // CATEGORIA
    if(categoriaElegida.value === 'Categorias'){
        alert('Por Favor elija una categoria valida');
    }


    if(categoriaElegida.value === 'Muebles'){

    // Realizo la primer cuenta baseDerechos
        let baseDerechos = (parseFloat(valorFob.value) + (parseFloat(pesoDeLaCompra.value) * impTres)) * impUno
        // console.log(baseDerechos); /* Me dio  */

    // Le sumos los impuestos a la base
        let baseMasImp = baseDerechos * parseFloat(derechosMuebles) + baseDerechos * parseFloat(estadisticasMuebles); /* 271,71 */
        let nuevaBase = baseMasImp + baseDerechos; /* genero una nueva base sumando la basederechos con la basemasimpuestos */
        // console.log(nuevaBase); /* 1630,2 */

    // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaMuebles)
        // console.log(baseIva); /* 342,36 */
        
    // Resuelvo suma total de impuestos 
        impuestoTotales = baseIva + baseMasImp;
        console.log(impuestoTotales);

    // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        console.log(totalTraerProducto);


        console.log(`Elegiste ${categoriaElegida.value}`);
    } else if (categoriaElegida.value === 'Notebooks'){

    // Realizo la primer cuenta baseDerechos
        let baseDerechos = (parseFloat(valorFob.value) + (parseFloat(pesoDeLaCompra.value) * impTres)) * impUno
        // console.log(baseDerechos); /* Me dio  */

    // Le sumos los impuestos a la base
        let baseMasImp = baseDerechos * parseFloat(derechosNotebook) + baseDerechos * parseFloat(estadisticasNotebook); /* 271,71 */
        let nuevaBase = baseMasImp + baseDerechos; /* genero una nueva base sumando la basederechos con la base mas impuestos */
        // console.log(nuevaBase); /* 1630,2 */

    // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaNotebooks)
        // console.log(baseIva); /* 342,36 */

    // Resuelvo suma total de impuestos 
        impuestoTotales = baseIva + baseMasImp;
        console.log(impuestoTotales);

    // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        console.log(totalTraerProducto);

        console.log(`Elegiste ${categoriaElegida.value}`);
    } else {

        // Realizo la primer cuenta baseDerechos
        let baseDerechos = (parseFloat(valorFob.value) + (parseFloat(pesoDeLaCompra.value) * impTres)) * impUno
        // console.log(baseDerechos); /* Me dio  */

        // Le sumos los impuestos a la base
        let baseMasImp = baseDerechos * parseFloat(derechosCelulares) + baseDerechos * parseFloat(estadisticasCelulares); /* 271,71 */
        let nuevaBase = baseMasImp + baseDerechos; /* genero una nueva base sumando la basederechos con la base mas impuestos */
        // console.log(nuevaBase); /* 1630,2 */

        // Realizo la suma de nuevaBase mas el iva
        let baseIva = nuevaBase * parseFloat(ivaCelulares)
        // console.log(baseIva); /* 342,36 */

        // Resuelvo suma total de impuestos 
        impuestoTotales = baseIva + baseMasImp;
        console.log(impuestoTotales);

        // Total de traer el producto es la suma del envio dependiendo del peso mas el total de impuestos
        totalTraerProducto = impuestoTotales + envio;
        // console.log(totalTraerProducto);

        console.log(`Elegiste ${categoriaElegida.value}`);
    }



    // Muestro por consola el valor del producto q ingresaron 

    console.log(valorFob.value);
    console.log(envio);
    console.log(impuestoTotales);
    console.log(totalTraerProducto);

    // Muestro los valores en Carrito
    let cotizacion = [];

    const infoCotizacion = {
        valorFob: valorFob.value, 
        impuestoTotales: impuestoTotales,
        envio: envio,
        totalFinal: totalTraerProducto,
        categoriaElegida: categoriaElegida.value
    };
    cotizacion = [...cotizacion, infoCotizacion];

    console.log(cotizacion);

    cotizacion.forEach((cotizacion)=>{

        const { valorFob, impuestoTotales, envio, totalFinal, categoriaElegida} = cotizacion;
        const contenedorCarrito = document.getElementById('ContenedorCarrito');

        const div = document.createElement('div');
        div.classList.add("contenedor-carrito");
    
        div.innerHTML += `  
    
                            <!-- Visual Carrito -->
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
        contenedorCarrito.append(div)
        // Eliminar reserva del carrito
        const botonEliminar = document.getElementById(`Eliminar`);

        botonEliminar.addEventListener("click", () => {
            console.log("Apretando en el boton eliminar");

        });

        alert('Cotizacion realizada')
        modalContenedor.classList.toggle("carrito-visible");
    })

})


const modalContenedor = document.querySelector("#carrito");
const abrirCarrito = document.getElementById('botonCart');
const cerrarCarrito = document.getElementById('cerrar')

abrirCarrito.addEventListener('click', ()=>{
    console.log('tocando en boton cart');
    modalContenedor.classList.toggle("carrito-visible");
})

cerrarCarrito.addEventListener('click', ()=>{
    modalContenedor.classList.remove('carrito-visible')
})