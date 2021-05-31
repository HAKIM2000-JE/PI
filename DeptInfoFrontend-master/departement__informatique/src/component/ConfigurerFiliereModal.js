import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import '../Style/NouveauDocument.css';
import AddIcon from '@material-ui/icons/Add';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


const ConfigurerFiliere = (props) => {



    const [etape, setEtape] = useState(1);

    const [data, setData] = useState([]);
    const [formdata,setformdata]=useState({

        nom:'',
        abreviation:'',
        enseignant:'',
        
        
    }) 
        
    const change=(e)=>{
        
        setformdata({...formdata,[e.target.name]:e.target.value})
        
    }
    

    const [value1, setValue1] = React.useState("Enseignant");
    const [value2, setValue2] = React.useState("Groupe d'utilisateur");

    useEffect(() => {
        Modal.setAppElement('body');
    }, []);

    const loadEnseignant = () => {
        axios.get("http://localhost:8081/enseignant/")
        .then(res => {
            //console.log(res.data[0].titre);
            //Parse if it a json object
            const myData = [];
            res.data.forEach((enseignant) => myData.push(enseignant));
            setData(myData);
        });
    }



    const addDepartement = (event)=>{

        // Create an object of formData
        const formDataAxios = new FormData();
        // Update the formData object
        formDataAxios.append("nom",formdata.nom);
        formDataAxios.append('abreviation', formdata.abreviation);
        formDataAxios.append('enseignant', formdata.enseignant);


        // Request made to the backend api
        // Send formData object
        axios.post("http://localhost:8081/departement/add", formDataAxios)

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
                ariaHideApp={false}
            >
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <h2>Configurer Ma Filiere</h2>
                    </div>
                    <hr/>
                    <div className="content">
                    {/* <form id="simple-modal-description">
                                
                       
                                <div className="info__stage">
                                    <label>Nom: <em> &#x2a; </em><input type="text" name="nom"  onChange={change}/></label>
                                    <label>Abreviation: <em> &#x2a; </em><input type="text" name="abreviation"  onChange={change}/></label>
                                    <label>Chef de departement: <em> &#x2a; </em>
                                        <select name="enseignant" onChange={change}>
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
                                    <input type="submit" className="submit" value="Ajouter" onClick={addDepartement}/>

                                </div> 
                            </form>
                         */}
                            <div>
                            {etape === 1
                                ? ("Etape" + etape)
                                : etape === 2
                                    ? ("Etape" + etape)
                                    : etape === 3
                                        ? ("Etape" + etape)
                                        : console.log("Vous avez termine")
                            }
                        </div>
                        
                        <div>
                            <button onClick={() => setEtape(etape+1)}>
                                {etape < 3
                                    ? ("Suivant")
                                    : ("Submit")}
                            </button>



                        </div>
                        
                    </div>
                </div>
            </Modal>

        </div>

    )

}

export default ConfigurerFiliere;
