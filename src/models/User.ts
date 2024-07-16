import {Schema, model} from "mongoose";

import bcrypt from 'bcryptjs';


type User = {
    name: string;
    email: string;
    password: string;
}

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },

}, {
    timestamps: true
})


UserSchema.pre('save', async function (next) {
    const hashPassword = await bcrypt.hash(this.password, 10);
    this.password = hashPassword;
})



export const UserModel = model<User>('User', UserSchema);