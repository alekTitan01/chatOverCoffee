import { expressjwt } from "express-jwt";
import util from "util";
import getConfig from "next/config";
import { NextApiRequest, NextApiResponse } from "next";

const { serverRuntimeConfig } = getConfig();

export { jwtMiddleware };

function jwtMiddleware(req: NextApiRequest, res: NextApiResponse) {
    const middleware = expressjwt({ secret: serverRuntimeConfig.secret, algorithms: ["HS256"] }).unless({
        path: [
            // public routes that don't require authentication
            "/api/users/register",
            "/api/users/authenticate",
        ],
    });

    return util.promisify(middleware)(req, res);
}
