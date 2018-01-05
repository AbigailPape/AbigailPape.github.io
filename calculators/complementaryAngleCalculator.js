function complementaryAngleCalculator() {
  var origAngle= prompt("What angle measure, in degrees, would you like to find the complement of?\nInput Format: A Number\nExample: 54");
  if (origAngle != null) {
    if (origAngle >= 0 && origAngle <= 90) {
      alert("Under construction");
    } else {
      alert("\'" + origAngle + "\'" + " is not valid input.\nBe sure your input is a number (in degrees) and is between or equal to 0 and/or 90. Otherwise, its complement does not exist.");
    }
  }
};
