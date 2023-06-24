import { IListarProdutos } from "../../../domain/usecases/listar-produtos";
import { IProdutosRepository } from "../../repositories/listar-produtos-repository";

export class ListarProdutos implements IListarProdutos {
	private produtosRepository: IProdutosRepository;

	constructor(produtosRepository: IProdutosRepository) {
		this.produtosRepository = produtosRepository;
	}

	async execute() {
		return await this.produtosRepository.listar();
	}
}
