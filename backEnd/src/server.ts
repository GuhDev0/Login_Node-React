import express  from "express";
import router from "./router/router";
const app = express ();
app.use(express.json())

app.use("/users", router)

app.listen(3030,() => {
    console.log("SERVIDOR ABERTO")
})