import { Produto } from "../../../domain/entities/produto";
import { IListarProdutoUnico } from "../../../domain/usecases/listar-produto-unico";
import { IProdutosRepository } from "../../repositories/produtos-repository";

export class ListarProdutoUnico implements IListarProdutoUnico {
	private produtosRepository: IProdutosRepository;

	constructor(produtosRepository: IProdutosRepository) {
		this.produtosRepository = produtosRepository;
	}

	async execute(id: string): Promise<Produto | null> {
		return await this.produtosRepository.listarProduto(id);
	}
}
