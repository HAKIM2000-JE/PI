import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import '../Style/filiere.css';

import useForceUpdate from "use-force-update";
import axios from "axios";
import NewFiliereModal from "./NewFiliereModal";
import Table from './ShowTable';



const Filiere = (props) => {
    const [addFiliere, setAddFiliere] = useState(false);
    const [data, setData] = useState([]);
    const [tableFiliere, setTableFiliere] = useState(false);
  const [dataDepartement, setDataDepartement] = useState([]);
    const [showModal, setShowModal] = useState(false)


  const [formdata, setformdata] = useState({


    nom: '',
    abreviation: '',
    departementId: '',
    chefFiliereId: '',


  })

  const change = (e) => {

    setformdata({ ...formdata, [e.target.name]: e.target.value })

  }
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
      loadEnseignant()

        
      },[]);





  const ShowMoidfierModel = (id) =>{

  }

  const Deletefiliere = (id)=>{
    console.log(id)
    axios.delete(`http://localhost:8081/filiere/delete/${id}`
    ).then(res => {
      //console.log(res.data[0].titre);
      //Parse if it a json object
      console.log(res)

    });

    window.location.reload()
  }
    const columnsFiliere = React.useMemo(
        () => [
          {
            Header: 'Num Enseignant',
            accessor: 'filiereId'},{
            Header: 'Nom',
            accessor: 'nom',
          },  
          {
            Header: 'Abreviation',
            accessor: 'abreviation',
          },
          {
            Header: 'Chef de filiere',
            accessor: 'chefFiliereId',
          },
          {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => (<div>
              <a onClick={() => { ShowMoidfierModel(row.cells[0].value) }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }}>Modifier</a>  |  <span onClick={() => { Deletefiliere(row.cells[0].value) }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }} >Supprimer</span>
            </div>)
          },
        ],
        []
      );       
      
    return (
        <div className="filiere">
           

        <br /> <br />
      <h2>Génie Informatique</h2>
        <br /> <br />

        <div className="row_btn_filiere">
          <button className="btn btn-primary" onClick={openModalAdd}>
            Ajouter un filiere
            </button>
          <button className="btn btn-primary" onClick={afficherFiliere}>
            Afficher les filieres
            </button>

          <div>
            {tableFiliere && (<Table columns={columnsFiliere} data={data} />)}
          </div>
          <div>
            {addFiliere && (<NewFiliereModal closeModal={closeModalAdd} />)}
          </div>
        </div>

        <table class="table ">
          <thead>
            <tr>
              <th scope="col">Semestre</th>
              <th scope="col">Module</th>
              <th scope="col">Element de Module</th>
              <th scope="col">Volume Horaire</th>
              <th scope="col">Action</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" id="row_title">S1</th>
              <td>M1 : Statistique et Processus stochastique</td>
              <td>1. Statistique <br />2. Processus stochastique </td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr >
              <th scope="row" id="line2" ></th>
              <td>M2 : Analyse Numérique</td>
              <td>Analyse Numérique</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M3 : Programmation Orientée Objet en C++</td>
              <td>Programmation Orientée Objet en C++</td>
              <td>60h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M4 : Théorie des Systèmes d’Exploitation et LINUX</td>
              <td>1. Théorie des Systèmes d’Exploitation <br/>
2. UNIX/Linux</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M5 : Fondements des Réseaux Informatiques et TCP/IP</td>
              <td>1. Les fondements des réseaux <br/>
2. TCP / IP</td>
              <td>60h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>

            <tr id="total">
              <th scope="row" id="">Total</th>
              <td></td>
              <td><br />
</td>
              <td>250h</td>
            </tr>
            <tr>
              <th scope="row" id="line3">S2</th>
              <td>M4 : Théorie des Systèmes d’Exploitation et LINUX</td>
              <td>1. Théorie des Systèmes d’Exploitation <br />
2. UNIX/Linux</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M4 : Théorie des Systèmes d’Exploitation et LINUX</td>
              <td>1. Théorie des Systèmes d’Exploitation <br />
2. UNIX/Linux</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M4 : Théorie des Systèmes d’Exploitation et LINUX</td>
              <td>1. Théorie des Systèmes d’Exploitation <br />
2. UNIX/Linux</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
            <tr>
              <th scope="row" id="line3"></th>
              <td>M4 : Théorie des Systèmes d’Exploitation et LINUX</td>
              <td>1. Théorie des Systèmes d’Exploitation <br />
2. UNIX/Linux</td>
              <td>56h</td>
              <td><a>Editer</a> | <a>Supprimer</a></td>
            </tr>
          </tbody>
        </table>



     
        </div>
    );
}

export default Filiere;
