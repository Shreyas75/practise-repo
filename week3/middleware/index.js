const express = require("express");

const app = express();

const port = 3000;

// app.get("/health-checkup", (req, res) => {
//     // do health checks here
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != "harkirat" || password != "pass") {
//         res.status(400).json({"msg": "Somethings up w your inputs"})
//         return;
//     }

//     if(kidneyId !=1 && kidneyId != 2){
//         res.status(400).json({msg: "Something up w inputs"});
//         return;
//     }

//     // do something w kidney here 
//     res.json({
//         msg: "Your kidney is fine!"
//     })

// })

let noOfReq = 0;

function calculateRequest(req,res,next)  {
    noOfReq++;
    console.log(noOfReq);
    next();
}

app.get("/", function(req,res) {
    res.send("Hello World")
})

app.use(calculateRequest);

app.get("/health-checkup", function (req,res) {
    res.json({
        msg: "Hi there"
    })
} )

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})