import  express from "express";
import nodemon from "nodemon";
const servidor = express();

servidor.listen (5001,() => console.log('Api'))


 servidor.get ("/somar/:n1/:n2", (req, resp) =>{
    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)
    let soma = n1+n2
    resp.send (`A soma dos números é ${soma}`)
 })