
import dtoUser from "../Dtos/User"
import { createUser } from "../Repository/script"

export  const createUserService = async (dtoUser: dtoUser) =>{    
    const serviceUser = await createUser(dtoUser)
    return serviceUser

}




 

