const Etudiant = require('../models/etudiant');

exports.createEtudiant = (req, res, next) => {
    const etudiant = new Etudiant({
        idCreateur: req.body.idCreateur,
        matricule: req.body.matricule,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        etudiantPassword: req.body.etudiantPassword,
        genie: req.body.genie,
        EtudiantId: req.body.etudiantId
    });
    etudiant.save().then(
        () => {
            res.status(201).json({
                message: 'Post saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getOneEtudiant = (req, res, next) => {
    Etudiant().findOne({
        _id: req.params.id
    }).then(
        (etudiant) => {
            res.status(200).json(etudiant);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyEtudiant = (req, res, next) => {
    const etudiant = new Etudiant({
        _id: req.params.id,
        matricule: req.body.matricule,
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        etudiantPassword: req.body.etudiantPassword,
        genie: req.body.genie,
        etudiantId: req.body.etudiantId
    });
    Etudiant().updateOne({_id: req.params.id}, enseignant).then(
        () => {
            res.status(201).json({
                message: 'enseignant updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.deleteEtudiant = (req, res, next) => {
    Etudiant.deleteOne({_id: req.params.id}).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};

exports.getAllEtudiant = (req, res, next) => {
    Etudiant.find().then(
        (etudiants) => {
            res.status(200).json(etudiants);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
