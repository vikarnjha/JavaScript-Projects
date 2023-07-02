class User {
  constructor(username, password) {
    this.username = username;
    this._password = password;
  }

  get password() {
    return this._password.replace(/./g, "*"); // replace all characters with asterisks
  }

  set password(newPassword) {
    // check if the new password is valid
    const hasNumber = /\d/.test(newPassword);
    const hasUppercase = /[A-Z]/.test(newPassword);
    const isValid = newPassword.length >= 8 && hasNumber && hasUppercase;

    if (isValid) {
      this._password = newPassword;
    } else {
      console.error(
        "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
      );
    }
  }
}

// Test the getter and setter for password
const user1 = new User("Mithun", "Password123");
console.log(user1.password); // Output: "***********"

user1.password = "MyPassword"; // This should log an error message
console.log(user1.password); // Output: "***********"

user1.password = "MyPassword123";
console.log(user1.password); // Output: "*************"
