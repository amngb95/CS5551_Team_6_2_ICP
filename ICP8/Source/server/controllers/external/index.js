var request = require('request');
module.exports = function(app) {
    var query='https://language.googleapis.com/v1beta2/documents:analyzeSyntax?key=AIzaSyDJ2wCKzrrHqHAD3faZM0rrxuZY0faIMWU';
    app.post('/anvesh/nlp', function(req, res) {
        console.log('hello');
       request.post({
               url: query,
               method: 'POST',
               json: {

                   "document" :  {
                       "type":"PLAIN_TEXT",
                       "content" : req.query.Text
                   }
                   ,
                   "encodingType" : "None"
               },
           headers: {
               'Content-Type' : 'application/json',
               'Access-Control-Allow-Origin':'*',
               'Access-Control-Allow-Methods':'POST',
               'Access-Control-Allow-Headers':'Content-Type',
           }
           }
       ).pipe(res);
    });
}