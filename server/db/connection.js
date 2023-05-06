import mysql from "mysql2";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Create a function to establish a database connection
const connectToDatabase = () => {
	const connection = mysql.createConnection({
		host: process.env.USER_BRANCH1_DB_HOST,
		user: process.env.USER_BRANCH1_DB_USER,
		password: process.env.USER_BRANCH1_DB_PASSWORD,
		database: process.env.USER_BRANCH1_DB_DATABASE,
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
