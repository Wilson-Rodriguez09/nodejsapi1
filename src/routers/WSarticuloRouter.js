import {Router} from 'express';
import { actualizarArticulos, buscarArticulo, eliminarArticulo, listarArticulos, registrarArticulos } from '../controllers/WSarticulosControllers.js';
import {validarToken} from '../controllers/WSautenticacionUsuario.js'

const ruta = Router();

ruta.get("/articulo",validarToken,listarArticulos)
ruta.get("/articulo/:id_articulo",validarToken,buscarArticulo)
ruta.post("/articulo",validarToken,registrarArticulos)
ruta.put("/articulo/:id_articulo",validarToken,actualizarArticulos);
ruta.delete("/articulo/:id_articulo",validarToken,eliminarArticulo);

export default ruta;
    