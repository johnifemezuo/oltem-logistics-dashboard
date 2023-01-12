import { Dispatch } from "react";
import { ILoginData } from "../../components";

export interface IAuthLayoutContext {
  user: ILoginData["user"] | undefined;
  timeStamp: Date;
  setUser: Dispatch<ILoginData["user"] | undefined>;
  setAuthToken: Dispatch<string | undefined>;
  authToken: string | undefined;
}
