import { serve } from "https://deno.land/std@0.147.0/http/server.ts";

const port = Number(Deno.args[0])

serve((_req) => new Response('Hello, from 24h challenger'), {port: port})