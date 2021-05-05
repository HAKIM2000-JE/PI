var express = require('express');
var router = express.Router();
var db = require('../models');


/* GET users listing. */
router.get('/', function (req, res, next) {
    const promotion = req.query.promotion;
    console.log(promotion)
    const typeDocument = req.query.typeDocument;
    console.log(typeDocument)
    if(promotion=="Promotions"){
        db.document.findAll({
            where: {
                
                typeDocument: typeDocument
            }
        }).then(document => res.send(document));
        

    }else if (typeDocument=="Tout"){
        db.document.findAll({
            where: {
                promotion: promotion,
               
            }
        }).then(document => res.send(document));
    }
    else{
        db.document.findAll({
            where: {
                promotion: promotion,
                typeDocument: typeDocument
            }
        }).then(document => res.send(document));
    }
    
});
router.get('/EMPLOI_Du_Temps', function (req, res, next) {
    const promotion = req.query.promotion;
   
    db.document.findAll({
        where: {
            promotion: promotion,
            typeDocument:"EMPLOI_DU_TEMPS"
           
        }
    }).then(document => res.send(document));
});

/* GET users listing. */
router.get('/info', function (req, res, next) {
    const titre = req.query.titre;
    db.document.findAll({
        
        order: [
            ['numeroDocument', 'DESC'],
            // ['name', 'ASC'],
        ],
    }).then(document => res.send(document));
});

router.get('/notes', function (req, res, next) {
    const titre = req.query.titre;
    db.document.findAll(
        
    ).then(document => res.send(document));
});

router.get('/notes/:id', function (req, res, next) {
    // const numeroDocument = req.query.numeroDocument;
    db.document.findAll({
        where: {
           
           numeroDocument: req.params.id,
        }
    }).then(document => res.send(document));
});

router.put('/edit/:id', function (req, res, next) {
   
    db.document.update(
        {
        
       
        titre: req.body.titre,
       description: req.body.description,
       typeDocument: req.body.typeDocument
           },

        {where: {
            
            numeroDocument: req.params.id,
        }}
    ).then(document => res.send(document));
});


router.delete('/delete/:id', function (req, res, next) {
    // const numeroDocument = req.query.numeroDocument;
    db.document.destroy({
        where: {
     
            numeroDocument: req.params.id,
        }
    }).then(document => res.send(document));
});





router.get('/pdf', function (req, res, next) {
    const titre = req.query.titre;
    db.document.findAll({
        where: {
            titre: titre
        }
    }).then(document => res.send(document));
});


module.exports = router;
