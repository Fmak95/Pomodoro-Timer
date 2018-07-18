export function padNum(num){
  return (num < 10 ? '0' : '') + num;
}

export function countDown(obj){
  if (obj.seconds > 0){
    obj.seconds--;
  }
  else if (obj.minutes > 0 && obj.seconds === 0){
    obj.minutes--;
    obj.seconds = 59;
  }
  else{
    obj.minutes = 0;
    obj.seconds = 0;
  }
  return obj;
}