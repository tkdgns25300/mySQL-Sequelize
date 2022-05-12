require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// middleware
app.use(
    cors({
        origin: 'https://localhost:5000',
        methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
    }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// api
app.get('/', (req, res) => {
    res.json({ message: "Hello from API" });
})

// start server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})