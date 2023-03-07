const express = require('express')
const app = express()
const port = 8080

var my_log = "";

app.get('/getResult', (req, res) => {
        res.send(my_log);
})

app.get('/:param', (req, res) => {
        if (req.params.param.length == 1) {
                my_log += req.params.param;
                console.log(my_log);
        }
        res.send("OK");
})

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
})
