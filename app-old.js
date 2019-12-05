const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    let salida = {
        nombre: 'carlos',
        edad: 20,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(3000);