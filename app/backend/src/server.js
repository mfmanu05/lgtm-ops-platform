const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173"
    })
);

app.use(express.json());


app.get("/health", (req,res)=>{
    res.json({
        status:"UP",
        service:"lgtm-api"
    });
});


app.use("/api", require("./routes/api"));


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`API running on port ${PORT}`);
});
