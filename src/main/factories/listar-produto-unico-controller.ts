import { ListarProdutoUnicoController } from "../../application/controllers/listar-produto-unico/listar-produto-unico";
import { Controller } from "../../application/controllers/protocols/controller";
import { IListarProdutoUnicoRepository } from "../../application/repositories/produtos-repository";
import { ListarProdutoUnico } from "../../application/usecases/listar-produto-unico/listar-produto-unico";
import { MongoProdutosRepository } from "../../infra/database/mongo/produtos-repository";

export const makeListarProdutoUnicoController = (): Controller => {
	const env = process.argv[2].split(":")[1];

	const produtosRepository: IListarProdutoUnicoRepository =
		env == "dev" ? new MongoProdutosRepository() : new MongoProdutosRepository();
	const listaProdutoUnicoUsecase: ListarProdutoUnico = new ListarProdutoUnico(
		produtosRepository
	);
	return new ListarProdutoUnicoController(listaProdutoUnicoUsecase);
};
