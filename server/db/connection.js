import mysql from "mysql2";

// Create a function to establish a database connection
const connectToDatabase = () => {
	const connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "root123?",
		database: "ListEase",
	});

	connection.connect((err) => {
		if (err) {
			console.error("Error connecting to the database:", err);
			return;
		}
		console.log("Connected to the database.");
	});

	return connection;
};

export default connectToDatabase;
