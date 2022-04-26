import express, {Application} from 'express';

import cors from 'cors';

class Server {
    private app : Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '2000';

        //  Middlewares
        this.middlewares();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        })
    }

}

export default Server;