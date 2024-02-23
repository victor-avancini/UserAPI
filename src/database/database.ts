import { IUser } from "../interfaces/users.interfaces";

export const usersDatabase: IUser[] = []

let id = 0;

export const generateId = () => {
    id++;
    return id;
}