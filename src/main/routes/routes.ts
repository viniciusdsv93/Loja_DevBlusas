import { Router } from "express";
import { expressRouteAdapter } from "../adapters/express-route-adapter";
import { makeListarProdutosController } from "../factories/listar-produtos-controller-factory";

const router = Router();

router.get("/produto", expressRouteAdapter(makeListarProdutosController()));

export { router };
