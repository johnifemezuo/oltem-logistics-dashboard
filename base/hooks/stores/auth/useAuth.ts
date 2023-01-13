import { getCookie, removeCookies, setCookie } from "cookies-next";
import { create } from "zustand";
import { ILoginData } from "../../../../components";

const THIRTY_MINUTES_IN_MILLISECONDS = 1800000;
export interface IAuth {
  session: ILoginData | undefined;
  authToken: string | undefined;
  loginUser: (userData: ILoginData | undefined) => void;
  logout: () => void;
  setToken: (authToken: string | undefined) => void;
}

/**
 *
 * manage login session with cookies
 */
export const useAuth = create<IAuth>((set) => ({
  get session() {
    const userObj = getCookie("session") as string;
    return userObj ? JSON.parse(userObj) : undefined;
  },

  get authToken() {
    let authTokenStr = getCookie("authToken") as string;
    const { authToken }: { authToken: string } = authTokenStr
      ? JSON.parse(authTokenStr)
      : {};

    return authToken;
  },

  loginUser: (userData: ILoginData | undefined) => {
    const date = new Date();

    date.setMilliseconds(THIRTY_MINUTES_IN_MILLISECONDS); // expire session in 7hrs

    const sessionData = JSON.stringify(userData);
    setCookie("session", sessionData, { expires: date });

    return set(() => ({ session: userData }));
  },

  logout: () => {
    removeCookies("authToken");
    removeCookies("session");
    return set(() => ({ authToken: undefined, session: undefined }));
  },

  setToken: (authToken: string | undefined) => {
    const date = new Date();
    date.setMilliseconds(THIRTY_MINUTES_IN_MILLISECONDS); // expire authToken in 7hrs

    setCookie("authToken", JSON.stringify({ authToken }), {
      expires: date,
    });

    return set(() => ({ authToken }));
  },
}));
