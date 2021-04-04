const express = require("express")
const app = express()

const port = 5000;

app.get("/" ,(req, res)=> {
    res.send("welcome to UMU's api")
})
app.post("/post_request" ,(req, res)=> {
    res.send("You can post your data here")
})
app.delete("/del_request" ,(req, res)=> {
    res.send("You can DELETE from here")
})
app.put("/p_request" ,(req, res)=> {
    res.send("This is the PUT route")
})

app.listen(port, ()=> console.log(`the server has started ${port}`));