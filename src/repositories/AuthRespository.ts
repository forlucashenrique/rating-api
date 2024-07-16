import { UserModel  } from "../models/User";


export const executeRegister = async (email: string) => {
    const user = await UserModel.findOne({ email: email }).select('+password');

    return user;
}

