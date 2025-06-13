/**
 * La siguiente función valida de forma correcta un DNI Español.
 * 
 * Reescribe la línea 8 usando el contructor new RegExp : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp .
 */

function validarDNI(dni) {
  const regex = new RegExp("^[0-9]{8}[A-Z]$", "i"); // <-- SOLAMENTE cambia esta línea
  return regex.test(dni);
}

console.log(validarDNI("12345678Z")); // true
console.log(validarDNI("1234567A"));  // false (7 dígitos)
console.log(validarDNI("12345678z")); // true