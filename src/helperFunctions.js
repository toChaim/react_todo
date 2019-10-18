function deepCopy(obj){
  if(typeof(obj)!=='object' || obj === null){ return obj; }
  let res = Array.isArray(obj)? []:{};
  for(let k in obj){ res[k] = deepCopy(obj[k]); }
  return res;
}

export {deepCopy};