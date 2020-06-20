/**
 * Buenas practicas:
 * Usar camelCase
 * Nombrar variables y funciones en inglés
 */

/**
 * Tipos de datos primitivos
 */
var myString = 'Hello'
var myNumber = 10
var myBoolean = true
var myUndefinedValue = undefined
var myNullValue = null


/**
 * Tipos de datos no primitivos
 */

// Date
var myDate = new Date()
console.log(myDate) // 2020-06-20T15:30:54.715Z

// Arreglo
var myArray = [1, 2, 3, 'Hello', true, null]; // 6 elementos
console.log(myArray[0]) // 1
console.log(myArray[4]) // true
console.log(myArray.length) // 6
console.log(myArray) // [1, 2, 3, 'Hello', true, null]

// Objeto
// { name: 'Juan', lastName: 'Perez' }
var myId = {
  name: 'Juan',
  lastName: 'Perez',
  age: 20,
  sibling: {
    name: 'Ana',
    lastName: 'Perez',
    age: 15
  }
}; 
console.log(myId.name) // Juan
console.log(myId.age) // 20
console.log(myId.sibling.name) // Ana

// Función
// 1. Declarar funcion
function myFunction() {
  var myVar = 'Function'
  console.log('Hello from my function')
}

// 2. Mandar a llamar mi funcion n veces
myFunction()
myFunction()
myFunction()