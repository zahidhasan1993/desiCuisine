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
} from "firebase/auth";
import app from "../../firebaseConfig/firebase.config";

export const DataProvider = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };
  const emailSignUp = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
  };
  const emailLogin = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const functions = {
    googleLogin,
    logOut,
    user,
    githubLogin,
    emailSignUp,
    emailLogin
  };
  return (
    <DataProvider.Provider value={functions}>{children}</DataProvider.Provider>
  );
};

export default AuthProvider;
