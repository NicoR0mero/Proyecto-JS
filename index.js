let bienvenida = "Bienvenidos A COTO DIGITAL";
console.log(bienvenida);

alert(bienvenida);

loguear();

//------------------ CONSTANTES PARA VALIDACION DE USUARIO----------- //
const Usuario1 = "Nico";
const Contraseña1 = "1234";

//----------------------------- FUNCIONES -------------------------------------//
function loguear() {
  let usuario = prompt("Ingrese usuario");
  let contraseña = prompt("Ingrese contraseña");
  let mensaje = "";

  if (usuario === "Nico" && contraseña === "1234") {
    mensaje = "Acceso concedido. ¡Bienvenido!";
    MostrarStock();
  } else if (usuario === "" || contraseña === "") {
    mensaje = "Los campos no pueden estar vacíos.";
  } else {
    mensaje = "Usuario o contraseña incorrectos.";
  }

  alert(mensaje);
}

//------------------------ Clase de array --------------------//
class Productos {
  constructor(id, precio) {
    this.id = id;
    this.precio = precio;
  }
}

let nuevos_productos = new Array();
nuevos_productos.push(new Productos("Pan", 4000));
nuevos_productos.push(new Productos("Leche", 2500));
nuevos_productos.push(new Productos("Aceite", 3500));
nuevos_productos.push(new Productos("Fideos", 760));
