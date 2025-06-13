class Character {
    constructor(name, attackPower, intelligence, hitPoints) {
        this.name = name;
        this.attackPower = attackPower;
        this.intelligence = intelligence;
        this.hitPoints = hitPoints;
        this.level = 0;
        // COMPLETAR
    }

    // Método para subir de nivel
    levelUp() {
        // COMPLETAR
        this.level++
        this.attackPower = this.attackPower + 1;
        this.intelligence = this.intelligence + 1;
        this.hitPoints = this.hitPoints + 1;
    }

    // Método para recibir daño
    receiveDamage(damage) {
        // COMPLETAR
        this.hitPoints = this.hitPoints - damage;
    }

    // Método para verificar si el personaje está vivo
    isAlive() {
        // COMPLETAR
        // if (this.hitPoints <= 0) {
        //     return false;
        // } else {
        //     return true;
        // }
        return this.hitPoints > 0 ? true : false;
    }
}
// Creación de una instancia de Character para probar la clase
const hero = new Character("Aragon", 5, 12, 10);

// Mostrar las propiedades del personaje
console.log(`Nombre: ${hero.name}`);           // Nombre: Aragon
console.log(`Poder de ataque: ${hero.attackPower}`); // Poder de ataque: 5
console.log(`Inteligencia: ${hero.intelligence}`);   // Inteligencia: 12
console.log(`Puntos de vida: ${hero.hitPoints}`);   // Puntos de vida: 10
console.log(`Nivel: ${hero.level}`);           // Nivel: 0

// El personaje sube de nivel 
hero.levelUp();
console.log(`Nivel: ${hero.level}`);           // Nivel: 1 (Recuerda que todas sus estádisticas aumentan en 1)
console.log(`Poder de ataque: ${hero.attackPower}`);     // Poder de ataque: 6

// El personaje se pone a luchar contra un goblin
const goblin = new Character("Gollum", 2, 1, 6);
hero.receiveDamage(goblin.attackPower);

console.log(`Puntos de vida: ${hero.hitPoints}`);   // Puntos de vida: 9
console.log(`Sigue con vida nuestro héore? ${hero.isAlive()}`); // true

// Ahora el heroe va a atacar al goblin
goblin.receiveDamage(hero.attackPower);
console.log(`Sigue con vida el goblin? ${goblin.isAlive()}`); // false