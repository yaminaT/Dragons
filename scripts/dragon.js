let z=10;
console.log(z);
let test = document.querySelector(".test")
test.addEventListener(
  'click',
  function() {
    console.log("arrete d'appuyer")
  }
)
let propulsion = document.querySelector(".propulsion")
let countdown = document.querySelector('.nombres')
let rocket = document.querySelector(".fusee")
let number = 10

propulsion.addEventListener(
  'click',
  function () {
    setInterval(decollage, 1000);
  }, false);

  function decollage() {
    if(number > 0){
        countdown.innerHTML = (number -= 1)
    } else {
      countdown.innerHTML = 0
      rocket.style.transform ="translateY(-1500px)"
      rocket.style.transition ="all 15s"
    }
  }
