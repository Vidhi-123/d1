var product2=require('../bin/model/product_tbl_model');
var express=require('express');
var router=express.Router();
router.get('/',function(req,res,next){
    product2.getAllProducts(function(err,rows){
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