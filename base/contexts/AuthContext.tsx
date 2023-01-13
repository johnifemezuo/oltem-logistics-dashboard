import { useRouter } from "next/router";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { DashboardLayout } from "../../components";
import { useAuth } from "../hooks";
import { IAuthLayoutContext } from "./contexts.interface";

export const AuthLayoutContext = createContext<Partial<IAuthLayoutContext>>({});

export function AuthContext({ children }: { children: ReactNode }) {
  const { route, push } = useRouter();
  const {
    session: user,
    loginUser: setUser,
    setToken: setAuthToken,
    authToken,
    logout,
  } = useAuth();
  const [timeStamp] = useState<Date>(new Date());

  useEffect(() => {
    console.log({ route, authToken, user });
    // check if route is dashboard
    if (route.startsWith("/dashboard")) {
      if (!authToken || !user) {
        push("/");
      }
    } else if (authToken && user && route === "/") {
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
      {route.startsWith("/dashboard") ? (
        <DashboardLayout>{children}</DashboardLayout>
      ) : (
        children
      )}
    </AuthLayoutContext.Provider>
  );
}
