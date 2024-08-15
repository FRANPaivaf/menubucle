console.log("TIENDA ELECTRO");
console.log("==============");
console.log("1. Comprar");
console.log("2. Añadir articulo");
console.log("3. Despacho a domicilio");
console.log("4. Retiro en tienda");
console.log("5. Pagar Orden");
console.log("6. Salir");

const readline = require("readline");
const { promisify } = require("util");

const captura = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const pregunta = promisify(captura.question).bind(captura);

let opcionUsuario = "";
let volverAPreguntar = true; // Variable tipo boolean

captura.question("Ingrese su nombre: ", async (respuesta) => {
  console.log("Hola " + respuesta + " ingrese una opcion del menu: ");

  while(volverAPreguntar) { // Mientras volverAPreguntar sea verdadero

        
          var opcionSel = await pregunta("OPCION: ");

          //captura.question("OPCION: ", (opcionSel) => {
            // Esperar respuesta del usuario

            console.log("Haz seleccionado la opcion: " + opcionSel);

            if ( ["1", "2", "3", "4", "5", "6"].includes(opcionSel) ) {
              console.log("Opcion correcta.");
              opcionUsuario = opcionSel;
              volverAPreguntar = false;
            } else {console.clear(); // Limpiar la consola
                    
              
                    console.log("Opcion no valida.");
              volverAPreguntar = true;
            }

          //});
  }
});