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
import NewUserModal from "./NewUserModal";
import Table from './ShowTable';
import { useRowSelect } from 'react-table';
import MyModal from 'react-modal';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}




const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const NewUser = (props) => {

  const [rowId, setrowId] = useState(0)


  const [showModal, setShowModal] = useState(false)
  const [showModalEnseignant, setShowModalEnseignant] = useState(false)

  const [formdata, setformdata] = useState({


    email: '',
    password: '',
    matricule: '',
    nom: 'haim',
    prenom: '',
    specialite: '',
    grade: '',
    genie: '',


  })

  const change = (e) => {

    setformdata({ ...formdata, [e.target.name]: e.target.value })

  }



    const forceUpdate = useForceUpdate();


    const [addUser, setAddUser] = useState(false);
    const [data, setData] = useState([]);
    const [tableEnseignant, setTableEnseignant] = useState(false);
    const [tableEtudiant, setTableEtudiant] = useState(false);

    const openModalAdd = () => {
        setAddUser(true);
    };
    const closeModalAdd = () => {
        setAddUser(false);
    };

    const afficherEnseignant = () => {
        axios.get("http://localhost:8081/enseignant/")
        .then(res => {
            //console.log(res.data[0].titre);
            //Parse if it a json object
            const myData = [];
          res.data.forEach((enseignant) => {
            enseignant.action = "Modifier | Supprimer"
            myData.push(enseignant)
          });
            setData(myData);
        });
        setTableEnseignant(true);
        setTableEtudiant(false);

    };


  const afficherEtudiant = () => {
    axios.get("http://localhost:8081/etudiant/")
      .then(res => {
        //console.log(res.data[0].titre);
        //Parse if it a json object
        const myData = [];
        res.data.forEach((etudiant) => {
          etudiant.action="Modifier | Supprimer"
          myData.push(etudiant)});
        console.log(myData)
        setData(myData);
      });
    setTableEtudiant(true);
    setTableEnseignant(false);

  };


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

  const ShowMoidfierModelEnseignant = (id) => {
    axios.get(`http://localhost:8081/enseignant/findone/${id}`).then(
      res => {
        console.log(res.data[0].nom)
        setformdata({
          ...formdata, nom: res.data[0].nom,
          prenom: res.data[0].prenom,
          email: res.data[0].email,
          specialite: res.data[0].specialite,
          password: res.data[0].password,
          grade: res.data[0].grade


        })
      }
    )

    setrowId(id)

    setShowModalEnseignant(true)
    console.log(formdata)

  }
    
  const ShowMoidfierModelEudiant = (id)=>{
    axios.get(`http://localhost:8081/etudiant/findone/${id}`).then(
      res=>{
        console.log(res.data[0].nom)
        setformdata({
          ...formdata, nom: res.data[0].nom,
           prenom: res.data[0].prenom, 
          email: res.data[0].email,
           matricule: res.data[0].matricule,
           password : res.data[0].password,
          genie: res.data[0].genie
          

        })
      }
    )

    setrowId(id)
    
    setShowModal(true)
    console.log(formdata)
  }

  const ModifierEseignant = (id) => {
    const formDataAxios = new FormData();
    // Update the formData object
    formDataAxios.append("nom", formdata.nom);
    formDataAxios.append('prenom', formdata.prenom);
    formDataAxios.append('email', formdata.email);
    formDataAxios.append("password", formdata.password);
    formDataAxios.append("grade", formdata.grade);
    formDataAxios.append("specialite", formdata.specialite);
    axios.put(`http://localhost:8081/enseignant/edit/${id}`, formDataAxios).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
    // setShowModal(false)
    window.location.reload()
  }



  const ModifierEtudiant=(id)=>{
    const formDataAxios = new FormData();
    // Update the formData object
    formDataAxios.append("nom", formdata.nom);
    formDataAxios.append('prenom', formdata.prenom);
    formDataAxios.append('email', formdata.email);
    formDataAxios.append("enseignantPassword", formdata.password);
    
    formDataAxios.append("genie", formdata.specialite);
    formDataAxios.append("matricule", formdata.grade);
    axios.put(`http://localhost:8081/etudiant/edit/${id}`, formDataAxios).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
    // setShowModal(false)
    window.location.reload()
  } 

  

  



      const DeleteEtudiant = (id)=>{
        console.log(id)
        axios.delete(`http://localhost:8081/etudiant/delete/${id}`
        ).then(res => {
          //console.log(res.data[0].titre);
          //Parse if it a json object
          console.log(res)

        });

        window.location.reload()
      }

  const deleteEnseignant = (id) => {
    console.log(id)
    axios.delete(`http://localhost:8081/enseignant/delete/${id}`
    ).then(res => {
      //console.log(res.data[0].titre);
      //Parse if it a json object
      console.log(res)

    });

    window.location.reload()
  }






    const columnsEnseignant = React.useMemo(
        () => [
          {
            
          Header: 'Num Enseignant',
          accessor: 'EnseignantId',
        },{
         
       
            Header: 'Nom complet',
            columns: [
              {
                Header: 'Nom',
                accessor: 'nom',
              },
              {
                Header: 'Prenom',
                accessor: 'prenom',
              },
            ],
          },
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Email',
                accessor: 'email',
              },
              {
                Header: 'Specialite',
                accessor: 'specialite',
              },
              {
                Header: 'Grade',
                accessor: 'grade',
              },
            ],
          },
          {
            Header: 'Action',
            accessor: 'action',
            Cell: ({ row }) => (<div>
              <a onClick={() => { ShowMoidfierModelEnseignant(row.cells[0].value) }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }}>Modifier</a>  |  <span onClick={() => { deleteEnseignant(row.cells[0].value) }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }} >Supprimer</span>
            </div>)
          },
        ],
        []
      );

  const columnsEtudiant = React.useMemo(
    () => [
      {
        Header: 'Num Etudiant',
        accessor: 'etudiantId',
        },
        {
        Header: 'Nom complet',
        columns: [
          {
            Header: 'Nom',
            accessor: 'nom',
          },
          {
            Header: 'Prenom',
            accessor: 'prenom',
          },
        ],
      },
      {
        Header: 'Info',
        columns: [
          {
            Header: 'Email',
            accessor: 'email',
          },
          {
            Header: 'Maricule',
            accessor: 'matricule',
          },
          {
            Header: 'Genie',
            accessor: 'genie',
          },
        ],
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (<div>
          <a onClick={() => { ShowMoidfierModelEudiant(row.cells[0].value) }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }}>Modifier</a>  |  <span onClick={() => { DeleteEtudiant(row.cells[0].value)  }} style={{ 'cursor': 'pointer', 'color': '#6e97ff' }} >Supprimer</span>
          </div>)
      },
    ],
    []
  );
    
      const dataTable = [
        {
            "nom": "rifai",
            "prenom": "nouh",
            "email": "test",
            "specialite": "test",
            "grade": "test",
          },
          {
            "nom": "rifaiii",
            "prenom": "nouh",
            "email": "test",
            "specialite": "test",
            "grade": "test",
          }
      ]
          
      
    

    return (
        <div className="user">
             <br/>
            <h2>Gestion des comptes utilisateurs</h2>
              <br/><br/>
            <div className="row_btn">
          <button className="btn btn-primary" onClick={openModalAdd}>
            Ajouter un utilisateur
            </button>
          <button className="btn btn-primary" onClick={afficherEnseignant}>
            Afficher les enseignants
            </button>

          <button className="btn btn-primary" onClick={afficherEtudiant}>
            Afficher les etudiants
        </button>
            </div>
           
            
            <div>
          {tableEnseignant && (<Table columns={columnsEnseignant} data={data} />)}
            </div>

        <div>
          {tableEtudiant && (<Table columns={columnsEtudiant} data={data} />)}
        </div>

            <div>
                {addUser && (<NewUserModal closeModal={closeModalAdd}/>)}
            </div>

        <MyModal isOpen={showModal} >
          <h5>Modifier Compte Etudiant </h5>
          <hr />
          <div className="info__stage">
            <label>Matricule: <em> &#x2a; </em><input type="text" name="matricule" value={formdata.matricule} onChange={change} /></label>
            <label>Nom: <em> &#x2a; </em><input type="text" name="nom" value={formdata.nom} onChange={change} /></label>
            <label>Prénom: <em> &#x2a; </em><input type="text" name="prenom" value={formdata.prenom} onChange={change} /></label>
            <label>Email: <em> &#x2a; </em><input type="email" name="email" value={formdata.email} onChange={change} /></label>
            <label>Mot de passe: <em> &#x2a; </em><input type="password" name="password" value={formdata.password} onChange={change} /></label>
            <label>Genie: <em> &#x2a; </em>
              <select name="genie"   onChange={change}>
                <option value="null" > {formdata.genie}</option>
                <option value="Genie_Industriel">Génie Industriel</option>
                <option value="Genie_Mecanique">Génie Mécanique</option>
                <option value="Genie_Civil">Génie civil</option>
                <option value="Genie_Electrique">Génie Electrique</option>
                <option value="Genie_RT">Génie Réseaux et Télecommunications</option>
                <option value="Genie_Informatique">Génie Informatique</option>
                <option value="Genie_Mis">Génie MIS</option>
                <option value="Genie_Procedes_Industriels">Génie des Procédés industriels</option>
                <option value="Genie_Mineral">Génie Minéral</option>

              </select>
            </label>
          </div>
          <br /> <br /><br />
          <div className="row row-btn">

            <input type="button" className="annuler" onClick={() => { setShowModal(false) }} value="Annuler" />


            <input type="button" className="submit" onClick={()=>{ModifierEtudiant(rowId)}} value="Modifier" />

          </div>


        </MyModal>


        <MyModal isOpen={showModalEnseignant} >
          <h5>Modifier Compte Enseignant </h5>
          <hr />
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Nom</label>
              <input type="text" name="nom" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formdata.nom} onChange={change} />
              <label for="exampleInputEmail1">Prenom</label>
              <input type="text" name="prenom" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={formdata.prenom} onChange={change} />
              <label for="exampleInputEmail1">Email address  <em> &#x2a; </em></label>
              <input type="email" name="email" value={formdata.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={change} />
              <label for="exampleInputEmail1">Mot de Passe</label>
              <input type="password" name="password" value={formdata.password} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={change} />
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label>Specialité: <em> &#x2a; </em>     </label>
              <select name="specialite" onChange={change} required>
                <option >{formdata.specialite}</option>
                <option value="Informatique">Informatique</option>
                <option value="Electrotechnique">Electrotechique</option>
                <option value="Mathematiques">Mathematiques</option>
              </select>



              <label>Grade: <em> &#x2a; </em>    </label>
              <select name="grade" onChange={change} required>
                <option >{formdata.grade}</option>
                <option value="Professeur">Professeur</option>
                <option value="Docteur">Docteur</option>
                <option value="Ingenieur">Ingénieur</option>
              </select>

            </div>


          </form>
          <input type="button" className="submit" onClick={() => { ModifierEseignant(rowId)}} value="Modifier" />

          <input type="button" className="annuler" onClick={() => { setShowModalEnseignant(false) }} value="Annuler" />


         


        </MyModal>

        <div className="space"></div>


        </div>
    );
}

export default NewUser;
