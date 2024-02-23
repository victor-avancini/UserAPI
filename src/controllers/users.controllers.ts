import { Request, Response } from "express";
import { generateId, usersDatabase } from "../database/database";
import { IUser } from "../interfaces/users.interfaces";

export class UsersControllers{
    createUser(req: Request, res: Response): Response {
        const newUser: IUser = {id: generateId(), name: req.body.name, email: req.body.email};

        usersDatabase.push(newUser)

        return res.status(201).json({ user: newUser, message: "Usuário cadastrado com sucesso."});
    }
}