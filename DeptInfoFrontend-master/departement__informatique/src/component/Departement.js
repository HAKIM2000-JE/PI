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
import NewDeptModal from "./NewDeptMadal";
import Table from './ShowTable';



const NewDepartement = (props) => {
    const [addDepartement, setAddDepartement] = useState(false);
    const [data, setData] = useState([]);
    const [tableDepartement, setTableDepartement] = useState(false);

    const openModalAdd = () => {
        setAddDepartement(true);
    };
    const closeModalAdd = () => {
        setAddDepartement(false);
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
        
      });


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

    return (
        <div>
            <button onClick={openModalAdd}>
                Ajouter un departement
            </button>
            <button onClick={afficherDepartement}>
                Afficher les departements
            </button>
            <div>
          {tableDepartement && (<Table columns={columnsDepartement} data={data} />)}
            </div>
            <div>
                {addDepartement && (<NewDeptModal closeModal={closeModalAdd}/>)}
            </div>

        </div>
    );
}

export default NewDepartement;
