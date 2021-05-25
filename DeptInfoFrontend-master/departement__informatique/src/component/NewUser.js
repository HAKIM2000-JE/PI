import React, {useState} from 'react';
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



    const forceUpdate = useForceUpdate();


    const [addUser, setAddUser] = useState(false);

    const openModalAdd = () => {
        setAddUser(true);
    };
    const closeModalAdd = () => {
        setAddUser(false);
    };


    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);

    return (
        <div>
            <button onClick={openModalAdd}>
                Ajouter un utilisateur
            </button>



            <div>
                {addUser && (<NewUserModal closeModal={closeModalAdd}/>)}
            </div>

        </div>
    );
}

export default NewUser;
