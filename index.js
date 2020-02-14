import express from 'express';
import route from './src/route/indexHtml'
import bodyParser from 'body-parser';
import morgan from 'morgan';

const PORT = 3002;
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.disable('x-powered-by');

app.use('/', route);

app.listen(PORT, () => {
    console.log(`Node cluster worker ${process.pid}: listening on port ${PORT}`);
});