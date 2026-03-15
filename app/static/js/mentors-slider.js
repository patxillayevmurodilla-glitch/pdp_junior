;(function () {
  var track = document.querySelector('[data-mentors-track]')
  var inner = document.querySelector('[data-mentors-inner]')
  if (!track || !inner) return

  var prev = document.querySelector('.mentors-prev')
  var next = document.querySelector('.mentors-next')
  var index = 0

  function getGap() {
    var style = window.getComputedStyle(inner)
    return parseFloat(style.gap || style.columnGap || '0') || 0
  }

  function getStep() {
    var card = inner.querySelector('.mentor-card')
    if (!card) return 320
    return card.getBoundingClientRect().width + getGap()
  }

  function maxIndex() {
    var step = getStep()
    if (!step) return 0
    var maxTranslate = Math.max(0, inner.scrollWidth - track.clientWidth)
    return Math.max(0, Math.round(maxTranslate / step))
  }

  function apply() {
    var step = getStep()
    var maxI = maxIndex()

    if (index < 0) index = 0
    if (index > maxI) index = maxI

    inner.style.transform = 'translateX(' + -index * step + 'px)'

    if (prev) prev.disabled = index === 0
    if (next) next.disabled = index === maxI
  }

  if (prev) {
    prev.addEventListener('click', function () {
      index -= 1
      apply()
    })
  }

  if (next) {
    next.addEventListener('click', function () {
      index += 1
      apply()
    })
  }

  window.addEventListener('resize', apply)

  // initial
  apply()
})()