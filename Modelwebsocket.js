const express = require('express')
const app = express()
const server = require('http').createServer(app);
const Websocket=require('ws');

//websocket
const wss=new Websocket.Server({server:server});
wss.on('connection', function connection(ws) {
    console.log('A new client Connected!');
    ws.send('Welcome New Client!');
  
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
      ws.send('http://localhost:8080/Years ' + message);
    });
});



//html rendering
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Viewindex.html");
});
//app.get('/', (req, res) => res.send('Hello World!'))


server.listen(8080, () => console.log(`Lisening on port :8080`))
   