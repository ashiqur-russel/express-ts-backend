import { Server } from "http";
import app from "./app";

const PORT = 5000;

let server: Server;

async function main() {
  server = app.listen(PORT, () => {
    console.log(`[server]: Sehellorver is running at http://localhost:${PORT}`);
  });
}

main();
