var db=require('../dbconnection');
var cateogry={
    getAllTask:function(callback){
        return db.query('select * from cateogry',callback);
    },
    getCateogryById:function(cat_id,callback){
        return db.query("select * from cateogry where cat_id=?",[cat_id],callback)

    },
    
addTask:function(item,callback){
    return db.query("insert into cateogry values (?,?,?)",[item.cat_id,item.cat_name,item.isactive],callback)
},
deleteTask:function(cat_id,callback){
    return db.query("delete from cateogry where cat_id=?",[cat_id],callback);
},
updateTask:function(item,cat_id,callback){
    return db.query("update cateogry set cat_name=?,isactive=? where cat_id=?",[item.cat_name,item.isactive,item.cat_id],callback);
}




    
};
module.exports=cateogry;