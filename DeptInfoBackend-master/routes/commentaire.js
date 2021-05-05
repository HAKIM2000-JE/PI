var express = require('express');
var router = express.Router();
var db = require('../models');

const commentaire = require('../models/commentaire');

router.get('/', function (req, res, next) {
    const titre = req.query.titre;
    db.commentaire.findAll(/*{
        where: {
            titre: titre
        }
    }*/).then(document => res.send(document));
});

router.post('/ajouter', function (req, res, next) {
    

    db.commentaire.create({
        text: req.body.text,
        idDocument: req.body.idDocument,

        
    }).then((doc) => res.send(doc));
})

router.put('/edit/:id', function (req, res, next) {
    console.log(req.params.id)

    db.commentaire.update(
        {


            text: req.body.text,
            

        },

        {
            where: {

                
                numerocommentaire: req.params.id
                
            }
        }
    ).then(document => res.send(document));
});


router.delete('/delete/:id', function (req, res, next) {
    
    db.commentaire.destroy({
        where: {
            numerocommentaire : req.params.id,
        }
    }).then(doc => res.send(doc));
});


module.exports = router;
