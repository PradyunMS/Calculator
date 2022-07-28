function getLimit(expressions, UPBs, LWBs, value) {
  let x;

  if (value == -Infinity) {
    if (LWBs[0] == -Infinity) {
      x = -Infinity;
      return eval(expressions[0]);
    }
  }

  if (value == Infinity) {
    if (UPBs[UPBs.length] == Infinity) {
      x = Infinity;
      return eval(expressions[UPBs.length]);
    }
  }

  let currentexp;

  for (let i = 0; i <= expressions.length; i++) {
    if (LWBs[i] <= value && UPBs[i] >= value) {
      currentexp = i;
    }
  }

  if (value != LWBs[currentexp] && value != UPBs[currentexp]) {
    x = value;
    return eval(expressions[currentexp]);
  } else {
    if (value == LWBs[currentexp]) {
    }
  }
}

export { getLimit };
