const express = require('express');
const app = express();


app.get('/', (req, res) => {
    eval(req.query.code);
    res.send('code executed');
});

app.listen(3000);