const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;


// your code

app.get('/', function (req, res) {
    res.send('Hello World')
  })
  console.log(process.env.mohamad)

  app.get('/names', (req, res)=> {
    names=[
        {id:1,name:'mhmd'},
        {id:2,name:'ali'},
        {id:3,name:'jawad'}
    ]
    res.send(names)
  })


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
