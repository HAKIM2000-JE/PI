import React, {useState, useEffect} from 'react';
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






const ConfigurerFiliereStep1 = (props) => {

    const sessionObject = {
      id:2,
      nom:"rifai",
      prenom:"nouh",
      email:"admin@admin.com",
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

    useEffect(() => {
      checkFiliere();
    },[]);

    useEffect(() => {
      if(data.length !== 0)
        setMaFiliere(true);
    },[data]);


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


      const change = ()=>{

      }

  const addDepartement = () => {

  }

   
//extract params

    const checkFiliere = () => {
      axios.get("http://localhost:8081/filiere/chefFiliereId",{
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

          <h1>Etape 1</h1>
          <hr />


          <div className="info__stage">
            <label>Comp acquises: <em> &#x2a; </em><input type="text" name="compAcquises" onChange={change}  /></label>
            <label>Retombees: <em> &#x2a; </em><input type="text" name="retombees" onChange={change} /></label>
          </div>
                  
          <div className="btn">
            <input type="button" className="annuler" value="Annuler" />
            <input type="button" className="submit" value="Suivant" onClick={props.nextStep}/>
          </div>
                  


        
        </form>
            
        </div>
    );
}

export default ConfigurerFiliereStep1;
