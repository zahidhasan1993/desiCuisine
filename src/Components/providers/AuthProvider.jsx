import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../../firebaseConfig/firebase.config";

export const DataProvider = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loader,setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoader(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoader(true)
    return signInWithPopup(auth, githubProvider);
  };
  const emailSignUp = (email,password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password);
  };
  const emailLogin = (email,password) => {
    setLoader(true)
      return signInWithEmailAndPassword(auth,email,password);
  };

  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };
  const UpdateUser = (user,name,photo) =>{
    return updateProfile(user,{
      displayName: name,
      photoURL : photo
    })
  };


  const functions = {
    googleLogin,
    logOut,
    user,
    githubLogin,
    emailSignUp,
    emailLogin,
    loader,
    UpdateUser
  };
  return (
    <DataProvider.Provider value={functions}>{children}</DataProvider.Provider>
  );
};

export default AuthProvider;
