import React from 'react';
import "../Style/stage.css";
import {Link} from "react-router-dom";
function NewStage() {
    return(
        <div className="contain">
            <div className="sidebar">
                <Link to="/InfosPersonnelles" className="sidebar__link">Informations Personnelles</Link>
                <Link to="/MesStages" className="sidebar__link currentPage">Mes stages</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Rapport de stage</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Offre de stage</Link>
            </div>
            <div className="main">
                <h2>Nouveau stage</h2>
                <form className="form__newstage">
                    <div className="info__stage">
                        <h3>Etablissement d'accueil</h3>

                        <label htmlFor="organisme">Organisme d'accueil: <em> &#x2a; </em> <input type="text"
                                                                                                 name="organisme"/></label>
                        <label>Intitule poste de representant de l'organisme: <em> &#x2a; </em><input type="text"
                                                                                                      name="intitule"/></label>
                    </div>
                    <div className="info__stage">
                        <h3>Information sur le stage</h3>
                        <label>Titre du stage: <em> &#x2a; </em><input type="text" name="Titre"/></label>
                        <label>Date de début: <em> &#x2a; </em><input type="text" name="dateDebut"/></label>
                        <label>Date de Fin: <em> &#x2a; </em><input type="text" name="dateFin"/></label>
                        <label>Ville: <em> &#x2a; </em><input type="text" name="ville"/></label>
                        <label>Remarques: <em> &#x2a; </em><input type="text" name="remarques"/></label>
                        <label>matricule binome: <em> &#x2a; </em><input type="text" name="mle_binome"/></label>
                    </div>
                    <div className="info__stage">
                        <h3>Maitre de stage</h3>
                        <label>Nom complet: <em> &#x2a; </em><input type="text" name="Nom_complet"/></label>
                        <label>Poste: <em> &#x2a; </em><input type="text" name="poste"/></label>
                        <label>Email: <em> &#x2a; </em><input type="text" name="email"/></label>
                        <label>Télephone: <em> &#x2a; </em><input type="text" name="telephone"/></label>
                    </div>
                    <button className="btn__submit">Enregistrer</button>
                </form>
            </div>
        </div>

    )
}

export default NewStage;
