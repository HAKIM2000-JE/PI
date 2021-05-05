import React , {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import logo from '../image/Departementlogo1blanc.png'
import '../Style/navbar.css'

function Navbar({Acceuil,Informations,Stage,Tableau, type}) {
    const [show, handleShow] = useState(false);
  
    //const [user, setUser] = useStateValue([]);
    useEffect(() => {
        if(type=="trasparent"){
            window.addEventListener("scroll", () => {
                if (window.scrollY > 100) {
                    handleShow(true);
                } else handleShow(false);
            });
            return () => {
                window.removeEventListener("scroll");
            };

        }else{
            handleShow(true)
        }
        
    }, []);
    return (
       
        <div>
            {show === true ?(
                <nav class="navbar navbar__white navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"> <img src={logo} alt="" className="logo__img" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item ">
                              <Link to="/">
                                    <a class="nav-link nav-link__white" href="#">
                                        Accueil <span class="sr-only">(current)</span></a>
                              </Link>
                                
                               
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link__white dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Informations utiles
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">Personnels administratifs</a>
                                    <a class="dropdown-item" href="#">Corps enseignant</a>
                                    <a class="dropdown-item" href="#">Modules enseignés</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link nav-link__white dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tableau D'affichage
        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link to="/Notes" >
                                        <a class="dropdown-item" className="pageLink">
                                       Notes
                                       </a>
                                    </Link>
                                
                                    
                                    <a class="dropdown-item" href="#">Emploi du Temps</a>

                                </div>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link nav-link__white" href="#">Documents administratifs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link nav-link__white " href="#">Stage</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control form-control__white mr-sm-2" type="search"  value="Search..." aria-label="Search" />
                            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        </form>
                    </div>
                </nav>


            ):(
                    <nav class="navbar  navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#"> <img src={logo} alt="" className="logo__img" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item active ">
                                 
                                    <a class={`nav-link link ${Acceuil}`} href="#">Accueil <span class="sr-only">(current)</span></a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class={`nav-link link ${Informations} dropdown-toggle` } href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                       Informations utiles 
        </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item link"   href="#">Personnels administratifs</a>
                                        <a class="dropdown-item link" href="#">Corps enseignant</a>
                                        <a class="dropdown-item link" href="#">Modules enseignés</a>
                                    </div>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class={`nav-link link ${Tableau} dropdown-toggle`}href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tableau D'affichage
        </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Notes</a>
                                        <a class="dropdown-item" href="#">Emploi du Temps</a>
                                        
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link link" href="#">Documents administratifs</a>
                                </li>
                                <li class="nav-item">
                                    <a class={`nav-link link ${Stage}`} href="#">Stage</a>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                            </form>
                        </div>
                    </nav>

            )}
            
        </div>
    )
}

export default Navbar
