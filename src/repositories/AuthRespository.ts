import { UserModel  } from "../models/User";


export const executeLogin = async (email: string) => {
    const user = await UserModel.findOne({ email: email }).select('+password');

    return user;
}

