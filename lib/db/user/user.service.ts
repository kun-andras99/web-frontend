import {
    getAllUsers as repositoryGetAllUsers,
    getUserByEmail as repositoryGetUserByEmail,
    getUserById as repositoryGetUserById,
    getUserByUsername as repositoryGetUserByUsername,
} from "./user.repository";

export async function getAllUsers() {
    return repositoryGetAllUsers();
}

export async function getUserById(userId: string) {
    return repositoryGetUserById(userId);
}

export async function getUserByUsername(username: string) {
    return repositoryGetUserByUsername(username);
}

export async function getUserByEmail(email: string) {
    return repositoryGetUserByEmail(email);
}
