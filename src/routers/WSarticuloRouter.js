import {Router} from 'express';
import { actualizarArticulos, buscarArticulo, eliminarArticulo, listarArticulos, registrarArticulos } from '../controllers/WSarticulosControllers.js';
import {validarToken} from '../controllers/WSautenticacionUsuario.js'

const ruta = Router();

ruta.get("/articulo",validarToken,listarArticulos)
ruta.get("/articulo/:id_articulo",buscarArticulo)
ruta.post("/articulo",registrarArticulos)
ruta.put("/articulo/:id_articulos",actualizarArticulos);
ruta.delete("/articulo/:id_articulos", eliminarArticulo);

export default ruta;
