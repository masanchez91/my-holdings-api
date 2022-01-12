import routerPrincipal from "./routes/root-router";
import Server from "./server";

const server = new Server();

// Ruta para la página inicial
server.app.use("/", routerPrincipal);

server.listen((port: number)=> {
    console.log(
        "  App is running at http://localhost:%d in %s mode",
        port,
        server.app.get("env")
    );
    console.log("  Press CTRL-C to stop\n");
});