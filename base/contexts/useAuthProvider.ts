import { useContext } from "react";
import { AuthLayoutContext } from "./AuthContext";
import { IAuthLayoutContext } from "./contexts.interface";

export const useAuthProvider = () => {
  const { setUser, timeStamp, user, setAuthToken, authToken } =
    useContext<Partial<IAuthLayoutContext>>(AuthLayoutContext);
  return {
    setUser,
    timeStamp,
    user,
    setAuthToken,
    authToken,
  };
};
