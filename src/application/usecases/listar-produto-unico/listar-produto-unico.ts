import { Produto } from "../../../domain/entities/produto";
import { IListarProdutoUnico } from "../../../domain/usecases/listar-produto-unico";
import { IListarProdutoUnicoRepository } from "../../repositories/produtos-repository";

export class ListarProdutoUnico implements IListarProdutoUnico {
	private produtosRepository: IListarProdutoUnicoRepository;

	constructor(produtosRepository: IListarProdutoUnicoRepository) {
		this.produtosRepository = produtosRepository;
	}

	async execute(id: string): Promise<Produto | null> {
		return await this.produtosRepository.listarProduto(id);
	}
}
