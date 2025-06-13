/**
 * Mi propia estructura de datos 
 */

class LimitedSet {
    constructor(limit) {
        this.elements = [];
        this.limit = limit;
    }

    add(elem) {
        if (this.elements.length < this.limit) {
            this.elements.push(elem)
        }
    }

    values() {
        return [...this.elements];
    }

    size() {
        return this.elements.length;
    }

    removeElement(elem) {
        const i = this.elements.indexOf(elem);
        if (i !== -1){
            this.elements.splice(i, 1)
        }
    }
}

const l = new LimitedSet(3);
console.log(l.size()); // 0
l.add("a");
l.add("b");
l.add("c");
l.add("d"); // Ignorado
console.log(l.size()); // 3
console.log(l.values()); // ["a", "b", "c"]
l.removeElement("b");
console.log(l.values()); // ["a", "c"]
l.add("gato");
console.log(l.values()); // ["a", "c", "gato"]