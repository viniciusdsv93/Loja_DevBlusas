import { Produto } from "./produto";

describe("Entidade Produto", () => {
	test("Deve lançar uma exceção caso não seja informado o nome do produto", () => {
		expect(() => {
			new Produto("", 5, 120.0, 4, "url_de_exemplo");
		}).toThrowError();
	});
	test("Deve lançar uma exceção caso não seja informada a nota do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", undefined, 120.0, 4, "url_de_exemplo");
		}).toThrowError();
	});
	test("Deve lançar uma exceção caso não seja informado o preço do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, undefined, 4, "url_de_exemplo");
		}).toThrowError();
	});
	test("Deve lançar uma exceção caso não seja informado o preço do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, undefined, "url_de_exemplo");
		}).toThrowError();
	});
	test("Deve lançar uma exceção caso não seja informada a url da imagem do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, 4, "");
		}).toThrowError();
	});
});
