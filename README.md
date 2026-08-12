# SSsan-00

C# / .NET、TypeScript、Rust を中心に、静的解析ツール、Windows GUI/CLI、ブラウザで動く開発支援ツール、Excel自動化を作っています。

<!-- Generated from public repository metadata, README files, manifests, and repository languages on 2026-08-13. -->
<!-- To change this README, update scripts/update-readme.mjs. Manual edits are overwritten by the scheduled workflow. -->

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
  <img alt="SemanticModel" src="https://img.shields.io/badge/SemanticModel-Code_Analysis-5C2D91?style=flat-square">
  <img alt="MSBuildWorkspace" src="https://img.shields.io/badge/MSBuildWorkspace-Project_Analysis-512BD4?style=flat-square">
  <img alt="WinForms" src="https://img.shields.io/badge/WinForms-Windows_GUI-0078D4?style=flat-square">
  <img alt="ScriptDom" src="https://img.shields.io/badge/ScriptDom-SQL_AST-CC2927?style=flat-square">
  <img alt="PostgreSQL" src="https://img.shields.io/badge/PostgreSQL-SQL-4169E1?style=flat-square&logo=postgresql&logoColor=white">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-Browser_Tools-646CFF?style=flat-square&logo=vite&logoColor=white">
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-React_App-000000?style=flat-square&logo=nextdotjs&logoColor=white">
</p>

## Contribution Trail

Daily GitHub activity rendered as a neon contribution path.

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/github-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/github-snake.svg">
  <img alt="GitHub contribution snake animation" src="assets/github-snake.svg">
</picture>

## Visual Charts

Repository-derived signals, not proficiency scores.

```mermaid
%%{init: {"theme":"dark","themeVariables":{"background":"#0f172a","mainBkg":"#0f172a","textColor":"#f8fafc","primaryTextColor":"#f8fafc","pieStrokeColor":"#0f172a","pieStrokeWidth":"3px","pieOuterStrokeColor":"#f8fafc","pieOuterStrokeWidth":"2px","pieTitleTextColor":"#f8fafc","pieTitleTextSize":"18px","pieLegendTextColor":"#f8fafc","pieLegendTextSize":"15px","pieSectionTextColor":"#ffffff","pieSectionTextSize":"14px","pie1":"#ff006e","pie2":"#00d4ff","pie3":"#ffbe0b","pie4":"#8338ec","pie5":"#06d6a0","pie6":"#3a86ff"}}}%%
pie showData
  title Public Repository Skill Signals
  "C# / .NET analysis tools" : 11
  "TypeScript / browser tools" : 7
  "Automation / PowerShell / VBA" : 12
  "Rust / low-level experiments" : 3
  "Editor / terminal configuration" : 2
  "Testing / TDD practice" : 16
```

```mermaid
%%{init: {"theme":"dark","themeVariables":{"background":"#0f172a","mainBkg":"#0f172a","textColor":"#f8fafc","primaryTextColor":"#f8fafc","pieStrokeColor":"#0f172a","pieStrokeWidth":"3px","pieOuterStrokeColor":"#f8fafc","pieOuterStrokeWidth":"2px","pieTitleTextColor":"#f8fafc","pieTitleTextSize":"18px","pieLegendTextColor":"#f8fafc","pieLegendTextSize":"15px","pieSectionTextColor":"#ffffff","pieSectionTextSize":"14px","pie1":"#3a86ff","pie2":"#fb5607","pie3":"#ff006e","pie4":"#06d6a0","pie5":"#8338ec","pie6":"#ffbe0b"}}}%%
pie showData
  title Output Types
  "Static analysis / code parsing" : 14
  "Windows GUI / CLI tools" : 13
  "Single HTML / browser apps" : 10
  "Reports / Excel automation" : 9
  "Learning / systems experiments" : 7
  "Editor / terminal configuration" : 2
```

## Skill Map

```mermaid
flowchart LR
  profile["SSsan-00<br/>Developer Tools"]

  subgraph analysis["Static Analysis"]
    roslyn["Roslyn<br/>SemanticModel"]
    sqlast["ScriptDom<br/>PostgreSQL"]
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
    actions["GitHub Actions"]
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
  vba --> actions
```

## Featured Projects

