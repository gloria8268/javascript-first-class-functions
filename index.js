function receivesAFunction(spy) {
  spy()
}


function returnsANamedFunction() {
  return function () {
  }
}

var fn = returnsANamedFunction ()
fn()


function returnsAnAnonymousFunction() {
  return function () {
  }
}

var fn = returnsAnAnonymousFunction ()
fn()