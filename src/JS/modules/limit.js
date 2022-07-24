function resultDisplay(text) {
  document.querySelector("#result").innerText = text;
}

/*
Calculate the limit of a function as the variable ‘x’ approaches a value
*/

function getLimit(userFunction, value) {
  // Value that function tends to from the right
  let valueRight;

  // Value that function tends to from the left
  let valueLeft;

  // Very small number to see if value is the same from both sides
  let delta = 10 ** -10000000000000;

  // Distance between the 2 points
  let pointDistance;

  // Value to the left of the limit
  let x = value + delta;

  valueRight = eval(userFunction);

  // Value to the right of the limit
  x = value - delta;

  valueLeft = eval(userFunction);

  pointDistance = Math.abs(valueRight - valueLeft);

  //  Infinity case
  if (isNaN(pointDistance)) {
    return valueRight;
  }

  if (Math.abs(valueRight - valueLeft) <= 0.00000000001) {
    return valueRight;
  }
}

document.querySelector("#calculateBtn").addEventListener("click", () => {
  let functionInput = document.querySelector("#functionInput").value;
  let valueInput = document.querySelector("#valueInput").innerText;
  console.log(typeof valueInput);
  if (isNaN(parseFloat(valueInput))) {
    valueInput = valueInput.toLowerCase();
  }

  if (valueInput == "infinite" || valueInput == "infinity") {
    valueInput = Infinity;
  } else if (valueInput == "-infinite" || valueInput == "-infinity") {
    valueInput = -Infinity;
  } else {
    valueInput = parseFloat(valueInput);
  }

  resultDisplay(getLimit(functionInput, valueInput));
});

