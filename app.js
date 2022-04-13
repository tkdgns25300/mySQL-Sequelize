const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// start server
app.listen(port, () => {
    console.log(`The server is listening on port ${port}`)
})