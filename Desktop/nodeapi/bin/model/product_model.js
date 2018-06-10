var db=require('../dbconnection');
var product={
    getAllTask:function(callback){
        return db.query('select * from product',callback);
    },
    
addTask:function(item,callback){
    return db.query("insert into product values (?,?,?,?,?,?)",[item.id,item.name,item.price,item.image,item.manufacterer,item.soh],callback)
},
deleteTask:function(id,callback){
    return db.query("delete from product where id=?",[id],callback);
},
updateTask:function(item,id,callback){
    return db.query("update product set name=?,price=?,image=?,manufacterer=?,soh=? where id=?",[item.name,item.price,item.image,item.manufacterer,item.soh,id],callback);
}




    
};
module.exports=product;