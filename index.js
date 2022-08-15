let add = function(num1=5,num2=6){
  return num1 + num2;
}

let subtract = function(num1=7,num2=2){
  return num1-num2;
}
  let multiply = function(num1=15,num2=3){
   return num1*num2; 
  }

  let divide = function(num1=60,num2=5){
    return num1/num2;
  }

  function increment(num=7){
    num++;
    return num;
  }
  function decrement(num=10){
    num--;
    return num;
  }
  function makeInt(num=10){
    return num;
  }
  function makeInt(string){
    return parseInt(string,10)
  }
  function preserveDecimal(n){
    return parseFloat(n)
    }