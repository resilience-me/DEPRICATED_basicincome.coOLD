{"filter":false,"title":"ws_server.js","tooltip":"/ws_server.js","undoManager":{"mark":61,"position":61,"stack":[[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":31}},"text":"var app = require('express')();"},{"action":"insertText","range":{"start":{"row":0,"column":31},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":9,"column":0}},"lines":["var http = require('http').Server(app);","","app.get('/', function(req, res){","  res.send('<h1>Hello world</h1>');","});","","http.listen(3000, function(){","  console.log('listening on *:3000');"]},{"action":"insertText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":16}},"text":"3000"},{"action":"insertText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":13}},"text":"8"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":13}},"text":"8"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":12},"end":{"row":7,"column":13}},"text":"3"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":13},"end":{"row":7,"column":14}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":14},"end":{"row":7,"column":15}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":7,"column":15},"end":{"row":7,"column":16}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":9,"column":0},"end":{"row":9,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":9,"column":0}},"nl":"\n","lines":["var app = require('express')();","var http = require('http').Server(app);","","app.get('/', function(req, res){","  res.send('<h1>Hello world</h1>');","});","","http.listen(3000, function(){","  console.log('listening on *:3000');"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":29}},"text":"var WebSocket = require('ws')"},{"action":"insertText","range":{"start":{"row":0,"column":29},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":7,"column":0}},"lines":["  , ws = new WebSocket('ws://www.host.com/path');","ws.on('open', function() {","    ws.send('something');","});","ws.on('message', function(message) {","    console.log('received: %s', message);"]},{"action":"insertText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":7,"column":0},"end":{"row":7,"column":3}},"text":"});"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":7,"column":0}},"nl":"\n","lines":["var WebSocket = require('ws')","  , ws = new WebSocket('ws://www.host.com/path');","ws.on('open', function() {","    ws.send('something');","});","ws.on('message', function(message) {","    console.log('received: %s', message);"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":12,"column":0}},"lines":["5","6","7","8","var WebSocketServer = require('ws').Server","  , wss = new WebSocketServer({port: 8080});","wss.on('connection', function(ws) {","    ws.on('message', function(message) {","        console.log('received: %s', message);","    });","    ws.send('something');"]},{"action":"insertText","range":{"start":{"row":12,"column":0},"end":{"row":12,"column":3}},"text":"});"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":4,"column":0},"end":{"row":4,"column":1}},"text":"8"},{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":4,"column":0}},"nl":"\n","lines":["","5","6","7"]}]}],[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":1,"column":0}},"nl":"\n","lines":[""]}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":35},"end":{"row":3,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":3,"column":0},"end":{"row":3,"column":4}},"text":"    "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":4},"end":{"row":3,"column":49}},"text":"        console.log('received: %s', message);"},{"action":"insertText","range":{"start":{"row":3,"column":49},"end":{"row":4,"column":0}},"text":"\n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":24},"end":{"row":3,"column":47}},"text":"'received: %s', message"},{"action":"insertText","range":{"start":{"row":3,"column":24},"end":{"row":3,"column":25}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":25},"end":{"row":3,"column":26}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":26},"end":{"row":3,"column":27}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":27},"end":{"row":3,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":28},"end":{"row":3,"column":29}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":29},"end":{"row":3,"column":30}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":30},"end":{"row":3,"column":31}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":31},"end":{"row":3,"column":32}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":32},"end":{"row":3,"column":33}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":33},"end":{"row":3,"column":34}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":34},"end":{"row":3,"column":35}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":35},"end":{"row":3,"column":36}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":35},"end":{"row":3,"column":36}},"text":"."}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":34},"end":{"row":3,"column":35}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":33},"end":{"row":3,"column":34}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":32},"end":{"row":3,"column":33}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":31},"end":{"row":3,"column":32}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":30},"end":{"row":3,"column":31}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":29},"end":{"row":3,"column":30}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":28},"end":{"row":3,"column":29}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":27},"end":{"row":3,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":26},"end":{"row":3,"column":27}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":26},"end":{"row":3,"column":27}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":27},"end":{"row":3,"column":28}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":28},"end":{"row":3,"column":29}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":29},"end":{"row":3,"column":30}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":30},"end":{"row":3,"column":31}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":31},"end":{"row":3,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":3,"column":31},"end":{"row":3,"column":32}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":31},"end":{"row":3,"column":32}},"text":"-"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":32},"end":{"row":3,"column":33}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":33},"end":{"row":3,"column":34}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":34},"end":{"row":3,"column":35}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":35},"end":{"row":3,"column":36}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":36},"end":{"row":3,"column":37}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":37},"end":{"row":3,"column":38}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":38},"end":{"row":3,"column":39}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":39},"end":{"row":3,"column":40}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":40},"end":{"row":3,"column":41}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":41},"end":{"row":3,"column":42}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":42},"end":{"row":3,"column":43}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":43},"end":{"row":3,"column":44}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":44},"end":{"row":3,"column":45}},"text":"c"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":45},"end":{"row":3,"column":46}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":46},"end":{"row":3,"column":47}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":47},"end":{"row":3,"column":48}},"text":"d"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":3,"column":48},"end":{"row":3,"column":49}},"text":"\""}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":1,"column":44},"end":{"row":2,"column":0}},"text":"\n"},{"action":"insertText","range":{"start":{"row":2,"column":0},"end":{"row":2,"column":2}},"text":"  "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":2},"end":{"row":2,"column":41}},"text":"console.log(\"ripple-client connected\");"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":38}},"text":"ripple-client connected"},{"action":"insertText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":16}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":16},"end":{"row":2,"column":17}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":18},"end":{"row":2,"column":19}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":19},"end":{"row":2,"column":20}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":20},"end":{"row":2,"column":21}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":21},"end":{"row":2,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":21},"end":{"row":2,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":20},"end":{"row":2,"column":21}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":19},"end":{"row":2,"column":20}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":18},"end":{"row":2,"column":19}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":"y"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":16},"end":{"row":2,"column":17}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":16}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":15},"end":{"row":2,"column":16}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":16},"end":{"row":2,"column":17}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":17},"end":{"row":2,"column":18}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":18},"end":{"row":2,"column":19}},"text":"v"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":19},"end":{"row":2,"column":20}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":20},"end":{"row":2,"column":21}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":21},"end":{"row":2,"column":22}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":22},"end":{"row":2,"column":23}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":23},"end":{"row":2,"column":24}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":24},"end":{"row":2,"column":25}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":25},"end":{"row":2,"column":26}},"text":"l"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":26},"end":{"row":2,"column":27}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":27},"end":{"row":2,"column":28}},"text":"s"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":28},"end":{"row":2,"column":29}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":29},"end":{"row":2,"column":30}},"text":"e"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":30},"end":{"row":2,"column":31}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":31},"end":{"row":2,"column":32}},"text":"i"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":32},"end":{"row":2,"column":33}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":33},"end":{"row":2,"column":34}},"text":"g"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":34},"end":{"row":2,"column":35}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":35},"end":{"row":2,"column":36}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":36},"end":{"row":2,"column":37}},"text":"n"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":37},"end":{"row":2,"column":38}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":38},"end":{"row":2,"column":39}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":39},"end":{"row":2,"column":40}},"text":"å"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":39},"end":{"row":2,"column":40}},"text":"å"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":39},"end":{"row":2,"column":40}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"removeText","range":{"start":{"row":2,"column":39},"end":{"row":2,"column":40}},"text":"p"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":39},"end":{"row":2,"column":40}},"text":"o"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":40},"end":{"row":2,"column":41}},"text":"r"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":41},"end":{"row":2,"column":42}},"text":"t"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":42},"end":{"row":2,"column":43}},"text":" "}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":43},"end":{"row":2,"column":44}},"text":"8"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":44},"end":{"row":2,"column":45}},"text":"0"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":45},"end":{"row":2,"column":46}},"text":"8"}]}],[{"group":"doc","deltas":[{"action":"insertText","range":{"start":{"row":2,"column":46},"end":{"row":2,"column":47}},"text":"0"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":44},"end":{"row":1,"column":44},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1413117259230,"hash":"dd552f40acbf2156eff1460babf4055a8889124f"}