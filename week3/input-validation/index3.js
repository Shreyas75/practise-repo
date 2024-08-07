const express = require("express");
const app = express();
const port = 3000;
const zod = require("zod")

app.use(express.json());



function validateInput(obj) {
    const scchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}



app.post("/login", function(req,res) {
    const response = validateInput(req.body)
    if(!response.success){
        res.json({
            msg: "Your inputs are invalid"
        })
        return;
    }
})



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})