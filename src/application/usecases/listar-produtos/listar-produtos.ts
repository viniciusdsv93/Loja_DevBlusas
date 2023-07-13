import { IListarProdutos } from "../../../domain/usecases/listar-produtos";
import { IListarProdutosRepository } from "../../repositories/produtos-repository";

export class ListarProdutos implements IListarProdutos {
	private produtosRepository: IListarProdutosRepository;

	constructor(produtosRepository: IListarProdutosRepository) {
		this.produtosRepository = produtosRepository;
	}

	async execute() {
		return await this.produtosRepository.listar();
	}
}
