import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import '../Style/NouveauDocument.css';
import AddIcon from '@material-ui/icons/Add';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const AddUser = (props) => {

    const [modalAdd, setModalAdd] = useState();

    const [password, setPassword] = useState("");
    const [matricule, setMatricule] = useState("");
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [email, setEmail] = useState("");
    const [specialite, setSpecialite] = useState("");
    const [grade, setGrade] = useState("");
    const [genie, setGenie] = useState("");

    const [open, setOpen] = React.useState(false);
    const [value1, setValue1] = React.useState("Enseignant");
    const [value2, setValue2] = React.useState("Groupe d'utilisateur");

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const [userStatus, setUserStatus]=React.useState(1) // 0: no show, 1: show teacher form , 2: show student form.
    const radioHandler1=(userStatus)=>{
        setUserStatus(userStatus);
    }

    const [addStatus, setAddStatus] = React.useState(2) // 0: no show, 1: show user registration form , 2: show file input.
    const radioHandler2 = (addStatus) => {
        setAddStatus(addStatus);
    };



    const addEnseignant = (event)=>{

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append("nom",nom);
        formData.append('prenom', prenom);
        formData.append('email', email);
        formData.append("mot de passe", password);
        formData.append("specialite", specialite);
        formData.append("grade", grade);

        // Request made to the backend api
        // Send formData object
        axios.post("https://dept-info.herokuapp.com/enseignant/", formData);
    };
    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange = (event) =>{
        const target = event.target;
        const name = target.name;
        const value = target.value;
        name === "nom"
            ? setNom(value)
            : name === "prenom"
            ? setPrenom(value)
            : email==="email"
                ?setEmail(value)
                :password==="mot de passe"
                    ?setPassword(value)
                    :specialite==="specialite"
                        ?setSpecialite(value)
                        : setGrade(value);
    }
    const addEtudiant = (event)=>{

        // Create an object of formData
        const formData = new FormData();
        // Update the formData object
        formData.append("matricule",matricule);
        formData.append("nom",nom);
        formData.append('prenom', prenom);
        formData.append('email', email);
        formData.append("mot de passe", password);
        formData.append("genie", genie);

        // Request made to the backend api
        // Send formData object
        axios.post("https://dept-info.herokuapp.com/etudiant/", formData);
    };


    return (
        <div>


            <Modal  isOpen={true} onRequestClose={props.closeModal}>
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <AddIcon/>{" "}<h2>Ajouter un utilisateur</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <div >
                            <h2 id="simple-modal-title">Nouvel Utilisateur</h2>
                            <form id="simple-modal-description">
                                <div>
                                    <FormLabel component="legend">Type d'utilisateur</FormLabel>
                                    <RadioGroup aria-label="user_type" name="user_type" row value={value1}>
                                        <div style={{display: 'flex'}}>
                                            <FormControlLabel value="Enseignant" control={<Radio checked={userStatus === 1} onClick={(e) => radioHandler1(1)} />} label="Enseignant" />
                                            <FormControlLabel value="Etudiant" control={<Radio checked={userStatus === 2} onClick={(e) => radioHandler1(2)} />} label="Etudiant" />
                                        </div>
                                    </RadioGroup>
                                </div>

                                <div>
                                    <FormLabel component="legend">Type d'ajout</FormLabel>
                                    <RadioGroup aria-label="add_type" name="add_type" row value={value2}  >
                                        <div style={{display: 'flex'}}>
                                            <FormControlLabel value="Un utilisateur" control={<Radio checked={addStatus === 1} onClick={(e) => radioHandler2(1)} />} label="Un utilisateur" />
                                            <FormControlLabel value="Groupe d'utilisateur" control={<Radio checked={addStatus === 2} onClick={(e) => radioHandler2(2)} />} label="Groupe d'utilisateur" />
                                        </div>
                                    </RadioGroup>
                                </div>
                                {addStatus === 2 &&
                                <div className="info__stage">
                                    <h3>Veuillez charger un fichier csv</h3>
                                    <label>Liste: <em> &#x2a; </em><input type="file" name="liste"/></label>
                                </div>
                                }
                                {addStatus === 1 && userStatus === 2 &&
                                <div className="info__stage">
                                    <label>Matricule: <em> &#x2a; </em><input type="text" name="Nom_complet" onChange={handleChange}/></label>
                                    <label>Nom: <em> &#x2a; </em><input type="text" name="Nom_complet" onChange={handleChange}/></label>
                                    <label>Prénom: <em> &#x2a; </em><input type="text" name="poste" onChange={handleChange}/></label>
                                    <label>Email: <em> &#x2a; </em><input type="text" name="email" onChange={handleChange}/></label>
                                    <label>Mot de passe: <em> &#x2a; </em><input type="text" name="telephone" onChange={handleChange}/></label>
                                    <label>Genie: <em> &#x2a; </em>
                                        <select onChange={handleChange}>

                                            <option value="Genie industriel">Génie Industriel</option>
                                            <option value="Genie mecanique">Génie Mécanique</option>
                                            <option value="Genie civil">Génie civil</option>
                                            <option value="Genie electrique">Génie Electrique</option>
                                            <option value="Genie RT">Génie Réseaux et Télecommunications</option>
                                            <option value="Genie informatique">Génie Informatique</option>
                                            <option value="Genie mis">Génie MIS</option>
                                            <option value="Genie des procedes industriels">Génie des Procédés industriels</option>
                                            <option value="Genie mineral">Génie Minéral</option>

                                        </select>
                                    </label>
                                </div>
                                }

                                {addStatus === 1 && userStatus === 1 &&
                                <div className="info__stage">
                                    <label>Nom: <em> &#x2a; </em><input type="text" name="Nom_complet" onChange={handleChange}/></label>
                                    <label>Prénom: <em> &#x2a; </em><input type="text" name="poste" onChange={handleChange}/></label>
                                    <label>Email: <em> &#x2a; </em><input type="text" name="email" onChange={handleChange}/></label>
                                    <label>Mot de passe: <em> &#x2a; </em><input type="text" name="telephone" onChange={handleChange}/></label>
                                    <label>Specialité: <em> &#x2a; </em>
                                        <select onChange={handleChange}>

                                            <option value="Informatique">Informatique</option>
                                            <option value="Docteur">electrotechique</option>
                                            <option value="Ingénieur">Mathematiques</option>
                                        </select>
                                    </label>
                                    <label>Grade: <em> &#x2a; </em>
                                        <select onChange={handleChange}>

                                            <option value="Professeur">Professeur</option>
                                            <option value="Docteur">Docteur</option>
                                            <option value="Ingénieur">Ingénieur</option>
                                        </select>
                                    </label>


                                </div>
                                }


                                <button className="btn__cancel" onClick={props.closeModal}>Annuler</button>
                                <button className="btn__submit" onClick={userStatus===1?addEnseignant:addEtudiant}>Ajouter</button>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal>

        </div>

    )

}

export default AddUser;
