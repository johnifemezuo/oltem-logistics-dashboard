import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { ILoginData } from "../../components";
import { useAuth } from "../hooks";
import { IAuthLayoutContext } from "./contexts.interface";

export const AuthLayoutContext = createContext<Partial<IAuthLayoutContext>>({});

export function AuthContext({ children }: { children: ReactNode }) {
  const { route, push } = useRouter();
  const { session, setToken: setAuthToken, authToken, logout } = useAuth();
  const [timeStamp] = useState<Date>(new Date());
  const [user, setUser] = useState<ILoginData["user"]>();
  useEffect(() => {
    if (user) {
      // log the last time user was update
      // setTimeStamp(new Date());
    }
  }, [user]);

  useEffect(() => {
    // check if route is dashboard
    if (route.startsWith("/dashboard")) {
      if (!authToken || !session) {
        logout();
        push("/");
      }
    } else if (authToken && user && route === "/") {
      setUser(session?.user);
      push("/dashboard");
    }
  }, [route, authToken, user]);

  const contextOptions: IAuthLayoutContext = useMemo(
    () => ({
      user,
      setUser,
      timeStamp,
      authToken,
      setAuthToken,
    }),
    []
  );

  return (
    <AuthLayoutContext.Provider value={contextOptions}>
      {children}
    </AuthLayoutContext.Provider>
  );
}
