const express = require(`express`);
const app = express();

app.get(`/`, () => {
    res.send({ hi: `there` });
});