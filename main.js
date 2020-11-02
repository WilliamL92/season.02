const { empty, withArgs } = require('./eventbox');
const { duplicate, transform } = require('./streambox');

console.log('Eventbox');
empty();
withArgs(['Luffy','Zoro','Usopp','Robin','Nami','Sanji','Ch0pper']);

console.log('Streambox');
duplicate('main.js');
transform('eventbox.js', /[a-z]/g, (letter) => letter.toUpperCase());