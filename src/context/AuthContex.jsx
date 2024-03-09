import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { doc, setDoc} from 'firebase/firestore'

const AuthContext = createContext();

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState({});

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe()
    }, []);

    function subscribe(email, password) {
        createUserWithEmailAndPassword(auth, email, password);
        setDoc(doc(db,"users", email),{
            favShows:  [],
        });
    };
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    };
    function logOut() {
        return signOut(auth)
    }
    
    return (
        <AuthContext.Provider value={{ user, subscribe, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export function UserAuth() {
    return useContext(AuthContext);
}