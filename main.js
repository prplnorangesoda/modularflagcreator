let toggle = document.querySelector("#toggle23");
if (!toggle) throw new Error("#toggle23 undefined");
let toggleon = false;

let simpletoggle = document.querySelector("#simpletoggle");
if(!simpletoggle) throw new Error("#simpletoggle undefined")
let simpletoggleon = false;

let queerButtonSelected = null;

let queerbuttons = document.querySelectorAll(".flagbutton.queer")
queerbuttons.forEach(button => {
  button.addEventListener("mousedown", loadImage1)
})

let typebuttons = document.querySelectorAll(".flagbutton.type")
typebuttons.forEach(button => {
  button.addEventListener("mousedown", loadImage2)
})

let image1Loaded = false;
let image2Loaded = false;

let queerArr = ["a", "bi", "demi", "fluid",
"flux", "homo", "inter", "pan", "poly", "queer", "trans"]
let queerImageSrcs = [
"flagmods/flagqueermod/a.png",
"flagmods/flagqueermod/bi.png",
"flagmods/flagqueermod/demi.png",
"flagmods/flagqueermod/fluid.png",
"flagmods/flagqueermod/flux.png",
"flagmods/flagqueermod/homo.png",
"flagmods/flagqueermod/inter.png",
"flagmods/flagqueermod/pan.png",
"flagmods/flagqueermod/poly.png",
"flagmods/flagqueermod/queer.png",
"flagmods/flagqueermod/trans.png",
]

let typeArr = ["sexual", "romantic", "gender",
"gamous", "sex"]
let typeImageSrcs = [
"flagmods/flagtypemod/sexual.png",
"flagmods/flagtypemod/romantic.png",
"flagmods/flagtypemod/gender.png",
"flagmods/flagtypemod/gamous.png",
"flagmods/flagtypemod/sex.png",
]

toggle.addEventListener("mousedown", ev => {
  if(ev.button == "0") {
    toggle.classList.toggle("toggleoff");
    if(toggleon) {
      toggleon = false;
      toggle.innerHTML = "2 color mode";
    }
    else if (!toggleon) {
      toggleon = true;
      toggle.innerHTML = "3 color mode";
    }
  }
})
simpletoggle.addEventListener("mousedown", ev => {
  if(ev.button == "0") {
    simpletoggle.classList.toggle("toggleoff")
    if(simpletoggleon) {
      simpletoggleon = false;
      simpletoggle.innerHTML = "simple flag mode"
    }
    else if (!simpletoggleon) {
      simpletoggleon = true;
      simpletoggle.innerHTML = "complex flag mode"
    }
  }
})

let canvas = document.querySelector("#dynimage");
let ctx = canvas.getContext("2d");

let image1 = new Image();
let image2 = new Image();

/**
 * 
 * @param {MouseEvent} event 
 */
function loadImage1(event) {
  let index = queerArr.indexOf(event.target.id)
  image1.src = queerImageSrcs[index]
  image1.onload = () => {
    image1Loaded = true;
    ctx.drawImage(image1, 0, 0);
  };
}

function loadImage2(event) {
  let index = typeArr.indexOf(event.target.id)
  image2.src = typeImageSrcs[index]
  image2.onload = () => {
    image2Loaded = true;
    ctx.drawImage(image2, 0, 320)
  }
}






