import { Produto } from "./produto";

describe("Entidade Produto", () => {
	test("Deve lançar uma exceção caso não seja informado o nome do produto", () => {
		expect(() => {
			new Produto("", 5, 120.0, 4, "https://www.url-de-exemplo-valida.com");
		}).toThrowError("O nome do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informada a nota do produto", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				undefined,
				120.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("A nota do produto é obrigatória");
	});
	test("Deve lançar uma exceção caso não seja informado o preço do produto", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				5,
				undefined,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("O preço do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informado o número de parcelas do produto", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				5,
				120.0,
				undefined,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("O número de parcelas do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informada a url da imagem do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, 4, undefined);
		}).toThrowError("A url de imagem do produto é obrigatória");
	});
	test("Deve lançar uma exceção caso o nome possua menos do que dois caracteres", () => {
		expect(() => {
			new Produto("a", 5, 120.0, 4, "https://www.url-de-exemplo-valida.com");
		}).toThrowError("O nome do produto deve possuir ao menos dois caracteres");
	});
	test("Deve lançar uma exceção caso o nome possua mais do que 255 caracteres", () => {
		expect(() => {
			new Produto(
				"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
				5,
				120.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("O nome do produto deve possuir no máximo 255 caracteres");
	});
	test("Deve lançar uma exceção caso a nota informada seja menor do que 0", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				-1,
				120.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("A nota do produto deve ser maior do que 0");
	});
	test("Deve lançar uma exceção caso a nota informada seja maior do que 5", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				6,
				120.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("A nota do produto deve ser menor ou igual a 5");
	});
	test("Deve lançar uma exceção caso o preco informado seja menor do que 0", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				5,
				-120.0,
				4,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("O preco do produto deve ser maior do que 0");
	});
	test("Deve lançar uma exceção caso o número de parcelas informado seja menor do que 1", () => {
		expect(() => {
			new Produto(
				"nome_de_exemplo",
				5,
				120.0,
				0.1,
				"https://www.url-de-exemplo-valida.com"
			);
		}).toThrowError("O número de parcelas do produto deve ser maior ou igual a 1");
	});
	test("Deve lançar uma exceção caso a url de imagem não seja válida", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, 4, "url_invalida");
		}).toThrowError("A url de imagem do produto deve ser válida");
	});
});
