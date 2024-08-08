require('dotenv').config();
import * as express from 'express';
import * as cors from 'cors';
import * as cookieParser from 'cookie-parser';
const path = require('path');

import { createBaseServer } from '../utils/backend/base_backend/create';
import { createJwtMiddleware } from '../utils/backend/jwt_middleware';

interface TypedRequestBody<T> extends Express.Request {
    body: T;
}
async function main() {
    // add your CANVA_APP_ID to the .env file at the root level
    const APP_ID = process.env.CANVA_APP_ID;
    if (!APP_ID) {
        throw new Error("'CANVA_APP_ID' environment variable is undefined");
    }

    const router = express.Router();

    /**
     * TODO: Configure your CORS Policy
     *
     * Cross-Origin Resource Sharing ([CORS](https://developer.mozilla.org/en-US/docs/Glossary/CORS)) is
     * an [HTTP](https://developer.mozilla.org/en-US/docs/Glossary/HTTP)-header based mechanism that allows
     * a server to indicate any [origins](https://developer.mozilla.org/en-US/docs/Glossary/Origin)
     * (domain, scheme, or port) other than its own from which a browser should permit loading resources.
     *
     * A basic CORS configuration would include your backends domain such as in the following example:
     * const corsOptions = {
     *   origin: 'http://example.com',
     *   optionsSuccessStatus: 200
     * }
     *
     * https://www.npmjs.com/package/cors#configuring-cors
     *
     * You may need to include multiple permissible origins, or dynamic origins based on the environment
     * in which the server is running. Further information can be found [here](https://www.npmjs.com/package/cors#configuring-cors-w-dynamic-origin).
     */

    router.get('/health', (req, res) => {
        res.status(200).send('OK');
    });

    router.use(cors());
    router.use(cookieParser(process.env.SIGNING_KEY));

    const jwtMiddleware = await createJwtMiddleware(APP_ID);
    router.use(jwtMiddleware);

    router.use(
        '/assets',
        express.static(
            path.join(
                __dirname,
                '../assets' // path to your image directory
            )
        )
    );

    // DEFINE YOUR ROUTES HERE

    const server = createBaseServer(router);
    server.start(process.env.CANVA_BACKEND_PORT);
}

main();
