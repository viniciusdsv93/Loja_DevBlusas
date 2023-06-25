import { Produto } from "../../../domain/entities/produto";
import { IListarProdutos } from "../../../domain/usecases/listar-produtos";
import { IProdutosRepository } from "../../repositories/produtos-repository";
import { ListarProdutos } from "./listar-produtos";

describe("Usecase listar produtos", () => {
	type SutTypes = {
		listarProdutos: IListarProdutos;
		produtosRepository: IProdutosRepository;
	};

	const makeProdutosRepository = (): IProdutosRepository => {
		class ProdutosRepositoryStub implements IProdutosRepository {
			async listar(): Promise<Produto[]> {
				return [
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
		}
		return new ProdutosRepositoryStub();
	};

	const makeSut = (): SutTypes => {
		const produtosRepository = makeProdutosRepository();
		const listarProdutos = new ListarProdutos(produtosRepository);

		return {
			listarProdutos,
			produtosRepository,
		};
	};

	test("Deve retornar uma lista de produtos", async () => {
		const { listarProdutos } = makeSut();

		const produtos = await listarProdutos.execute();

		expect(Array.isArray(produtos)).toBe(true);
	});

	test("Deve chamar a função listar do repository", async () => {
		const { listarProdutos, produtosRepository } = makeSut();

		const produtosRepositorySpy = jest.spyOn(produtosRepository, "listar");

		await listarProdutos.execute();

		expect(produtosRepositorySpy).toHaveBeenCalled();
	});
});
