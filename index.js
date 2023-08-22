let myhttp = require("http");

let myserver = myhttp.createServer(
  function( myrequest, myresponse){
    console.log( myrequest.url);

let mytext;

   if(myrequest.url === "/sup"){
     mytext = "What is goodie bruh";
   } else{
     mytext = "who is you aye?"
   }
    
  myresponse.writeHead( 200, { "Content-Type": "text/plain"});

    myresponse.end(mytext);
  }
);

myserver.listen(8080, "0.0.0.0");

console.log("server is initiating");
