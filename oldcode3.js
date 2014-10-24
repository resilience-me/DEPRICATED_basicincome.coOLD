//--- server.resilience.me - a @BitNation #DApp --------------

//----- Open a websocket for http://client.resilience.me -------

var ws = require("nodejs-websocket");

var server = ws.createServer(function (conn) {
    console.log("User connected...");

    conn.on("text", function (str) {
        console.log("Received DATA_BLOB");
        var DATA_BLOB = JSON.parse(str);

var ACCOUNT_DATA = DATA_BLOB[0]
var TAX_BLOB = DATA_BLOB[1]
var SENT_BLOB = DATA_BLOB[2]
var ACCOUNT_ID = ACCOUNT_DATA[0].account_id


console.log(JSON.stringify(ACCOUNT_DATA))
console.log(JSON.stringify(TAX_BLOB))
console.log(JSON.stringify(SENT_BLOB))
console.log(JSON.stringify(ACCOUNT_ID))



//--- connect to a MongoDB database -----------

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

});



  
//---- Define the MongoDB schemas and models:

// USEFUL LINKS:
// http://docs.mongodb.org/manual/data-modeling/

// http://docs.mongodb.org/manual/reference/limits/#namespaces
// http://docs.mongodb.org/manual/faq/developers/#are-there-any-restrictions-on-the-names-of-collections

var dividend_pathways_schema = new Schema({
    account: String
  , _id: String
  , currencies: [{currency: String, taxRates: [{taxRate: String, total_pathway: String}]}]
  
  , TAXRATE_UPPER_LIMIT: [{currency: String, taxRates: [{taxRate: String, total_amount: String}]}]
}, { collection: ACCOUNT_ID });


var transaction_log_schema = new Schema({
    account: String
  , connected_transactions: [{transaction_id: String}]
});

var account_data = mongoose.model('account_data', dividend_pathways_schema, ACCOUNT_ID);

var transaction_log = mongoose.model('transaction_log', transaction_log_schema);



mongoose.connect('mongodb://unicorn23:asd123@proximus.modulusmongo.net:27017/gup6umEm');





var temp = new account_data({ account: 'rhtk5T8AMHELGhn16hHVtLWK3Cit1owHqW', currencies: [{currency: 'RES', taxRates: [{taxRate: 0.02, total_pathway: 20}]}]});
temp.save(function (err) {
  if (err) // ...
  console.log('saved');
});

//------ feed the data into MongoDB ---------


// to Darklight: trying to feed the TAX_BLOB into DIVIDEND_PATHWAYS

// the code below just loops through all the data.


for (var i = 0; i < TAX_BLOB.length; i++) {

  var query = account_data.find( ACCOUNT_ID,
        { 'account': String(TAX_BLOB[i].account), 'currencies.currency': String(TAX_BLOB[i].currency), 'currencies.taxRates.taxRate': String(TAX_BLOB[i].taxRate) } 
    , function(err, obj) {
        console.log(JSON.stringify(obj))
    
        query.select('currencies.taxRates');
        query.exec(function(data) {
        console.log(data)
        var temp = JSON.stringify(data)
        console.log(temp)
        var id = temp[0]._id
            console.log(id)
        });
    });

}














// ------- Swarm-Redistribution Algorithm -------------

// script should then run swarm-redistribution algorithm
// and create a blob of unsigned outgoing payments
// and send back to client.resilience.me

// See http://www.resilience.me/videos.html for details

// example: conn.sendText(SWARM_PAYMENTS_BLOB)

        //conn.sendText();
    });
    conn.on("close", function (code, reason) {
        console.log("Connection closed");
    });
}).listen(8080);

console.log("server listening on port 8080");

