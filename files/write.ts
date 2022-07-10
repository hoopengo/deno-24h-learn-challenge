import { GetData } from "../fetch.ts";

await Deno.writeFile("data.json", new TextEncoder().encode(await GetData()));