var express = require('express');
var router = express.Router();
const db = require('../models');

router.post('/add', function (req, res, next) {
    db.departement.create({
        nom: req.body.nom,
        abreviation: req.body.abreviation,
        chefDepartementId: Number(req.body.enseignant),
    }).then((dept) => res.send(dept));
    
})


// router.get('/findone/:id', function (req, res, next){
//     db.enseignant.findAll({
//         where: {
//             EnseignantId: req.params.id
//         }
//     }).then((doc) => res.send(doc));

// })



// router.put('/edit/:id', function (req, res, next) {
//     console.log(req.params.id)

//     db.enseignant.update(
//         {


         
//             nom: req.body.nom,
//             prenom: req.body.prenom,
//             enseignantPassword: req.body.enseignantPassword,
//             email: req.body.email,
//             specialite: req.body.specialite,
//             grade: req.body.grade,
//             EnseignantId: req.body.userId


//         },

//         {
//             where: {


//                 EnseignantId : req.params.id

//             }
//         }
//     ).then(
//         () => {
//             res.status(200).json({
//                 message: 'Modified !'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
//         });
// });



// router.delete('/delete/:id', function (req, res, next) {
//     console.log(req.params.id)
//     db.enseignant.destroy({
//         where: {
//             EnseignantId: req.params.id,
//         }
//     }).then(
//          () => {
//             res.status(200).json({
//                 message: 'Deleted!'
//             });
//         }
//     ).catch(
//         (error) => {
//             res.status(400).json({
//                 error: error
//             });
// });

// })


router.get('/', function (req, res, next) {
    // const titre = req.query.titre;
    db.departement.findAll().then(departement => res.send(departement));
});


module.exports = router;
