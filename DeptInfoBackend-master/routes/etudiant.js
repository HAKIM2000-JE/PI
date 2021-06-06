var express = require('express');
var router = express.Router();
const etudiant = require('../models/enseignant');
const db = require('../models');


router.post('/add', function (req, res, next) {


    db.etudiant.create({
        nom: req.body.nom,
        prenom: req.body.prenom,
        EtudiantPassword: req.body.password,
        email: req.body.email,
        matricule: req.body.matricule,
        genie: req.body.genie,

    }).then((doc) => res.send(doc));
})


router.get('/findone/:id', function (req, res, next) {
    db.etudiant.findAll({
        where: {
            EnseignantId: req.params.id
        }
    }).then((doc) => res.send(doc));

})



router.put('/edit/:id', function (req, res, next) {
    console.log(req.params.id)

    db.etudiant.update(
        {

            
            nom: req.body.nom,
            prenom: req.body.prenom,
            EtudinantPassword: req.body.password,
            email: req.body.email,
            matricule: req.body.matricule,
            genie: req.body.genie,



        },

        {
            where: {


                EnseignantId: req.params.id

            }
        }
    ).then(
        () => {
            res.status(200).json({
                message: 'Modified !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        });
});



router.delete('/delete/:id', function (req, res, next) {

    db.etudiant.destroy({
        where: {
            EnseignantId: req.params.id,
        }
    }).then(
        () => {
            res.status(200).json({
                message: 'deleted !'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        });
});


router.get('/', function (req, res, next) {
    // const titre = req.query.titre;
    db.etudiant.findAll().then(document => res.send(document));
});


module.exports = router;
