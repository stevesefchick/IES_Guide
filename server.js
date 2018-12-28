const express = require('express');
var mysql      = require('mysql');
const app = express();
const port = 5000;

//TODO: obscure using DOTENV
var connection = mysql.createConnection({
    host     : 'den1.mysql4.gear.host',
    user     : 'iesguide',
    password : 'Sc199nmQf8~-',
    database : 'iesguide'
  });

  connection.connect();

  connection.query('SELECT * from characterProfile', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });

  connection.end();




app.get('/character/bio', (req,res) => {
    
    res.send({ express: 'success!'});
}
);


app.listen(port, () => console.log(`Listening on port ${port}`));
