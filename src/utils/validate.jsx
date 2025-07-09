export const checkValidateData = (name, email, password, isSignInForm) => {
  if (!isSignInForm) {
    const isNameValid = /^[A-Za-z][A-Za-z\s'-]*$/.test(name);
    if (!isNameValid) return "Name is not valid";
  }

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
