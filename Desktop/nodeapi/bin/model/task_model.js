var db=require('../dbconnection');
var task={
    getTaskById:function(id,callback){
        return db.query('select * from task where id=?',[id],callback);
    
},
getAllTask:function(callback){
    return db.query('select * from task',callback)
},


addTask:function(item,callback){
    return db.query("insert into task values (?,?,?)",[item.id,item.title,item.status],callback)
},
deleteTask:function(id,callback){
    return db.query("delete from task where id=?",[id],callback);
},
updateTask:function(item,id,callback){
    return db.query("update task set title=?,status=? where id=?",[item.title,item.status,id],callback);
}

};
module.exports=task;