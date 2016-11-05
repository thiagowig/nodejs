const Sequelize = require('sequelize');
const connection = new Sequelize('postgres://postgres:pass@172.17.0.2:5432/gestao_cervejeira');



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

connection.sync({
  force: true,
  logging: console.log
  
}).then(function() {
  Cerveja.create({
    nome: 'Colorado Indica',
    graduacaoAlcoolica: 8
  }).then(function() {
    Cerveja.findAll().then(function(result) {
      console.log('##### ' + result[0].nome);
    })
  });
}).catch(function(error) {
  console.log(error);
});