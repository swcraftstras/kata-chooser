import {serve} from "https://deno.land/std/http/mod.ts";

const BASE_PATH = "./";

const reqHandler = async (req: Request) => {
  const pathname = new URL(req.url).pathname;
  const filePath = pathname == "/"
    ? BASE_PATH + "index.html"
    : BASE_PATH + pathname;
  let fileSize;
  try {
    fileSize = (await Deno.stat(filePath)).size;
  } catch (e) {
    if (e instanceof Deno.errors.NotFound) {
      return new Response(null, { status: 404 });
    }
    return new Response(null, { status: 500 });
  }

  const body = (await Deno.open(filePath)).readable;

  return new Response(body, {
    headers: {
      "content-length": fileSize.toString(),
      "content-type": mimeType(filePath),
      "cache-control": "no-cache",
    },
  });
};

function mimeType(filePath: string): string {
  if (filePath.endsWith(".html")) return "text/html";
  if (filePath.endsWith(".js")) return "application/javascript";
  if (filePath.endsWith(".css")) return "text/css";
  return "text/plain";
}

serve(reqHandler, { port: 8080 });
