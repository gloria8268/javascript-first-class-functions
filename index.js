function receivesAFunction(spy) {
  spy()
}

function returnsANamedFunction() {
  function myFunction() {
  }
  return myFunction
}

function returnsAnAnonymousFunction() {
  return function () {
  }
}

