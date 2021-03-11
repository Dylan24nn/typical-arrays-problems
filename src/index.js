
exports.min = function min (array) {
  if(!array || array.length == 0){
    return 0;
  }
  
  let y = array[0];
  for(let i = 1; i < array.length; i++) {
    if(array[i] < y) {
      y = array[i]
    } 
  }
  return y;
}

exports.max = function max (array) {
  if(!array || array.length == 0){
    return 0;
  }
    
  let y = array[0];
  for(let i = 1; i < array.length; i++) {
    if(array[i] > y) {
      y = array[i]
    } 
  }
  return y;
}


exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }
  let y = array[0];
  for(let i = 1; i < array.length; i++) {
      y += array[i]
      
    
  }
 
  return y/array.length;
}

