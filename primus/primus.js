const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {/* options */});

    //library ophalen (1 keer nodig) & verslepen naar public/js;
    // primus.save(__dirname +'/primuslib.js');

    primus.on("connection", (spark) => {
        spark.on('data', (data) => {
            console.log('Received a new message from the server');
            primus.write(data);
            });
    });


    }   

module.exports.go = go;