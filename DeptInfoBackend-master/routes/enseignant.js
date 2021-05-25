const express = require('express');
const router = express.Router();

const enseignantCtrl = require('../controllers/enseignant');

router.get('/', enseignantCtrl.getAllEnseignant);
router.post('/', enseignantCtrl.createEnseignant);
router.get('/:id', enseignantCtrl.getOneEnseignant);
router.put('/:id', enseignantCtrl.modifyEnseignant);
router.delete('/:id', enseignantCtrl.deleteEnseignant);

module.exports = router;
