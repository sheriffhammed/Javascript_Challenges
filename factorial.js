const factorial = (num) => {
    
    for (let i = num-1; i >= 1; i--){
       num = num * i;
      //ans *= i;
    }
    return num;
  }
  console.log(factorial(6));