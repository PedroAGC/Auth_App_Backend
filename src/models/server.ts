import express, {Application} from 'express';

import cors from 'cors';

import loginRoutes from '../routes/login.routes';
import dbConnection from '../database/config';

class Server {
    private app : Application;
    private port: string;
    private paths = {
        login: '/api/login',
        signin: '/api/signin'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '2000';

        //  DB Connection
        this.dbConnect()

        //  Middlewares
        this.middlewares();

        //  Routes
        this.routes();

    }

    async dbConnect(){
        await dbConnection();
    }    

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.paths.login, loginRoutes);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server running in the Port: ${this.port}`);
        })
    }

}

export default Server;