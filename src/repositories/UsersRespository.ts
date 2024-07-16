import { Types, UpdateWriteOpResult } from "mongoose";
import { UserModel } from "../models/User";
import { generateJwtToken } from "../utils/JwtService";


type User = {
    name: string;
    email: string;
    password: string;
}

type UserDocument = {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password: string;
}

type Response = {
    error: boolean;
    message: string;
    data?: User;
    token?: string;
}

export const executeCreateUser = async (user: User): Promise<Response> => {
    const userExists = await UserModel.findOne({ email: user.email });

    if (userExists) {
        return {
            error: true, 
            message: 'UserAlreadyExists'
        }
    }

    const userCreated = await UserModel.create(user);

    return {
        error: false,
        message: 'UserCreated',
        data: userCreated,
        token: generateJwtToken({ id: userCreated._id })
    };
}


export const executeGetUsers = async (): Promise<UserDocument[]> => {
    const users = await UserModel.find();

    return users;

}

export const executeGetUser = async (id: string): Promise<UserDocument | null> => {
    const user = await UserModel.findById(id);

    return user;
}

export const executeUpdateUser = async (id: string, user: User): Promise<UpdateWriteOpResult | null> => {
    const updatedUser = await UserModel.updateOne({ _id: id }, user)

    return updatedUser;
}