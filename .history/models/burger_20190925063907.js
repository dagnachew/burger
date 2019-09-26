// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  insert: function(cols, vals, cb) {
    orm.all("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  update: function(objColVals, condition, cb) {
    orm.all("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.all("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
