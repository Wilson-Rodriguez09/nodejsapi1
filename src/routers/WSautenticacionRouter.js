import { Router } from "express";
import { validarUsuario } from "../controllers/WSautenticacionUsuario.js";

const ruta = Router();

ruta.post("/login",validarUsuario);

export default ruta;