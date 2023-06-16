const grade = prompt("Enter student Grade?"); //prompts the user to enter the student grade
function studentGrade(grade) {
  //declares a function SutdentGrade that accepts a single parameter call grade
  if (grade >= 0 && grade <= 100) {
    //checks if the grade falls in the appropriate rangd, between 0 and 100, to prevent users to inter a negative number or a number that is greater thean 100
    switch (
      true //allows us to evaluate the case statements based on their truthness, enabling us to perform a comparison based on boolean expression
    ) {
      case grade > 79 && grade <= 100: // this case cheks if the grade is greater than 79 and lesser or equall to 100
        console.log("Grade: A"); //if the case above is true, print "GRADE:A"
        break;

      case grade >= 60 && grade <= 79: // this case cheks if the grade is greater than or equalls to 60 and lesser or equall to 79
        console.log("Grade: B"); //if the case above is true, print "GRADE:B"
        break;

      case grade >= 49 && grade <= 59: // this case cheks if the grade is greater than or equalls to 49 and lesser or equall to 59
        console.log("Grade: C"); //if the case above is true, print "GRADE:C"
        break;

      case grade >= 40 && grade < 49: // this case cheks if the grade is greater than or equalls to 40 and lesser than 49
        console.log("Grade: D"); //if the case above is true, print "GRADE:D"
        break;
      default: //default to the below, iff all the cases abve area false and the grade does not fall in any of the ranges abve
        console.log("Grade: E"); //print this to the console
    }
  } else {
    //this line follows our firs if block, if the user enters any number below 0 and above 100
    console.log("Enter a valid Grade!!!"); //this line will be printed to the console
  }
}

studentGrade(grade); //invoking the function studentGrade and passing the grade variable the the user inputed

/****************************************** */
