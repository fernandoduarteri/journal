import { googleAuthProvider } from "../firebase/firabese-config";
import { types } from "../types/types";
import { getAuth, signInWithPopup } from "@firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { FinishLoading, startLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";

export const startLoginEmailPassword = (email, password) => {


    return (dispatch) => {
        dispatch( startLoading());
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;
                dispatch(login(user.uid, user.displayName));
                dispatch(FinishLoading());
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                dispatch(FinishLoading());
                Swal.fire('Error', error.message, 'error');
            });
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(async ({ user }) => {
                await updateProfile(user, { displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(e => {
                console.log(e);
                Swal.fire('Error', e.message, 'error');
            })

    }
}

export const startGoogleLogin = () => {

    return (dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = ()=>{
    return async (dispatch) =>{
        const auth = getAuth();
        await signOut(auth);
        dispatch(logout());
        dispatch(noteLogout());


    }
}

export const logout = ()=>({
    type: types.logout

})
