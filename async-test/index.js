

var async = require('async');

/*
var fs = require('fs');

var dirs = ["/Users/tfonseca/dev/repo/nodejs", "/Users/tfonseca/dev/repo/nodejs/tutorial"];

async.concatSeries(dirs, fs.readdir, function(err, files) {
    if(err) {
        console.log("\n\n\nERROR");
        console.log(err);
    } else {
        console.log("\n\n\nSUCESS");
        console.log(files);
    }
})
*/

/*
async.parallel([
    function() {
        setTimeout(function() {
            console.log("First function");
        }, 1000);
    },
    function() {
        console.log("Second function");
    }

], function(err, results) {
    console.log(err);
});
*/
/*
async.parallelLimit([
    function() {
            console.log("First function");
    },
    function() {
        console.log("Second function");
    },
    function() {
        console.log("Third function");
    },
    function() {
        console.log("Fourth function");
    },
    function() {
        console.log("Fifth function");
    },
    function() {
        console.log("Sixth function");
    },
    function() {
        console.log("Seventh function");
    },
    function() {
        console.log("Eighth function");
    },
    function() {
        console.log("Ninth function");
    },
    function() {
        console.log("Tenth function");
    }

], 8, function(err, results) {
    console.log(err);
});
*/

/*
var myMethod = function(err, result) {
    console.log(myWrongObject.throwAnException);
    return "Thiago";
}

async.retry({
    times: 3, 
    interval: 1000
}, myMethod, function(err, result) {
    if (err) {
        console.log('Error in retry');
    } else {
        console.log('Sucess in retry: ' + result);
    }
});*/

/*
async.series([
    function (callback) {
        console.log('Running one');
        callback(null, 'one');
    },
    function (callback) {
        console.log('Running two');
        callback(null, 'two');
    }
], function (err, results) {
    console.log(results);
});
*/

/*
var createUser = function(id, callback) {
    callback(null, {
        id: 'user' + id
    });
};

async.times(15, function(n, next) {
    createUser(n, function(err, user) {
        next(err, user);
    });
}, function(err, users) {
    console.log(users);
});

*/

var count = 0;

async.until(function() {
    return count > 3;
}, function(err) {
    console.log(count);
    count++;
});


