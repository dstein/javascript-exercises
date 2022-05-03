const ftoc = function(temp) {
  let tempCelsius = (temp - 32) / 1.8;
  let parseTemp = tempCelsius.toFixed(1);

  return parseFloat(parseTemp);
};

const ctof = function(temp) {
  let tempFar = (temp * 1.8) + 32;
  let parseTemp = tempFar.toFixed(1);

  return parseFloat(parseTemp);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
