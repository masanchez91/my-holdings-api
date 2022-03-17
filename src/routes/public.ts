import { Router, Request, Response} from "express";

const routesPublic = Router();

routesPublic.get("/", ( _: Request, res: Response) => {
    (() => {
        const option = "8080";
        console.info(`El puerto ${option} esta abierto`);
    })();
    res.send("Bienvenido | API de la aplicación");
});

routesPublic.get("/api", ( _: Request, res: Response) => {
    res.send("Documentación de la API");
});

export default routesPublic;