import React, { createContext, useEffect, useState } from 'react'
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.config';


const auth = getAuth(app)
export const AuthContext=createContext();

const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);

    const providerLogin=(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log("inside auth state change", currentUser);
            setUser(currentUser);
        })

        return ()=> unSubscribe();
    },[])

    const authInfo={user, providerLogin, createUser, signIn, logOut};
    console.log(signIn);
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;