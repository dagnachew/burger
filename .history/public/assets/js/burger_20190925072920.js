// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".eatburger").on("click", function(event) {
    event.preventDefault();

    var id = $(this).data("id");
    // var newSleep = $(this).data("newsleep");

    var devouredState = {
      devoured: 1
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(
      function() {
        console.log("burger eaten");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newburger").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added a new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".deleteburger").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("id");

    // Send the POST request.
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(location.reload());
  });
});
