import { IListarProdutos } from "../../../domain/usecases/listar-produtos";
import { ok } from "../helpers/http";
import { Controller } from "../protocols/controller";

export class ListarProdutosController implements Controller {
	private listarProdutosUsecase: IListarProdutos;

	constructor(listarProdutosUsecase: IListarProdutos) {
		this.listarProdutosUsecase = listarProdutosUsecase;
	}

	async handle() {
		const produtos = await this.listarProdutosUsecase.execute();
		return ok(produtos);
	}
}
