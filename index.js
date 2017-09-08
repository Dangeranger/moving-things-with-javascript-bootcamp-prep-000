document.addEventListener('keydown', function (e) {
  if (e.which === 37) {
    moveDodgerLeft()
    return;
  } else if (e.which === 39) {
    moveDodgerRight()
    return;
  }
})

const dodger = document.getElementById('dodger')

function moveDodgerLeft() {
  var leftEdge = dodger.style.left.replace('px', '')
  var left = parseInt(leftEdge, 10)
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

function moveDodgerRight() {
  var leftEdge = dodger.style.left.replace('px', '')
  var left = parseInt(leftEdge, 10)
  if (left < 360) {
    dodger.style.left = `${left + 1}px`
  }
}
