import axios from "axios";
import { Request, Response } from "express";
import dotenv from 'dotenv'


dotenv.config()

export default async function getCPFAdress(req: Request,res: Response): Promise<void>{
    try{

         const cep = req.params.cep

       const urlData = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
   
       const adressComplete = urlData.data

       return adressComplete

    }catch(error:any){

        console.log(error.sqlMessage || error.message);
         res.status(500).send("Ops! Um erro inesperado ocorreu =/")

    }
}

