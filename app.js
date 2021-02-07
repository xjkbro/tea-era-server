const express = require("express");
const morgan = require("morgan");
const menuRouter = require("./routes/menuRouter");
const locationsRouter = require("./routes/locationsRouter");
const gamesRouter = require("./routes/gamesRouter");

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));
app.use(express.json());

//Router for menu
app.use("/menu", menuRouter);
//Router for locations
app.use("/locations", locationsRouter);
//Router for games
app.use("/games", gamesRouter);

app.use(express.static(__dirname + "/public"));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
