import jwt, { JwtPayload } from 'jsonwebtoken';

import { Types} from 'mongoose';

type Params = {
    id: Types.ObjectId;
}

type VerifyResponse = {
    id: Types.ObjectId;
    iat: number;
    exp: number;

} & JwtPayload;

export function generateJwtToken(params: Params) {
    return jwt.sign(params, process.env.JWT_SECRET as string, {
        expiresIn: 86400
    });
}

export function verifyJwtToken(token: string) {
    const secret = process.env.JWT_SECRET as string;

    const decoded = jwt.verify(token, secret) as VerifyResponse;

    return decoded
}