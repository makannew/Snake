
export function roadTrainControls(roadTrain){
  roadTrain.turningSpeed = (Math.PI/4)/1.5; // rad/sec
  roadTrain.absMaxSteering = Math.PI/4;
  roadTrain.turningLeft = false;
  roadTrain.turningRight = false;
  roadTrain.drivingForward = true;
  roadTrain.addFunction(steering);

}

function steering({turningLeft , turningRight , actualInterval}){
  if(steering===undefined) return 0;
  if (!turningRight && !turningLeft) return steering;

  if (turningRight){
    let newSteering = steering + actualInterval * turningSpeed;
    if (newSteering>absMaxSteering){
      newSteering = absMaxSteering;
    }
    return newSteering;
  }

  if (turningLeft){
    let newSteering = steering - actualInterval * turningSpeed;
    if (newSteering<-absMaxSteering){
      newSteering = -absMaxSteering;
    }
    return newSteering;
  }
}