import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Please enter a valid email")
    .min(5, "Must be longer than 5 characters")
    .max(255, "Must be shorter than 255 characters")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});
