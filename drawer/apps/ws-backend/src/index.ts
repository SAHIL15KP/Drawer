import { WebSocketServer } from "ws";
import * as jwt from 'jsonwebtoken';
import {ENV} from "./config"
const wss = new WebSocketServer({ port: 8000 })
wss.on('connection', function connection(ws, request) {
    const url = request.url
    if (!url) {
        return
    }
    const urlparams = new URLSearchParams(url.split("?")[1])
    const token = urlparams.get('token') || ""
    const decoded = jwt.verify( token,ENV.JWT_SECRET ) as any
    if(!decoded || !decoded.userId){
        ws.close()
        return
    }
    ws.on('message', function message(data) {
        ws.send('pong')
    })
})