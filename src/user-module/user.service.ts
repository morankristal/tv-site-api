import { getRepository } from 'typeorm';
import { User } from './user.entity';


export const getAllUsers = async (): Promise<User[]> => {
    const userRepository = getRepository(User);
    return await userRepository.find();
};

export const createNewUser = async (user: User)=> {
    const userRepository = getRepository(User);
    return await userRepository.save(user);
}

export const deleteUserById = async (id: string) => {
    const userRepository = getRepository(User);
    await userRepository.delete(id);
}
