const express = require('express');
const app = express();
const cors = require('cors');
const db=require('./dbconfig.js')
app.use(cors());
app.get("/",(req,res)=>{
  res.send("Hello World");
})
app.get("/test",(req,res)=>{
    db.query("SELECT * FROM fundraiser", (err, result) => {
      if (err) {
          return res.send({ state: 1, message: err });
        }
      console.log(result);
      res.json(result);
      // res.send(result);
    })
})
app.get("/Search",(req,res)=>{
    db.query("select * from CATEGORY",(err,result)=>{
      if (err) {
          return res.send({ state: 1, message: err });
        }
      console.log(result);
      res.send(result);
    })
})
app.get("/FundraiserList",(req,res)=>{
    db.query("select f.*,c.name from fundraiser f,CATEGORY c where active=1 and f.CATEGORY_ID=c.CATEGORY_ID",(err,result)=>{
      if (err) {
          return res.send({ state: 1, message: err });
        }
      console.log(result);
      res.send(result);
    })
})
app.get("/FundraiserById",(req,res)=>{
  console.log(req.query)
  var id=req.query.id;
    db.query("select f.*,c.name from fundraiser f,CATEGORY c where FUNDRAISER_ID=? and f.CATEGORY_ID=c.CATEGORY_ID",[id],(err,result)=>{
      if (err) {
          return res.send({ state: 1, message: err });
        }
      console.log(result);
      res.send(result);
    })
})


app.get("/Fundraisers",(req,res)=>{
  console.log(req.query);
  var ORGANIZER=req.query.organizer;
  var CATEGORY=req.query.category;
  var CITY=req.query.city;
  let sql="select f.*,c.name from fundraiser f,CATEGORY c where f.CATEGORY_ID=c.CATEGORY_ID "
    //用于凭借动态查询数值的数组
    var conditions=[]
  if(ORGANIZER){
    ORGANIZER="%"+ORGANIZER+"%"
    conditions.push(ORGANIZER)
    sql+=" and f.ORGANIZER like ?"
  }
  if(CATEGORY){
    sql+=" and f.CATEGORY_ID=?"
    // CATEGORY=parseInt(CATEGORY)
    conditions.push(CATEGORY)
  }
  if(CITY){
    sql+=" and f.CITY like ?"
    CITY="%"+CITY+"%"
    conditions.push(CITY)
  }
console.log(sql);
console.log(conditions);
 db.query(sql,conditions,(err,result)=>{
  if (err) {
    return res.send({ state: 1, message: err });
  }
   console.log(result);
   res.send(result);
 })
})
app.listen(3000,()=>{
  console.log("Server is running on port 3000");
})