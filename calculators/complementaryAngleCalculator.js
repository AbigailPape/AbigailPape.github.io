function complementaryAngleCalculator() {
  var origAngle= prompt("What angle measure, in degrees, would you like to find the complement of?\nInput Format: A Number\nExample: 54");
  if (origAngle != null) {
    if (typeof origAngle == "number" /*&& origAngle >= 0 && origAngle <= 90*/) {
      alert("Under construction");
    } else {
      alert("\'" + origAngle + "\'" + " is not valid input.\nBe sure your input is just a number and is between or equal to 0&#176 and/or 90&#176. Otherwise, its complement does not exist.");
    }
  }
};
