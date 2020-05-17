var http = require('http')
http.createServer(function(req,res){
    res.write('<head><meta charest="utf-8"/></head>');
    // res.write('233')
    res.end()
}).listen(8080)