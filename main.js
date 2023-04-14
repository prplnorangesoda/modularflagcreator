let toggle2 = document.querySelector("#toggle2");
if (!toggle2) throw new Error("#toggle2 undefined");
let toggleon = false;

let toggle3 = document.querySelector("#toggle3");
if (!toggle3) throw new Error("#toggle3 undefined");

let simpletoggle = document.querySelector("#simpletoggle");
if (!simpletoggle) throw new Error("#simpletoggle undefined")
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

let modifierbuttons = document.querySelectorAll(".flagbutton.modifier")
modifierbuttons.forEach(button => {
  button.addEventListener("mousedown", loadImage3)
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

let modifierArr = ["masculine", "feminine"]
let modifierImageSrcs = [
  "flagmods/flagmodifiermod/masculine.png",
  "flagmods/flagmodifiermod/feminine.png",
]

toggle2.addEventListener("mousedown", ev => {
  if (ev.button == "0") {
    if (toggleon) {
      toggle3.classList.remove("on");
      toggle2.classList.add("on");
      toggleon = false;
      switchTo2ColorMode();
    }
    
  }
})

toggle3.addEventListener("mousedown", ev => {
  if(ev.button == "0") {
    if (!toggleon) {
      toggle2.classList.remove("on");
      toggle3.classList.add("on")
      toggleon = true;
      switchTo3ColorMode();
    }
  }
})

let canvas = document.querySelector("#dynimage");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF"
ctx.fillRect(0, 0, 900, 600)


let image1 = new Image();
let image2 = new Image();
let image3 = new Image();

/**
 * 
 * @param {MouseEvent} event 
 */
function loadImage1(event) {
  let index = queerArr.indexOf(event.target.id)
  image1.src = queerImageSrcs[index]
  image1.onload = () => {
    if (toggleon) {
      ctx.drawImage(image1, 0, 200, 900, 200);
    }
    else {
      ctx.drawImage(image1, 0, 0, 900, 300);
    }
  };
}

function loadImage2(event) {
  let index = typeArr.indexOf(event.target.id)
  image2.src = typeImageSrcs[index]
  image2.onload = () => {
    if (toggleon) {
      ctx.drawImage(image2, 0, 400, 900, 200)
    }
    else {
      ctx.drawImage(image2, 0, 300)
    }
  }
}

function loadImage3(event) {
  if (toggleon) {
    let index = modifierArr.indexOf(event.target.id)
    image3.src = modifierImageSrcs[index]
    image3.onload = () => {
      ctx.drawImage(image3, 0, 0, 900, 200)
    }
  }
}

function switchTo3ColorMode() {
  ctx.fillRect(0, 0, 900, 600)
  document.querySelectorAll(".modifier").forEach(el => el.classList.remove("off"))
}

function switchTo2ColorMode() {
  ctx.fillRect(0, 0, 900, 600)
  document.querySelectorAll(".modifier").forEach(el => el.classList.add("off"))
}





