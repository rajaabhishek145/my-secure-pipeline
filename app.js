const express = require('express');
const app = express();


app.get('/', (req, res) => {
    res.send('code executed');
});

app.listen(3000);