import { generateId, usersDatabase } from "../database/database";

export class UsersServices {
    createUser(name: string, email: string) {
        const newUser = { id: generateId(), name, email };

        usersDatabase.push(newUser)

        return { user: newUser, message: "Usuário cadastrado com sucesso." };
    }
}