/**
 * Lo ciclos (loops) mas utilizados son los ciclos: while y for
 */
//i++ => i = i + 1 


const myArray = [1, 'Hello', false, null, 350]

/**
 * Ciclos for
 */
// Mostrar en consola cada uno de los elementos del arreglo
for(var i = 0; i <= 4; i++) {
  console.log(myArray[i])
}

// Buscar el elemento Hello dentro del arreglo
for(var i = 0; i <= 4; i++) { // 0,1,2,3,4
  if (myArray[i] == 'Hello') {
    console.log('Lo encontro', i, myArray[i])
  }
}


/**
 * Ciclos while
 */
var i = 0 // Se asigna el valor inicial fuera del ciclo
while(i <= 4) {
  console.log(myArray[i])
  i++ // Se incrementa el indice dentro del ciclo
}

var x = 0
while(x <= 4) {
  if (myArray[x] == 'Hello') {
    console.log('Lo encontro', x, myArray[x])
  }
  x++
}
