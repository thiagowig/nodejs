

var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res) {
    res.json({
        tasks: [
            {name: "Index", description: "Pagina incial"},
            {name: "Tarefas", description: "Lista as tarefas do usuario"}
        
        ]
    });
});