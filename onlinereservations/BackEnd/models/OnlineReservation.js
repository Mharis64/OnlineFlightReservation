import mongoose from "mongoose";
const LoginStructure= mongoose.Schema({

firstName : String,
lastName : String,
userName:String,
password: String,
email:String,
address:String
});

const OnlineReservationModel=mongoose.model(OnlineReservation,LoginStructure);  

export default OnlineReservationModel;