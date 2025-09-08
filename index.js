alert("Bienvenidos A COTO DIGITAL");

//--------- CONSTANTES ----------- //
const Usuario1 = "Nico";
const Contraseña1 = "1234";

//--------- VARIABLES GLOBALES ----------- //
let carrito = [];
let total = 0;

//----------------------------- FUNCIONES -------------------------------------//
function loguear() {
  let usuario = prompt("Ingrese usuario");
  let contraseña = prompt("Ingrese contraseña");
  let mensaje = "";

  if (usuario === Usuario1 && contraseña === Contraseña1) {
    mensaje = "Acceso concedido. ¡Bienvenido!";
    alert(mensaje);
    Armaelcarrito();
  } else if (usuario === "" || contraseña === "") {
    mensaje = "Los campos no pueden estar vacíos.";
    alert(mensaje);
    loguear();
  } else {
    mensaje = "Usuario o contraseña incorrectos.";
    alert(mensaje);
    loguear();
  }
}

function Armandopedido(opcion) {
  switch (opcion) {
    case "1":
      carrito.push({ nombre: "Banana", precio: 1000 });
      total += 1000;
      break;
    case "2":
      carrito.push({ nombre: "Fideos", precio: 500 });
      total += 500;
      break;
    case "3":
      carrito.push({ nombre: "Arroz", precio: 3000 });
      total += 3000;
      break;
    case "4":
      carrito.push({ nombre: "Gaseosa", precio: 4500 });
      total += 4500;
      break;
    case "5":
      carrito.push({ nombre: "Leche", precio: 1500 });
      total += 1500;
      break;
  }
}

function totalcuenta() {
  let resumen = " Tu pedido:\n";
  carrito.forEach((producto, valor) => {
    resumen += `${valor + 1}. ${producto.nombre} - $${producto.precio}\n`;
  });
  resumen += `\n Total a pagar: $${total}`;
  alert(resumen);
}

function Armaelcarrito() {
  const lista = prompt(
    "Seleccione los productos para su lista de pedidos \n 1-Banana $1000 \n 2-Fideos $500 \n 3-Arroz $3000 \n 4-Gaseosa $4500 \n 5-Leche $1500 \n 6-Terminar pedido."
  );

  switch (lista) {
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
      Armandopedido(lista);
      alert("Producto agregado al carrito.");
      Armaelcarrito();
      break;
    case "6":
      totalcuenta();
      break;
    default:
      alert("Opción inválida.");
      Armaelcarrito();
  }
}

// Ejecutar login
loguear();
