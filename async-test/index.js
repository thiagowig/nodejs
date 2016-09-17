

var async = require('async');
var fs = require('fs');

var dirs = ["/home/thiago/dev/repo", "/home/thiago/dev/repo/mycar"];

async.concat(dirs, fs.readdir, function(err, files) {
    if(err) {
        console.log("\n\n\nERROR");
        console.log(err);
    } else {
        console.log("\n\n\nSUCESS");
        console.log(files);
    }
})