//SPEED DTECTOR
const currentSpeed = prompt("Enter the drivers current speed?");
function speedDetector(currentSpeed) {
  let speedLimit = 70;
  let demeritPoints = 5;
  let speedPoints, Points;
  if (currentSpeed <= speedLimit) {
    console.log("OK");
  } else if (currentSpeed > speedLimit) {
    speedPoints = (currentSpeed - speedLimit) / demeritPoints;
    Points = Math.floor(speedPoints);

    if (Points > 12) {
      console.log("Licience Suspended");
    } else {
      console.log("points: " + Points);
    }
  }
}

speedDetector(currentSpeed);


