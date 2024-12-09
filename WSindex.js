import express from 'express';
import cliente from './src/routers/WSclienteRouter.js'
import alquiler from './src/routers/WSalquilerRouter.js'
import intereses from './src/routers/WSinteresesRouter.js'
import articulo from './src/routers/WSarticuloRouter.js'
import login from './src/routers/WSautenticacionRouter.js'
import bodyParser from "body-parser"

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:false}))
app.use(cliente)
app.use(alquiler)
app.use(intereses)
app.use(articulo)
app.use(login)


app.listen(3000,()=>{
    console.log("el servidor esta en el puerto 3000")
})