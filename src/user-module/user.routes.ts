import { Router } from 'express';
import {createUser, deleteUser, getUsers} from './user.controller';

const userRoutes  = Router();

userRoutes.get('/', getUsers);
userRoutes.post('/', createUser);
userRoutes.delete('/:id', deleteUser);

export default userRoutes ;
