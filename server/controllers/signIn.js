import connectToDatabase from "../db/connection.js";

export function SignIn(req, res) {
	const { email, password } = req.body;
	const connection = connectToDatabase(); // Create a database connection

	// Check if the email and password match in the database
	const query = "SELECT * FROM users WHERE email = ? AND password = ?";
	connection.query(query, [email, password], (err, result) => {
		if (err) {
			console.log(err);
			res.status(500).send("Error occurred while checking user credentials.");
		} else {
			if (result.length > 0) {
				// The email and password match
				res.status(200).send("Sign-in successful!");
			} else {
				// Invalid email or password
				res.status(400).send("Invalid email or password!");
			}
		}
		connection.end(); // Close the database connection
	});
}
