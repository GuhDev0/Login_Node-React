import { PrismaClient } from "@prisma/client"
import DtoUser from "../Dtos/User"
const prisma = new PrismaClient()


 export const createUser = async (DtoUser: DtoUser) =>  {
    
    const user = await prisma.user.create({  
        data: {
            name: DtoUser.name,
            sobrenome: DtoUser.sobrenome,
            email: DtoUser.email,
            password: DtoUser.password

        }
        
    })
    return user
}

 export const deleteUser = async(dtoUser: DtoUser) => {
    const deleteUser = await prisma.user.delete(
        {
            where: {
                email: dtoUser.email
            }
        }
    )

}


