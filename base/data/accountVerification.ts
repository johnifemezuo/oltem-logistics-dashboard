import { Routes } from "../../routes/routes-constants";

export const accounV = [
  {
    title: "Identity Verification",
    desc: "Verify your identity",
    link: Routes.VerifyIdentity,
  },

  {
    title: "Set PIN",
    desc: "Set PIN",
    link: Routes.SetPin,
  },
  {
    title: "Address Verification",
    desc: "Verify your address",
    link: Routes.VerifyAddress,
  },
  {
    title: "Business Information",
    desc: "Business information to increase your limit",
    link: Routes.BusinessInfo,
  },
];

export const AccountSecurity = [
  {
    title: "Update Password",
    desc: "Change your old password to a new one",
    link: Routes.UpdatePassword,
  },

  {
    title: "Update PIN",
    desc: "Change or reset your Ziga PIN",
    link: Routes.UpdatePin,
  },
];
