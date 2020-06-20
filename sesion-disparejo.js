var computerOption = getDecision()

function juegoDisparejo() {
  // Math.random()
  var randomNumber = Math.random() // 0.01 - 0.99
  if (randomNumber < 0.5) {
    return 'arriba'
  } else {
    return 'abajo'
  }
}

var computerOption = juegoDisparejo()
