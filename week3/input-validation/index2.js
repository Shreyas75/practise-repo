const express = require("express");
const app = express();
const port = 3000;
const z = require("zod")


// const schema = z.array(z.number()); 

const schema = z.object({
    email: z.string(),
    password: z.string(),
    country: z.literal("IN").or(z.literal("US")),
    kidneys: z.array(z.number())
})


app.use(express.json());




app.post("/health-checkup", function (req,res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)
    if(!response.success){
        res.status(411).json({
            msg: "Input is invalid."
        })
    } else{
        res.send({
            response
        })
    }
    
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})