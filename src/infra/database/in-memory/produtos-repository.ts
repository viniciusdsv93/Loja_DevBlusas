import { IProdutosRepository } from "../../../application/repositories/produtos-repository";
import { Produto } from "../../../domain/entities/produto";

export class InMemoryProdutosRepository implements IProdutosRepository {
	private listaProdutos: Produto[];

	constructor() {
		this.listaProdutos = [
			new Produto(
				"blusa/ casaco verde",
				"blusas",
				5,
				120.90,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/blusas%2Fdivaris-shirichena-0SuERJPdjHk-unsplash.jpg?alt=media&token=2011197b-63fb-4ad0-8910-e799e5abf91f"
			),
			new Produto(
				"blusa/ casaco preto",
				"blusas",
				5,
				190.40,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/blusas%2Fdivaris-shirichena-KJXJI8cIlwk-unsplash.jpg?alt=media&token=eb564f5c-37f0-423d-a1e5-2a97dbf7bcea"
			),
			new Produto(
				"blusa/ casaco de couro preta",
				"blusas",
				5,
				219.99,
				8,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/blusas%2Fdivaris-shirichena-dcuJo8xUjpw-unsplash.jpg?alt=media&token=364e1713-3c1c-4e81-9aba-5b05249a7f44"
			),
			new Produto(
				"blusa/ casaco verde limão",
				"blusas",
				5,
				99.99,
				3,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/blusas%2Fjennifer-marquez-g4hrBnJlALE-unsplash.jpg?alt=media&token=af34be0f-db5e-4e67-aa8d-58c34d60c95e"
			),
			new Produto(
				"blusa/ casaco de pelo creme",
				"blusas",
				5,
				89.90,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/blusas%2Fsamanta-sokolova-m2evGtglxT4-unsplash.jpg?alt=media&token=d3100c54-caf4-49b5-9c87-285987774228"
			),

			new Produto(
				"Calça preta listrada",
				"calças",
				5,
				79.99,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Fahmed-carter-tiWcNvpQF4E-unsplash.jpg?alt=media&token=17041daa-33a4-48bb-b528-22ef8b6bb92f"
			),
			new Produto(
				"Calça jeans cintura média",
				"calças",
				5,
				89.99,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Fbrittany-bendabout-BVC7PlGjSWA-unsplash.jpg?alt=media&token=2102457c-0c05-4221-a06e-f550990b92d5"
			),
			new Produto(
				"calça moletom amarela",
				"calças",
				5,
				120.95,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Fdom-hill-nimElTcTNyY-unsplash.jpg?alt=media&token=8adc35f7-7aec-40bc-b948-acd07ff500cf"
			),
			new Produto(
				"calça jeans laranja",
				"calças",
				5,
				139.90,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Femmeline-t-SdR2wW-v4PE-unsplash.jpg?alt=media&token=54de9eec-2a30-4629-8444-79db1fbe9440"
			),
			new Produto(
				"calça legging",
				"calças",
				5,
				89.99,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Frangga-cahya-nugraha-btmejtmH4tk-unsplash.jpg?alt=media&token=7c2b7b07-3dfe-4ed1-8ecf-e502df8d8b7a"
			),
			new Produto(
				"calça jeans preta",
				"calças",
				5,
				139.90,
				5,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/cal%C3%A7as%2Fsamanta-sokolova-1VcYSq_XtoQ-unsplash.jpg?alt=media&token=52c79d97-beb8-4d6d-a549-47187a88dab8"
			),

			new Produto(
				"camiseta branca de botão",
				"camisetas",
				5,
				59.90,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/camisetas%2Fantonio-figueredo-3I_aBm_xbkw-unsplash.jpg?alt=media&token=a1f2cc41-ba25-46a7-b680-370edbc26b82"
			),
			new Produto(
				"camiseta rosa",
				"camisetas",
				5,
				49.90,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/camisetas%2Fjustin-essah-xzH6vch95YE-unsplash.jpg?alt=media&token=2ec8c58c-a2fa-4c10-bd30-56440b832bfa"
			),
			new Produto(
				"camiseta laranja manga longa",
				"camisetas",
				5,
				79.90,
				3,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/camisetas%2Fmatas-katinas-7ITfJfAxxY4-unsplash.jpg?alt=media&token=8c1198da-4b1e-47dc-9b33-4bbe6b58e7a1"
			),
			new Produto(
				"camiseta branca",
				"camisetas",
				5,
				39.90,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/camisetas%2Fmediamodifier-tT6k5S0fvxs-unsplash.jpg?alt=media&token=628fdd0d-21bc-4a43-b126-3a6e1916316b"
			),
			new Produto(
				"camiseta florida",
				"camisetas",
				5,
				59.90,
				2,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/camisetas%2Fsonnie-hiles-jS9ZsQOQGIA-unsplash.jpg?alt=media&token=d166cf6e-b779-427e-a01d-2c4a9613d6ce"
			),

			new Produto(
				"vestido preto",
				"vestidos",
				5,
				159.90,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/vestidos%2Fnapat-saeng-EoVzkcclFqs-unsplash.jpg?alt=media&token=53378fb6-cdc6-4e21-9ff8-a2d4b3be4e36"
			),
			new Produto(
				"vestido preto artistico",
				"vestidos",
				5,
				259.90,
				8,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/vestidos%2Fpooja-chaudhary-bqnbKxiIGZI-unsplash.jpg?alt=media&token=b0883b43-7eff-470e-9fa1-2b930ffd8bd0"
			),
			new Produto(
				"vestido verde militar",
				"vestidos",
				5,
				169.90,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/vestidos%2Fvalerie-elash-T5tIoXFJfSk-unsplash.jpg?alt=media&token=071aa62c-ca86-4a48-9f33-a5dee4a2e891"
			),
			new Produto(
				"vestido branco",
				"vestidos",
				5,
				129.90,
				4,
				"https://firebasestorage.googleapis.com/v0/b/loja-roupa-45e30.appspot.com/o/vestidos%2Fwesley-tingey-nVs43FLFb9U-unsplash.jpg?alt=media&token=066e324d-bf49-4ec5-9624-209f8fb51694"
			),

		];
	}

	async listar() {
		return this.listaProdutos;
	}
}
