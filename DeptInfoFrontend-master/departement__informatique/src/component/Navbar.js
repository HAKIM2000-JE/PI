import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../image/Departementlogo1blanc.png'
import '../Style/navbar.css'

function Navbar({ Accueil, Notes, Informations, Documents, Stage}) {
    
    
     
    return (
       
        <div>
            <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
             
                <a className="navbar-brand" href="#"> <img src={logo} alt=""  /></a>
           
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto links">

                      <Link to="/">
                            <li className={"nav-item "+Accueil}>
                                <span className="nav-link" href="#">Accueil <span className="sr-only">(current)</span></span>
                            </li>
                      </Link>
                        

                        <Link to="/notes">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Notes</span>
                            </li>
                        </Link>

                      
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Informations Utiles
                        </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Personnels administratifs</a>
                                <a className="dropdown-item" href="#">Corps enseignant</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="">Modules enseignés</a>
                            </div>
                        </li>

                        <Link to="/NewUser">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Documents </span>
                            </li>
                        </Link>

                       
                        <Link to="/notes">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Stage</span>
                            </li>
                        </Link>
                        <Link to="/enseignants">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Enseignants</span>
                            </li>
                        </Link>
                        <Link to="/etudiants">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Etudiants</span>
                            </li>
                        </Link>
                        <Link to="/Dept">
                            <li className={"nav-item " + Notes}>
                                <span className="nav-link" href="#">Departement</span>
                            </li>
                        </Link>

                       
                        
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
            
        </div>
    )
}

export default Navbar
