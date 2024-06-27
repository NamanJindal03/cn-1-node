const http = require('http');
http.createServer(function(request, response){
    //request containes information about the client 

    // console.log(request);
    console.log(request)

    console.log('server gets hit')
    response.write('apend something \n')
    response.end('please end the request')
}).listen(4000);

/* 
    path params 
    query params 

*/
/* 
    parameters -> 

    reserved keywords 

*/

/* 
    8-12 
    node 16

    node 18
    node 20

    nvm 

*/