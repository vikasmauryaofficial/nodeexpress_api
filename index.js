import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/,' (req, res) => res.send('hello from homepage'));


app.listen(PORT, () => {
    console.log(`App listening on port  http://localhost:${PORT}`);
    console.log('Press Ctrl+C to quit.');
});