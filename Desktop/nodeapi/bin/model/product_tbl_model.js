var db=require('../dbconnection');
var product1={
    getAllTask:function(callback){
        return db.query('select * from cateogry_tbl',callback);
    },
    getAllProducts:function(callback){
        return db.query('select * from product_tbl',callback)
    },
    getProductByCateogry:function(cat_name,callback){
        return db.query('select c.*,p.* from cateogry_tbl c,product_tbl p where c.cat_id=p.fk_cat_id and c.cat_name=?',[cat_name],callback);
    },
    getProductById:function(p_id,callback){
        return db.query('select * from product_tbl where p_id=?',[p_id],callback);
      },
      getSimilarProduct:function(fk_cat_id,p_id,callback){
        return db.query('select * from product_tbl where fk_cat_id=? and p_id NOT IN (?)',[fk_cat_id,p_id],callback);
      }
      


};

module.exports=product1;