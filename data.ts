import type { NextApiRequest, NextApiResponse } from "next";

type DataResponse = {
  message: string;
  time: string;
  items: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  res.status(200).json({
    message: "Hello from Next.js API!",
    time: new Date().toISOString(),
    items: ["SSR", "SSG", "Dynamic Route"],
  });
}
