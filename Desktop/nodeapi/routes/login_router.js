var user=require('../bin/model/user_model');
var express=require('express');
var router=express.Router();


router.get('/',function(req,res,next){
    user.getAllTask(function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});

router.post("/",function(req,res,next){
    user.getLoginById(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
module.exports=router;