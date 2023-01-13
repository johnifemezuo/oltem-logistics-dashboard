import { Dispatch } from "react";
import { ILoginData } from "../../components";

export interface IAuthLayoutContext {
  user: ILoginData | undefined;
  timeStamp: Date;
  setUser: Dispatch<ILoginData | undefined>;
  setAuthToken: Dispatch<string | undefined>;
  authToken: string | undefined;
}
