import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import { addEtudiant, editEtudiant, getEtudiants } from "./Requests";
import { connect } from "react-redux";
import { setEtudiants } from "./ActionCreator";
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
} from "reactstrap";
import input from "./Input";
const schema = yup.object({
    nom: yup.string().required("Le nom est obligatoire"),
    prenom: yup.string().required("Le prenom est obligatoire"),
    matricule: yup.string().required("specialité obligatoire"),
    password: yup.string().required("Mot de passe obligatoire"),
    genie: yup
        .string()
        .required("Filiere obligatoire")
        .default("Informatique"),
    email: yup
        .string()
        .email("Email invalide")
        .required("Email obligatoire"),
});
const GENIES = [
    "Génie Industriel",
    "Génie Mécanique",
    "Génie civil",
    "Génie électrique",
    "Génie des réseaux et télécommunications",
    "Génie Informatique",
    "Génie MIS",
    "Génie des Procédés Industriels",
    "Génie minérale"
]
function EtudiantForm({
                      edit,
                      onSave,
                      setEtudiants,
                      etudiant,
                      onCancelAdd,
                      onCancelEdit,
                  }) {
    const handleSubmit = async evt => {
        const isValid = await schema.validate(evt);
        if (!isValid) {
            return;
        }
        if (!edit) {
            await addEtudiant(evt);
        } else {
            await editEtudiant(evt);
        }
        const response = await getEtudiants();
        setEtudiants(response.data);
        onSave();
    };
    return (
        <div className="form">
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={etudiant || {}}
            >
                {({
                      handleSubmit,
                      handleChange,
                      handleBlur,
                      values,
                      touched,
                      isInvalid,
                      errors,
                  }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Nom</Label>
                            <Field name="nom" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Prenom</Label>
                            <Field name="prenom" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Matricule</Label>
                            <Field name="matricule" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>email</Label>
                            <Field name="email" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Mot de passe</Label>
                            <Field name="password" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Génie</Label>
                            <Field
                                name="genie"
                                component={({ field, form: { touched, errors }, ...props }) => {
                                    return (
                                        <div>
                                            <Input
                                                invalid={!!(touched[field.name] && errors[field.name])}
                                                {...field}
                                                {...props}
                                                type="select"
                                                value={field.value || ""}
                                            >
                                                {GENIES.map(c => (
                                                    <option key={c} value={c}>
                                                        {c}
                                                    </option>
                                                ))}
                                            </Input>
                                            {touched[field.name] && errors[field.name] && (
                                                <FormFeedback>{errors[field.name]}</FormFeedback>
                                            )}
                                        </div>
                                    );
                                }}
                            />
                            <FormFeedback type="invalid">{errors.grade}</FormFeedback>
                        </FormGroup>
                        <Button type="button" style={{ marginRight: "10px" }} onClick={edit ? onCancelEdit : onCancelAdd}>
                            Annuler
                        </Button>
                        <Button type="submit" >
                            Enregistrer
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
EtudiantForm.propTypes = {
    edit: PropTypes.bool,
    onSave: PropTypes.func,
    onCancelAdd: PropTypes.func,
    onCancelEdit: PropTypes.func,
    etudiant: PropTypes.object,
};
const mapStateToProps = state => {
    return {
        etudiants: state.etudiants,
    };
};
const mapDispatchToProps = dispatch => ({
    setEtudiants: etudiants => dispatch(setEtudiants(etudiants)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EtudiantForm);
