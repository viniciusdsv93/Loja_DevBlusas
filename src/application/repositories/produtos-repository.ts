import { Produto } from "../../domain/entities/produto";

export interface IListarProdutosRepository {
	listar(): Promise<Produto[]>;
}

export interface IListarProdutoUnicoRepository {
	listarProduto(id: string): Promise<Produto | null>;
}
