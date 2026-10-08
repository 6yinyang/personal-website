import { spawn } from "node:child_process";
import { exec } from "node:child_process";

const port = 3000;
const url = `http://localhost:${port}`;

const server = spawn("serve", ["out", "-l", String(port)], {
  stdio: "inherit",
  shell: true,
});

const waitForServer = async () => {
  for (;;) {
    try {
      await fetch(url);

      console.log(`\n✓ Server is ready at ${url}`);
      exec(`start ${url}`);

      break;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
};

waitForServer();

process.on("SIGINT", () => {
  server.kill();
  process.exit();
});