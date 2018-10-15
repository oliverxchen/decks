var execSync = require('child_process').execSync;

var directory = process.argv[2];
var command = 'node_modules/.bin/reveal-md ' + directory + '/slides.md --static docs/' + directory;
console.log(command);
execSync(command);
