import React from "react";
import { useState, useEffect } from "react";
import Modal from 'react-modal';
import {
    Button,
    ModalHeader,
    ModalBody,
    ButtonToolbar,
    Table,
} from "reactstrap";
import { connect } from "react-redux";
import {getEnseignants, deleteEnseignant} from "./Requests";
import AddIcon from "@material-ui/icons/Add";
import EnseignantForm from "./EnseignantForm";
import {setEnseignants} from "./ActionCreator";
import Enseignant from "./Enseignant";
function Enseignants() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [selectedEnseignant, setSelectedEnseignant] = useState({});
    const [enseignant, setEnseignants] = useState([]);
    const openModal = () => {
        setOpenAddModal(true);
    };
    const closeModal = () => {
        setOpenAddModal(false);
        setOpenEditModal(false);
        getData().then(r => console.log(r));
    };
    const cancelAddModal = () => {
        setOpenAddModal(false);
    };
    const editEnseignant = enseignant => {
        setSelectedEnseignant(enseignant);
        setOpenEditModal(true);
    };
    const cancelEditModal = () => {
        setOpenEditModal(false);
    };
    const getData = async () => {
        const response = await getEnseignants();
        setEnseignants(response.data);
        setInitialized(true);
    };
    const deleteSelectedEnseignant = async id => {
        await deleteEnseignant(id);
        getData();
    };
    useEffect(() => {
        if (!initialized) {
            getData();
        }
    });
    return (
        <div className="home-page">
            <h1>Utilisateurs</h1>
            <Modal isOpen={openAddModal}>
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <AddIcon/>{" "}<h2>Ajouter un utilisateur</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <EnseignantForm
                            edit={false}
                            onSave={closeModal.bind(this)}
                            onCancelAdd={cancelAddModal}
                        />
                    </div>
                </div>
            </Modal>
            <Modal isOpen={openEditModal}>
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <AddIcon/>{" "}<h2>Modifier un enseignant</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <EnseignantForm
                            edit={true}
                            onSave={closeModal.bind(this)}
                            enseignant={selectedEnseignant}
                            onCancelEdit={cancelEditModal}
                        />
                    </div>
                </div>
            </Modal>
            <ButtonToolbar>
                <Button variant="outline-primary" onClick={openModal}>
                    Ajouter un enseignant
                </Button>
            </ButtonToolbar>
            <br />
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Spécialité</th>
                    <th>Grade</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {enseignant.map(c => (
                    <tr key={c.id}>
                        <td>{c.nom}</td>
                        <td>{c.prenom}</td>
                        <td>{c.email}</td>
                        <td>{c.specialite}</td>
                        <td>{c.grade}</td>
                        <td>
                            <Button
                                variant="outline-primary"
                                onClick={editEnseignant.bind(this, c)}
                            >
                                Modifier
                            </Button>
                        </td>
                        <td>
                            <Button
                                variant="outline-primary"
                                onClick={deleteSelectedEnseignant.bind(this, c.id)}
                            >
                                Supprimer
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        Enseignants: state.enseignants,
    };
};
export default connect(
    mapStateToProps,
    null
)(Enseignants);
