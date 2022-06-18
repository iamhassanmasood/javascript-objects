"use strict";
(function () {
  const person = {
    firstName: "Hassan",
    lastName: "Masood",
    age: 26,
    isAdult: function () {
      return this.age >= 18;
    },
  };
  display(person.isAdult());
})();
