import {Router} from 'express';
import { actualizarIntereses, buscarInteres, eliminarInteres, listarIntereses, registrarIntereses } from '../controllers/WSinteresesControllers.js';

const ruta = Router();

ruta.get("/interes",listarIntereses)
ruta.get("/interes/:id_interes",buscarInteres)
ruta.post("/interes",registrarIntereses)
ruta.put("/interes/:id_interes",actualizarIntereses);
ruta.delete("/interes/:id_interes", eliminarInteres);

export default ruta;
