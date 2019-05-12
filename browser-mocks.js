//browserMocks.js
var execCommandMock = function() {};

Object.defineProperty(document, 'execCommand', {
  value: execCommandMock
});
