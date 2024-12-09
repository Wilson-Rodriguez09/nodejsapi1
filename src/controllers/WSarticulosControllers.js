import { mysql } from "../databases/WSconexion.js";

export const listarArticulos= async(req, resp)=>{
    try{
        const sql ="select * from articulos";
        const [result]= await mysql.query(sql);
        if(result.length==0){
            return resp.status(404).json({msg:"No se registraron articulos en la base de datos"})
        }
        else {
        return resp.status(200).json(result)
        }
    }catch(error){
        return resp.status(500).json({msg:"error a listar articulos"})
    }
};

export const registrarArticulos = async(req, resp)=>{
    try{
        const {nombre, tipo}= req.body;
        const sql = `insert into articulos(nombre, tipo) values (?,?)`
        const [result]= await mysql.query(sql,[nombre, tipo])
        resp.status(201).json({msg:"Registro exitoso",result})
    }catch(error){
        return resp.status(500).json({msg:"Error al crear"})
    }
};

export const actualizarArticulos = async(req, resp)=>{
    try{
        const {nombre, tipo}= req.body;
        const id = req.params.id_articulo;
        const sql = `update articulos set nombre=?, tipo=? where id_articulos${id}`
        const [result]= await mysql.query(sql,[nombre, tipo]);
        resp.status(201).json({msg:"Actualizacion exitosa", result})
    }catch(error){
        return resp.status(500).json({msg:"error al actualizar"})
    }
};

export const eliminarArticulo = async(req, resp)=>{
    try{
        const id = req.params.id_articulos;
        const sql = `delete from articulos where id_articulos=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.affectedRows>0)return resp.status(200).json({msg:"articulos eliminado con exito", result});
        else{
            return resp.status(401).json({msg:"articulo no eliminado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al eliminar"})
    }
};

export const buscarArticulo = async (req, resp)=>{
    try{
        const id = req.params.id_articulos;
        const sql = `select * from articulos where id_articulos=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.length>0)return resp.status(200).json({msg:"articulo encontrado con exito", result});
        else{
            return resp.status(401),json({msg:"articulo no encontrado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al buscar"})
    }
};