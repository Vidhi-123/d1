var product3=require('../bin/model/product_tbl_model');
var express=require('express');
var router=express.Router();
router.get('/:cat_name?',function(req,res,next){
    if(req.params.cat_name){
        product3.getProductByCateogry(req.params.cat_name,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else
            {
                res.json(rows);
            }
        });

    }
    else{
        product3.getAllProducts(function(err, rows) {
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });

    }

});
    
   
module.exports=router