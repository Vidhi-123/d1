var editprofile=require('../bin/model/user_model');
var express=require('express');
var router=express.Router();
router.get('/:email_id',function(req,res,next){
   
        editprofile.getLoById(req.params.email_id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
            });
        });

        router.put('/:email_id',function(req,res,next){
            editprofile.updateprofile(req.body,req.params.email_id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
        });
        });

        router.put('/',function(req,res,next){
            editprofile.updatepro(req.body,function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else
                {
                    res.json(rows);
                }
            });
        });
        module.exports=router;
