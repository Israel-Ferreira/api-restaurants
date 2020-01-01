import mongoose, { mongo } from 'mongoose'

class DbConfig {
    _url = "mongodb://mongodb:27017/restaurantes"
    DB_CONNECTION

    startDbConnection(){
        mongoose.connect(this._url,{ useNewUrlParser: true})
        this.logger()
    }


    logger(){
        this.DB_CONNECTION = mongoose.connection
        this.DB_CONNECTION.on("connected", () => console.log(`O mongoose foi iniciado`))
        this.DB_CONNECTION.on("err", err => console.log(`Erro na conexão: ${err}`))
        this.DB_CONNECTION.on("disconnected", () => console.log(`O mongoose foi desconectado`))
    }


    closeConnection(message,callback){
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por: ${message}`)
            callback()
        })
    }
}


export default new DbConfig()