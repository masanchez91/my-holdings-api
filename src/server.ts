import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { Server as HTTPServer } from "http";
import errorMiddleware from "./middlewares/error";
import loggerMiddleware from "./middlewares/logger";
import databaseConnection from "./database/mysql/connection";
class Server {
	public app!: express.Application;
	private readonly DEFAULT_PORT_SERVER = process.env.PORT || 8080;
	private httpServer!: HTTPServer;

	constructor() {
		this.configExpress();
		this.dbConnection();
		this.initializeMiddlewares();
		this.initializeErrorHandling();
		this.initializeLogger();
		this.createServer();
	}

	private async dbConnection() {			
		try {
			await databaseConnection.authenticate();
			console.info("Connection has been established successfully.", "\n");
		} catch (error) {
			console.error("Unable to connect to the database:", error, "\n");
		}
	}

	private configExpress() {
		this.app = express();
	}

	private initializeMiddlewares() {
		this.app.use(bodyParser.json());
		this.app.use(cookieParser());
	}

	private initializeErrorHandling() {
		this.app.use(errorMiddleware);
	}

	private initializeLogger() {
		this.app.use(loggerMiddleware);
	}

	private createServer() {
		this.httpServer = new HTTPServer(this.app);
	}

	public listen(callback: (port: number) => void): void {		
		this.httpServer.listen(this.DEFAULT_PORT_SERVER, () => {
			callback(+this.DEFAULT_PORT_SERVER);
		});
	}

}

export default Server;
