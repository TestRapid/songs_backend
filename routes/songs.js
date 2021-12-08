import { Router } from "express";

import api from "../apis/api.js";

const url = "songs";

const songs = Router();

songs
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
			const re = await api.patch(`/${url}/${req.params.id}`, req.body);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	})
	.delete(async (req, res) => {
		try {
			const re = await api.delete(`/${url}/${req.params.id}`, req.body);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	});

songs
	.route("/")
	.get(async (req, res) => {
		try {
			const re = await api.get(`/${url}`);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	})
	.post(async (req, res) => {
		try {
			const re = await api.post(`/${url}`, req.body);
			res.json(re.data);
		} catch (err) {
			console.log(err);
		}
	});

export default songs;
