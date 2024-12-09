import { mysql } from "../databases/WSconexion.js";

export const listarIntereses= async(req, resp)=>{
    try{
        const sql ="select * from intereses";
        const [result]= await mysql.query(sql);
        if(result.length==0){
            return resp.status(404).json({msg:"No se registraron intereses en la base de datos"})
        }
        else {
        return resp.status(200).json(result)
        }
    }catch(error){
        return resp.status(500).json({msg:"error a listar los intereses"})
    }
};

export const registrarIntereses = async(req, resp)=>{
    try{
        const {mes, fecha, valor, alquiler}= req.body;
        const sql = `insert into intereses(mes, fecha, valor, alquiler) values (?,?,?,?)`
        const [result]= await mysql.query(sql,[mes, fecha, valor, alquiler])
        resp.status(201).json({msg:"Registro exitoso",result})
    }catch(error){
        return resp.status(500).json({msg:"Error al crear"})
    }
};

export const actualizarIntereses = async(req, resp)=>{
    try{
        const {mes, fecha, valor, alquiler}= req.body;
        const id = req.params.id_interes;
        const sql = `update interes set mes=?, fecha=?, valor=?, alquiler=? where id_interes${id}`
        const [result]= await mysql.query(sql,[mes, fecha, valor, alquiler]);
        resp.status(201).json({msg:"Actualizacion exitosa", result})
    }catch(error){
        return resp.status(500).json({msg:"error al actualizar"})
    }
};

export const eliminarInteres = async(req, resp)=>{
    try{
        const id = req.params.id_interes;
        const sql = `delete from interes where id_interes=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.affectedRows>0)return resp.status(200).json({msg:"interes eliminado con exito", result});
        else{
            return resp.status(401).json({msg:"interes no eliminado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al eliminar"})
    }
};

export const buscarInteres = async (req, resp)=>{
    try{
        const id = req.params.id_interes;
        const sql = `select * from interes where id_interes=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.length>0)return resp.status(200).json({msg:"interes encontrado con exito", result});
        else{
            return resp.status(401),json({msg:"interes no encontrado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al buscar"})
    }
};