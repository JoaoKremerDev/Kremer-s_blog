import { db } from "../firebase/config.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useEffect, useState } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //cleanup
  //deal with memory leak

  const [cancelled, setCancelled] = useState(false);
  const [registered, setRegistered] = useState(null)

  const auth = getAuth();

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled();
    setLoading(true);
    setError(null);
    setRegistered(false);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      setRegistered(true);
      return user;
      
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
        setRegistered(false)
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
        setRegistered(false)
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        setRegistered(false)
      }
      setLoading(false);
      setError(systemErrorMessage);

    }
}

    useEffect(() => {
      return () => setCancelled(true);
    }, []);

    return {
      auth,
      createUser,
      error,
      loading,
      registered,
      setRegistered,
      
    };
  };

