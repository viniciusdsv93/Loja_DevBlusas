import { ListarProdutosController } from "../../application/controllers/listar-produtos/listar-produtos";
import { Controller } from "../../application/controllers/protocols/controller";
import { IProdutosRepository } from "../../application/repositories/produtos-repository";
import { ListarProdutos } from "../../application/usecases/listar-produtos/listar-produtos";
import { InMemoryProdutosRepository } from "../../infra/database/in-memory/produtos-repository";
import { MongoProdutosRepository } from "../../infra/database/mongo/produtos-repository";

export const makeListarProdutosController = (): Controller => {
	const env = process.argv[2].split(":")[1];

	const inMemoryProdutosRepository: IProdutosRepository =
		env == "dev" ? new MongoProdutosRepository() : new MongoProdutosRepository();
	const listarProdutosUsecase: ListarProdutos = new ListarProdutos(
		inMemoryProdutosRepository
	);
	return new ListarProdutosController(listarProdutosUsecase);
};
