import express from "express";
import cors from "cors";

import users from "./routes/users.js";
import songs from "./routes/songs.js";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.json("server is running");
});

app.use("/songs", songs);
app.use("/users", users);

app.use((req, res) => {
	res.status(404).json("invalid url or path");
});

app.listen(PORT, () => {
	console.log(
		`server started on http://localhost:${PORT}\njson server on http://localhost:5001`
	);
});
