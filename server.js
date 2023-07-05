import mongoose from "mongoose"
import { mongoConfig, serverConfig } from "./config.js"

export default class Server {
    static startServer = async (app) => {
        const CONNECTION_URL = `${mongoConfig.connectionUrl}${mongoConfig.database_name}`
        await mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(()=> {
                console.log('Connected to database successfully')

                // server listening
                app.listen(serverConfig.port, serverConfig.ip, ()=> {
                    console.log(`Server running on http://${serverConfig.ip}:${serverConfig.port}`)
                })
            })
            .catch((error) => {
                console.log('Mongodb connection error: ', error)
            })
    }
}