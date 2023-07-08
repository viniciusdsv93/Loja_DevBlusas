import { Router } from "express";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { makeListarProdutosController } from "../factories/listar-produtos-controller-factory";
import { makeListarProdutoUnicoController } from "../factories/listar-produto-unico-controller";

const router = Router();

router.get("/produto", expressRouteAdapter(makeListarProdutosController()));

router.get("/produto/:id", expressRouteAdapter(makeListarProdutoUnicoController()));

export { router };
