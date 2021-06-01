
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import '../Style/NewUsers.css';
import useForceUpdate from "use-force-update";
import axios from "axios";
import ConfigurerFiliereModal from "./ConfigurerFiliereModal";
import Table from './ShowTable';


const ConfigurerFiliereStep2= (props) =>{


    const [inputList, setInputList] = useState([{ nomModule: "",coordonateurModule: "", objectif: "", prerequis: "", didactique: "", modeEvaluation: "", volumeHoraire: "" }]);
 
    // handle input change
    const handleInputChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...inputList];
      list[index][name] = value;
      setInputList(list);
    };
   
    // handle click event of the Remove button
    const handleRemoveClick = index => {
      const list = [...inputList];
      list.splice(index, 1);
      setInputList(list);
    };
   
    // handle click event of the Add button
    const handleAddClick = () => {
      setInputList([...inputList, { nomModule: "",coordonateurModule: "", objectif: "", prerequis: "", didactique: "", modeEvaluation: "", volumeHoraire: "" }]);
    };

    const sessionObject = {
        id: 2,
        nom: "rifai",
        prenom: "nouh",
        email: "admin@admin.com",
    };
    const [configurerFiliere, setConfigurerFiliere] = useState(false);
    const [data, setData] = useState([]);
    const [tableDepartement, setTableDepartement] = useState(false);
    const [maFiliere, setMaFiliere] = useState(false);


    const openModalAdd = () => {
        setConfigurerFiliere(true);
    };
    const closeModalAdd = () => {
        setConfigurerFiliere(false);
    };

    const afficherDepartement = () => {
        axios.get("http://localhost:8081/departement/")
            .then(res => {
                const myData = [];
                res.data.forEach((departement) => myData.push(departement));
                setData(myData);
            });
        setTableDepartement(true);
    };


    const change = ()=>{

    }

    const addDepartement = ()=>{

    }


    useEffect(() => {
        checkFiliere();
    }, []);

    useEffect(() => {
        if (data.length !== 0)
            setMaFiliere(true);
    }, [data]);


    const columnsDepartement = React.useMemo(
        () => [
            {
                Header: 'Nom',
                accessor: 'nom',
            },
            {
                Header: 'Abreviation',
                accessor: 'abreviation',
            },
            {
                Header: 'Action',
                accessor: 'action',
            },
        ],
        []
    );


    //extract params

    const checkFiliere = () => {
        axios.get("http://localhost:8081/filiere/chefFiliereId", {
            params: {
                id: sessionObject.id,
            }
        })
            .then(res => {
                const myData = [];
                res.data.forEach((filiere) => myData.push(filiere));
                setData(myData);
            });
    };
    return (
        <div>

            <form id="simple-modal-description">

                <h1>Etape 2</h1>
                <hr/>
                {inputList.map((x, i) => {
        return (
          
          <div className="box">
                <div>
                <h3>{"Module "+ (i+1)}</h3>
                </div>
                
                        
                        <label>Nom du module: <em> &#x2a; </em><input type="text" name={"nomModule"} onChange={e => handleInputChange(e, i)} /></label>
                        <label>Coordonateur du module: <em> &#x2a; </em>
                            <select name={"coordonateurModule"} onChange={e => handleInputChange(e, i)}>
                                <option value="null">-</option>
                                {data.map((e, i) => (
                                    <option key={e.EnseignantId} value={e.EnseignantId}>{e.EnseignantId} - {e.nom} {e.prenom}</option>
                                ))}
                            </select>
                        </label>
                        <label htmlFor="objectif">Objectif: <em> &#x2a; </em>
                        <textarea id={"objectif"} name={"objectif"} placeholder="Objectif" onChange={e => handleInputChange(e, i)} required/>
                        </label>
                        <label htmlFor="prerequis">Pre-requis: <em> &#x2a; </em>
                        <textarea id={"prerequis"} name={"prerequis"} placeholder="Pre-requis" onChange={e => handleInputChange(e, i)} required/>
                        </label>
                        <label>Didactique: <em> &#x2a; </em><input type="text" name={"didactique"} onChange={e => handleInputChange(e, i)} /></label>
                        <label>Mode d'evaluation <em> &#x2a; </em><input type="text" name={"modeEvaluation"} onChange={e => handleInputChange(e, i)} /></label>
                        <label>Volume horaire: <em> &#x2a; </em><input name="volumeHoraire" type="number" onChange={e => handleInputChange(e, i)}/></label>
                <div className="btn-box">
                {inputList.length !== 1 && <button
                    className="mr10"
                    onClick={() => handleRemoveClick(i)}>Remove</button>}
                {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
                </div>
                
          </div>
        );
      })}
                <div className="btn">
                    <input type="button" className="annuler" value="Annuler" />
                    <input type="button" className="submit" value="Suivant" onClick={props.nextStep}/>
                </div>



                {/* <div key={""} className="info__stage">
                    {"Module "}
                    
                    <label>Nom du module: <em> &#x2a; </em><input type="text" name={"nomModule"} onChange={change} /></label>
                    <label>Coordonateur du module: <em> &#x2a; </em>
                        <select name={"coordonateurModule"} onChange={change}>
                            <option value="null">-</option>
                            {data.map((e, i) => (
                                <option key={e.EnseignantId} value={e.EnseignantId}>{e.EnseignantId} - {e.nom} {e.prenom}</option>
                            ))}
                        </select>
                    </label>
                    <label htmlFor="objectif">Objectif: <em> &#x2a; </em>
                    <textarea id={"objectif"} name={"objectif"} placeholder="Objectif" onChange={change} required/>
                    </label>
                    <label htmlFor="prerequis">Pre-requis: <em> &#x2a; </em>
                    <textarea id={"prerequis"} name={"prerequis"} placeholder="Pre-requis" onChange={change} required/>
                    </label>
                    <label>Didactique: <em> &#x2a; </em><input type="text" name={"didactique"} onChange={change} /></label>
                    <label>Mode d'evaluation <em> &#x2a; </em><input type="text" name={"modeEvaluation"} onChange={change} /></label>
                    <label>Volume horaire: <em> &#x2a; </em><input name="volumeHoraire" type="number" onChange={change}/></label>
                </div>
                <hr />


                <div className="info__stage">
                    <label>Nom: <em> &#x2a; </em><input type="text" name="nom" onChange={change} /></label>
                    <label>Abreviation: <em> &#x2a; </em><input type="text" name="abreviation" onChange={change} /></label>
                    <label>Chef de departement: <em> &#x2a; </em>
                        <select name="enseignant" onChange={change}>
                            <option value="null">-</option>
                            {data.map((e, i) => (
                                <option key={e.EnseignantId} value={e.EnseignantId}>{e.EnseignantId} - {e.nom} {e.prenom}</option>
                            ))}
                        </select>
                    </label>
                </div> */}




                
            </form>
        </div>
    )
}

export default ConfigurerFiliereStep2
