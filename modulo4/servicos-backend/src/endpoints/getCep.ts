import { Request, Response } from "express";
import axios from 'axios';


export default async function getCep(req : Request, res : Response) : Promise<any> {
    let endereco = {
        logradouro : '',
        bairro : '',
        cidade : '',
        estado : ''
    }
    await axios.get(`https://viacep.com.br/ws/${req.params.cep}/json/`)
    .then((response)=>{
        endereco = {
        logradouro : `${response.data.logradouro}`,
        bairro : `${response.data.bairro}`,
        cidade : `${response.data.localidade}`,
        estado : `${response.data.uf}`
        }
    })
    .catch((err)=>console.log(err))
    res.status(200).send(endereco)
}