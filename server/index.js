import express from 'express';
import { config } from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from "url";
import mongoose from 'mongoose';
import { createServer } from 'http';
import { Server } from 'socket.io';

config();

const app = express();
const PORT  = process.env.PORT || 8002;
const MONGODB_URL = process.env.MONGODB_URL;
const ORIGIN = process.env.ORIGIN;
const DB_NAME = process.env.DB_NAME;
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

mongoose.connect(`${MONGODB_URL}/${DB_NAME}`).then(() => {
    console.log("MongoDB is connected now!");
});

io.on('connection', (socket) => {
    console.log("A user connected!");
    socket.on('disconnect', () => {
        console.log('A user disconnected!');
    })
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})