<table>
  <tbody>
  <tr>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/table-analyzer"><strong>table-analyzer</strong></a><br>Table Analyzer は、C# / Razor Pages のソースコードを読み取り専用で解析し、SQLで利用しているテーブル候補をCSVまたはXLSXに出力するツールです。CLI と Windows GUI を用意しています。<br><br><strong>Skills</strong><br><img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-2563EB?style=flat-square&amp;logo=powershell&amp;logoColor=white"> <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-6D28D9?style=flat-square"> <img alt="SemanticModel" src="https://img.shields.io/badge/SemanticModel-7C3AED?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Windows GUI / CLI tools" src="https://img.shields.io/badge/Windows_GUI_%2F_CLI-0369A1?style=flat-square"> <img alt="Reports / Excel automation" src="https://img.shields.io/badge/Reports_%2F_Excel-15803D?style=flat-square"> <img alt="Static analysis / code parsing" src="https://img.shields.io/badge/Static_analysis-7C3AED?style=flat-square"></td>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/sql-analyzer"><strong>sql-analyzer</strong></a><br>T-SQL analyzer WinForms tool<br><br><strong>Skills</strong><br><img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-2563EB?style=flat-square&amp;logo=powershell&amp;logoColor=white"> <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-6D28D9?style=flat-square"> <img alt="WinForms" src="https://img.shields.io/badge/WinForms-0369A1?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Windows GUI / CLI tools" src="https://img.shields.io/badge/Windows_GUI_%2F_CLI-0369A1?style=flat-square"> <img alt="Static analysis / code parsing" src="https://img.shields.io/badge/Static_analysis-7C3AED?style=flat-square"></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/diff-viewer"><strong>diff-viewer</strong></a><br>差分を視覚化する<br><br><strong>Skills</strong><br><img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&amp;logo=typescript&amp;logoColor=white"> <img alt="Rust" src="https://img.shields.io/badge/Rust-111827?style=flat-square&amp;logo=rust&amp;logoColor=white"> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-B45309?style=flat-square&amp;logo=javascript&amp;logoColor=white"> <img alt="HTML" src="https://img.shields.io/badge/HTML-DC2626?style=flat-square&amp;logo=html5&amp;logoColor=white"> <img alt="Vite" src="https://img.shields.io/badge/Vite-7C3AED?style=flat-square&amp;logo=vite&amp;logoColor=white"> <img alt="Monaco Editor" src="https://img.shields.io/badge/Monaco_Editor-007ACC?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Single HTML / browser apps" src="https://img.shields.io/badge/Browser_apps-0E7490?style=flat-square"></td>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/TestCodeSnippetGenerator"><strong>TestCodeSnippetGenerator</strong></a><br>MSTest を .NET 9.0 環境で開発しているユーザー向けに、既存テストクラスへ貼り付けるためのテストメソッドスニペットを生成する WinForms アプリです。<br><br><strong>Skills</strong><br><img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-2563EB?style=flat-square&amp;logo=powershell&amp;logoColor=white"> <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-6D28D9?style=flat-square"> <img alt="SemanticModel" src="https://img.shields.io/badge/SemanticModel-7C3AED?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Windows GUI / CLI tools" src="https://img.shields.io/badge/Windows_GUI_%2F_CLI-0369A1?style=flat-square"> <img alt="Static analysis / code parsing" src="https://img.shields.io/badge/Static_analysis-7C3AED?style=flat-square"></td>
  </tr>
  <tr>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/ClassDiagramMaker"><strong>ClassDiagramMaker</strong></a><br>C# AST-based class diagram generator<br><br><strong>Skills</strong><br><img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-2563EB?style=flat-square&amp;logo=powershell&amp;logoColor=white"> <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-6D28D9?style=flat-square"> <img alt="SemanticModel" src="https://img.shields.io/badge/SemanticModel-7C3AED?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Windows GUI / CLI tools" src="https://img.shields.io/badge/Windows_GUI_%2F_CLI-0369A1?style=flat-square"> <img alt="Reports / Excel automation" src="https://img.shields.io/badge/Reports_%2F_Excel-15803D?style=flat-square"> <img alt="Static analysis / code parsing" src="https://img.shields.io/badge/Static_analysis-7C3AED?style=flat-square"></td>
    <td width="50%" valign="top"><a href="https://github.com/SSsan-00/functions-analyzer"><strong>functions-analyzer</strong></a><br>WinFormsで操作するC#ソース解析ツールです。選択した .cs ファイル内の通常のメソッド定義をRoslyn ASTで解析し、メソッド名、XMLドキュメントコメントの &lt;summary&gt;、仮引数名、戻り値の型をExcelブックに出力します。<br><br><strong>Skills</strong><br><img alt="C#" src="https://img.shields.io/badge/C%23-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET 9" src="https://img.shields.io/badge/.NET_9-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt=".NET" src="https://img.shields.io/badge/.NET-512BD4?style=flat-square&amp;logo=dotnet&amp;logoColor=white"> <img alt="PowerShell" src="https://img.shields.io/badge/PowerShell-2563EB?style=flat-square&amp;logo=powershell&amp;logoColor=white"> <img alt="Roslyn" src="https://img.shields.io/badge/Roslyn-6D28D9?style=flat-square"> <img alt="WinForms" src="https://img.shields.io/badge/WinForms-0369A1?style=flat-square"><br><br><strong>Project Type</strong><br><img alt="Windows GUI / CLI tools" src="https://img.shields.io/badge/Windows_GUI_%2F_CLI-0369A1?style=flat-square"> <img alt="Reports / Excel automation" src="https://img.shields.io/badge/Reports_%2F_Excel-15803D?style=flat-square"> <img alt="Static analysis / code parsing" src="https://img.shields.io/badge/Static_analysis-7C3AED?style=flat-square"></td>
  </tr>
  </tbody>
