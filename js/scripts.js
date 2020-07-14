let scene = document.getElementById("scene")
let parallaxInstance = new Parallax(scene)

let selectedSpan;
let anim = document.getElementById("row")
let anim2 = document.getElementById("row2")
let anim3 = document.getElementById("row3")
let animRubberBand = function(event) {
  let target = event.target
  if (target.tagName != 'SPAN') return
  animate(target)
  setTimeout(() => {reanimate(target)}, 1000)
}
function animate(span) {
  selectedSpan = span
  selectedSpan.classList.add('letter-animated')
}
function reanimate(span) {
  selectedSpan = span
  selectedSpan.classList.remove('letter-animated')
}
anim.onmouseover = animRubberBand
anim2.onmouseover = animRubberBand
anim3.onmouseover = animRubberBand