var express= require("express");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var app = express();

app.use(function(req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': "*",
    });
    next();
});


function formatarClubes(response) {
    var clubes = [];

    for(var clube in response)
    {
        clube = response[clube];

        let escudos = [];
        for(var escudo in clube.escudos) {
            escudos.push(clube.escudos[escudo]);
        }

        clube.escudos = escudos;
        clubes.push(clube);
    }

    return clubes;
}

app.get("/clubes", function(req,res) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.cartolafc.globo.com/clubes");

    xhr.addEventListener("load", function() {
        var response = JSON.parse(this.responseText);
        var clubes = formatarClubes(response);

        res.status(200).json(clubes);
    })

    xhr.send();
});



app.get("/partidas", function(req, res) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.cartolafc.globo.com/partidas");

    xhr.addEventListener("load", function() {
        var response = JSON.parse(this.responseText);
        
        response.clubes = formatarClubes(response.clubes);
        

        res.status(200).json(response);
    })

    xhr.send();
});

app.listen(3000);