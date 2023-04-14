let toggle2 = document.querySelector("#toggle2");
if (!toggle2) throw new Error("#toggle2 undefined");
let color3mode = false;

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
    if (color3mode) {
      toggle3.classList.remove("on");
      toggle2.classList.add("on");
      color3mode = false;
      switchTo2ColorMode();
    }
    
  }
})

toggle3.addEventListener("mousedown", ev => {
  if(ev.button == "0") {
    if (!color3mode) {
      toggle2.classList.remove("on");
      toggle3.classList.add("on")
      color3mode = true;
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

let image1mode2 = null;
let image2mode2 = null;

let image1mode3 = null;
let image2mode3 = null;
let image3mode3 = null;

/**
 * @type {HTMLElement?}
 */
let image1mode2Selected = null;
let image2mode2Selected = null;

let image1mode3Selected = null;
let image2mode3Selected = null;
let image3mode3Selected = null;

/**
 * 
 * @param {MouseEvent} event 
 */
function loadImage1(event) {
  
  let index = queerArr.indexOf(event.target.id)
  image1.src = queerImageSrcs[index]
  image1.onload = () => {
    if (color3mode) {
      ctx.drawImage(image1, 0, 100, 450, 100);
      image1mode3 = image1
      if(image1mode3Selected)
        image1mode3Selected.classList.remove("clicked")
      image1mode3Selected = event.target
    }
    else {
      ctx.drawImage(image1, 0, 0, 450, 150);
      image1mode2 = image1
      if(image1mode2Selected){
        image1mode2Selected.classList.remove("clicked");
      }
      image1mode2Selected = event.target
    }
    event.target.classList.add("clicked")
  };
  
}

function loadImage2(event) {
  let index = typeArr.indexOf(event.target.id)
  image2.src = typeImageSrcs[index]
  image2.onload = () => {
    if (color3mode) {
      ctx.drawImage(image2, 0, 200, 450, 100)
      image2mode3 = image2
      if(image2mode3Selected)
        image2mode3Selected.classList.remove("clicked")
      image2mode3Selected = event.target
    }
    else {
      ctx.drawImage(image2, 0, 150, 450, 150)
      image2mode2 = image2
      if(image2mode2Selected) 
        image2mode2Selected.classList.remove("clicked")
      image2mode2Selected = event.target
    }
    event.target.classList.add("clicked")
  }
}

function loadImage3(event) {
  if (color3mode) {
    let index = modifierArr.indexOf(event.target.id)
    image3.src = modifierImageSrcs[index]
    image3.onload = () => {
      ctx.drawImage(image3, 0, 0, 450, 100)
    }
    image3mode3 = image3;
    if(image3mode3Selected)
      image3mode3Selected.classList.remove("clicked")
    image3mode3Selected = event.target
    event.target.classList.add("clicked")
  }
}

function switchTo3ColorMode() {
  ctx.fillRect(0, 0, 900, 600)

  if(image1mode3) ctx.drawImage(image1mode3, 0, 100, 450, 100)
  if(image2mode3) ctx.drawImage(image2mode3, 0, 200, 450, 100)
  if(image3mode3) ctx.drawImage(image3mode3, 0, 0, 450, 100)

  
  document.querySelectorAll(".flagbutton")
    .forEach(el => el.classList.remove("clicked"))

  if(image1mode3Selected) image1mode3Selected.classList.add("clicked")
  if(image2mode3Selected) image2mode3Selected.classList.add("clicked")
  if(image3mode3Selected) image3mode3Selected.classList.add("clicked")


  document.querySelectorAll(".modifier")
    .forEach(el => el.classList.remove("off"))
}

function switchTo2ColorMode() {
  ctx.fillRect(0, 0, 900, 600)

  if(image1mode2) ctx.drawImage(image1mode2, 0, 0, 450, 150)
  if(image2mode2) ctx.drawImage(image2mode2, 0, 150, 450, 150)

  document.querySelectorAll(".flagbutton")
    .forEach(el => el.classList.remove("clicked"))

  if(image1mode2Selected) image1mode2Selected.classList.add("clicked")
  if(image2mode2Selected) image2mode2Selected.classList.add("clicked")

  document.querySelectorAll(".modifier")
    .forEach(el => el.classList.add("off"))
}





