import express from "express";
import * as dotenv from "dotenv";
import { router } from "../routes/routes";
import { bodyParser } from "../middlewares/body-parser";
import { contentType } from "../middlewares/content-type";
import { cors } from "../middlewares/cors";
dotenv.config();

export class App {
	private readonly express: express.Application;
	private readonly port = process.env.PORT || 4444;

	constructor() {
		this.express = express();
		this.middlewares();
		this.router();
		this.listen();
	}

	private router() {
		this.express.use(router);
	}

	private middlewares() {
		this.express.use(bodyParser);
		this.express.use(contentType);
		this.express.use(cors);
	}

	private listen() {
		this.express.listen(this.port, () => {
			console.log(`Server rodando em http://localhost:${this.port}`);
		});
	}
}
