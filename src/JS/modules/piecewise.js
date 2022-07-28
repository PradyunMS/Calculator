import { getLimit } from "./limitnew.js";

let userfunction = document.querySelector("#userfunction");
let LWB = document.querySelector("#lower");
let UPB = document.querySelector("#upper");
let button = document.querySelector("#addexp");
let plus = document.querySelector("#anotherone");
// user will input expressions and their corresponding ranges. Ex: x**2   -2 < x < 2
let expressions = ["x**2", "x**x"]; // [ "x**2", "x+x", "x**x"]
let LWBs = ["2", "17"]; //[-2, -1 , 0]
let UPBs = ["8", "25"]; //[2 , 4, 6]

function addtoexpressions(func) {
  expressions.push(func);
}

function addtoUPBs(upper) {
  UPBs.push(upper);
}

function addtoLWBs(lower) {
  LWBs.push(lower);
}

button.addEventListener("click", () => {
  let userFunctionValue = userfunction.value;
  let LWBvalue = LWB.value;
  let UPBvalue = UPB.value;
  addtoexpressions(userFunctionValue);
  addtoUPBs(UPBvalue);
  addtoLWBs(LWBvalue);
  document.write(`${expressions} ${UPBs} ${LWBs}`);
});

plus.addEventListener("click", () => {
  LWB.setAttribute("min", UPB.value);
  userfunction.innerHTML = "";
  LWB.innerHTML = "";
  UPB.innerHTML = "";
  userfunction.value = "";
  LWB.value = "";
  UPB.value = "";
});

console.log(getLimit(expressions, UPBs, LWBs, 18));
