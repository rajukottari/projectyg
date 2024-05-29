import CardData from "../models/CardData.js";

const CardDataController =async(req,res)=>{
    try{     
        const {title, description, price, image} = req.body;
        const newInstance   = new CardData({
            title, description, price, image
            
        })
        await newInstance.save()
        res.status(201).json({msg:"Data Posted sucefully !" } )
        
    }catch(err){
        console.log(err,"Error sending message");
        res.status(404).json({msg:"Unable to send message"})


    }
    
}

const CardControllerGet = async(req,res)=>{
    try{
        const findData = await CardData.find();
        res.status(200).json({msg:"Got data sucseffully!", sucess:true, data:findData})

    }catch(err){
        console.log(err, "Errr getting data")
        res.status(500).json({sucess:false, msg:"I can't get your data"})

    }
}



export  {CardDataController, CardControllerGet};