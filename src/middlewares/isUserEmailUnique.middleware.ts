import { NextFunction, Request, Response } from "express";
import { usersDatabase } from "../database/database";

export class IsUserEmailUnique {
    static execute(req: Request, res: Response, next: NextFunction) {

        const userFound = usersDatabase.find(user => user.email === req.body.email)

        if (userFound) {
            return res.status(409).json({ message: "Email already registered." })
        }
        res.locals.user = userFound

        return next()
    }
}