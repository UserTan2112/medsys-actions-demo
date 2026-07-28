const fs = require("node:fs");
const path = require("node:path");

const sourceDirectory = path.join(__dirname, "..", "src");
const buildDirectory = path.join(__dirname, "..", "build");

try {
    fs.rmSync(buildDirectory, { recursive: true, force: true });
    fs.mkdirSync(buildDirectory, { recursive: true });
    fs.cpSync(sourceDirectory, buildDirectory, { recursive: true });

    console.log("MedSys build package created successfully.");
} catch (error) {
    console.error("Build failed:", error.message);
    process.exit(1);
}