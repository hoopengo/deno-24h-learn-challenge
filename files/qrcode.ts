import { qrcode } from "https://deno.land/x/qrcode@v2.0.0/mod.ts";

const base64Image = await qrcode("https://github.com/hoopengo", { size: 512 });

Deno.writeTextFileSync("./qrcode/qrcode.html", `<img src="${base64Image}" />`);