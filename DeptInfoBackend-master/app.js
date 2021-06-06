const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const Papa = require("papaparse")

const db = require('./models');
const document = require('./models/document');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var documentRouter = require('./routes/document');
var commentaireRouter = require('./routes/commentaire');
var enseignantRouter = require('./routes/enseignant');
var etudiantRouter = require('./routes/etudiant');
var departementRouter = require('./routes/departement');
var filiereRouter = require('./routes/filiere');

var uploadRouter = require('./routes/upload');

const CSVToJSON = require("csvtojson");
const JSONToCSV = require("json2csv").parse;
const FileSystem = require("fs");
const { Console } = require('console');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));

db.sequelize.sync().then(() => {
    app.listen(8081);
});

app.use(express.static('public'));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/document', documentRouter);
app.use('/commentaire', commentaireRouter);
app.use('/enseignant', enseignantRouter);
app.use('/etudiant', etudiantRouter);
app.use('/departement', departementRouter);
app.use('/filiere', filiereRouter);

// app.use('/upload', uploadRouter);

app.post('/upload', (req, res, next) => {
    console.log(req);
    let pdfFile = req.files.file;

    pdfFile.mv(`public/documents__tableau__affichage/${req.body.titre}.pdf`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        const promotions = JSON.parse(req.body.promotions).filter((promotion) => promotion.isChecked === true);
        promotions.forEach((promotion) => {
            Object.keys(promotion.semestre).map(key => {
                if (promotion.semestre[key]) {
                    db.document.create({
                        typeDocument: req.body.typeDocument,
                        titre: req.body.titre,
                        url: `public/documents__tableau__affichage/${req.body.titre}.pdf`,
                        promotion: promotion.value,
                        description: req.body.description,
                        semestre: key,
                    }).then(submittedDocument => console.log(submittedDocument));
                }
            });

        });

        res.json({file: `public/documents__tableau__affichage/${req.body.titre}.pdf`});
    });

});



app.post('/EnseignantCsv', (req, res, next)=>{
    let file = req.files.file

    console.log({file:file})
    
    // console.log("sj kjsdflkj kjdskjf dsfkljdalkjh")




    file.mv(`public/documents__tableau__affichage/user.csv`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ file: `public/documents__tableau__affichage/user.csv` });

    

        // Importing csv-parser into fsdata
        const csvdata = require('csv-parser')
        const fsdata = require('fs');
      
      

        CSVToJSON().fromFile(`public/documents__tableau__affichage/user.csv`).then(source => {
            console.log(source)
             source.map((user)=>{
                 db.enseignant.create({
                     nom: user.nom,
                     prenom: user.prenom,
                     EnseignantPassword: user.password,
                     email: user.email,
                     specialite: user.specialite,
                     grade: user.grade,

                 }).then((doc) => res.send(doc));

             })
            // source.push({
            //     "sku": "34890",
            //     "title": "Fortnite",
            //     "hardware": "Nintendo Switch",
            //     "price": "00.00"
            // });

        })

    })

})


app.post('/EtudiantCsv', (req, res, next) => {
    let file = req.files.file

    console.log({ file: file })

    // console.log("sj kjsdflkj kjdskjf dsfkljdalkjh")




    file.mv(`public/documents__tableau__affichage/user.csv`, function (err) {
        if (err) {
            return res.status(500).send(err);
        }
        res.json({ file: `public/documents__tableau__affichage/user.csv` });



        // Importing csv-parser into fsdata
        const csvdata = require('csv-parser')
        const fsdata = require('fs');



        CSVToJSON().fromFile(`public/documents__tableau__affichage/user.csv`).then(source => {
            console.log(source)
            source.map((user) => {
                db.etudiant.create({
                    nom: user.nom,
                    prenom: user.prenom,
                    EtudiantPassword: user.password,
                    email: user.email,
                    matricule: user.matricule,
                    genie: user.genie,

                }).then((doc) => res.send(doc));

            })
            // source.push({
            //     "sku": "34890",
            //     "title": "Fortnite",
            //     "hardware": "Nintendo Switch",
            //     "price": "00.00"
            // });

        })

    })

})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

