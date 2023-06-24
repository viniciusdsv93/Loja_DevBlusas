export class Produto {
	private nome: string;
	private nota: number;
	private preco: number;
	private numero_parcelas: number;
	private valor_parcela: number;
	private preco_pix: number;
	private url_imagem: string;

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
		if (!nota) {
			throw new Error("A nota do produto é obrigatória");
		}
		if (!preco) {
			throw new Error("O preço do produto é obrigatório");
		}
		if (!numero_parcelas) {
			throw new Error("O número de parcelas do produto é obrigatório");
		}
		if (!url_imagem) {
			throw new Error("A url de imagem do produto é obrigatória");
		}

		this.nome = nome;
		this.nota = nota;
		this.preco = preco;
		this.numero_parcelas = numero_parcelas;
		this.valor_parcela = preco / numero_parcelas;
		this.preco_pix = preco * 0.95;
		this.url_imagem = url_imagem;
	}
}
