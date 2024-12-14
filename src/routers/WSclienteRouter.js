import {Router} from 'express';
import { actualizarClientes, buscarCliente, eliminarClientes, listarUsuario, registrarClientes } from '../controllers/WSclienteControllers.js';
import {validarToken} from '../controllers/WSautenticacionUsuario.js'

const ruta = Router();

ruta.get("/cliente",validarToken,listarUsuario)
ruta.get("/cliente/:id_clientes",validarToken,buscarCliente)
ruta.post("/cliente",validarToken,registrarClientes)
ruta.put("/cliente/:id_clientes/",validarToken,actualizarClientes);
ruta.delete("/cliente/:id_clientes",validarToken, eliminarClientes);

export default ruta;
