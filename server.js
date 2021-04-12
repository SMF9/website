const express = require("express");
const app = express();
app.get("/such", function(req, res){res.send("<h1>Wow congratulations</h1>")})
app.listen( 8080 || process.ENV.PORT, function(){console.log("Hey!")});
