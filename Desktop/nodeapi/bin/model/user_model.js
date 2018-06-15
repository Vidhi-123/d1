var db=require('../dbconnection');
var user={
    getAllTask:function(callback){
        return db.query('select * from user_tbl',callback);
    },
    getLoginById:function(item,callback){
      return db.query('select * from user_tbl where email_id=? And password=?',[item.email_id,item.password],callback);
    },
    Adduser:function(item,callback){
        return db.query("insert into user_tbl values (?,?,?,?,?,?,?)",[item.email_id,item.password,item.u_name,item.mob_no,item.city,item.gender,item.address],callback);
    },
    getLogById:function(email_id,callback){
        return db.query('select * from user_tbl where email_id=?',[email_id],callback);
      },
      getLoById:function(email_id,callback){
        return db.query('select * from user_tbl where email_id=?',[email_id],callback);
      },
      updateprofile:function(item,email_id,callback){
        return db.query("update user_tbl set password=?,u_name=?,mob_no=?,city=?,gender=?,address=? where email_id=?",[item.password,item.u_name,item.mob_no,item.city,item.gender,item.address,item.email_id],callback);
    },
    updatepro:function(item,callback){
        return db.query("update user_tbl set password=? where email_id=?",[item.password,item.email_id],callback);
    }
};
module.exports=user;
