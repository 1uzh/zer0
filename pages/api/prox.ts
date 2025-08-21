import type {NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const target = res.query.url as string;
    if (!target) return res.status(400).send("Missing URL, please add https://")    
    
    try {
      const r = await fetch(target);
      const body = await r.text();

      res.setHeader("Content-Type, "text/html");
      res.send(body);
    } catch (e) {
        res.status(500).send("Unknown error:" + (e as Error).message);
    }
}
