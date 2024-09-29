//mysql.js
//首先需要安装nodejs 的mysql包
//npm install mysql
//编写nodejs与mysql交互的代码
var mysql = require('mysql');
var TEST_DATABASE = 'crowdfunding_db';
//创建连接
var client = mysql.createConnection({
 user: 'root',
 password: '123456',
 host: 'localhost',
 database: TEST_DATABASE
});
// client.connect();
// client.query("use " + TEST_DATABASE);
// client.query(
//  'SELECT * FROM '+TEST_TABLE,
//  function selectCb(err, results, fields) {
//   if (err) {
//    throw err;
//   }
//   console.log(results);
//     if(results)
//    {
//      for(var i = 0; i < results.length; i++)
//      {
//        console.log("%d\t%s\t%s", results[i].FUNDRAISER_ID, results[i].ORGANIZER, results[i].CAPTION,results[i].TARGET_FUNDING,results[i].CURRENT_FUNDING,results[i].CITY);
//      }
//    }
//  }
// );

module.exports = client;

