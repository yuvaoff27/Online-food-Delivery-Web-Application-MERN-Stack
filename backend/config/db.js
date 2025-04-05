import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://food-del:6384797769@cluster0.313hn.mongodb.net/food-del')
    .then(()=>console.log("DB Connected"));
   
}


