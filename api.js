const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

const xlsx=require('xlsx')
let wb=xlsx.readFile('data.xlsx');
let ws=wb.Sheets['Sheet1'];
let data=xlsx.utils.sheet_to_json(ws);
data.forEach(element => {
  console.log(element.id)
  
});



// your code

app.get('/', function (req, res) {
    res.send('Hello World')
  })

  app.get('/test', function (req, res) {
    res.send('api practice')
  })
 

  app.get('/names', (req, res)=> {
    names=[
        {id:1,name:'mhmd'},
        {id:2,name:'ali'},
        {id:3,name:'jawad'}
    ]
    res.send(names)
  })

  app.get('/test2', function (req, res) {
    res.send('task done')
  })

  app.get('/test3', function (req, res) {
    res.send('great job')
  })

  app.get('/data', function (req, res) {
    let students=[];
    data.forEach(element=>{
      students.push(element.name)
    })
    res.send(students)
  })



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
