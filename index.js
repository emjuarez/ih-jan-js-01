// GENERAR COMENTARIO "//" DOBLE DIAGONAL

// GENERAR MENSAJES A LA TERMINAL DEL CLIENTE (GOOGLE CHROME O FIREFOX O OPERA O SAFARI)
console.log("Hola mundo desde JavaScript")


// VARIABLES
// PRIMITIVOS

// 1. STRING - Texto plano
// var - JAVASCRIPT TRADICIONAL (ES5)
var nombre =  "Hola soy Mike Nieva"
console.log(nombre)

// let
// Forma de crear variables pero el cual su contenido puede ser mutable. Puede cambiar.

let saludo = "Hola, cómo están?"
saludo = "How are you?"
console.log(saludo)


// const
// Forma de crear variables pero el contenido va a ser estático y fijo. No es mutable.
//const iva = 16
//iva = 10

//console.log(iva)

/**
 * REGLA DE VIDA EN JS
 * Siempre usar const a menos que necesites mutarlo.
 */

// 2. NUMBER -
const age = 24
console.log(age)

// 3. Bollean - TRUE OR FALSE
const isRaining = false
console.log("Esta lloviendo?", isRaining)

// 4. undefined - no está definido pero lo estará

let price
console.log("Precio indefinido", price)





// NO PRIMITIVOS

const año = 2022
console.log(año)

const name = "Emanuel Juárez"
console.log(name)

const vasoLleno = false
console.log("El vaso esta lleno?", vasoLleno)

let gasto
console.log("El gasto total fue de:",  gasto)

const numeroDePerros = null
console.log(numeroDePerros)

//NO PRIMITIVOS
// OBJETOS
const comida = {
    desayuno: "Hot Cakes",
    comida: "Chilaquiles",
    cena: "Quesadillas"
}

