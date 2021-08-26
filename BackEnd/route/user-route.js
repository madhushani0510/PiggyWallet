var express =require('express')
var router=express.Router()
var connection=require('./database/database')
const user=require('../model/user')

router.get('/allusers', async (req,res)=>{
    const users = await user.find();
    res.send(users);
})

router.get('/oneuser/:nic',async (req,res)=>{
    const users = await user.findOne(req.params);
    res.send(users);
    
})
router.put('/:nic',async(req,res)=>{
    const data=await user.findOneAndUpdate(req.params,req.body);
    res.send(data)
})

router.delete('/:_id',async(req,res)=>{
    const data=await user.deleteOne(req.params);
    res.send(data)
})
router.post('/saveuser',async(req,res)=>{
    const data=await user.create(req.body);
    res.send(data)
})

//------------------------------------------------------------------------->

module.exports=router