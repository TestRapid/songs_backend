import { Router } from "express";

import api from "../apis/api.js";

const url = "users";

const users = Router();

users
	.route("/:id")
	.get(async (req, res) => {
		try {
			const re = await api.get(`/${url}/${req.params.id}`);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	})
	.patch(async (req, res) => {
		try {
			const re = await api.get(`/${url}/${req.params.id}`, req.body);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	});

users.route("/").post(async (req, res) => {
	try {
		const re = await api.post(`/${url}`, req.body);
		res.json(re.data);
	} catch (err) {
		console.log(err);
	}
});

export default users;
