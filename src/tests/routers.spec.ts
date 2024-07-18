import request from "supertest";
import jwt from "jsonwebtoken";
import { app } from "../server";

const secret = process.env.JWT_SECRET as string;

type User = {
    _id: number;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

describe("Get Users", () => {
    it("should return a list of users", async () => {
        const expectUser: User =   {
            _id: 1,
            name: "John Doe",
            email: "",
            createdAt: "2021-09-08T00:00:00.000Z",
            updatedAt: "2021-09-08T00:00:00.000Z",
            __v: 0
        }

        const user = {
            id: 1,
            name: "John Doe",
            email: ""
        }

        const token = jwt.sign(user, secret, { expiresIn: "1h" });
        const response = await request(app).get("/api/v1/users").set("Authorization", `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body.data).toBeInstanceOf(Array);
        
        response.body.data.forEach((user: User) => {
            expect(user).toHaveProperty("_id");
            expect(user).toHaveProperty("name");
            expect(user).toHaveProperty("email");
            expect(user).toHaveProperty("createdAt");
            expect(user).toHaveProperty("updatedAt");
            expect(user).toHaveProperty("__v");

            expect(typeof user._id).toBe("string");
            expect(typeof user.name).toBe("string");
            expect(typeof user.email).toBe("string");
            expect(typeof user.createdAt).toBe("string");
            expect(typeof user.updatedAt).toBe("string");
            expect(typeof user.__v).toBe("number");
        })
    })
})



describe("Register User", () => {

    it('should return a user and a token', async () => {

        const body = {
            name: "joel",
            email: "joel6@mail.com",
            password: "123456"
        }

        const response = await request(app).post("/api/v1/users/register").send(body)

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("message");
        expect(response.body).toHaveProperty("data");
        expect(response.body).toHaveProperty("token");
    })

    it('should return an error when the email is already in use', async () => {
        const body = {
            name: "joel",
            email: "joel6@mail.com",
            password: "123456",
        }

        const response = await request(app).post("/api/v1/users/register").send(body)

        expect(response.status).toBe(400);
        expect(response.body.message).toBe("UserAlreadyExists");
        
    })

});



describe("User Login", () => {

    it('should auth user', async () => {

        const body = {
            email: "joel5@mail.com",
            password: "123456"
        }

        const response = await request(app).post("/api/v1/auth/login").send(body)

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty("user");
        expect(response.body).toHaveProperty("token");
    })

    it('should return an error when the password or email is wrong', async () => {
        const body = {
            email: "joel5@mail.com",
            password: "12345678",
        }

        const response = await request(app).post("/api/v1/auth/login").send(body)

        expect(response.status).toBe(401);
        expect(response.body.message).toBe("InvalidCredentials");
        
    })

});