import { SET_USERS } from './actions';
import { SET_ENSEIGNANTS } from './actions';
import { SET_ETUDIANTS } from './actions';
const setUsers = (users) => {
    return {
        type: SET_USERS,
        payload: users
    }
};
export { setUsers };

const setEnseignants = (enseignants) => {
    return {
            type: SET_ENSEIGNANTS,
        payload: enseignants
    }
};
export { setEnseignants };
const setEtudiants = (etudiants) => {
    return {
        type: SET_ETUDIANTS,
        payload: etudiants
    }
};
export { setEtudiants };
