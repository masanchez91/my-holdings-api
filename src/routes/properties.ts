import { Router, Request, Response } from "express";

const routesPropeties = Router();

routesPropeties.post("/properties", (_: Request, res: Response) => {
    res.send("Crear un nueva propiedad");
});

routesPropeties.get("/properties", (_: Request, res: Response) => {
    res.send("Recuperar todas las propiedades");
});

routesPropeties.get("/properties/:id", (_: Request, res: Response) => {
    res.send("Recuperar los detalles de una propiedad");
});

routesPropeties.put("/properties/:id", (_: Request, res: Response) => {
    res.send("Actualizar los detalles de la propiedad si existe");
});

export default routesPropeties;