import { Application } from "express-serve-static-core";

export namespace generalRouter{
    module.exports = async(app:Application)=>{
        require('./appRouter')(app)

    }
}