var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: " ",
    database: "javatpoint"
});
con.connect(function(err){
    if (err) throw err;
    console.log("connected!");
    var sql = "INSERT INTO employees(id, name, age,city) VALUE";
    var value = [
        ['2','Bharat Kumar', '25', 'Mumbai'],
        ['3', 'John Cena','35','Las Vegas'],
        ['4','Ryan Cook', '15','CA']
    ];
    con.query(sql,[values], function (err,reslt){
        if (err) throw err;
        console.log("Number of records inserted:" + reslt.affectedRows);
    });
});