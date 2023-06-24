import { Produto } from "../../../domain/entities/produto";
import { IListarProdutos } from "../../../domain/usecases/listar-produtos";
import { ListarProdutosController } from "./listar-produtos";

describe("Controller listar produtos", () => {
	let listaProdutos = [
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

	const makeListarProdutosUsecase = (): IListarProdutos => {
		class ListarProdutosUsecaseStub implements IListarProdutos {
			execute(): Promise<Produto[]> {
				return new Promise((resolve) => {
					resolve(listaProdutos);
				});
			}
		}
		return new ListarProdutosUsecaseStub();
	};

	type SutTypes = {
		sut: ListarProdutosController;
		listarProdutosUsecase: IListarProdutos;
	};

	const makeSut = (): SutTypes => {
		const listarProdutosUsecase = makeListarProdutosUsecase();
		const sut = new ListarProdutosController(listarProdutosUsecase);

		return {
			sut,
			listarProdutosUsecase,
		};
	};

	test("Deve chamar o usecase que busca os produtos", async () => {
		const { sut, listarProdutosUsecase } = makeSut();
		const listarProdutosUsecaseSpy = jest.spyOn(listarProdutosUsecase, "execute");
		await sut.handle();

		expect(listarProdutosUsecaseSpy).toHaveBeenCalled();
	});

	test("Deve retornar uma resposta HTTP com status 200 em caso de sucesso", async () => {
		const { sut } = makeSut();

		const resposta = await sut.handle();

		expect(resposta.statusCode).toEqual(200);
	});

	test("Deve retornar uma lista de produtos no corpo da resposta HTTP em caso de sucesso", async () => {
		const { sut } = makeSut();

		const resposta = await sut.handle();

		expect(resposta.body).toEqual(listaProdutos);
	});
});
