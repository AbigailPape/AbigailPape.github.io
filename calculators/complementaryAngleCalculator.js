function complementaryAngleCalculator() {
  var origAngle= prompt("What angle measure, in degrees, would you like to find the complement of?\n\nInput Format: A Number\nExamples: 54, 8, 73.96");
  if (origAngle != null) {
    if (origAngle >= 0 && origAngle <= 90) {
      var complement = 90 - origAngle;
      alert("To find the complement of " + origAngle + " degree(s), we must subtract the angle's measure from 90 degrees.\n\nWork:\n90 - " + origAngle + " = " + complement + "\n\nTo see the answer, click \'OK\'.");
      alert("The complement of " + origAngle + " degree(s) is " + complement + " degree(s).");
    } else {
      alert("\'" + origAngle + "\'" + " is not valid input.\nBe sure your input is a number (in degrees) and is between or equal to 0 and/or 90. Otherwise, its complement does not exist.");
    }
  }
};
