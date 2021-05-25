import React from 'react';
import {Link} from "react-router-dom";

function InfosPersonnelles (){
    return(
        <div className="contain">
            <div className="sidebar">
                <Link to="/InfosPersonnelles" className="sidebar__link currentPage">Informations Personnelles</Link>
                <Link to="/MesStages" className="sidebar__link">Mes stages</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Rapport de stage</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Offre de stage</Link>
            </div>
            <div className="main">
                <div className="info__stage">
                    <h2>Informations personnelles</h2>
                    <form>
                        <label htmlFor="matricule">Matricule: <input type="text" name="matricule" value="1910394" disabled/></label>
                        <label>Filière: <input type="text" name="filiere" value="Génie Informatique" disabled/></label>
                        <label>Nom: <input type="text" name="nom" value="Allaoui" disabled/></label>
                        <label>Prénom: <input type="text" name="prenom" value="Siham" disabled/></label>
                        <label>CIN: <input type="text" name="cin" value="D290324Q" disabled/></label>
                        <label>Date de naissance: <input type="text" name="dateNaissance" value="05/01/2000" disabled/></label>
                        <label>Genre: <input type="text" name="genre" value="F" disabled/></label>
                        <label>Téléphone: <input type="text" name="tel" value="0693827364" disabled/></label>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default InfosPersonnelles;

