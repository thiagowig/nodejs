function Calculator () {};

Calculator.sum = function(numberOne, numberTwo) {
  return Calculator.sumWithSomeHelp(numberOne, numberTwo);
};

Calculator.subtract = function(numberOne, numberTwo) {
  return numberOne - numberTwo;
};

Calculator.returnThiago =  function() {
  return "Thiago";
};

Calculator.sumWithSomeHelp =  function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};
