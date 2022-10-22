// const HomeModel = require('../models/HomeModel')

// HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e)) não precisa ficar ai só para lembrar

exports.paginaInicial = (req, res) =>{             
        res.render('index', {
            titulo: 'Este será o título da página',
            numeros: [0, 1, 2, 3, 4, 5]
        })
        return    
    }

exports.trataPost = (req, res) => {
    res.send(req.body)
    return
}