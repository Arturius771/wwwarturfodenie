// Install necessary npm packages: express, mysql
// npm install express mysql

const express = require("express");
const mysql = require("mysql");
const fs = require("fs");

const app = express();
const port = 3000;
const credentials = JSON.parse(fs.readFileSync("token.json", "utf-8")); // Need a token.json

console.log("credentials: ", credentials.user, credentials.password);

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "www.arturfoden.ie",
  user: credentials.user,
  password: credentials.password,
  database: "a569305_courses",
});

// Connect to MySQL
connection.connect();

// Define a route to retrieve data from the database
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM test";

  // Execute the query
  connection.query(query, (error, results) => {
    if (error) throw error;

    // Send the results as JSON
    res.json(results);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
