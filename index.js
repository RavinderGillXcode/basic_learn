let num = document.getElementById("num")
const inc = document.getElementById("inc")
const dec = document.getElementById("dec")

let number = 0;


inc.addEventListener("click",()=>{
  let result = number++;
   num.innerHTML = result
})

dec.addEventListener("click",()=>{
  let result = number--;
   num.innerHTML = result
})



