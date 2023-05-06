import connectToDatabase from "../db/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register a new user

export async function Register(req, res) {
	const { fullName, email, password } = req.body;

	const connection = connectToDatabase(); // Create a database connection

	try {
		// Check if the fullName or email already exists in the database
		const checkQuery = "SELECT * FROM users WHERE fullName = ? OR email = ?";
		const [checkResult] = await connection
			.promise()
			.query(checkQuery, [fullName, email]);

		if (checkResult.length > 0) {
			// The fullName or email is already taken
			return res.status(400).send("Full Name or Email already taken!");
		}

		// Hash the password
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insert the new user details into the database
		const insertQuery =
			"INSERT INTO users (fullName, email, password) VALUES (?, ?, ?)";
		const [insertResult] = await connection
			.promise()
			.query(insertQuery, [fullName, email, hashedPassword]);

		// The registration is successful
		return res.status(200).send({
			message: "Registration successful!",
			user: { fullName, email },
		});
	} catch (error) {
		console.log(error);
		return res.status(500).send("Error occurred while processing user data.");
	} finally {
		connection.end(); // Close the database connection
	}
}

// sign in a user
export async function SignIn(req, res) {
	const { email, password } = req.body;
	let connection;

	try {
		connection = connectToDatabase(); // Create a database connection

		// Check if the email exists in the database
		const query = "SELECT * FROM users WHERE email = ?";
		const [rows, fields] = await connection.promise().query(query, [email]);
		if (rows.length === 0) {
			res.status(400).send("Invalid email or password!");
			return;
		}

		// Compare the hashed password with the provided password
		const match = await bcrypt.compare(password, rows[0].password);
		if (!match) {
			res.status(400).send("Invalid email or password!");
			return;
		}

		// Generate a JWT token and include user data
		const token = jwt.sign(
			{
				id: rows[0].id,
				email: rows[0].email,
				fullName: rows[0].fullName,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "24h" }
		);

		// Save the token into the token table
		const insertQuery = "INSERT INTO token (token, user_id) VALUES (?, ?)";
		await connection.promise().query(insertQuery, [token, rows[0].id]);

		// Return user data and token
		const { id, fullName, email: userEmail, created_at, updated_at } = rows[0];
		const userData = { id, fullName, email: userEmail, created_at, updated_at };
		res.status(200).json({ token, user: userData });
	} catch (err) {
		console.log(err);
		res.status(500).send("Error occurred while checking user credentials.");
	} finally {
		if (connection) {
			connection.end(); // Close the database connection
		}
	}
}
