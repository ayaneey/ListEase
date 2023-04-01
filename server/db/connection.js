const mysql = require("mysql2");

// Connect to database
const db = mysql.createConnection(
	{
		host: "localhost",
		// My MySQL username
		user: "root",
		// My MySQL password
		password: "root123?",
		database: "ListEase",
	},
	console.log("Connected to the database.")
);

module.exports = db;
