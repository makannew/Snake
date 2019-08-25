
export function loadRoadTrainHead(roadTrain){
  
  roadTrain.wheels = [];
  roadTrain.wheelsBodies = [];

  roadTrain.suspensions = [];
  roadTrain.suspensionsBodies = [];

  roadTrain.addChassis = function(){addChassis(roadTrain)};
  roadTrain.addWheels = function(){addWheels(roadTrain)};
  roadTrain.addFunction(headBodiesLoaded);
}

function headBodiesLoaded({wheelsBodies,suspensionsBodies , addWheels , addChassis , chassisBody}){
  if (headBodiesLoaded) return true;
  for (let body of wheelsBodies){
    if(!body) return undefined;
  }
  for (let body of suspensionsBodies){
    if(!body) return undefined;
  }
  
  return true;
}
const addChassis = function(roadTrain){
  roadTrain.addLink(roadTrain.chassis.body , roadTrain.chassisBody);
  return true;
}

const addWheels = function(roadTrain){
  for (let i=0,len=roadTrain.wheels.length;i<len;++i){
    roadTrain.addLink(roadTrain.wheels[i].body , roadTrain.wheelsBodies[i]);
    roadTrain.addLink(roadTrain.suspensions[i].body , roadTrain.suspensionsBodies[i]);

  }
  return true;
}