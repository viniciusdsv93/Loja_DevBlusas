import { Request, Response } from "express";
import { Controller } from "../../application/controllers/protocols/controller";

export const expressRouteAdapter = (controller: Controller) => {
	return async (req: Request, res: Response) => {
		const resposta = await controller.handle(req);
		if (resposta.statusCode === 200 || resposta.statusCode === 201) {
			res.status(resposta.statusCode).json(resposta.body);
		} else {
			res.status(resposta.statusCode).json({
				error: resposta.body.message,
			});
		}
	};
};
