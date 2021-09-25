import React, { createContext, useContext, useEffect } from "react";
import { auth } from "../firebaseConf";
import { useHistory } from "react-router-dom";
import { logUser } from "../data/navSlices";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/compat/app";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const user = useSelector((state) => state.nav.user);
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = async () => {
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return auth.signInAnonymously();
  };

  useEffect(() => {
    const unsubscribe = () =>
      auth.onAuthStateChanged(() => {
        if (auth.currentUser?.isAnonymous && auth.currentUser?.uid === user) {
          // dispatch(logUser({ user: auth.currentUser.uid, isMatched: true }));
          history.push("/");
        } else {
          dispatch(logUser({ user: "", isMatched: false }));
          history.push("/login");
        }
      });
    return unsubscribe();
  }, [history, user]);

  const logVal = {
    signIn,
  };

  return (
    <AuthContext.Provider
      value={{
        login: logVal,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
