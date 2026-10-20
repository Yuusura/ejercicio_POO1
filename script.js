//1
class Persona { // Crear clase
    constructor(nombre, edad, genero) { // Propiedades que se van a construir
        this.nombre = nombre // "this." añade nuevas propiedades a "Persona"
        this.edad = edad
        this.genero = genero
    }
    obtDetalles() { // Método
        console.log(`${this.nombre}, ${this.edad}, ${this.genero}`) // Instrucción
    }
}

//2
class Estudiante extends Persona { // "extends" hereda tanto las propiedades como los métodos de la clase "Persona"
    constructor(nombre, edad, genero, curso, grupo) { // Todas las propiedades que van a construirse
        super(nombre, edad, genero) // Llama al constructor del padre
        this.curso = curso // Se añaden las nuevas propiedades de "Estudiante"
        this.grupo = grupo
    }
    registrar() {
        console.log(`${this.nombre}, ${this.edad}, ${this.genero}, ${this.curso}, ${this.grupo}`);
        
    }
}

//3
class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel) {
        super(nombre, edad, genero) // Propiedades comunes con el padre
        this.asignatura = asignatura // Nuevas propiedades concretas de la clase "Profesor"
        this.nivel = nivel
        }
    asignar() {
        console.log(`${this.nombre}, ${this.edad}, ${this.genero}, ${this.asignatura}, ${this.nivel}`);
    }
    
}

//4
let personaPrueba = new Persona("Ana", 30, "Mujer")

console.log(personaPrueba);
personaPrueba.obtDetalles()


let estudiantePrueba = new Estudiante("Daniel", 13, "Hombre", "1ºESO", "A")

console.log(estudiantePrueba);
estudiantePrueba.obtDetalles()
estudiantePrueba.registrar()


let profesorPrueba = new Profesor("Elena", 60, "Mujer", "Matemáticas", "BACH")

console.log(profesorPrueba);
profesorPrueba.obtDetalles()
profesorPrueba.asignar()
