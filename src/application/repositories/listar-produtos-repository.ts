import { Produto } from "../../domain/entities/produto";

export interface IProdutosRepository {
	listar(): Produto[];
}
