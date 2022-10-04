import { createContext, useContext, useState, useEffect } from "react";
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        GoogleAuthProvider,
        signInWithPopup
        } from 'firebase/auth'
import {auth} from './firebase'

const userAuthContext= createContext();

export const UserAuthContextProvider =({children})=>{
    const [user, setUser] = useState("")

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn=(email, password)=>{
        return signInWithEmailAndPassword(auth,email, password)
    }
    const logOut=()=>{
        return signOut(auth)  
    }
    const googleSignIn=()=>{
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googleAuthProvider)
    }
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unsub()
        }
    }, [])

    return (
        <userAuthContext.Provider value={{user, signUp, logIn, logOut, googleSignIn}}>{children}</userAuthContext.Provider>
    )
}

export const useUserAuth =()=>{
    return useContext(userAuthContext)
}