var todo=require('../bin/model/task_model');
var express=require('express');
var router=express.Router();
router.get('',function(req,res,next){
    todo.getAllTask(function(err,rows){
        if(err){
            res.json=err;
        }
        else
        {
            res.json=rows;
        }
    })
})
router.post('/',function(req,res,next){
    console.log("hello");
    todo.deleteAll(req.body,function(err,rows){
        console.log("hello");
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }

    });
});
module.exports=router;