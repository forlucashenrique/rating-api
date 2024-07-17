import { verifyJwtToken } from '../utils/JwtService';

import { Request, Response, NextFunction } from 'express';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({message: 'NoTokenProvided'});
    }

    const parts = authHeader.split(' ');

    if (!(parts.length === 2)) {
        return res.status(401).json({message: 'TokenError'});
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return res.status(401).json({message: 'TokenMalformatted'});
    }

    try {
        const decoded = verifyJwtToken(token);

        req.body.userId = decoded.id;

        return next();

    } catch (err) {
        return res.status(401).json({message: 'TokenInvalid'});
    }

}