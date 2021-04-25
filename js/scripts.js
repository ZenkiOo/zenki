let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

let selectedSpan,
  anim = document.getElementById("row"),
  anim2 = document.getElementById("row2"),
  anim3 = document.getElementById("row3");

let animRubberBand = function (event) {
  let target = event.target;
  if (target.tagName != "SPAN") return;
  addClass(target);
  setTimeout(() => {
    robClass(target);
  }, 1000);
};
function addClass(span) {
  selectedSpan = span;
  selectedSpan.classList.add("letter-animated");
}
function robClass(span) {
  selectedSpan = span;
  selectedSpan.classList.remove("letter-animated");
}
anim.onmouseover = animRubberBand;
anim2.onmouseover = animRubberBand;
anim3.onmouseover = animRubberBand;
