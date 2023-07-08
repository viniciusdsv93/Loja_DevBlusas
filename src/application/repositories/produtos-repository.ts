import { Produto } from "../../domain/entities/produto";

export interface IProdutosRepository {
	listar(): Promise<Produto[]>;
	listarProduto(id: string): Promise<Produto | null>;
}
