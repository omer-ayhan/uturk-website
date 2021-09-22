import React, { createContext, useContext, useEffect } from "react";
import { auth } from "../firebaseConf";
import { useHistory } from "react-router-dom";
import { logUser } from "../data/channelSlices";
import { useDispatch } from "react-redux";

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const history = useHistory();

  const signIn = () => {
    return auth.signInAnonymously();
  };

  const signOut = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = () =>
      auth.onAuthStateChanged(() => {
        if (auth.currentUser) {
          dispatch(logUser({ user: auth.currentUser.uid }));
          history.push("/");
        } else {
          history.push("/login");
        }
      });
    return unsubscribe();
  }, [history]);

  const logVal = {
    signIn,
    signOut,
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
