import connectToDatabase from "../db/connection.js";
import bcrypt from "bcrypt";

// update user information

export async function Update(req, res) {
	const { id } = req.params; // get the user id from the request URL
	const { fullName, email, password } = req.body; // get the updated user info from the request body
	let connection;

	try {
		connection = connectToDatabase(); // Create a database connection

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Update the user info in the database
		const query =
			"UPDATE users SET fullName = ?, email = ?, password = ? WHERE id = ?";
		const [result] = await connection
			.promise()
			.query(query, [fullName, email, hashedPassword, id]);

		// Check if the update was successful
		if (result.affectedRows === 0) {
			res.status(400).send("User not found!");
			return;
		}

		res.status(200).send("User info updated successfully.");
	} catch (err) {
		console.log(err);
		res.status(500).send("Error occurred while updating user info.");
	} finally {
		if (connection) {
			connection.end(); // Close the database connection
		}
	}
}
