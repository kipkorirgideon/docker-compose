import express from 'express'
import { Application, Response, Request } from 'express-serve-static-core'
module.exports = async(app:Application)=>{
    app.get('/', async(req:Request, res:Response)=>{
        res.render('app')

    })
}