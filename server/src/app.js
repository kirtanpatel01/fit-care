import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";
import userRoutes from "./routes/user.route.js";
import { ApiError } from "./utils/ApiError.js";

const app = express();
const ORIGIN = process.env.ORIGIN;
const server = createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const io = new Server(server, {
    cors: [ORIGIN, "http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST"],
});

app.use(
    cors({
        origin: [ORIGIN, "http://localhost:5173"],
        credentials: true,
        methods: ["GET", "POST"],
    }),
);

app.use((req, res, next) => {
    req.io = io;
    next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoutes);

app.use(express.static(path.resolve(__dirname, "../../client/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

app.use((err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: err.success,
            message: err.message,
            errors: err.errors,
        });
    }

    return res.status(500).json({
        success: false,
        message: "Internal Server Error",
        errors: [],
    });
});


io.on("connection", (socket) => {
    console.log("A user connected!");
    socket.on("disconnect", () => {
        console.log("A user disconnected!");
    });
});

export { server };
