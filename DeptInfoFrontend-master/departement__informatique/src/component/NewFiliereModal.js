import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import '../Style/NouveauDocument.css';
import AddIcon from '@material-ui/icons/Add';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const AddFiliere = (props) => {

    const [data, setData] = useState([]);
    const [dataDepartement, setDataDepartement] = useState([]);
    const [formdata,setformdata]=useState({


        nom:'',
        abreviation:'',
        departementId:'',
        chefFiliereId:'',
        
        
    }) 
        
    const change=(e)=>{
        
        setformdata({...formdata,[e.target.name]:e.target.value})
        
    }

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const loadEnseignant = () => {
        axios.get("http://localhost:8081/enseignant/")
        .then(res => {

            const myData = [];
            res.data.forEach((enseignant) => myData.push(enseignant));
            setData(myData);
        });
        axios.get("http://localhost:8081/departement/")
        .then(res => {

            const myData = [];
            res.data.forEach((departement) => myData.push(departement));
            setDataDepartement(myData);
        });
        
    }

    

    const addFiliere = (event)=>{

        // Create an object of formData
        const formDataAxios = new FormData();
        // Update the formData object
        formDataAxios.append("nom",formdata.nom);
        formDataAxios.append('abreviation', formdata.abreviation);
        formDataAxios.append('departementId', formdata.departementId);
        formDataAxios.append('chefFiliereId', formdata.chefFiliereId);


        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8081/filiere/add", formDataAxios)

            .then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
        };
    


    return (
        <div>


            <Modal  
                isOpen={true} 
                onRequestClose={props.closeModal}
                onAfterOpen={loadEnseignant}
            >
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <AddIcon/>{" "}<h2>Ajouter une filiere</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <div>
                            <h2 id="simple-modal-title">Nouvelle Filiere</h2>
                            <form id="simple-modal-description">
                                
                                
                                <div className="info__stage">
                                    <label>Nom: <em> &#x2a; </em><input type="text" name="nom"  onChange={change}/></label>
                                    <label>Abreviation: <em> &#x2a; </em><input type="text" name="abreviation"  onChange={change}/></label>
                                    <label>Departement: <em> &#x2a; </em>
                                        <select name="departementId" onChange={change}>
                                            <option value="null">-</option>  
                                            {dataDepartement.map((d, i) => (
                                                <option key={d.departementId} value={d.departementId}>{d.departementId} - {d.nom}</option>
                                            ))}
                                        </select>
                                    </label>
                                    <label>Chef de filiere: <em> &#x2a; </em>
                                        <select name="chefFiliereId" onChange={change}>
                                            <option value="null">-</option>  
                                            {data.map((e, i) => (
                                                <option key={e.EnseignantId} value={e.EnseignantId}>{e.EnseignantId} - {e.nom} {e.prenom}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                   <hr />
                                <div className="row row-btn">

                                    <input type="button" className="annuler" onClick={props.closeModal} value="Annuler" />
                                    <input type="submit" className="submit" value="Ajouter" onClick={addFiliere}/>

                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </Modal>

        </div>

    )

}

export default AddFiliere;
