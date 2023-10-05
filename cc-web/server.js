var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
const fs = require('fs');

app.use(express.static('public'));

app.ws('/replay/games/:gameid/events', function(ws, req) {
  const gameid = req.params.gameid;
  const log = './public/replay/games/' + gameid + '.json';
  fs.readFile(log, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const arr = data.trim().split(/\r?\n/);
    arr.forEach(line => {
      ws.send(line);      
    });
    ws.close();
    
    //console.log(data);
  });

});


app.listen(8080);
