import React from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import PropTypes from "prop-types";
import { addEnseignant, editEnseignant, getEnseignants } from "./Requests";
import { connect } from "react-redux";
import { setEnseignants } from "./ActionCreator";
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
    password: yup.string().required("Mot de passe obligatoire"),
    specialite: yup.string().required("specialité obligatoire"),
    grade: yup
        .string()
        .required("Grade obligatoire")
        .default("Professeur"),
    genie: yup
        .string()
        .required("Filiere obligatoire")
        .default("Informatique"),
    email: yup
        .string()
        .email("Email invalide")
        .required("Email obligatoire"),
});
const GRADES = [
    "Professeur",
    "Docteur",
    "Ingénieur"
]

function EnseignantForm({
                      edit,
                      onSave,
                      setEnseignants,
                      enseignant,
                      onCancelAdd,
                      onCancelEdit,
                  }) {
    const handleSubmit = async evt => {
        const isValid = await schema.validate(evt);
        if (!isValid) {
            return;
        }
        if (!edit) {
            await addEnseignant(evt);
        } else {
            await editEnseignant(evt);
        }
        const response = await getEnseignants();
        setEnseignants(response.data);
        onSave();
    };
    return (
        <div className="form">
            <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={enseignant || {}}
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
                            <Label>email</Label>
                            <Field name="email" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Mot de passe</Label>
                            <Field name="password" type="text" component={input} />
                        </FormGroup>
                        <FormGroup>
                            <Label>Grade</Label>
                            <Field
                                name="grade"
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
                                                {GRADES.map(c => (
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

                        <FormGroup>
                            <Label>Spécialité</Label>
                            <Field name="specialite" type="text" component={input} />
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
EnseignantForm.propTypes = {
    edit: PropTypes.bool,
    onSave: PropTypes.func,
    onCancelAdd: PropTypes.func,
    onCancelEdit: PropTypes.func,
    enseignant: PropTypes.object,
};
const mapStateToProps = state => {
    return {
        enseignants: state.enseignants,
    };
};
const mapDispatchToProps = dispatch => ({
    setEnseignants: enseignants => dispatch(setEnseignants(enseignants)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EnseignantForm);
