import connectToDatabase from "../db/connection.js";

export function Register(req, res) {
	const { fullName, email, password } = req.body;
	const connection = connectToDatabase(); // Create a database connection

	// Check if the fullName or email already exists in the database
	const checkQuery = "SELECT * FROM users WHERE fullName = ? OR email = ?";
	connection.query(checkQuery, [fullName, email], (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send("Error occurred while checking user data.");
		} else {
			if (result.length > 0) {
				// The fullName or email is already taken
				res.status(400).send("fullName or email already taken!");
			} else {
				// Insert the new user details into the database
				const insertQuery =
					"INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)";
				connection.query(
					insertQuery,
					[fullName, email, password],
					(err, result) => {
						if (err) {
							console.log(err);
							res.status(500).send("Error occurred while inserting user data.");
						} else {
							// The registration is successful
							res.status(200).send("Registration successful!");
						}
					}
				);
			}
		}
		connection.end(); // Close the database connection
	});
}
