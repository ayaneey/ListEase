import jwt from "jsonwebtoken";
import { connectToDatabase } from "../db/connection.js";

export async function verifyToken(req, res, next) {
	const token = req.headers.authorization?.split(" ")[1];
	if (!token) {
		return res.status(401).send("Unauthorized");
	}

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const connection = connectToDatabase();
		const query = "SELECT * FROM token WHERE token = ?";
		const [rows, _] = await connection.promise().query(query, [token]);

		if (rows.length === 0) {
			return res.status(401).send("Unauthorized");
		}

		req.user = decoded;
		next();
	} catch (err) {
		console.log(err);
		return res.status(401).send("Unauthorized");
	}
}
