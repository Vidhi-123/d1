var similar=require('../bin/model/product_tbl_model');
var express=require('express');
var router=express.Router();
router.get('/:cat_id/:p_id',function(req,res,next){
    similar.getSimilarProduct(req.params.cat_id,req.params.p_id,function(err,rows){
        if(err)
        {
            res.json(err)
        }
        else{
            res.json(rows)
        }
    });
});
module.exports=router