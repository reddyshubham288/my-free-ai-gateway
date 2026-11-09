const { exec } = require('child_process');

console.log("Launching OmniRoute in core API mode...");

// Force headless variables directly inside the node script environment
process.env.OMNI_HEADLESS = "1";
process.env.OMNI_ALLOW_REMOTE_DEFAULT = "true";
process.env.REQUIRE_API_KEY = "true";
process.env.OMNI_PASSWORD = "freeai123";

// Boot the underlying proxy engine cleanly
const server = exec('npx omniroute --headless --no-open');

server.stdout.on('data', (data) => {
    console.log(data.toString());
});

server.stderr.on('data', (data) => {
    console.log(data.toString());
});

server.on('exit', (code) => {
    console.log(`Server process exited with code ${code}`);
});
