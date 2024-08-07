const mongoose = require("mongoose");
const express = require("express");
const port = 3000;


const app = express();
app.use(express.json())

mongoose.connect(
  "mongodb+srv://shrey544:Danbrown24@shreyasmanoti.deiuqsn.mongodb.net/userappnew?retryWrites=true&w=majority&appName=ShreyasManoti",
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});


app.post("/signup", async function (req,res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    
    const existingUser = await User.findOne({email: email});

    if(existingUser){
        return res.status(400).send("Username already exists") 
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    })

    user.save();
    res.json({
        msg: "User created Successfully"
    })

})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})