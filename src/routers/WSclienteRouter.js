import {Router} from 'express';
import { actualizarClientes, buscarCliente, eliminarClientes, listarUsuario, registrarClientes } from '../controllers/WSclienteControllers.js';
import {validarToken} from '../controllers/WSautenticacionUsuario.js'

const ruta = Router();

ruta.get("/cliente",validarToken,listarUsuario)
ruta.get("/cliente/:id_clientes",buscarCliente)
ruta.post("/cliente",registrarClientes)
ruta.put("/cliente/:id_clientes",actualizarClientes);
ruta.delete("/cliente/:id_clientes", eliminarClientes);

export default ruta;
