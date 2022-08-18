// CommonJs, every file is module (by default)
// Modules (same concept as Python modules) - Encapsulated Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade')  // invoke the function

sayHi('suan');
sayHi(names.john);
sayHi(names.peter);
