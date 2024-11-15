import { hasher } from "../utils/index.js";


export class UserDTO{
    model(user){
        return {
            id: user._id|| user.id,
            name: user.name,
            surname: user.surname,
            email: user.email,
            roles: user.roles,
            pets: user.pets
        }
    };

    data(data){
        return {
            id: data.id || null,
            name: data.name,
            surname: data.surname,
            email: data.email,
            password: data.password ? hasher(data.password) : null,
            roles: data.roles,
            pets: data.pets || null
        }
    };

    adoption(user){
        return {
            id: user?.id || user._id.toString(),
            name: user.name,
            surname: user.surname,
            email: user.email,
            roles: user.roles,
            pets: user.pets.length
        }
    }
}