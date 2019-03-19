module.exports = function check(str, bracketsConfig) {
  // your solution
  let vrMas=[];
  let result;
  let prohod=bracketsConfig.length; 
  for (let i=1; i<=str.length;i++){
    let openBracket=str[i-1];
    for(let j=0;j<prohod;j++){
      if(openBracket==bracketsConfig[j][0]&&openBracket!=bracketsConfig[j][1]){
        vrMas.unshift(openBracket);
        }if(openBracket==bracketsConfig[j][0]&&openBracket==bracketsConfig[j][1]){
          if(openBracket!=vrMas[0]){
            vrMas.unshift(openBracket);
            }else{
              vrMas.shift(); 
            }
          }else if (openBracket==bracketsConfig[j][1]){
            openBracket=bracketsConfig[j][0];
            if(openBracket==vrMas[0]){
              vrMas.shift();
            }else{
              vrMas.unshift(0);
            }
          }
        }
    }
  if (vrMas.length==0){
    result=true;
    }else{
      result=false;
  }
  return result;
}
