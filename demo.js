"use strict";
(function () {
  const person = {
    firstName: "Hassan",
    lastName: "Masood",
    age: 26,
    isAdult() {
      return this.age >= 18;
    },
  };

  const user = {};
  Object.assign(user, person);
  display(user);
})();
