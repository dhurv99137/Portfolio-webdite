const exprees = require("express");
const dbConnect = require("./db");
const Protfoliodata = require("./protfolio")


const app = exprees()
app.use(exprees.json())
app.use(express.urlencoded())

app.get("/", (req, res) => {
    res.send(welcome)
})

// app.get("/", async (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// });

// app.post("/add", async (req, res) => {
//     console.log(req.body);
//     let data = await Quizdata.create(req.body);
//     res.send(data)
// });

app.listen(8090, () => {
    console.log("server in runing up to 8090 ");
    dbConnect()
});