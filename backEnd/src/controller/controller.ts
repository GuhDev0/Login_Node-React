import { Request, Response } from "express"
import { createUserService } from "../services/services"

export const createUser = async (req: Request, res: Response) => {
    
    try {
        const resultado = await createUserService(req.body);  
        res.status(201).json({ mensagem: "Cadastro concluído", user: resultado });
    } catch (error:any ) {
        res.status(400).json({error: error.message});
        
    }
}

