class Coche {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.gasolina = 5;
  }

  acelerar() {
    if (this.gasolina > 0){
      this.gasolina--
    } else if (this.gasolina = 0) {
      return this.gasolina;
    }
    console.log(`gasolina: ${this.gasolina}`);
  }

  repostar() {
    this.gasolina = 5;
  } 

}

const miCoche = new Coche("Toyota", "Corolla");
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar();
miCoche.acelerar(); // Debería dejar gasolina en 0
miCoche.acelerar(); // La gasolina debería seguir siendo 0
console.log("Gasolina tras acelerar 6 veces:", miCoche.gasolina);
miCoche.repostar();
console.log("Gasolina tras repostar:", miCoche.gasolina);

// Resultado esperado: https://oscarm.tinytake.com/media/1777803?filename=1749743627391_TinyTake12-06-2025-05-53-37_638853404266396722.png&sub_type=thumbnail_preview&type=attachment&width=1195&height=191
