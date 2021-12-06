import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';
import PrivateRouters from './PrivateRouters';
import PublicRouter from './PublicRouter';


const AppRouters = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const auth = getAuth();
         onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
               
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })


    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <div>
                    <Switch>
                        <PublicRouter isAutenticated={isLoggedIn} path="/auth/" component={AuthRouter} />
                        <PrivateRouters isAutenticated={isLoggedIn} path="/" component={JournalScreen} />
                    </Switch>

                </div>

            </div>

        </Router>
    )
}

export default AppRouters
