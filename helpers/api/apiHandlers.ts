import { errorHandler } from "./errorHandler";
import { jwtMiddleware } from "./jwtMiddleware";
import { NextApiRequest, NextApiResponse } from "next";

type HandlerTtype = {
    [key: string]: (req: NextApiRequest, res: NextApiResponse) => void;
};

function apiHandler(handler: HandlerTtype) {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const method = req.method?.toLowerCase();
        if (!method) return res.status(405).end(`Method ${req.method} Not Allowed`);

        try {
            // global middleware
            await jwtMiddleware(req, res);

            // route handler
            handler[method](req, res);
        } catch (err: unknown) {
            const error = err as Error | string;
            // global error handler
            errorHandler(error, res);
        }
    };
}

export { apiHandler };
