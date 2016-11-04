const Sequelize = require("sequelize");
const connection = new Sequelize('postgres://postgres:pass@localhost:5432/gestao_cervejeira');

const Cerveja = connection.define("cerveja",  {
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

connection.sync({
  force: true,
  logging: console.log
  
}).then(function() {
  Cerveja.create({
    nome: "Colorado Indica",
    graduacaoAlcoolica: 8
  }).then(function() {
    Cerveja.findAll().then(function(result) {
      console.log("##### " + result[0].nome);
    })
  });
}).catch(function(error) {
  console.log(error);
});