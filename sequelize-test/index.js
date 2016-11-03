const Sequelize = require("sequelize");
const connection = new Sequelize('postgres://postgres:pass@localhost:5432/gestao_cervejeira');

const Cerveja = connection.define("cerveja",  {
  nome: Sequelize.STRING,
  graduacaoAlcoolica: Sequelize.INTEGER
});

connection.sync({
  logging: console.log
  
}).then(function() {
  Cerveja.create({
    nome: "Colorado Indica",
    graduacaoAlcoolica: 8
  });
});