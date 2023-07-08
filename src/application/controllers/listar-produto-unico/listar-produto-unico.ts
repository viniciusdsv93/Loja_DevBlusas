import { IListarProdutoUnico } from "../../../domain/usecases/listar-produto-unico";
import { ok } from "../helpers/http";
import { Controller } from "../protocols/controller";
import { HttpRequest } from "../protocols/http";

export class ListarProdutoUnicoController implements Controller {
	private listarProdutoUnicoUsecase: IListarProdutoUnico;

	constructor(listarProdutoUnicoUsecase: IListarProdutoUnico) {
		this.listarProdutoUnicoUsecase = listarProdutoUnicoUsecase;
	}

	async handle(HttpRequest: HttpRequest) {
		const { params } = HttpRequest;
		const { id } = params;
		const produto = await this.listarProdutoUnicoUsecase.execute(id);
		return ok(produto);
	}
}
