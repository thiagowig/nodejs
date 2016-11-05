/* Instalation
$ npm install --save sequelize
$ npm install --save pg pg-hstore
*/


// Connection




const Sequelize = require("sequelize");
const connection = new Sequelize('postgres://user:pass@server:port/database');


// Defining models



const Cerveja = connection.define("cerveja", {
    nome: Sequelize.STRING,
    graduacaoAlcoolica: Sequelize.INTEGER,
    descricao: Sequelize.STRING
});

const Lupulo = connection.define("lupulo", {
    nome: Sequelize.STRING,
    familia: Sequelize.STRING
});

Cerveja.hasOne(Lupulo);


// Automaticamente é gerado ID, CREATED_AT, UPDATED_AT



// Defining models (Advanced Mode)


const Cerveja0 = connection.define("cerveja",  {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  graduacaoAlcoolica: Sequelize.INTEGER,
  descricao: {
    type: Sequelize.STRING,
    defaultValue: 'Coming soon...'
  }
});


//Syncing database
connection.sync({
  force: true,
  logging: console.log
});


//validate: { isCreditCard: true }
