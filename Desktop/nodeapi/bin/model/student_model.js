var db=require('../dbconnection');
var student={
    getAllTask:function(callback){
        return db.query('select * from student',callback);
    },
    getStudentById:function(rno,callback){
        return db.query("select * from student where rno=?",[rno],callback)
    },
    addTask:function(item,callback){
        return db.query("insert into student values (?,?,?,?,?,?,?)",[item.rno,item.name,item.result,item.mobile,item.gender,item.city,item.fees],callback);
    },
    deleteTask:function(rno,callback){
        return db.query("delete from student where rno=?",[rno],callback);
    },
    updateTask:function(item,rno,callback){
        return db.query("update student set name=?,result=?,mobile=?,gender=?,city=?,fees=? where rno=?",[item.name,item.result,item.mobile,item.gender,item.city,item.fees,rno],callback);
    }
    
};
module.exports=student;