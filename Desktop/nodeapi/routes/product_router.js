var product=require('../bin/model/product_model');
var express=require('express');
var router=express.Router();
var multer=require('multer');
var path=require('path');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
    cb(null, 'public/images/product_img')
    },
    filename: (req, file, cb) => {
    x=file.fieldname + '-' + Date.now()+path.extname(file.originalname);
    cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
    });
    var upload = multer({storage: storage});
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
router.post('/',upload.single('image'),function(req,res,next){
    product.addTask(req.body,req.file.filename,function(err,rows){
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