const express = require("express");

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hdbrsObj = {
      burgers: data
    };
    console.log(hdbrsObj);
    res.render("index", hdbrsObj);
  });

router.post("/api/burgers", function(req, res) {
  burger.insert(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      console.log('post: wtf');
      // Send back the ID of new burger
      res.json({ id: result.insertId });
    }
  );
});
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.update({ devoured: req.body.devoured }, condition, function(
    result
  ) {
    if (result.changedRows === 0) {
      console.log('put: wtf');
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

  router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.delete(condition, function(result){
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } 
      res.status(200).end();
    })
  });
});

// Export routes for server.js to use.
module.exports = router;
