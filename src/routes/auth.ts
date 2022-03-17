import { Router, Request, Response, NextFunction } from "express";
import Authentication from "../controllers/Authentication";
import validationMiddleware from "../middlewares/validation";
import LogInDto from "../services/authentication/logIn.dto";

const routesAuth = Router();

routesAuth.post("/login", validationMiddleware(LogInDto));

/*routesAuth.post("/login", async(request: Request, response: Response, next: NextFunction) => { 
    const authentication = new Authentication();
    const user = await authentication.loggingIn(request.body);

    console.log(user, "<<");
    
    response.send(user);
    next();
});*/

routesAuth.post("/logout", (_: Request, res: Response) => {
    res.send("Cerrar Sesión");
});

routesAuth.post("/reset", (_: Request, res: Response) => {
    res.send("Recuperar Contraseña");
});

routesAuth.post("/signup", (_: Request, res: Response) => {
    res.send("Resgitrarse");
});

export default routesAuth;