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
import EtudiantForm from "./EtudiantForm";
import { connect } from "react-redux";
import { getEtudiants, deleteEtudiant } from "./Requests";
import AddIcon from "@material-ui/icons/Add";
function Etudiants() {
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [initialized, setInitialized] = useState(false);
    const [selectedEtudiant, setSelectedEtudiant] = useState({});
    const [etudiant, setEtudiants] = useState([]);
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
    const editEtudiant = (etudiant) => {
        setSelectedEtudiant(etudiant);
        setOpenEditModal(true);
    };
    const cancelEditModal = () => {
        setOpenEditModal(false);
    };
    const getData = async () => {
        const response = await getEtudiants();
        setEtudiants(response.data);
        setInitialized(true);
    };
    const deleteSelectedEtudiant = async id => {
        await deleteEtudiant(id);
        getData();
    };
    useEffect(() => {
        if (!initialized) {
            getData();
        }
    });
    return (
        <div className="home-page">
            <h1 className="text-center">Etudiants</h1>
            <Modal isOpen={openAddModal}>
                <div className="modal-add-doc">
                    <div className="header-add-doc">
                        <AddIcon/>{" "}<h2>Ajouter un utilisateur</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <EtudiantForm
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
                        <AddIcon/>{" "}<h2>Modifier un etudiant</h2>
                    </div>
                    <hr/>
                    <div className="content">
                        <EtudiantForm
                            edit={true}
                            onSave={closeModal.bind(this)}
                            etudiant={selectedEtudiant}
                            onCancelEdit={cancelEditModal}
                        />
                    </div>
                </div>
            </Modal>
            <ButtonToolbar>
                <Button variant="outline-primary" onClick={openModal}>
                    Ajouter un etudiant
                </Button>
            </ButtonToolbar>
            <br />
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Matricule</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {etudiant.map(c => (
                    <tr key={c.id}>
                        <td>{c.nom}</td>
                        <td>{c.prenom}</td>
                        <td>{c.email}</td>
                        <td>{c.matricule}</td>
                        <td>
                            <Button
                                variant="outline-primary"
                                onClick={editEtudiant.bind(this, c)}
                            >
                                Modifier
                            </Button>
                        </td>
                        <td>
                            <Button
                                variant="outline-primary"
                                onClick={deleteSelectedEtudiant.bind(this, c.etudiantId)}
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
        etudiants: state.etudiants,
    };
};
export default connect(
    mapStateToProps,
    null
)(Etudiants);
