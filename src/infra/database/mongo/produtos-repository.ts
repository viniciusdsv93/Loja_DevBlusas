import { IProdutosRepository } from "../../../application/repositories/produtos-repository";
import { Produto } from "../../../domain/entities/produto";
import { db } from "./config/db-connect";
import { ProdutoModel } from "./models/produtos-model";

export class MongoProdutosRepository implements IProdutosRepository {
	private db: any;

	constructor() {
		this.db = db;
		// this.db.once("open", () => {
		// 	console.log("conexao ok");
		// });
	}

	async listar(): Promise<Produto[]> {
		return await ProdutoModel.find({}, "-descricao -detalhes_tecnicos");
	}

	async listarProduto(id: string): Promise<Produto | null> {
		return await ProdutoModel.findById(id);
	}
}
