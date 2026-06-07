# SSsan-00

C# / .NET and TypeScript を中心に、静的解析ツール、Windows GUI/CLI、単一HTMLで動く開発支援ツールを作っています。

<!-- Generated from public repository metadata, README files, and manifests on 2026-06-07. -->

## Skill Snapshot

<p>
  <img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=for-the-badge&logo=dotnet&logoColor=white">
  <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=for-the-badge&logo=dotnet&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-5391FE?style=for-the-badge&logo=powershell&logoColor=white">
  <img alt="Rust" src="https://img.shields.io/badge/Rust-000000?style=for-the-badge&logo=rust&logoColor=white">
  <img alt="VBA" src="https://img.shields.io/badge/VBA-217346?style=for-the-badge&logo=microsoft-excel&logoColor=white">
</p>

<p>
  <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-Code_Analysis-5C2D91?style=flat-square">
  <img alt="WinForms" src="https://img.shields.io/badge/WinForms-Windows_GUI-0078D4?style=flat-square">
  <img alt="ScriptDom" src="https://img.shields.io/badge/ScriptDom-SQL_AST-CC2927?style=flat-square">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-Browser_Tools-646CFF?style=flat-square&logo=vite&logoColor=white">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-React_App-000000?style=flat-square&logo=nextdotjs&logoColor=white">
  <img alt="Monaco Editor" src="https://img.shields.io/badge/Monaco_Editor-Code_UI-007ACC?style=flat-square">
  <img alt="xUnit" src="https://img.shields.io/badge/xUnit-Test_Automation-512BD4?style=flat-square">
</p>

## Visual Charts

Repository-derived signals, not proficiency scores.

```mermaid
%%{init: {"theme": "base", "themeVariables": {"pie1": "#ff006e", "pie2": "#00d4ff", "pie3": "#ffbe0b", "pie4": "#8338ec", "pie5": "#06d6a0", "pieStrokeColor": "#ffffff", "pieStrokeWidth": "2px", "pieOuterStrokeWidth": "2px", "pieTitleTextColor": "#111827", "pieTitleTextSize": "18px", "pieLegendTextColor": "#111827", "pieLegendTextSize": "14px", "pieSectionTextColor": "#ffffff", "pieSectionTextSize": "14px"}}}%%
pie showData
  title Public Repository Skill Signals
  "C# / .NET analysis tools" : 8
  "TypeScript / browser tools" : 4
  "Automation / PowerShell / VBA" : 4
  "Rust / low-level experiments" : 3
  "Editor / terminal configuration" : 2
```

```mermaid
%%{init: {"theme": "base", "themeVariables": {"pie1": "#3a86ff", "pie2": "#fb5607", "pie3": "#ff006e", "pie4": "#06d6a0", "pieStrokeColor": "#ffffff", "pieStrokeWidth": "2px", "pieOuterStrokeWidth": "2px", "pieTitleTextColor": "#111827", "pieTitleTextSize": "18px", "pieLegendTextColor": "#111827", "pieLegendTextSize": "14px", "pieSectionTextColor": "#ffffff", "pieSectionTextSize": "14px"}}}%%
pie showData
  title Output Types
  "Windows GUI / CLI tools" : 7
  "Single HTML / browser apps" : 4
  "Reports / Excel automation" : 3
  "Learning / systems experiments" : 3
```

## Skill Map

```mermaid
flowchart LR
  profile["SSsan-00<br/>Developer Tools"]

  subgraph analysis["Static Analysis"]
    roslyn["Roslyn<br/>SemanticModel"]
    sqlast["ScriptDom<br/>pgsqlparser"]
    model["AST to domain model"]
    report["TreeView<br/>CSV / XLSX"]
  end

  subgraph dotnet[".NET Desktop / CLI"]
    winforms["WinForms GUI"]
    cli["CLI tools"]
    publish["self-contained<br/>single-file exe"]
    tests["xUnit / MSTest"]
  end

  subgraph browser["Browser Tools"]
    ts["TypeScript"]
    vite["Vite / Next.js"]
    monaco["Monaco Editor"]
    wasm["Rust / WASM"]
  end

  subgraph automation["Automation"]
    ps["PowerShell bootstrap"]
    vba["Excel VBA macros"]
    docs["reports / evidence"]
  end

  profile --> analysis
  profile --> dotnet
  profile --> browser
  profile --> automation

  roslyn --> model --> report
  sqlast --> model
  winforms --> publish
  cli --> publish
  ts --> vite --> monaco
  wasm --> monaco
  ps --> publish
  vba --> docs
```

## Repository Evidence

| Repository | Main Skills | Output |
| --- | --- | --- |
| [sql-analyzer](https://github.com/SSsan-00/sql-analyzer) | C#, .NET 9, WinForms, ScriptDom, pgsqlparser, xUnit | Postgres / T-SQL をTreeViewで追えるSQL解析ツール |
| [table-analyzer](https://github.com/SSsan-00/table-analyzer) | C#, Roslyn, SemanticModel, ScriptDom, CSV, XLSX | C# / Razor Pages からSQL利用テーブル候補を抽出 |
| [diff-viewer](https://github.com/SSsan-00/diff-viewer) | TypeScript, Vite, Monaco Editor, Rust/WASM, Vitest | 単一HTMLで動く差分ビューア |
| [TestCodeSnippetGenerator](https://github.com/SSsan-00/TestCodeSnippetGenerator) | C#, Roslyn, MSBuildWorkspace, MSTest, WinForms | MSTest用テストメソッドスニペット生成 |
| [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) | C#, Roslyn, AST analysis, xUnit | C# ASTからクラス図作成を支援 |
| [BuilderBuilder](https://github.com/SSsan-00/BuilderBuilder) | HTML, JavaScript, MSTest, localStorage | DynamicData / Builderパターン用コード生成 |
| [TextLintByVBA](https://github.com/SSsan-00/TextLintByVBA) | VBA, Excel automation, integration tests | Excelセル文章チェックマクロ |

## Work Style

```mermaid
flowchart TD
  read["Read source structure"] --> parse["Parse with AST / semantic model"]
  parse --> model["Build stable intermediate model"]
  model --> ui["Show in GUI / browser UI"]
  model --> export["Export CSV / XLSX / snippets"]
  ui --> verify["Test and verify behavior"]
  export --> verify
  verify --> package["Package as single HTML or single-file exe"]
```

## Tech Stack

| Category | Skills |
| --- | --- |
| Languages | C#, TypeScript, PowerShell, VBA, Rust, SQL, JavaScript, Lua |
| .NET | .NET 9, WinForms, CLI tools, xUnit, MSTest, self-contained publish |
| Code analysis | Roslyn, SemanticModel, MSBuildWorkspace, Microsoft.SqlServer.TransactSql.ScriptDom, pgsqlparser |
| Frontend | Vite, Next.js, React, Tailwind CSS, Monaco Editor, Vitest |
| Data / reports | CSV, XLSX, Excel automation, static analysis reports |
| Tooling | pnpm, PowerShell, Shell scripts, GitHub, Neovim, WezTerm |

## Current Interests

- Static analysis tools that turn source code into practical reports
- Small Windows utilities that can be distributed as single-file executables
- Browser-based developer tools that run locally without a server
- TDD practice and code-generation workflows
- Rust experiments for CLI, WASM, and low-level learning
