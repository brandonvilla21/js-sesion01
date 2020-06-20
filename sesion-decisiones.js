// 1. Crear una funcion que nos permita decidir quien fue el ganador
// { var userName1 }
// { var userName2 }

function getDecision() {
  // Math.random()
  var randomNumber = Math.random() // 0.01 - 0.99
  if (randomNumber < 0.33) {
    return 'piedra'
  } else if (randomNumber < 0.66) {
    return 'tijeras'
  } else {
    return 'papel'
  }
}

function game(player1, player2) {
if (player1 == player2) { // piedra
  return 'Hay un empate'
}

if (player1 == 'piedra') { // Cuando player1 es piedra
  if (player2 == 'tijeras') { // tijeras
    return 'El jugador 1 ha ganado'
  } else {
    return 'El jugador 2 ha ganado'
  }
}

if (player1 == 'papel') {
  if (player2 == 'tijeras') { // tijeras
      return 'El jugador 1 ha perdido'
    } else {
      return 'El jugador 1 ha ganado'
    }
}
if (player1 == 'tijeras') {
  if (player2 == 'piedra') { // tijeras
      return 'El jugador 1 ha perdido'
    } else {
      return 'El jugador 1 ha ganado'
    }
}
}


var player2 = getDecision()
var player1 = getDecision()
console.log('Computador 1: ', player1)
console.log('Computador 2: ', player2)

var resultado = game(player1, player2)
console.log(resultado)



