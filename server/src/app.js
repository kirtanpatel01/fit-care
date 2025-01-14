import express from 'express';
import cors from 'cors';
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { createServer } from 'http';
import { Server } from 'socket.io';
import path from 'path'

const app = express();
const ORIGIN = process.env.ORIGIN;
const server = createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const io = new Server(server, {
    cors: [ORIGIN, 'http://localhost:5173'],
    credentials: true,
    methods: [ 'GET', 'POST' ]
});

app.use(
    cors({
        origin: [ORIGIN, 'http://localhost:5173'],
        credentials: true,
        methods: [ 'GET', 'POST' ],
    }),
);

app.use((req, res, next) =>{
    req.io = io;
    next();
});

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
})

io.on('connection', (socket) => {
    console.log("A user connected!");
    socket.on('disconnect', () => {
        console.log('A user disconnected!');
    })
});

export {server};