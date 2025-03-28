// Objetos
// Objeto literal
const user = {
  username: "emipe",
  password: "123456",
  role: "user",
  isActive: true,
  login: () => {
    console.log("Login successfull");
  },
};

user.username = "johndoe";
user.fullName = "John Doe";

// console.log(user);

// Funciones constructoras
// function User(username, password, role) {
//   this.username = username;
//   this.password = password;
//   this.role = role;
// }

// User.prototype.login = () => {
//   console.log("Login successfull");
// };

// const newUser = new User("emipe", "123456", "user");
// console.log(newUser);

// Array.prototype.log = function () {
//   console.log(this);
// };

// const array = [1, 2, 3, 4, 5];
// array.log();

// Class
class User {
  username;
  password;
  role;
  // Atributo privado
  #privateProperty = "private property";

  /**
   *
   * @param { string } username
   * @param { string } password
   * @param { string } role
   */
  constructor(username, password, role) {
    this.username = username;
    this.password = password;
    this.role = role;
  }

  get privateProperty() {
    return this.#privateProperty;
  }

  /**
   * Login method
   *
   * @description This method is used to login the user
   * @returns {void}
   */
  login() {
    console.log("Login successfull");
  }
}

const newUser = new User("emipe", "123456", "user");
// console.log(newUser.#privateProperty); // ❌
console.log(newUser.privateProperty); // ✅
