import {Router} from 'express';
import { actualizaralquiler, buscarAlquiler, eliminarAlquiler, listarAlquiler, registrarAlquileres } from '../controllers/WSalquilerControllers.js';
import {validarToken} from '../controllers/WSautenticacionUsuario.js'

const ruta = Router();

ruta.get("/alquiler",validarToken,listarAlquiler)
ruta.get("/alquiler/:id_alquiler",buscarAlquiler)
ruta.post("/alquiler",registrarAlquileres)
ruta.put("/alquiler/:id_alquiler",actualizaralquiler);
ruta.delete("/alquiler/:id_alquiler", eliminarAlquiler);

export default ruta;
