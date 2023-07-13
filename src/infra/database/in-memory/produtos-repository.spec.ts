import { IListarProdutosRepository } from "../../../application/repositories/produtos-repository";
import { Produto } from "../../../domain/entities/produto";
import { InMemoryProdutosRepository } from "./produtos-repository";

describe("In memory produtos repository", () => {
	type SutTypes = {
		sut: IListarProdutosRepository;
	};

	const makeSut = (): SutTypes => {
		const sut = new InMemoryProdutosRepository();
		return {
			sut,
		};
	};

	test("Deve retornar a lista de produtos em caso de sucesso", async () => {
		const { sut } = makeSut();

		const produtos = await sut.listar();

		expect(Array.isArray(produtos)).toBe(true);
	});

	test("Os objetos listados devem ser instâncias da classe Produto", async () => {
		const { sut } = makeSut();

		const produtos = await sut.listar();

		expect(produtos[0] instanceof Produto).toBe(true);
	});
});
