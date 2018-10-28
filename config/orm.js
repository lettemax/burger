// Dependencies
var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
    selectAll: function() {
      var queryString = "SELECT * FROM burgers";
      connection.query(queryString, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(burger_name) {
      var queryString = "INSERT INTO burgers (burger_name) VALUES ?;";
      console.log(queryString);
      connection.query(queryString, [burger_name], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(id) {
      var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?;";
      connection.query(
        queryString, 
        [id],
        function(err, result) {
          if (err) throw err;
          console.log(result);
        }
      );
    }
  };
  
  module.exports = orm;