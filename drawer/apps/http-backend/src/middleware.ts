import {NextFunction, Request, Response} from 'express';
import { ENV } from './config';
import jwt from 'jsonwebtoken';

export function middleware(req:Request, res:Response, next:NextFunction){
    const token = req.headers["authorization"] ?? ""
    const decoded = jwt.verify(token ,ENV.JWT_SECRET) as any
    if(decoded && decoded.userId){
        req.userId = decoded.userId 
        next()
    }else{
        res.send({
            msg:"token is not provided or unauthorized"
        })
    }
}
