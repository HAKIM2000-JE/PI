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
import NewFiliereModal from "./NewFiliereModal";
import Table from './ShowTable';



const Filiere = (props) => {
    const [addFiliere, setAddFiliere] = useState(false);
    const [data, setData] = useState([]);
    const [tableFiliere, setTableFiliere] = useState(false);

    const openModalAdd = () => {
        setAddFiliere(true);
    };
    const closeModalAdd = () => {
        setAddFiliere(false);
    };

    const afficherFiliere = () => {
        axios.get("http://localhost:8081/filiere/")
        .then(res => {
            const myData = [];
            res.data.forEach((filiere) => myData.push(filiere));
            setData(myData);
        });
        setTableFiliere(true);
    };

    useEffect(() => {
        
      });


    const columnsFiliere = React.useMemo(
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
            Header: 'ID Chef de filiere',
            accessor: 'chefFiliereId',
          },
          {
            Header: 'Action',
            accessor: 'action',
          },
        ],
        []
      );       
      
    return (
        <div>
            <button onClick={openModalAdd}>
                Ajouter un filiere
            </button>
            <button onClick={afficherFiliere}>
                Afficher les filieres
            </button>
            <div>
          {tableFiliere && (<Table columns={columnsFiliere} data={data} />)}
            </div>
            <div>
                {addFiliere && (<NewFiliereModal closeModal={closeModalAdd}/>)}
            </div>

        </div>
    );
}

export default Filiere;
