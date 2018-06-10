var student=require('../bin/model/student_model');
var express=require('express');
var router=express.Router();
router.get('',function(req,res,next){
    student.getAllTask(function(err,rows)
        {
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });

});

router.post('/',function(req,res,next){
    student.addTask(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
router.delete('/:rno',function(req,res,next){
    student.deleteTask(req.params.rno,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
router.put('/:rno',function(req,res,next){
    student.updateTask(req.body,req.params.rno,function(err,rows){
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