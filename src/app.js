import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import RestaurantRouter from './routes/RestaurantRouter'
import ProductRouter from './routes/ProductRouter'
import DbConfig from './config/DbConfig'


export default class App {
    app = express()

    startup(port,callback){
        this.startServer(port,callback)

        this.setupMiddlewares()
        this.createDbConn()
        this.startupRoutes()
    }



    createDbConn(){
        DbConfig.startDbConnection()
    }


    startupRoutes(){
        this.app.get("/", (req,res) => res.send({message: "Hello World"}))
        this.app.use('/restaurants', RestaurantRouter)
        this.app.use('/products', ProductRouter)
    }


    setupMiddlewares() {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: false}))

        const {NODE_ENV} = process.env

        if(NODE_ENV == "development") {
            this.app.use(morgan("dev"))
        }else if(NODE_ENV == "production") {
            this.app.use(morgan("common"))
        }else{
            this.app.use(morgan("combined"))
        }

    }


    startServer(port,callback){
        this.app.listen(port,callback)
    }
    
}

