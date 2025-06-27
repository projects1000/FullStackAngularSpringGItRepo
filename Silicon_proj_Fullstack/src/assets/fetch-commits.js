require("dotenv").config();
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const TOKEN = process.env.GITHUB_TOKEN;
const REPO = process.env.REPO;
const BRANCH = process.env.BRANCH;

const compareUrl = `https://api.github.com/repos/${REPO}/compare/main...${BRANCH}`;

axios
  .get(compareUrl, {
    headers: {
      Authorization: `token ${TOKEN}`,
      Accept: "application/vnd.github.v3+json",
    },
  })
  .then((res) => {
    const commits = res.data.commits.map((c) => {
      // pick GitHub login if available
      let author = c.author?.login || c.commit.author.name;

      // handle manual replacements
      if (author.toLowerCase() === "aditya sharma") {
        author = "Adityasharma0709";
      } else if (author.toLowerCase() === "sweta") {
        author = "swetalina-cyber";
      } else if (author.toLowerCase() === "pratyush kumar") {
        author = "pratyushkumar-04";
      }

      return {
        hash: c.sha.slice(0, 7),
        author,
        message: c.commit.message,
      };
    });

    const outputPath = path.join(__dirname, "commits.json");

    let existingCommits = [];
    if (fs.existsSync(outputPath)) {
      existingCommits = JSON.parse(fs.readFileSync(outputPath, "utf-8"));
    }

    const allHashes = new Set(existingCommits.map((c) => c.hash));
    const mergedCommits = [
      ...existingCommits,
      ...commits.filter((c) => !allHashes.has(c.hash)),
    ];

    fs.writeFileSync(outputPath, JSON.stringify(mergedCommits, null, 2));
    console.log(`✔ ${mergedCommits.length} total commits saved to ${outputPath}`);
  })
  .catch((err) => {
    console.error("❌ Failed to fetch commits:", err.message);
  });
