import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { IUser } from "./auth.interface";

interface IAuth {
  session: IUser | undefined;
  token: string | undefined;
  loginUser: (userData: any) => void;
  logout: () => void;
  setToken: (token: string) => void;
}

export const useAuth = create(
  persist<IAuth>(
    (set) => ({
      session: undefined,
      token: undefined,
      loginUser: (userData: any) => {
        return set(() => ({ session: userData }));
      },
      logout: () => {
        useAuth.persist.clearStorage();
      },
      setToken: (token: string) => {
        return set(() => ({ token }));
      },
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
