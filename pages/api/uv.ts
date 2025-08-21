import { NextApiRequest, NextApiResponse } from "next";
import { createBareServer } from "@titaniumnetwork-dev/ultraviolet";

const bare = createBareServer("/bare/");


export default async function handler req: NextApiRequest, res: NextApiResponse) {
    // handles all web traffic back to UV
    // ^ vercel handles backend
    bare.routeRequest(req, res);
}