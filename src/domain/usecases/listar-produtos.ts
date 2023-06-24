import { Produto } from "../entities/produto";

export interface IListarProdutos {
	execute(): Produto[];
}
