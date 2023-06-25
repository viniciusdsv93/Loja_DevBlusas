import express from "express";
import * as dotenv from "dotenv";
import { router } from "../routes/routes";
dotenv.config();

export class App {
	private readonly express: express.Application;
	private readonly port = process.env.PORT || 4444;

	constructor() {
		this.express = express();
		this.router();
		this.listen();
	}

	private router() {
		this.express.use(router);
	}

	private listen() {
		this.express.listen(this.port, () => {
			console.log(`Server rodando em http://localhost:${this.port}`);
		});
	}
}
