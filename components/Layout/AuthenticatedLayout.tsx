import { FC, ReactNode } from "react";

interface IAuthenticatedLayout {
  children: ReactNode;
}

const AuthenticatedLayout: FC<IAuthenticatedLayout> = ({ children }) => {
  return (
    <div>
      Authenticated
      <div>{children}</div>
    </div>
  );
};

export default AuthenticatedLayout;