</table>

## Repository Evidence

| Repository | Main Skills | Output |
| --- | --- | --- |
| [sql-analysis-formatter-vba](https://github.com/SSsan-00/sql-analysis-formatter-vba) | C#, .NET 9, .NET, PowerShell, VBA, ScriptDom, MSTest | Excel VBA macro to convert SQL identifiers to Japanese display names using a worksheet mapping. |
| [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) | C#, .NET 9, .NET, PowerShell, Roslyn, SemanticModel, WinForms | C# AST-based class diagram generator |
| [table-analyzer](https://github.com/SSsan-00/table-analyzer) | C#, .NET 9, .NET, PowerShell, Roslyn, SemanticModel, WinForms | Table Analyzer は、C# / Razor Pages のソースコードを読み取り専用で解析し、SQLで利用しているテーブル候補をCSVまたはXLSXに出力するツールです。CLI と Windows GUI を用意しています。 |
| [CoverageReportGenerator](https://github.com/SSsan-00/CoverageReportGenerator) | C#, .NET, PowerShell, HTML, Roslyn, WinForms, MSTest | C# / WinForms で作成した、JetBrains dotCover DetailedXML から HTML / Excel カバレッジレポートを生成するツールです。 |
| [sql-analyzer](https://github.com/SSsan-00/sql-analyzer) | C#, .NET 9, .NET, PowerShell, Roslyn, WinForms, ScriptDom | T-SQL analyzer WinForms tool |
| [angya-app](https://github.com/SSsan-00/angya-app) | TypeScript, JavaScript, PostgreSQL, Next.js, React, Tailwind CSS, Vitest | 行脚した場所や日時を登録する(TypeScript×Next.js) |
| [functions-analyzer](https://github.com/SSsan-00/functions-analyzer) | C#, .NET 9, .NET, PowerShell, Roslyn, WinForms, MSTest | WinFormsで操作するC#ソース解析ツールです。選択した .cs ファイル内の通常のメソッド定義をRoslyn ASTで解析し、メソッド名、XMLドキュメントコメントの &lt;summary&gt;、仮引数名... |
| [TextLintByVBA](https://github.com/SSsan-00/TextLintByVBA) | VBA, JavaScript, Excel | textlintをVBAで再現する試み |
| [ReportGeneratorDemo](https://github.com/SSsan-00/ReportGeneratorDemo) | C#, .NET, PowerShell, JavaScript, HTML, MSTest | .NET 8 + MSTest のテストコードを実行し、coverlet でカバレッジを収集して、ReportGenerator で HTML レポートを作るサンプルです。 |
| [Razor-Indent-Formatter](https://github.com/SSsan-00/Razor-Indent-Formatter) | TypeScript, HTML, Vite | Razor(.cshtml)ファイルのインデントを整形するツール |

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
  package --> automate["Refresh README<br/>and activity trail"]
```

## Tech Stack

| Category | Skills |
| --- | --- |
| Languages | C#, TypeScript, PowerShell, VBA, Rust, SQL, JavaScript, HTML, Lua, Python, Java |
| .NET | .NET 9, .NET, WinForms, CLI, xUnit, MSTest |
| Code analysis | Roslyn, SemanticModel, MSBuildWorkspace, ScriptDom, PostgreSQL, SQL |
| Frontend | TypeScript, Vite, Next.js, React, Tailwind CSS, Monaco Editor, Vitest, WASM |
| Data / reports | CSV, XLSX, Excel, VBA |
| Tooling | PowerShell, GitHub Actions, Neovim, WezTerm, Lua |

## Current Interests

- Static analysis tools that turn source code into practical reports
- Small Windows utilities that can be distributed as single-file executables
- Browser-based developer tools that run locally without a server
- TDD practice and code-generation workflows
- Rust experiments for CLI, WASM, and low-level learning
- Editor and terminal configuration
