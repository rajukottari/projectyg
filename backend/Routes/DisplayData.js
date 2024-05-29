const express = require('express')
const router = express.Router();

router.post('/clothData',(req,res)=>{
    try{
        res.send([global.cloth_items,global.clothCategory])
        }catch(error){
            console.error(error.message);
            res.send("Server error")
        }
})
module.exports=router;