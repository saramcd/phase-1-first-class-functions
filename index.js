const receivesAFunction = (callbackFunction) => {
  const result = callbackFunction();
  return result;
};

const returnsANamedFunction = () => {
  return function sayHi(word) {
    console.log(word);
  };
};

const returnsAnAnonymousFunction = () => {
  return function (a) {
    return a * 3;
  };
};
