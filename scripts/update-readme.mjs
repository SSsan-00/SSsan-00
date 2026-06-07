#!/usr/bin/env node

import { Buffer } from "node:buffer";
import { writeFile } from "node:fs/promises";

const owner = process.env.README_OWNER || process.env.GITHUB_REPOSITORY_OWNER || "SSsan-00";
const profileRepository = process.env.README_REPOSITORY || owner;
const apiRoot = process.env.GITHUB_API_URL || "https://api.github.com";
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || "";
const timeZone = process.env.README_TIME_ZONE || "Asia/Tokyo";
const maxEvidenceRepositories = Number(process.env.README_MAX_REPOSITORIES || 10);
const maxFeaturedProjects = Number(process.env.README_MAX_FEATURED_PROJECTS || 6);

const ignoredRepositoryNames = new Set([
  profileRepository.toLowerCase(),
  "temp",
  "test",
]);

const featuredRepositoryNames = [
  "table-analyzer",
  "sql-analyzer",
  "diff-viewer",
  "TestCodeSnippetGenerator",
  "ClassDiagramMaker",
  "functions-analyzer",
  "Razor-Indent-Formatter",
  "TextLintByVBA",
];

const badgeUrls = new Map([
  ["C#", "https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"],
  [".NET 9", "https://img.shields.io/badge/.NET_9-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"],
  [".NET", "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white"],
  ["TypeScript", "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"],
  ["PowerShell", "https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white"],
  ["Rust", "https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white"],
  ["VBA", "https://img.shields.io/badge/VBA-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white"],
  ["JavaScript", "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=111111"],
  ["HTML", "https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white"],
  ["Lua", "https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"],
  ["Python", "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white"],
  ["Java", "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=openjdk&logoColor=white"],
]);

const flatBadgeUrls = new Map([
  ["Roslyn", "https://img.shields.io/badge/Roslyn-Code_Analysis-5C2D91?style=flat-square"],
  ["SemanticModel", "https://img.shields.io/badge/SemanticModel-Code_Analysis-5C2D91?style=flat-square"],
  ["MSBuildWorkspace", "https://img.shields.io/badge/MSBuildWorkspace-Project_Analysis-512BD4?style=flat-square"],
  ["WinForms", "https://img.shields.io/badge/WinForms-Windows_GUI-0078D4?style=flat-square"],
  ["ScriptDom", "https://img.shields.io/badge/ScriptDom-SQL_AST-CC2927?style=flat-square"],
  ["PostgreSQL", "https://img.shields.io/badge/PostgreSQL-SQL-4169E1?style=flat-square&logo=postgresql&logoColor=white"],
  ["Vite", "https://img.shields.io/badge/Vite-Browser_Tools-646CFF?style=flat-square&logo=vite&logoColor=white"],
  ["Next.js", "https://img.shields.io/badge/Next.js-React_App-000000?style=flat-square&logo=nextdotjs&logoColor=white"],
  ["React", "https://img.shields.io/badge/React-UI-61DAFB?style=flat-square&logo=react&logoColor=111111"],
  ["Tailwind CSS", "https://img.shields.io/badge/Tailwind_CSS-UI-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"],
  ["Monaco Editor", "https://img.shields.io/badge/Monaco_Editor-Code_UI-007ACC?style=flat-square"],
  ["Vitest", "https://img.shields.io/badge/Vitest-Test_Automation-6E9F18?style=flat-square&logo=vitest&logoColor=white"],
  ["xUnit", "https://img.shields.io/badge/xUnit-Test_Automation-512BD4?style=flat-square"],
  ["MSTest", "https://img.shields.io/badge/MSTest-Test_Automation-512BD4?style=flat-square"],
  ["Excel", "https://img.shields.io/badge/Excel-Automation-217346?style=flat-square&logo=microsoftexcel&logoColor=white"],
  ["WASM", "https://img.shields.io/badge/WASM-Browser_Runtime-654FF0?style=flat-square&logo=webassembly&logoColor=white"],
  ["Neovim", "https://img.shields.io/badge/Neovim-Editor_Config-57A143?style=flat-square&logo=neovim&logoColor=white"],
  ["WezTerm", "https://img.shields.io/badge/WezTerm-Terminal_Config-4E49EE?style=flat-square"],
  ["GitHub Actions", "https://img.shields.io/badge/GitHub_Actions-Automation-2088FF?style=flat-square&logo=githubactions&logoColor=white"],
]);

