// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectBurger: function(cb) {
    orm.selectBurger("burgers", function(res) {
      cb(res);
    });
  },
  insertBurger: function(cols, vals, cb) {
    orm.insertBurger("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // The variables cols and vals are arrays.
  updateBurger: function(objColVals, condition, cb) {
    orm.updateBurger("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteBurger: function(condition, cb) {
    orm.deleteOne("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
