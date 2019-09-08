
export function roadTrainTowing(roadTrain){
  roadTrain.frontTowing = {roadTrain};
  roadTrain.frontTowing.constraint = undefined;
  roadTrain.frontTowing.addFunction(linkChassisPosition);
  roadTrain.frontTowing.addFunction(setConstraint)


}

function linkChassisPosition({towedRoadTrain}){
  roadTrain.addLink(towedRoadTrain.chassis.body , roadTrain.frontTowing.otherBody);
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.frontTowing.thisBody);


}

function setConstraint({thisTowingPosition,otherTowingPosition,thisBody ,otherBody}){
  if (setConstraint) return true
  let thisPos = new CANNON.Vec3(thisTowingPosition.x,thisTowingPosition.y,thisTowingPosition.z);
  let otherPos = new CANNON.Vec3(otherTowingPosition.x,otherTowingPosition.y,otherTowingPosition.z);

  constraint = new CANNON.PointToPointConstraint(thisBody,thisPos,otherBody,otherPos );
  roadTrain.cannon.addConstraint(constraint);
  return true;
}