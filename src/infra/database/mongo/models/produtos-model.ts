import mongoose from "mongoose";
import { produtoSchema } from "../schemas/produtos-schema";

const ProdutoModel = mongoose.model("Produto", produtoSchema);

export { ProdutoModel };
