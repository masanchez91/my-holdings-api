import request from "supertest";
import router from "../src/routes/root-router";
import Server from "../src/server";

const server = new Server();

server.app.use("/", router.routesPublic);

describe("GET /api", () => {
	it("should return 200 OK", () => {
		return request(server.app).get("/api").expect(200);
	});
});