
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();

app.use(helmet());

let corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:5173", "http://127.0.0.1:5173", "https://reactapp.com"],
    methods: ["GET", "POST"]
};

app.use(cors(corsOptions));
app.use(express.json());

// app.verb(path, callback);
app.get("/", (request, response) => {
    // response.send("<h1>Hello World!</h1>");

    response.json({
        message: "Hello World!"
    });
});

app.use("/api/auth", authRoutes);

app.use("/api/posts", postRoutes);

module.exports = { app }