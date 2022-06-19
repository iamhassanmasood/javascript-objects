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

  const user = {
    firstName: "Hassan",
    lastName: "Masood",
    age: 26,
    isAdult() {
      return this.age >= 18;
    },
  };

  display(Object.is(person, user)); //false
})();
