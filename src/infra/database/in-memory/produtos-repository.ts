import { IProdutosRepository } from "../../../application/repositories/produtos-repository";
import { Produto } from "../../../domain/entities/produto";

export class InMemoryProdutosRepository implements IProdutosRepository {
	private listaProdutos: Produto[];

	constructor() {
		this.listaProdutos = [
			new Produto(
				"nome_produto1",
				5,
				100.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"nome_produto2",
				5,
				1000.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"nome_produto3",
				5,
				10000.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			),
		];
	}

	async listar() {
		return this.listaProdutos;
	}
}
