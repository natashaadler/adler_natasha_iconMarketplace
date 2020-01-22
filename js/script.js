//js DOCUMENT

(() => {
	console.log('Hello from Music Mania');

let btn = document.querySelector(".icon"),
    allSVGs = document.querySelectorAll(".icon");

function logSVG() {
  console.log(this.id);
}

function firstFunction() {
  btn.style.backgroundcolor = "blue";
}

btn.addEventListener("click" , "firstFunction");

allSVGs.forEach(item => item.addEventListener("click", logSVG))

});
