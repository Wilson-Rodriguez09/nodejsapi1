import { mysql } from "../databases/WSconexion.js";



export const listarUsuario= async(req, resp)=>{
    try{
        const sql ="select * from clientes";
        const [result]= await mysql.query(sql);
        if(result.length==0){
            return resp.status(404).json({msg:"No se registraron clientes en la base de datos"})
        }
        else {
        return resp.status(200).json(result)
        }
    }catch(error){
        return resp.status(500).json({msg:"error a listar cliente"})
    }
};

export const registrarClientes = async(req, resp)=>{
    try{
        const {identificacion, nombres, direccion, telefono, fecha_nacimiento, password}= req.body;
        const sql = `insert into clientes(identificacion, nombres, direccion, telefono, fecha_nacimiento, password) values (?,?,?,?,?,?)`
        const [result]= await mysql.query(sql,[identificacion, nombres, direccion, telefono, fecha_nacimiento, password])
        resp.status(201).json({msg:"Registro exitosos",result})
    }catch(error){
        return resp.status(500).json({msg:"Error al crear"})
    }
};

export const actualizarClientes = async(req, resp)=>{
    try{
        const {identificacion, nombres, direccion, telefono, fecha_nacimiento, password}= req.body;
        const id = req.params.id_clientes;
        const sql = `update clientes set identificacion=?, nombres=?, direccion=?, telefono=?, fecha_nacimiento=?, password=? where id_clientes=?`
        const [result]= await mysql.query(sql,[identificacion, nombres, direccion, telefono, fecha_nacimiento, password, id]);
        resp.status(201).json({msg:"Actualizacion exitosa", result})
    }catch(error){
        return resp.status(500).json({msg:"error al actualizar"})
    }
};

export const eliminarClientes = async(req, resp)=>{
    try{
        const id = req.params.id_clientes;
        const sql = `delete from clientes where id_clientes=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.affectedRows>0)return resp.status(200).json({msg:"cliente eliminado con exito", result});
        else{
            return resp.status(401).json({msg:"cliente no eliminado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al eliminar"})
    }
};

export const buscarCliente = async (req, resp)=>{
    try{
        const id = req.params.id_clientes;
        const sql = `select * from clientes where id_clientes=?`;
        const [result]= await mysql.query(sql,[id]);
        if(result.length>0)return resp.status(200).json({msg:"cliente encontrado con exito", result});
        else{
            return resp.status(401),json({msg:"cliente no encontrado"})
        }
    }catch(error){
        return resp.status(500).json({msg:"error al buscar"})
    }
};
