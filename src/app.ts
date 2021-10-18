import express from 'express';
import config from 'config';

import connect from './utils/connect';

const app = express();
const port = process.env.PORT || config.get<number>('port');

app.listen(port, async () => {
    console.log(`Server running on ${port}`);
    await connect();
});
