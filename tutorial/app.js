/*

var Thiago = {
  favFood: "Bacon",
  favMovie: "Chappie"
};

var Person = Thiago;

Person.favFood = "Salad";

console.log(Thiago.favFood);

console.log('19' == 19); // TRUE: compare the values, only
console.log('19' === 19); // FALSE: compare the values and types

var Thiago = {
  printFirstName: function () {
    console.log("My name is Thiago");
    console.log(this === Thiago);
  }
};

Thiago.printFirstName();

function doSomethingWorthless() {
  console.log("\nI am worthless");
  console.log(this === Thiago);
  console.log(this === global);
}

doSomethingWorthless();


function User() {
  this.name = "";
  this.life = 100;
  this.giveLife = function giveLife(targetPlayer) {
    targetPlayer.life += 1;
    this.life -= 1;
    console.log(this.name + " gave 1 life to  " + targetPlayer.name);
  };
}

var Thiago = new User();
Thiago.name = "Thiago";

var Simone = new User();
Simone.name = "Simone";


Thiago.giveLife(Simone);

console.log("Thiago: " + Thiago.life)
console.log("Simone: " + Simone.life)




User.prototype.uppercut = function(targetPlayer) {
  targetPlayer.life -= 10;
  console.log(this.name + " just uppercutted " + targetPlayer.name);
};

Simone.uppercut(Thiago);

console.log("Thiago: " + Thiago.life);
console.log("Simone: " + Simone.life);

console.log("Magic: ");
console.log("Thiago: " + Thiago.magic);
console.log("Simone: " + Simone.magic);


User.prototype.magic = 60;

console.log("Magic 02: ");
console.log("Thiago: " + Thiago.magic);
console.log("Simone: " + Simone.magic);


var movies = require('./movies');

movies.anotherFunction();

*/


/*
require('./thiago');
require('./simone');

*/

/*
var fs = require('fs');

fs.writeFileSync('corn.txt', "Corn is good");
console.log(fs.readFileSync('corn.txt').toString());

*/

/*
var path = require('path');
var websiteHome = 'Desktop/backup//ithiago/index.html';

console.log(path.normalize(websiteHome));

console.log(path.dirname(websiteHome));
console.log(path.basename(websiteHome));
console.log(path.extname(websiteHome));

*/


/*
setInterval(function() {
  console.log("Now is the time: " + new Date());
}, 5000);
*/
/*
console.log("Thiago");

setTimeout(function () {
  console.log("Fonseca");
}, 3000);

console.log("Santos");
*/
/*
console.log(__dirname);
console.log(__filename);
*/
/*
var http = require('http');
var fs = require('fs');

send404Response = function (res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("This page doesn't exists");
  res.end();
}

onRequest = function (req, res) {

  if (req.url == "/") {
    send404Response(res);
  } else {
    console.log("A user made a request: " + req.url);
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream("./tutorial/index.html").pipe(res);
  }
}

http.createServer(onRequest).listen(5300);

console.log('Server is now running...');
*/

/*
var connect = require('connect');
var http  = require('http');

var app = connect();

app.use('/profile', function(req, res) {
  console.log('PROFILE');
});

app.use('/forum', function(req, res) {
  console.log('FORUM');
});

http.createServer(app).listen(5300);

console.log('Server is running...');
*/