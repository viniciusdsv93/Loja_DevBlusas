import express from "express";
import * as dotenv from "dotenv";
dotenv.config();

export class App {
	private readonly express: express.Application;
	private readonly port = process.env.PORT || 4444;

	constructor() {
		this.express = express();
		this.listen();
	}

	private listen() {
		this.express.listen(this.port, () => {
			console.log(`Server rodando em http://localhost:${this.port}`);
		});
	}
}
