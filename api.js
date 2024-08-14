const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


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



app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
