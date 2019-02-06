const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
  //console.log(__dirname);
});

app.listen(3014);
console.log("Server listening on port 3014");
