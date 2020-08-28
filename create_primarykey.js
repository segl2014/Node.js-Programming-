var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "javatpoint",
});
con.connect(function(err){
    if(err) throw err;
    console.log("connected!");
    var sql = "CREATE TABLE employee2 (id INT PRIMARY KEY, name VARCHAR(255),age INT(3), City VARCHAR(255)";
    con.query(sql, function (err,result){
        if(err) throw err;
        console.log("Table created");
    });
});