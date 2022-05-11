const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// const corOptions = {
//   origin: "https://localhost:5000",
// };

// // middleware
// app.use(cors(corOptions));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // api
// app.get('/', (req, res) => {
//     res.json({ message: 'hello from api' });
// })

// // start server
// app.listen(PORT, () => {
//   console.log(`The server is listening on port ${PORT}`);
// });
