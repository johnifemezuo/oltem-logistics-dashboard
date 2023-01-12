import { yupInstance } from "../../../../base";

export const loginValidator = yupInstance.object({
  email: yupInstance.string().email().required("Email is required"),
  password: yupInstance.string().required("Password is required"),
});
