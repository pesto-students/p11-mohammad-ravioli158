/** function validates password with following conditions
  1. the length must be atleast 8 characters long,
  2. password must not include 'password', and 
  3. it must contain atleast 1 upper case letter
  @param {string} password - The password to be checked for strength
*/
function isStrongPassword(password) {
  // regex expression to match atleast 1 uppercase letter
  const regex = new RegExp("[A-Z]");
  return (
    password.length >= 8 &&
    !password.toLowerCase().includes("password") &&
    regex.test(password)
  );
}
