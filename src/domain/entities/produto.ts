import { v4 as uuid } from "uuid";

export class Produto {
	private id: string;
	private nome: string;
	private nota: number;
	private preco: number;
	private numero_parcelas: number;
	private valor_parcela: number;
	private preco_pix: number;
	private url_imagem: string;

	get _id(): string {
		return this.id;
	}

	get _nome(): string {
		return this.nome;
	}

	get _nota(): number {
		return this.nota;
	}

	get _preco(): number {
		return this.preco;
	}

	get _numero_parcelas(): number {
		return this.numero_parcelas;
	}

	get _valor_parcela(): number {
		return this.valor_parcela;
	}

	get _preco_pix(): number {
		return this.preco_pix;
	}

	get _url_imagem(): string {
		return this.url_imagem;
	}

	constructor(
		nome: string | undefined,
		nota: number | undefined,
		preco: number | undefined,
		numero_parcelas: number | undefined,
		url_imagem: string | undefined
	) {
		if (!nome) {
			throw new Error("O nome do produto é obrigatório");
		}
		if (nome.length < 2) {
			throw new Error("O nome do produto deve possuir ao menos dois caracteres");
		}
		if (nome.length > 255) {
			throw new Error("O nome do produto deve possuir no máximo 255 caracteres");
		}
		if (!nota) {
			throw new Error("A nota do produto é obrigatória");
		}
		if (nota < 0) {
			throw new Error("A nota do produto deve ser maior do que 0");
		}
		if (nota > 5) {
			throw new Error("A nota do produto deve ser menor ou igual a 5");
		}
		if (!preco) {
			throw new Error("O preço do produto é obrigatório");
		}
		if (preco < 0) {
			throw new Error("O preco do produto deve ser maior do que 0");
		}
		if (!numero_parcelas) {
			throw new Error("O número de parcelas do produto é obrigatório");
		}
		if (numero_parcelas && numero_parcelas < 1) {
			throw new Error(
				"O número de parcelas do produto deve ser maior ou igual a 1"
			);
		}
		if (!url_imagem) {
			throw new Error("A url de imagem do produto é obrigatória");
		}
		if (!url_imagem.match(/^(http(s)?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?$/)) {
			throw new Error("A url de imagem do produto deve ser válida");
		}

		this.id = uuid();
		this.nome = nome;
		this.nota = nota;
		this.preco = preco;
		this.numero_parcelas = numero_parcelas;
		this.valor_parcela = preco / numero_parcelas;
		this.preco_pix = preco * 0.95;
		this.url_imagem = url_imagem;
	}
}
