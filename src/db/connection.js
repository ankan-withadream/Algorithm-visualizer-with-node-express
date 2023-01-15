const mongoose = require ('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect("mongodb+srv://ankan_ghosh:ankan_1234@cluster0.mgtfgxg.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("connection successful");
}).catch((err)=>{
    console.log("error is = "+err);
})