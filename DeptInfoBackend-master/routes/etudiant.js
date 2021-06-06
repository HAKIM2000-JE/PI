var express = require('express');
var router = express.Router();
const etudiant = require('../models/enseignant');
const db = require('../models');

// exports.createEnseignant = (req, res, next) => {

//     db.enseignant.create({
//         nom: req.body.nom,
//         prenom: req.body.prenom,
//         EnseignantPassword: req.body.password,
//         email: req.body.email,
//         specialite: req.body.specialite,
//         grade: req.body.grade,

//     }).then(submittedEnseignant => console.log(submittedEnseignant));

//     res.json({result: 'ok'});
// };

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
            etudiantId: req.params.id
        }
    }).then((doc) => res.send(doc));

})

// exports.getOneEnseignant = (req, res, next) => {
//     Enseignant().findOne({
//         _id: req.params.id
//     }).then(
//         (enseignant) => {
//             res.status(200).json(enseignant);
//         }
//     ).catch(
//         (error) => {
//             res.status(404).json({
//                 error: error
//             });
//         }
//     );
// };


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


                etudiantId: req.params.id

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



// exports.modifyEnseignant = (req, res, next) => {
//     const enseignant = new Enseignant({
//         _id: req.params.id,
//         nom: req.body.nom,
//         prenom: req.body.prenom,
//         enseignantPassword: req.body.enseignantPassword,
//         email: req.body.email,
//         specialite: req.body.specialite,
//         grade: req.body.grade,
//         EnseignantId: req.body.userId
//     });
//     Enseignant().updateOne({_id: req.params.id}, enseignant).then(
//         () => {
//             res.status(201).json({
//                 message: 'enseignant updated successfully!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// };
router.delete('/delete/:id', function (req, res, next) {

    db.etudiant.destroy({
        where: {
            etudiantId: req.params.id,
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

// exports.deleteEnseignant = (req, res, next) => {
//     Enseignant.deleteOne({_id: req.params.id}).then(
//         () => {
//             res.status(200).json({
//                 message: 'Deleted!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         }
//     );
// };

router.get('/', function (req, res, next) {
    // const titre = req.query.titre;
    db.etudiant.findAll().then(document => res.send(document));
});

// exports.getAllEnseignant = (req, res, next) => {
//     db.enseignant.findAll().then(enseignants => res.send(enseignants))


// };

module.exports = router;
