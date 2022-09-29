import * as Yup from "yup";


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const SignupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your Email"),
  mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid')

  .typeError("That doesn't look like a phone number")
  .positive("A phone number can't start with a minus")
  .integer("A phone number can't include a decimal point")
  .min(10)
  .required('A phone number is required'),

});
