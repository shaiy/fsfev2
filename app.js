const express = require('express')
const app = express();
const port = 3000;

app.get('/',(req,res) => {
	res.send('Hello Shai!!!!!!');
});

app.get('/418path',(req,res) => {
	res.status(418);
	res.set('X-full-stack', '4life')
	res.send('I prefer coffee');
});

app.listen(port,() => console.log(`Example app listening on port ${port}!`))
