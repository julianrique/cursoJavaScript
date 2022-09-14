
alert("Bienvenido a simulador de Inventariado:");
let opcionPrincipal = prompt("Puedes elegir: 1. INGRESO 2.RETIRO 3.CAMBIO");
proceso = [];


switch(opcionPrincipal){
    case '1':
        let objetoIngreso = prompt("Objeto a ingresar: ")
        let numeroIngreso = prompt("Número de unidades del objeto/producto: ")
        alert('Usted acaba de agregar ' + numeroIngreso +' unidades del producto u objeto ' + objetoIngreso)
        break;
    case '2':
        let objetoRetiro = prompt("Objeto a ingresar: ")
        let numeroRetiro = prompt("Número de unidades del objeto/producto: ")
        alert('Usted acaba de retirar ' + numeroRetiro +' unidades del producto u objeto ' + objetoRetiro)
        break;
    case '3':
        let objetoCambio1 = prompt("¿Qué objeto/producto desea cambiar?")
        let objetoCambio2 = prompt("¿Por cual objeto/producto realizará el cambio?")
        alert('Usted acaba de realizar un cambio de ' + objetoCambio1 + ' por ' + objetoCambio2 + '.... Gracias por realizar el cambio')
}