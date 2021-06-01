import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import axios from 'axios';
import '../Style/NouveauDocument.css';
import AddIcon from '@material-ui/icons/Add';
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";


import { Steps, Step } from "react-step-builder";
import Step1 from "./ConfigurerFiliereStep1";
import Step2 from "./ConfigurerFiliereStep2";
import Step3 from "./ConfigurerFiliereStep3";


const ConfigurerFiliere = (props) => {



    const [etape, setEtape] = useState(1);
    const [data, setData] = useState([]);

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


    const nextStep = () => {
        setEtape(etape+1);
    }
    

    
    return (
        <div>


            <Modal  
                isOpen={true} 
                onRequestClose={props.closeModal}
                ariaHideApp={false}
            >
                <div>
                    {etape === 1
                        ? (<Step1 nextStep={nextStep}  closeModal={props.closeModal}/>)
                        : etape === 2
                            ? (<Step2 nextStep={nextStep}  closeModal={props.closeModal}/>)
                            : (<Step3 nextStep={nextStep} closeModal={props.closeModal}/>)
                    }   
                </div>      
            </Modal>

        </div>

    )

}

export default ConfigurerFiliere;
