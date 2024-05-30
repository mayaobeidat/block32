const express =require("express");
const app = express();
const baseQuery = "/api/";
const path = require("path");

const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

// static routes here (you only need these for deployment)
app.get(baseQuery, (req,res)=>{
    res.json({
        success:true
    });
});
app.get("/", (req, res) => {
    res.sendFile(path.join(publicPath, "./index.html"));
});

// app routes here
app.use(baseQuery + "flavors", require("./flavors"));

// create your init function
    // *** flavors file ***
    
// init function invocation
app.listen(8080, () => {
    console.log("App is running at port 8080");
  });