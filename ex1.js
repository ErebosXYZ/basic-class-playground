/**
 * Instanciando objetos existentes
 */

/**
 * Fíjate en este código. Genera una instancia del objeto Date que alberga la fecha actual del sistema: https://www.w3schools.com/js/js_dates.asp
 */

const ahora = new Date();
console.log(ahora); // Fecha y hora actual

/**
 * EJERCICIO: Escribe el código necesario para instanciar un objeto de la clase Date y luego usa uno de sus métodos para que te muestre la siguiente fecha y en este formato:
 * Mon Jul 10 1995, que corresponde a la fecha en formato ISO del: lunes 10 de julio de 1995
 */

const fechaPasada = new Date("1995-07-10");
console.log(fechaPasada.toDateString());