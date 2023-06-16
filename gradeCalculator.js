const grade = prompt("Enter student Grade?");
function studentGrade(grade) {
  if (grade >= 0 && grade <= 100) {
    switch (true) {
      case grade > 79 && grade <= 100:
        console.log("Grade: A");
        break;

      case grade >= 60 && grade <= 79:
        console.log("Grade: B");
        break;

      case grade >= 49 && grade <= 59:
        console.log("Grade: C");
        break;

      case grade >= 40 && grade < 49:
        console.log("Grade: D");
        break;
      default:
        console.log("Grade: E");
        break;
    }
  } else {
    console.log("Enter a valid Grade!!!");
  }
}

studentGrade(grade);

/****************************************** */
