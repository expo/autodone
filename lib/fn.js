'use strict';

function autodone(asyncFn) {
  return (...args) => asyncFn(...args).done();
};

module.exports = autodone;
