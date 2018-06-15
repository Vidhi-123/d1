var product=require('../bin/model/product_model');
var express=require('express');
var router=express.Router();
router.get('/:id?',function(req,res,next){
    if(req.params.id){
        product.getProductById(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err)
            }
            else{
                res.json(rows)
            }
            });
        }
        else
        {
            product.getAllTask(function(err,rows)
            {
                if(err)
                {
                    res.json(err)
                }
                else{
                    res.json(rows)
                }
        
    
   
        });
    }

});
router.post('/',function(req,res,next){
    product.addTask(req.body,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
router.delete('/:id',function(req,res,next){
    product.deleteTask(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
router.put('/:id',function(req,res,next){
    product.updateTask(req.body,req.params.id,function(err,rows){
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