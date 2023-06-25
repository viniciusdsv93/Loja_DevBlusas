import { IProdutosRepository } from "../../../application/repositories/produtos-repository";
import { Produto } from "../../../domain/entities/produto";

export class InMemoryProdutosRepository implements IProdutosRepository {
	private listaProdutos: Produto[];

	constructor() {
		this.listaProdutos = [
			new Produto(
				"blusa de moletom vermelha",
				5,
				189.9,
				4,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"calça jeans preta",
				5,
				220.4,
				5,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"camiseta de manga longa branca",
				5,
				119.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"camiseta de manga curta amarela",
				5,
				59.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"par de meias azuis",
				5,
				19.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"vestido laranja",
				5,
				79.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"saia longa branca",
				5,
				49.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"jaqueta de couro sintético",
				5,
				320.99,
				10,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"jaqueta jeans azul",
				5,
				279.99,
				8,
				"https://www.url-de-exemplo-valida.com"
			),
			new Produto(
				"par de chinelos",
				5,
				39.99,
				2,
				"https://www.url-de-exemplo-valida.com"
			),
		];
	}

	async listar() {
		return this.listaProdutos;
	}
}
