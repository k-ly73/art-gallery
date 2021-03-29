import React, { useEffect, useState, useContext } from "react";
import { auth } from '../firebase/firebase'



const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email, password).then((authUser) => {
            authUser.updateProfile({
                displayName: `${email.match(/^([^@]*)@/)[1]}`,
            });
        });
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout(){
        return auth.signOut()
    }
    const value = {
        currentUser,
        login, 
        signup,
        logout
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);

        });
        return unsubscribe
    }, []);



    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};