const primarySkillOrder = [
  "C#",
  ".NET 9",
  ".NET",
  "TypeScript",
  "PowerShell",
  "Rust",
  "VBA",
  "JavaScript",
  "HTML",
  "Lua",
  "Python",
  "Java",
];

const secondarySkillOrder = [
  "Roslyn",
  "SemanticModel",
  "MSBuildWorkspace",
  "WinForms",
  "ScriptDom",
  "PostgreSQL",
  "Vite",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Monaco Editor",
  "Vitest",
  "xUnit",
  "MSTest",
  "Excel",
  "WASM",
  "Neovim",
  "WezTerm",
  "GitHub Actions",
];

const languageSkillOrder = [
  "C#",
  "TypeScript",
  "PowerShell",
  "VBA",
  "Rust",
  "SQL",
  "JavaScript",
  "HTML",
  "Lua",
  "Python",
  "Java",
];

const techRules = [
  ["C#", [/\bc#\b/i, /\.csproj\b/i, /\.sln\b/i, /\.cs\b/i]],
  [".NET 9", [/net9\.0/i, /\.net 9/i, /dotnet.*9/i]],
  [".NET", [/\b\.net\b/i, /dotnet/i, /targetframework/i, /\.csproj\b/i]],
  ["TypeScript", [/\btypescript\b/i, /\.tsx?\b/i, /tsconfig\.json/i]],
  ["JavaScript", [/\bjavascript\b/i, /\.jsx?\b/i]],
  ["HTML", [/\bhtml\b/i, /\.html?\b/i]],
  ["CSS", [/\bcss\b/i, /\.css\b/i]],
  ["PowerShell", [/\bpowershell\b/i, /\.ps1\b/i, /\.psm1\b/i]],
  ["Rust", [/\brust\b/i, /cargo\.toml/i, /\.rs\b/i]],
  ["WASM", [/\bwasm\b/i, /webassembly/i, /wasm-pack/i]],
  ["VBA", [/\bvba\b/i, /\.bas\b/i, /\.cls\b/i, /\.xlsm\b/i]],
  ["Excel", [/\bexcel\b/i, /\bxlsx\b/i, /\.xlsx\b/i, /\.xlsm\b/i]],
  ["SQL", [/\bsql\b/i, /\.sql\b/i, /scriptdom/i, /pgsql/i, /postgres/i]],
  ["PostgreSQL", [/postgres/i, /pgsql/i]],
  ["Roslyn", [/roslyn/i, /microsoft\.codeanalysis/i]],
  ["SemanticModel", [/semanticmodel/i]],
  ["MSBuildWorkspace", [/msbuildworkspace/i]],
  ["ScriptDom", [/scriptdom/i, /microsoft\.sqlserver\.transactsql\.scriptdom/i]],
  ["WinForms", [/winforms/i, /windows forms/i, /system\.windows\.forms/i]],
  ["CLI", [/\bcli\b/i, /console app/i, /command line/i]],
  ["CSV", [/\bcsv\b/i, /\.csv\b/i]],
  ["XLSX", [/\bxlsx\b/i, /\.xlsx\b/i]],
  ["React", [/\breact\b/i, /\.tsx\b/i]],
  ["Next.js", [/next\.js/i, /nextdotjs/i, /next\.config/i]],
  ["Vite", [/\bvite\b/i, /vite\.config/i]],
  ["Tailwind CSS", [/tailwind/i, /tailwind\.config/i]],
  ["Monaco Editor", [/monaco/i, /monaco-editor/i]],
  ["Vitest", [/vitest/i]],
  ["xUnit", [/\bxunit\b/i]],
  ["MSTest", [/\bmstest\b/i]],
  ["TDD", [/\btdd\b/i, /test[- ]?driven/i, /テスト駆動/]],
  ["Lua", [/\blua\b/i, /\.lua\b/i]],
  ["Neovim", [/neovim/i, /\bnvim\b/i]],
  ["WezTerm", [/wezterm/i]],
  ["Python", [/\bpython\b/i, /\.py\b/i, /pyproject\.toml/i]],
  ["Java", [/\bjava\b/i, /\.java\b/i, /pom\.xml/i, /build\.gradle/i]],
  ["GitHub Actions", [/github actions/i, /\.github\/workflows\//i]],
];

const outputTypeRules = [
  ["Windows GUI / CLI tools", ["WinForms", "CLI", "PowerShell"]],
  ["Single HTML / browser apps", ["TypeScript", "JavaScript", "HTML", "Vite", "Next.js", "Monaco Editor", "React"]],
  ["Reports / Excel automation", ["Excel", "VBA", "CSV", "XLSX"]],
  ["Static analysis / code parsing", ["Roslyn", "SemanticModel", "ScriptDom", "PostgreSQL", "SQL"]],
  ["Editor / terminal configuration", ["Neovim", "WezTerm", "Lua"]],
];

const manifestPatterns = [
  /(^|\/)package\.json$/i,
  /(^|\/)tsconfig\.json$/i,
  /(^|\/)vite\.config\.[cm]?[jt]s$/i,
  /(^|\/)next\.config\.[cm]?[jt]s$/i,
  /(^|\/)tailwind\.config\.[cm]?[jt]s$/i,
  /(^|\/)cargo\.toml$/i,
  /(^|\/)pyproject\.toml$/i,
  /(^|\/)requirements.*\.txt$/i,
  /(^|\/)pom\.xml$/i,
  /(^|\/)build\.gradle(\.kts)?$/i,
  /(^|\/)go\.mod$/i,
  /\.csproj$/i,
  /\.vbproj$/i,
  /\.fsproj$/i,
  /\.sln$/i,
];

async function main() {
  const repositories = await listOwnerRepositories(owner);
  const inspectedRepositories = await mapLimit(
    repositories.filter((repository) => shouldInspect(repository)),
    4,
    inspectRepository,
  );

  const usefulRepositories = inspectedRepositories
    .filter((repository) => repository.signals.size > 0 || repository.description)
    .sort(compareRepositoryPriority);

  const readme = renderReadme(usefulRepositories);
  await writeFile("README.md", readme, "utf8");
}

async function listOwnerRepositories(user) {
  const repositories = [];

  for (let page = 1; page <= 10; page += 1) {
    const path = `/users/${encodeURIComponent(user)}/repos?type=owner&sort=updated&per_page=100&page=${page}`;
    const data = await requestJson(path);

    if (!Array.isArray(data) || data.length === 0) {
      break;
    }

    repositories.push(...data);
  }

  return repositories;
}

function shouldInspect(repository) {
  if (repository.fork || repository.archived) {
    return false;
  }

  if (ignoredRepositoryNames.has(repository.name.toLowerCase())) {
    return false;
  }

  return true;
}

async function inspectRepository(repository) {
  const tree = await fetchTree(repository).catch(() => []);
  const filePaths = tree
    .filter((item) => item.type === "blob")
    .map((item) => item.path)
    .sort((left, right) => left.localeCompare(right));

  const readmePath = findReadmePath(filePaths);
  const manifestPaths = findManifestPaths(filePaths).slice(0, 8);
  const readme = readmePath ? await fetchTextFile(repository, readmePath).catch(() => "") : "";
  const manifestTexts = await mapLimit(manifestPaths, 3, (manifestPath) =>
    fetchTextFile(repository, manifestPath).catch(() => ""),
  );

  const topics = Array.isArray(repository.topics) ? repository.topics : [];
  const sourceText = [
    repository.name,
    repository.language || "",
    repository.description || "",
    topics.join(" "),
    readme,
    manifestTexts.join("\n"),
    filePaths.slice(0, 400).join("\n"),
  ].join("\n");

  const signals = detectTechSignals(sourceText, repository.language);
  const outputTypes = classifyOutputTypes(signals, repository.name, repository.description || "", readme);

  return {
    name: repository.name,
    htmlUrl: repository.html_url,
    description: repository.description || "",
    language: repository.language || "",
    updatedAt: repository.updated_at || "",
    readme,
    filePaths,
    signals,
    outputTypes,
    summary: summarizeRepository(repository, readme, signals),
  };
}

async function fetchTree(repository) {
  const branch = encodeURIComponent(repository.default_branch || "main");
  const path = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository.name)}/git/trees/${branch}?recursive=1`;
  const data = await requestJson(path);

  return Array.isArray(data?.tree) ? data.tree : [];
}

async function fetchTextFile(repository, filePath) {
  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
  const branch = encodeURIComponent(repository.default_branch || "main");
  const path = `/repos/${encodeURIComponent(owner)}/${encodeURIComponent(repository.name)}/contents/${encodedPath}?ref=${branch}`;
  const data = await requestJson(path);

  if (!data?.content) {
    return "";
  }

  return Buffer.from(data.content, data.encoding || "base64").toString("utf8");
}

async function requestJson(path) {
  const url = path.startsWith("http") ? path : `${apiRoot}${path}`;
  const headers = {
    Accept: "application/vnd.github+json",
    "User-Agent": "profile-readme-updater",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(url, { headers });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`${response.status} ${response.statusText}: ${url}\n${message.slice(0, 500)}`);
  }

  return response.json();
}

async function mapLimit(items, limit, mapper) {
  const results = new Array(items.length);
  let index = 0;

  async function worker() {
    while (index < items.length) {
      const currentIndex = index;
      index += 1;
      results[currentIndex] = await mapper(items[currentIndex], currentIndex);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}

function findReadmePath(filePaths) {
  return filePaths.find((filePath) => /(^|\/)readme(\.[a-z0-9_-]+)?\.md$/i.test(filePath));
}

function findManifestPaths(filePaths) {
  return filePaths.filter((filePath) => manifestPatterns.some((pattern) => pattern.test(filePath)));
}

function detectTechSignals(sourceText, repositoryLanguage) {
  const signals = new Set();

  for (const [skill, patterns] of techRules) {
    if (patterns.some((pattern) => pattern.test(sourceText))) {
      signals.add(skill);
    }
  }

  if (repositoryLanguage) {
    signals.add(repositoryLanguage);
  }

  if (signals.has("C#")) {
    signals.add(".NET");
  }

  if (signals.has("ScriptDom") || signals.has("PostgreSQL")) {
    signals.add("SQL");
  }

  if (signals.has("Next.js") || signals.has("Vite")) {
    signals.add("TypeScript");
  }

  if (signals.has("Monaco Editor")) {
    signals.add("JavaScript");
  }

  return signals;
}

function classifyOutputTypes(signals, name, description, readme) {
  const outputTypes = [];
  const haystack = `${name}\n${description}\n${readme}`.toLowerCase();

  for (const [outputType, skills] of outputTypeRules) {
    if (skills.some((skill) => signals.has(skill))) {
      outputTypes.push(outputType);
    }
  }

  if (/analy[sz]er|解析|ast|parser|diagram|formatter/.test(haystack) && !outputTypes.includes("Static analysis / code parsing")) {
    outputTypes.push("Static analysis / code parsing");
  }

  if (isLearningFocusedProject(name, description) && !outputTypes.includes("Learning / systems experiments")) {
    outputTypes.push("Learning / systems experiments");
  }

  return outputTypes;
}

function isLearningFocusedProject(name, description) {
  const identity = `${name}\n${description}`.toLowerCase();

  return /practice|learn|tdd|自作|練習|学んだ|テスト駆動|todo-ddd|myos|xunit|money-app/.test(identity);
}

function summarizeRepository(repository, readme, signals) {
  const description = cleanSummary(repository.description || "");
  const readmeSummary = cleanSummary(extractFirstParagraph(readme));

  if (description) {
    return description;
  }

  if (readmeSummary) {
    return readmeSummary;
  }

  if (signals.has("Roslyn") || signals.has("ScriptDom")) {
    return "Source code and SQL analysis utility";
  }

  if (signals.has("Vite") || signals.has("Next.js") || signals.has("Monaco Editor")) {
    return "Browser-based developer tool";
  }

  if (signals.has("VBA") || signals.has("Excel")) {
    return "Excel automation utility";
  }

  if (signals.has("Rust")) {
    return "Rust learning and systems experiment";
  }

  return "Development support project";
}

function extractFirstParagraph(markdown) {
  const normalized = markdown
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/```[\s\S]*?```/g, "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#") && !line.startsWith("[!") && !line.startsWith("!"));

  return normalized.find((line) => !/^\|/.test(line) && !/^[-*_]{3,}$/.test(line)) || "";
}

function cleanSummary(value) {
  return value
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/__([^_]+)__/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/_([^_]+)_/g, "$1")
    .replace(/\s+/g, " ")
    .replace(/\|/g, "/")
    .replace(/^#{1,6}\s+/, "")
    .trim();
}

function compareRepositoryPriority(left, right) {
  const scoreDifference = repositoryScore(right) - repositoryScore(left);

  if (scoreDifference !== 0) {
    return scoreDifference;
  }

  return new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime();
}

function repositoryScore(repository) {
  let score = 0;

  score += repository.signals.size;

  if (repository.description) {
    score += 4;
  }

  if (repository.outputTypes.includes("Static analysis / code parsing")) {
    score += 6;
  }

  if (repository.outputTypes.includes("Windows GUI / CLI tools")) {
    score += 3;
  }

  if (repository.outputTypes.includes("Single HTML / browser apps")) {
    score += 3;
  }

  if (repository.outputTypes.includes("Reports / Excel automation")) {
    score += 3;
  }

  if (/temp|test$|^test|practice|hello/i.test(repository.name)) {
    score -= 5;
  }

  return score;
}

function renderReadme(repositories) {
  const skillCounts = countSkills(repositories);
  const generatedDate = formatDate(new Date(), timeZone);
  const primarySkills = selectPrimarySkills(skillCounts, 6);
  const secondarySkills = selectSkills(skillCounts, secondarySkillOrder, 8);
  const languageSkills = selectSkills(skillCounts, languageSkillOrder, 12);
  const intro = renderIntro(skillCounts);
  const outputTypeCounts = countOutputTypes(repositories);
  const skillSignalChart = buildSkillSignalChart(repositories);
  const outputTypeChart = Array.from(outputTypeCounts.entries())
    .filter(([, count]) => count > 0)
    .sort((left, right) => right[1] - left[1])
    .slice(0, 6);
  const featuredRepositories = selectFeaturedRepositories(repositories);
  const evidenceRepositories = repositories.slice(0, maxEvidenceRepositories);

  return [
    `# ${owner}`,
    "",
    intro,
    "",
    `<!-- Generated from public repository metadata, README files, manifests, and repository languages on ${generatedDate}. -->`,
    "<!-- To change this README, update scripts/update-readme.mjs. Manual edits are overwritten by the scheduled workflow. -->",
    "",
    "## Skill Snapshot",
    "",
    renderBadgeGroup(primarySkills, badgeUrls),
    "",
    renderBadgeGroup(secondarySkills, flatBadgeUrls),
    "",
    "## Visual Charts",
    "",
    "Repository-derived signals, not proficiency scores.",
    "",
    renderPieChart("Public Repository Skill Signals", skillSignalChart, [
      "#ff006e",
      "#00d4ff",
      "#ffbe0b",
      "#8338ec",
      "#06d6a0",
      "#3a86ff",
    ]),
    "",
    renderPieChart("Output Types", outputTypeChart, [
      "#3a86ff",
      "#fb5607",
      "#ff006e",
      "#06d6a0",
      "#8338ec",
      "#ffbe0b",
    ]),
    "",
    "## Skill Map",
    "",
    renderSkillMap(),
    "",
    "## Featured Projects",
    "",
    renderFeaturedProjectCards(featuredRepositories),
    "",
    "## Repository Evidence",
    "",
    renderRepositoryTable(evidenceRepositories),
    "",
    "## Work Style",
    "",
    renderWorkStyle(),
    "",
    "## Tech Stack",
    "",
    renderTechStack(skillCounts, languageSkills),
    "",
    "## Current Interests",
    "",
    renderCurrentInterests(skillCounts, outputTypeCounts),
    "",
  ].join("\n");
}

function selectFeaturedRepositories(repositories) {
  const byName = new Map(repositories.map((repository) => [repository.name.toLowerCase(), repository]));
  const featured = [];
  const selectedNames = new Set();

  for (const name of featuredRepositoryNames) {
    const repository = byName.get(name.toLowerCase());

    if (!repository) {
      continue;
    }

    featured.push(repository);
    selectedNames.add(repository.name.toLowerCase());
  }

  for (const repository of repositories) {
    if (featured.length >= maxFeaturedProjects) {
      break;
    }

    if (selectedNames.has(repository.name.toLowerCase())) {
      continue;
    }

    featured.push(repository);
    selectedNames.add(repository.name.toLowerCase());
  }

  return featured.slice(0, maxFeaturedProjects);
}

function countSkills(repositories) {
  const counts = new Map();

  for (const repository of repositories) {
    for (const signal of repository.signals) {
      counts.set(signal, (counts.get(signal) || 0) + 1);
    }
  }

  return counts;
}

function countOutputTypes(repositories) {
  const counts = new Map();

  for (const repository of repositories) {
    for (const outputType of repository.outputTypes) {
      counts.set(outputType, (counts.get(outputType) || 0) + 1);
    }
  }

  return counts;
}

function selectSkills(skillCounts, order, limit) {
  return order
    .filter((skill) => skillCounts.has(skill))
    .slice(0, limit);
}

function selectPrimarySkills(skillCounts, limit) {
  const skills = selectSkills(skillCounts, primarySkillOrder, primarySkillOrder.length);

  if (skills.includes(".NET 9")) {
    return skills.filter((skill) => skill !== ".NET").slice(0, limit);
  }

  return skills.slice(0, limit);
}

function renderIntro(skillCounts) {
  const focus = [
    skillCounts.has("C#") ? "C# / .NET" : "",
    skillCounts.has("TypeScript") ? "TypeScript" : "",
    skillCounts.has("Rust") ? "Rust" : "",
  ].filter(Boolean);

  const work = [
    skillCounts.has("Roslyn") || skillCounts.has("ScriptDom") ? "静的解析ツール" : "",
    skillCounts.has("WinForms") || skillCounts.has("CLI") ? "Windows GUI/CLI" : "",
    skillCounts.has("Vite") || skillCounts.has("Next.js") || skillCounts.has("HTML") ? "ブラウザで動く開発支援ツール" : "",
    skillCounts.has("VBA") || skillCounts.has("Excel") ? "Excel自動化" : "",
  ].filter(Boolean);

  const focusText = focus.length > 0 ? `${joinJapaneseList(focus)} を中心に` : "公開リポジトリでは";
  const workText = work.length > 0 ? joinJapaneseList(work) : "開発支援ツール";

  return `${focusText}、${workText}を作っています。`;
}

function renderBadgeGroup(skills, urlMap) {
  if (skills.length === 0) {
    return "";
  }

  return [
    "<p>",
    ...skills.map((skill) => `  <img alt="${escapeHtml(skill)}" src="${urlMap.get(skill) || fallbackBadgeUrl(skill)}">`),
    "</p>",
  ].join("\n");
}

function fallbackBadgeUrl(skill) {
  const label = encodeURIComponent(skill.replace(/\s+/g, "_"));
  return `https://img.shields.io/badge/${label}-334155?style=flat-square`;
}

function buildSkillSignalChart(repositories) {
  const signalGroups = [
    ["C# / .NET analysis tools", ["C#", ".NET", "Roslyn", "ScriptDom", "SemanticModel"]],
    ["TypeScript / browser tools", ["TypeScript", "JavaScript", "Vite", "Next.js", "Monaco Editor", "React"]],
    ["Automation / PowerShell / VBA", ["PowerShell", "VBA", "Excel", "CSV", "XLSX"]],
    ["Rust / low-level experiments", ["Rust", "WASM"]],
    ["Editor / terminal configuration", ["Lua", "Neovim", "WezTerm"]],
    ["Testing / TDD practice", ["xUnit", "MSTest", "Vitest", "TDD"]],
  ];

  return signalGroups
    .map(([label, skills]) => [
      label,
      repositories.filter((repository) => skills.some((skill) => repository.signals.has(skill))).length,
    ])
    .filter(([, count]) => count > 0);
}

function renderPieChart(title, entries, colors) {
  const safeEntries = entries.length > 0 ? entries : [["No repository signals", 1]];
  const themeVariables = {
    background: "#0f172a",
    mainBkg: "#0f172a",
    textColor: "#f8fafc",
    primaryTextColor: "#f8fafc",
    pieStrokeColor: "#0f172a",
    pieStrokeWidth: "3px",
    pieOuterStrokeColor: "#f8fafc",
    pieOuterStrokeWidth: "2px",
    pieTitleTextColor: "#f8fafc",
    pieTitleTextSize: "18px",
    pieLegendTextColor: "#f8fafc",
    pieLegendTextSize: "15px",
    pieSectionTextColor: "#ffffff",
    pieSectionTextSize: "14px",
  };

  colors.forEach((color, index) => {
    themeVariables[`pie${index + 1}`] = color;
  });

  return [
    "```mermaid",
    `%%{init: ${JSON.stringify({ theme: "dark", themeVariables })}}%%`,
    "pie showData",
    `  title ${title}`,
    ...safeEntries.map(([label, count]) => `  "${label}" : ${count}`),
    "```",
  ].join("\n");
}

function renderSkillMap() {
  return [
    "```mermaid",
    "flowchart LR",
    `  profile["${owner}<br/>Developer Tools"]`,
    "",
    '  subgraph analysis["Static Analysis"]',
    '    roslyn["Roslyn<br/>SemanticModel"]',
    '    sqlast["ScriptDom<br/>PostgreSQL"]',
    '    model["AST to domain model"]',
    '    report["TreeView<br/>CSV / XLSX"]',
    "  end",
    "",
    '  subgraph dotnet[".NET Desktop / CLI"]',
    '    winforms["WinForms GUI"]',
    '    cli["CLI tools"]',
    '    publish["self-contained<br/>single-file exe"]',
    '    tests["xUnit / MSTest"]',
    "  end",
    "",
    '  subgraph browser["Browser Tools"]',
    '    ts["TypeScript"]',
    '    vite["Vite / Next.js"]',
    '    monaco["Monaco Editor"]',
    '    wasm["Rust / WASM"]',
    "  end",
    "",
    '  subgraph automation["Automation"]',
    '    ps["PowerShell bootstrap"]',
    '    vba["Excel VBA macros"]',
    '    actions["GitHub Actions"]',
    "  end",
    "",
    "  profile --> analysis",
    "  profile --> dotnet",
    "  profile --> browser",
    "  profile --> automation",
    "",
    "  roslyn --> model --> report",
    "  sqlast --> model",
    "  winforms --> publish",
    "  cli --> publish",
    "  ts --> vite --> monaco",
    "  wasm --> monaco",
    "  ps --> publish",
    "  vba --> actions",
    "```",
  ].join("\n");
}

function renderRepositoryTable(repositories) {
  const rows = [
    "| Repository | Main Skills | Output |",
    "| --- | --- | --- |",
  ];

  for (const repository of repositories) {
    const skills = skillsForRepository(repository);
    const summary = truncateAtBoundary(repository.summary, 118);
    rows.push(`| [${escapeMarkdownTable(repository.name)}](${repository.htmlUrl}) | ${escapeMarkdownTable(skills.join(", "))} | ${escapeMarkdownTable(summary)} |`);
  }

  return rows.join("\n");
}

function renderFeaturedProjectCards(repositories) {
  if (repositories.length === 0) {
    return "_No featured projects found._";
  }

  const rows = [];

  for (let index = 0; index < repositories.length; index += 2) {
    const left = renderFeaturedProjectCard(repositories[index]);
    const right = repositories[index + 1] ? renderFeaturedProjectCard(repositories[index + 1]) : "";
    rows.push("  <tr>");
    rows.push(`    <td width="50%" valign="top">${left}</td>`);
    rows.push(`    <td width="50%" valign="top">${right}</td>`);
    rows.push("  </tr>");
  }

  return [
    "<table>",
    "  <tbody>",
    ...rows,
    "  </tbody>",
    "</table>",
  ].join("\n");
}

function renderFeaturedProjectCard(repository) {
  const skills = skillsForRepository(repository).slice(0, 6);
  const outputs = repository.outputTypes.slice(0, 3);
  const summary = truncateAtBoundary(repository.summary, 154);

  return [
    `<a href="${escapeHtml(repository.htmlUrl)}"><strong>${escapeHtml(repository.name)}</strong></a>`,
    "<br>",
    `<sub>${escapeHtml(summary)}</sub>`,
    "<br><br>",
    "<strong>Signals</strong><br>",
    renderInlineCodeChips(skills),
    "<br><br>",
    "<strong>Output</strong><br>",
    renderInlineCodeChips(outputs),
  ].join("");
}

function renderInlineCodeChips(values) {
  if (values.length === 0) {
    return "<code>repository metadata</code>";
  }

  return values.map((value) => `<code>${escapeHtml(value)}</code>`).join(" ");
}

function skillsForRepository(repository) {
  const orderedSkills = [...primarySkillOrder, ...secondarySkillOrder, "SQL", "CLI", "CSV", "XLSX", "TDD"]
    .filter((skill, index, list) => list.indexOf(skill) === index)
    .filter((skill) => repository.signals.has(skill));

  return orderedSkills.slice(0, 7);
}

function renderWorkStyle() {
  return [
    "```mermaid",
    "flowchart TD",
    '  read["Read source structure"] --> parse["Parse with AST / semantic model"]',
    '  parse --> model["Build stable intermediate model"]',
    '  model --> ui["Show in GUI / browser UI"]',
    '  model --> export["Export CSV / XLSX / snippets"]',
    '  ui --> verify["Test and verify behavior"]',
    '  export --> verify',
    '  verify --> package["Package as single HTML or single-file exe"]',
    '  package --> automate["Refresh profile README with repository metadata"]',
    "```",
  ].join("\n");
}

function renderTechStack(skillCounts, languageSkills) {
  const rows = [
    ["Languages", languageSkills],
    [" .NET", selectPresent(skillCounts, [".NET 9", ".NET", "WinForms", "CLI", "xUnit", "MSTest"])],
    ["Code analysis", selectPresent(skillCounts, ["Roslyn", "SemanticModel", "MSBuildWorkspace", "ScriptDom", "PostgreSQL", "SQL"])],
    ["Frontend", selectPresent(skillCounts, ["TypeScript", "Vite", "Next.js", "React", "Tailwind CSS", "Monaco Editor", "Vitest", "WASM"])],
    ["Data / reports", selectPresent(skillCounts, ["CSV", "XLSX", "Excel", "VBA"])],
    ["Tooling", selectPresent(skillCounts, ["PowerShell", "GitHub Actions", "Neovim", "WezTerm", "Lua"])],
  ].filter(([, skills]) => skills.length > 0);

  return [
    "| Category | Skills |",
    "| --- | --- |",
    ...rows.map(([category, skills]) => `| ${category.trim()} | ${skills.join(", ")} |`),
  ].join("\n");
}

function renderCurrentInterests(skillCounts, outputTypeCounts) {
  const interests = [];

  if ((outputTypeCounts.get("Static analysis / code parsing") || 0) > 0) {
    interests.push("Static analysis tools that turn source code into practical reports");
  }

  if ((outputTypeCounts.get("Windows GUI / CLI tools") || 0) > 0) {
    interests.push("Small Windows utilities that can be distributed as single-file executables");
  }

  if ((outputTypeCounts.get("Single HTML / browser apps") || 0) > 0) {
    interests.push("Browser-based developer tools that run locally without a server");
  }

  if (skillCounts.has("TDD") || skillCounts.has("xUnit") || skillCounts.has("MSTest") || skillCounts.has("Vitest")) {
    interests.push("TDD practice and code-generation workflows");
  }

  if (skillCounts.has("Rust") || skillCounts.has("WASM")) {
    interests.push("Rust experiments for CLI, WASM, and low-level learning");
  }

  if (skillCounts.has("Neovim") || skillCounts.has("WezTerm")) {
    interests.push("Editor and terminal configuration");
  }

  return interests.slice(0, 6).map((interest) => `- ${interest}`).join("\n");
}

function selectPresent(skillCounts, skills) {
  return skills.filter((skill) => skillCounts.has(skill));
}

function formatDate(date, targetTimeZone) {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: targetTimeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

function joinJapaneseList(values) {
  return values.join("、");
}

function truncateAtBoundary(value, maxLength) {
  if (value.length <= maxLength) {
    return value;
  }

  const sliced = value.slice(0, maxLength - 3).trimEnd();
  const boundaryIndexes = [
    sliced.lastIndexOf(" "),
    sliced.lastIndexOf("、"),
    sliced.lastIndexOf("。"),
    sliced.lastIndexOf(" / "),
  ];
  const boundary = Math.max(...boundaryIndexes);

  if (boundary > Math.floor(maxLength * 0.55)) {
    return `${sliced.slice(0, boundary).trimEnd()}...`;
  }

  return `${sliced}...`;
}

function escapeMarkdownTable(value) {
  return String(value)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\|/g, "\\|")
    .replace(/\r?\n/g, " ");
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
