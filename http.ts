import { serve } from "https://deno.land/std@0.147.0/http/server.ts";
import { GetData } from "./fetch.ts";

const port = Number(Deno.args[0]);

async function handler(_req: Request) {
  // Create a response with html as its body.
  const response = new Response(await GetData(), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });

  console.log(response.status); // 200
  console.log(response.headers.get("Content-Type"));

  return response;
}

serve(handler, { port: port });
