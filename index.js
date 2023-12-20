let numScor = 9
const element3 = document.querySelectorAll(".element");
let rbg = document.getElementById("rbg");
let score = document.getElementById("score");


const element4 = document.getElementById ("element4")
const element5 = document.getElementById ("element5")
const element6 = document.getElementById ("element6")
const element7 = document.getElementById ("element7")
const element8 = document.getElementById ("element8")
const element9 = document.getElementById ("element9")

const esyBtn = document.getElementById("esy-btn");
const medimumBtn = document.getElementById("medium-btn");
const hardBtn = document.getElementById("hard-btn");
const resetBtn = document.getElementById("reset-btn");
const swapBtn = document.getElementById("swap-btn");

let winEsy = 0
let momxmareblis = 0
let tabActiviti = ""

const rgbNumber = () => {
  const number = Math.floor(Math.random() * 256) + 1;
  return number;
};

const rgbGenerator = () => {
  const r = rgbNumber();
  const g = rgbNumber();
  const b = rgbNumber();
  const rgbFinalCode = "rgb(" + r +", " + g + ", " + b +")"

  return rgbFinalCode;
};

let rgbCodeGen = rgbGenerator();



const backgroundColorGenerator = (color) => {
for (let i = 0; i < element3.length; i++) {
    element3[i].style.background = color;
}
}



const ColorRbgNumberGenerator = (num) => {
  let rgbCode = [];
  for (let i = 0; i < num; i++) {
    rgbCode.push(rgbGenerator())
  }
  return rgbCode;
}

let colors = ColorRbgNumberGenerator(numScor);



const whinLogica = () => {
let random = Math.floor(Math.random() * colors.length)
return colors[random];
}


const tabColor = ( tab1 , tab2 , tab3 , tab4 , tab5 ) => {
  tab1.classList.add("tabcolor");
  tab2.classList.remove("tabcolor");
  tab3.classList.remove("tabcolor");
   tab4.classList.remove("tabcolor");
   tab5.classList.remove("tabcolor");
}

let indexEmement1 = whinLogica();


const elementGeneratorColor = (number) => {
   numScor = number
   colors = ColorRbgNumberGenerator(numScor)
   indexEmement1 =  whinLogica()
   rbg.textContent = indexEmement1
   for(let i = 0; i < number; i++) {
    element3[i].style.backgroundColor = colors[i];
} }


const transparent = ( color1 , color2 , color3) => {
  color1.style.backgroundColor = "transparent"
  color2.style.backgroundColor = "transparent"
  color3.style.backgroundColor = "transparent"
}


esyBtn.addEventListener("click", () => {
  tabActiviti = "activit"
  winEsy = 5
   tabColor(esyBtn , medimumBtn, hardBtn , resetBtn, swapBtn)
  
 elementGeneratorColor(3)

    transparent(element4 , element5, element6)
    transparent(element7 , element8, element9)

});

medimumBtn.addEventListener("click", () => {
  tabActiviti = "activit"
  winEsy = 10
   tabColor( medimumBtn , hardBtn , esyBtn , swapBtn , resetBtn)
  elementGeneratorColor(6)
  transparent(element7 , element8, element9)
 });


 hardBtn.addEventListener("click", () => {
  tabActiviti = "activit"
  winEsy = 15
   tabColor( hardBtn , esyBtn, resetBtn , swapBtn , medimumBtn)
    elementGeneratorColor(9)
 });

 swapBtn.addEventListener("click", () => {
   tabColor( swapBtn , esyBtn, resetBtn , hardBtn , medimumBtn)
   for(let i = 0; i < element3.length; i++) {
    element3[i].style.backgroundColor = "transparent"; }
 });


 resetBtn.addEventListener("click", () => {
   tabColor( resetBtn , esyBtn, swapBtn , hardBtn , medimumBtn)
   momxmareblis = 0
   score.innerText = "Score : " + momxmareblis
   for(let i = 0; i < element3.length; i++) {
    element3[i].style.backgroundColor = "transparent"; }
 });


 rbg.textContent = indexEmement1;

 const winFunction = () => {
  if (winEsy === 5 ) {
    let esy1 = momxmareblis += 5
    score.innerText = "Score : " + esy1
} else if (winEsy === 10) {
  let medium1 = momxmareblis += 10
  score.innerText = "Score : " + medium1
}
else if (winEsy === 15) {
  let Hard1 = momxmareblis += 15
  score.innerText = "Score : " + Hard1
}
for(let i = 0; i < element3.length; i++) {
  element3[i].style.backgroundColor = "transparent"; }
}

const lusserFunction = () => {
  let luser1 = momxmareblis -= 5
  score.innerText = "Score : " + luser1
  for(let i = 0; i < element3.length; i++) {
    element3[i].style.backgroundColor = "red"; }
}


 for(let i = 0; i < colors.length; i++) {
  element3[i].style.background = colors[i];
  element3[i].addEventListener("click", function() {
    var clickedColor = this.style.background;
    console.log(clickedColor , indexEmement1)
    if (element3[i].style.backgroundColor === "transparent") {
           alert("mxolod ferads shegidzlia daawve")
            return
        }
    if (element3[i].style.backgroundColor === "red") {
        alert("airchie leveli tamashis gagrdzelebistvis")
        return
      }
    if ( tabActiviti != "activit") {
      alert("airchie sirtulis done")
      return
    }
    if (clickedColor === indexEmement1) {
      alert("WINNN !!!")
      winFunction()
    }else{
      alert("LUSSER")
      lusserFunction()
    }
  })
}