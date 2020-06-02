require("./config/config");
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/Usuario', function(req, res) {
    res.json('GET PERRA');
});

app.post('/Usuario', function(req, res) {

    let cuerpo = req.body;

    if (cuerpo.nombre === undefined) {
        res.status(400).json({
            ok: false,
            msj: "Falta el nombre carnero"
        });
    } else {
        res.json({
            persona: cuerpo
        });
    }


});

app.put('/Usuario/:id', function(req, res) {

    let valor = req.params.id;
    res.json({
        valor
    });
});

app.delete('/Usuario', function(req, res) {
    res.json('DELETE MAMILA');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto:', 3000);
});