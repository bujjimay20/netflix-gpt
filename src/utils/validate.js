export const checkValidData = (email, password) => {
  const emailPattern = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  const passwordReg = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;

  const isEmailValid = emailPattern.test(email);
  const isPasswordValid = passwordReg.test(password);
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
