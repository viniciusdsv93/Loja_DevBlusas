import { Produto } from "./produto";

describe("Entidade Produto", () => {
	test("Deve lançar uma exceção caso não seja informado o nome do produto", () => {
		expect(() => {
			new Produto("", 5, 120.0, 4, "url_de_exemplo");
		}).toThrowError("O nome do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informada a nota do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", undefined, 120.0, 4, "url_de_exemplo");
		}).toThrowError("A nota do produto é obrigatória");
	});
	test("Deve lançar uma exceção caso não seja informado o preço do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, undefined, 4, "url_de_exemplo");
		}).toThrowError("O preço do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informado o número de parcelas do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, undefined, "url_de_exemplo");
		}).toThrowError("O número de parcelas do produto é obrigatório");
	});
	test("Deve lançar uma exceção caso não seja informada a url da imagem do produto", () => {
		expect(() => {
			new Produto("nome_de_exemplo", 5, 120.0, 4, "");
		}).toThrowError("A url de imagem do produto é obrigatória");
	});
	test("Deve lançar uma exceção caso o nome possua menos do que dois caracteres", () => {
		expect(() => {
			new Produto("a", 5, 120.0, 4, "url_de_exemplo");
		}).toThrowError("O nome do produto deve possuir ao menos dois caracteres");
	});
});
