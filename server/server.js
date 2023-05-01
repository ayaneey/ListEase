import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/Auth.js";
import connectToDatabase from "./db/connection.js";

const app = express();
app.use(express.json());

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Establish the database connection
const db = connectToDatabase();

// Use the db connection in your server
// For example:
// app.get("/api/users", (req, res) => {
// 	// Use the db connection to execute queries
// 	db.query("SELECT * FROM users", (err, results) => {
// 		if (err) {
// 			console.error(err);
// 			res.status(500).json({ error: "Error retrieving users" });
// 		} else {
// 			res.json(results);
// 		}
// 	});
// });

app.use("/api/auth", authRoutes);

app.listen(5004, () => {
	console.log("Server started on port 5004");
});
