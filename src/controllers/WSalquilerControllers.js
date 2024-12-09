import { mysql } from "../databases/WSconexion.js";

export const listarAlquiler= async(req, resp)=>{
    try{
        const sql ="select * from alquiler";
        const [result]= await mysql.query(sql);
        if(result.length==0){
            return resp.status(404).json({msg:"No se registraron alquileres en la base de datos"})
        }
        else {
        return resp.status(200).json(result)
        }
    }catch(error){
        return resp.status(500).json({msg:"error a listar un alquiler"})
    }
};

export const registrarAlquileres = async(req, resp)=>{
    try{
        const {valor, fecha, meses, descripcion, interes, cliente, articulo}= req.body;
        const sql = `insert into clientes(valor, fecha, meses, descripcion, interes, cliente, articulo) values (?,?,?,?,?,?,?)`
        const [result]= await mysql.query(sql,[valor, fecha, meses, descripcion, interes, cliente, articulo])
        resp.status(201).json({msg:"Registro exitoso",result})
    }catch(error){
        return resp.status(500).json({msg:"Error al crear"})
    }
};

export const actualizaralquiler = async(req, resp)=>{
    try{
        const {valor, fecha, meses, descripcion, interes, cliente, articulo}= req.body;
        const id = req.params.id_alquiler;
        const sql = `update alquiler set valor=?, fecha=?, meses=?, descripcion=?, interes=?, cliente=?, articulo=? where id_alquiler${id}`
        const [result]= await mysql.query(sql,[valor, fecha, meses, descripcion, interes, cliente, articulo]);
        resp.status(201).json({msg:"Actualizacion exitosa", result})
    }catch(error){
        return resp.status(500).json({msg:"error al actualizar"})
    }
};

export const eliminarAlquiler = async(req, resp)=>{
    try{
        const id = req.params.id_alquiler;
        const sql = `delete from alquiler where id_alquiler=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.affectedRows>0)return resp.status(200).json({msg:"alquiler eliminado con exito", result});
        else{
            return resp.status(401).json({msg:"alquiler no eliminado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al eliminar"})
    }
};

export const buscarAlquiler = async (req, resp)=>{
    try{
        const id = req.params.id_alquiler;
        const sql = `select * from alquiler where id_alquiler=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.length>0)return resp.status(200).json({msg:"alquiler encontrado con exito", result});
        else{
            return resp.status(401),json({msg:"alquiler no encontrado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al buscar"})
    }
};