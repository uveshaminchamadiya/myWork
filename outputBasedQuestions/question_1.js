function outer() {
  let outerVar = "I am from outer function!";

  function inner() {
    let innerVar = "I am from inner function!";
    console.log(outerVar);
    console.log(innerVar);
  }

  return inner;
}

const myClosure = outer();
myClosure();
