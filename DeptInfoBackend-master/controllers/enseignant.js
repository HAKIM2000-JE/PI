const Enseignant = require('../models/enseignant');

exports.createEnseignant = (req, res, next) => {
    const enseignant = new Enseignant({
        nom: req.body.nom,
        prenom: req.body.prenom,
        enseignantPassword: req.body.enseignantPassword,
        email: req.body.email,
        specialite: req.body.specialite,
        grade: req.body.grade,
        EnseignantId: req.body.userId
    });
    enseignant.save().then(
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

exports.getOneEnseignant = (req, res, next) => {
    Enseignant().findOne({
        _id: req.params.id
    }).then(
        (enseignant) => {
            res.status(200).json(enseignant);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
};

exports.modifyEnseignant = (req, res, next) => {
    const enseignant = new Enseignant({
        _id: req.params.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        enseignantPassword: req.body.enseignantPassword,
        email: req.body.email,
        specialite: req.body.specialite,
        grade: req.body.grade,
        EnseignantId: req.body.userId
    });
    Enseignant().updateOne({_id: req.params.id}, enseignant).then(
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

exports.deleteEnseignant = (req, res, next) => {
    Enseignant.deleteOne({_id: req.params.id}).then(
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

exports.getAllEnseignant = (req, res, next) => {
    Enseignant.find().then(
        (enseignants) => {
            res.status(200).json(enseignants);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
};
