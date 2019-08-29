
export function startSnake(snake){

snake.addFunction(startWhenLoaded);
function startWhenLoaded({loadIndex}){
if (startWhenLoaded) return true;
  if (loadIndex.length=1){
    self.utils.start(self);
    return true;
  }else{
    return false;
  }
}
}