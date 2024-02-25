import { Request, Response } from "express";
import { UsersServices } from "../services/users.services";

export class UsersControllers{
    createUser(req: Request, res: Response): Response {
        const usersServices = new UsersServices();

        const response = usersServices.createUser(req.body.name, req.body.email)

        return res.status(201).json({ user: response, message: "Usuário cadastrado com sucesso."});
    }
}