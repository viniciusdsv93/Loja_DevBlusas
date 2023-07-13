import { Produto } from "../entities/produto";

export interface IListarProdutoUnico {
	execute(id: string): Promise<Produto | null>;
}
