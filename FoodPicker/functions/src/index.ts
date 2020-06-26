import * as functions from 'firebase-functions';
import * as express from 'express';
import * as https from 'https';
import * as cors from 'cors';

const app = express();
const main = express();

app.use(cors({ origin: true}));
main.use(app);
main.use(cors({ origin: true }));

export const foodApi = functions.https.onRequest(main);

app.get('/', async (req, response) => {

    const location = req.query.location;
    const radius = req.query.radius;
    const minprice = req.query.minprice;
    const maxprice = req.query.maxprice;
    const keyword = req.query.keyword;
    const key = req.query.key;

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=restaurant&minprice=${minprice}&maxprice=${maxprice}&keyword=${keyword}&key=${key}`;

    https.get(url, (res) => {
        const { statusCode } = res;
        const contentType: any = res.headers['content-type'];

        let error;
        if (statusCode !== 200) {
            error = new Error('Request Failed.\n' +
                `Status Code: ${statusCode}`);
        } else if (!/^application\/json/.test(contentType)) {
            error = new Error('Invalid content-type.\n' +
                `Expected application/json but received ${contentType}`);
        }
        if (error) {
            console.error(error.message);
            // Consume response data to free up memory
            res.resume();
            return;
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
            try {
                const parsedData = JSON.parse(rawData);
                response.json(parsedData);
            } catch (e) {
                console.error(e.message);
            }
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
    });
});