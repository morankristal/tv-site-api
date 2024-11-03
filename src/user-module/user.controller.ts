import { Request, Response } from 'express';
import { getAllUsers, createNewUser, deleteUserById } from './user.service';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
};

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = await createNewUser(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving user', error });
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try{
       await deleteUserById(req.params.id);
        res.status(200).json({ message: 'User deleted' });
    }
    catch (error){
        res.status(500).json({ message: 'Error retrieving user', error });
    }
}
