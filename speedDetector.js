//SPEED DTECTOR
const currentSpeed = prompt("Enter the drivers current speed?");
//declare a variable 'currentSpeed' to be assigned to the value the user enters when prompted

function speedDetector(currentSpeed) {//declared a function that takes in the 'currenSpeed' as it's parameter
  let speedLimit = 70; //declare a variable speedLimit and give it a value of 70
  let demeritPoints = 5;//declare a variable demeritPoint and give it a value of 5
  let speedPoints, Points; //decalre two variables with those that has no value yet
  if (currentSpeed <= speedLimit) {//check if  the 'currentSpeed is less than or equals speedLimit'
    console.log("OK");//print 'OK' to the console if the condition above is true
  } else if (currentSpeed > speedLimit) {//if the previous condition is false, check if the current speed is greater than the speedLimit
    speedPoints = (currentSpeed - speedLimit) / demeritPoints;//'speedPoint' the variable we declared on line 8, is assigned to a value from the result of 
    //subtracting the currentSpeed form the speedLimit and then diving the result by 5
    Points = Math.floor(speedPoints);//we assign a the value of flooring (rounding the number dow to the neares integer), so we dont have any decimal points

    if (Points > 12) {//check if the points variabl's value is greater tahn 12
      console.log("Licience Suspended");//print ""Licience Suspended" to the console
    } else {//else, if the condition above is false and it is lesser than 12
      console.log("points: " + Points);//print the value of points variable to the console
    }
  }
}

speedDetector(currentSpeed);//invoke the  speedDetector function and pass the 'currentSpeed' variable


