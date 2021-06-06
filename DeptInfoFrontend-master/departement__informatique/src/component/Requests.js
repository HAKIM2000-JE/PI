const APIURL = 'http://localhost:8081';
const axios = require('axios');

export const getEnseignants = () => axios.get(`${APIURL}/enseignant`);
export const addEnseignant = (data) => axios.post(`${APIURL}/enseignant/add`, data);
export const editEnseignant= (data) => axios.put(`${APIURL}/enseignant/edit/${data.EnseignantId}`, data);
export const deleteEnseignant = (id) => axios.delete(`${APIURL}/enseignant/delete/${id}`);

export const getEtudiants = () => axios.get(`${APIURL}/etudiant`);
export const addEtudiant = (data) => axios.post(`${APIURL}/etudiant/add`, data);
export const editEtudiant = (data) => axios.put(`${APIURL}/etudiant/edit/${data.etudiantId}`, data);
export const deleteEtudiant = (id) => axios.delete(`${APIURL}/etudiant/delete/${id}`);
