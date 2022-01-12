import { Router, Request, Response} from "express";

const routerPrincipal = Router();

// Definimos las rutas teniendo en cuenta que las ruta raiz.
routerPrincipal.get("/", ( _: Request, res: Response) => {
    res.send("Bienvenido a la API de la aplicación");
});

routerPrincipal.get("/api", ( _: Request, res: Response) => {
    res.send("Documentación de la API");
});

export default routerPrincipal;