import "dotenv/config";
import router from "./routes/root-router";
import Server from "./server";
import validateEnv from "./utils/validateEnv";

validateEnv();

const server = new Server();

server.app.use("", router.routesPublic);
server.app.use("/api/auth", router.routesAuth);

server.listen((port: number)=> {
    console.info(
        "  App is running at http://localhost:%d in %s mode",
        port,
        server.app.get("env")
    );
    console.info("  Press CTRL-C to stop\n");
});
