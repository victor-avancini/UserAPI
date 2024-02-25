import { generateId, usersDatabase } from "../database/database";
import { IUser } from "../interfaces/users.interfaces";

export class UsersServices{
    createUser(name: string, email: string) {
        const newUser: IUser = {id: generateId(), name, email};

        usersDatabase.push(newUser)

        return { user: newUser, message: "Usuário cadastrado com sucesso."};
    }   
}