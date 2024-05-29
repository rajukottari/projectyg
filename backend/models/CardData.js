import mongoose from "mongoose";

const Data = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description :{
        type:String,
        required:true

    },
    price:{
        type:Number,
        

    },
    image:{
        type:String
    }
    
})

const CardData = mongoose.model('CardData', Data)

export default CardData;