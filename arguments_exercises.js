// function sum(a,b,c,d,e){
// 
  // let sum = 0;
  // 
  // for(let i=0; i< arguments.length; i++){
  //   sum += arguments[i];
  // }
  // 
  // return sum;
// }

function sum(...args) {
  let sum = 0;
  
  for(let i=0; i< args.length; i++){
    sum += args[i];
  }
  
  return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind2 = function (ctx, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(ctx, bindArgs.concat(callArgs));
  };
};

Function.prototype.myBind1 = function(ctx){
  let fn = this;
  const bindArgs = Array.from(arguments).slice(1);
  
  function _boundFn() {
    const callArgs = Array.from(arguments);
    return fn.apply(ctx, bindArgs.concat(callArgs));
  }
};


function curriedSum(numArgs) {
  let numbers = [];
  return function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length === numArgs) {
      return numbers.reduce((acc, el) => acc + el);
    } else {
      return _curriedSum;
    }
  };
}

//...
Function.prototype.curry = function (numArgs) {
  let numbers = [];
  let fn = this;
  
  return function _curriedFn(number) {
    numbers.push(number);
    
    if (numbers.length === numArgs) {
      return fn(...args); // fn.apply(null, numbers)
    } else {
      return _curriedFn;
    }
  };
};

//Es6

Function.prototype.curry = function (numArgs) {
  let numbers = [];

  let _curriedFn = (number) => {
    numbers.push(number);
    
    if (numbers.length === numArgs) {
      return this(...args); 
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

