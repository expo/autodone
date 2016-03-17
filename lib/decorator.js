'use strict';

function autodone(target, name, descriptor) {
  let asyncFunction = descriptor.value;
  descriptor.value = function(...args) {
    return asyncFunction.apply(this, args).done();
  };
  return descriptor;
}

module.exports = autodone;
