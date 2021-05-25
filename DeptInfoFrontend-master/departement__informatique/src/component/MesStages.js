import React from 'react';
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import '../Style/stage.css';
import {Link} from "react-router-dom";

function MesStages() {
    return(
        <div className="contain">
            <div className="btn-new__stage">
                <Link to={"/NewStage"}>
                    <Button size="medium" color="primary">
                        <AddIcon />
                        <span>Nouveau Stage</span>
                    </Button>
                </Link>
            </div>
            <div className="sidebar">
                <Link to="/InfosPersonnelles" className="sidebar__link">Informations Personnelles</Link>
                <Link to="/MesStages" className="sidebar__link currentPage">Mes stages</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Rapport de stage</Link>
                <Link to="/InfosPersonnelles" className="sidebar__link">Offre de stage</Link>
            </div>
            <div className="main">
                <h2>Mes stages</h2>
                <table>
                    <tr>
                        <th>Organisme</th>
                        <th>Titre stage</th>
                        <th>Vile Stage</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>xxxxxxx</td>
                        <td>xxxxx</td>
                        <td>xxxxxxx</td>
                        <td>xxxxxx</td>
                    </tr>
                    <tr>
                        <td>xxxxxxxxxxxxxxx</td>
                        <td>xxxxxxxxxxxxxxxxxx</td>
                        <td>xxxxxxxxxxxxxxx</td>
                        <td>xxxxxxxxxxxxxxxxxxxxx</td>
                    </tr>
                </table>
            </div>

        </div>
    )
}

export default MesStages;
