const express = require("express");
const app = express();

const port = 3000;


app.use("/health-checkup", (req, res) => {
    
})


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})
