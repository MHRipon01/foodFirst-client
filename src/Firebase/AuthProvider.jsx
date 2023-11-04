import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "./firebase.config";



export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    const auth = getAuth(app)

//create user 
const createUser = (email , password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}





//login 
const signIn = (email ,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth ,email ,password)
}

//logout
const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}



//google login
const googleLogin = new GoogleAuthProvider()


//save user 
useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
        // console.log('on auth state change' , currentUser);
        setUser(currentUser)
        setLoading(false)
        // console.log(user);
    })
return () =>{
    unsubscribe
}
},[auth,user])




    const authInfo = {
        auth,
        user,
        logOut,
        createUser,
        loading,
        signIn,
        googleLogin,

     }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
   
    );
};

export default AuthProvider;