import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
  confirm_password: Yup.string()
    .required("Please enter your confirm password")
    .oneOf([Yup.ref("password"), null, "Password must match"]),
});
