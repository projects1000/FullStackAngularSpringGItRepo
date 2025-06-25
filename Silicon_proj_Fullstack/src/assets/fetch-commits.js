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
    const commits = res.data.commits.map((c) => ({
      hash: c.sha.slice(0, 7),
      author: c.commit.author.name,
      message: c.commit.message,
    }));

    const outputPath = path.join(__dirname,"commits.json");
    fs.writeFileSync(outputPath, JSON.stringify(commits, null, 2));
    console.log(`✔ ${commits.length} unique commits saved to ${outputPath}`);
  })
  .catch((err) => {
    console.error("❌ Failed to fetch commits:", err.message);
  });
