import { ListarProdutosController } from "../../application/controllers/listar-produtos/listar-produtos";
import { Controller } from "../../application/controllers/protocols/controller";
import { IListarProdutosRepository } from "../../application/repositories/produtos-repository";
import { ListarProdutos } from "../../application/usecases/listar-produtos/listar-produtos";
import { InMemoryProdutosRepository } from "../../infra/database/in-memory/produtos-repository";
import { MongoProdutosRepository } from "../../infra/database/mongo/produtos-repository";

export const makeListarProdutosController = (): Controller => {
	const env = process.argv[2].split(":")[1];

	const produtosRepository: IListarProdutosRepository =
		env == "dev" ? new MongoProdutosRepository() : new MongoProdutosRepository();
	const listarProdutosUsecase: ListarProdutos = new ListarProdutos(produtosRepository);
	return new ListarProdutosController(listarProdutosUsecase);
};
