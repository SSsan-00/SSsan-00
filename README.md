<!-- Generated from public repository metadata, README files, manifests, and repository languages on 2026-11-20. -->
<!-- Edit profile/intro.md for the introduction and featured projects. Edit scripts/update-readme.mjs for generated data. -->

![SSsan-00 | Developer Tools · Code Analysis · Migration](assets/profile-banner.svg)

# 読みにくいコードを、追える形に。

ソースコードやSQLの**構造・処理の流れ・差分がひと目で分かるツール**を作っています。最近は、PHPからC#へ移行する際に、AIが何を変更し、どう検証したかを確認できる仕組みも作っています。

## 代表作

### 01 ｜ [C# Flow Viewer](https://github.com/SSsan-00/csharp-flow-viewer) · コードの流れを読む

C#の分岐やメソッド呼び出しを、図でたどれるWindowsツールです。Roslynでコードを解析し、**制御フロー図と対応するソースコード**を並べて表示します。

<a href="https://github.com/SSsan-00/csharp-flow-viewer"><img src="assets/csharp-flow-viewer-screen.png" width="640" alt="C# Flow Viewerの実行画面。左にファイルとメソッドの一覧、中央に制御フロー図、右に対応するC#ソース"></a>

*Windows版の実行画面：注文処理のサンプルを表示*

### 02 ｜ [PHP → C# Migration Harness](https://github.com/SSsan-00/php-to-csharp-migration-harness) · 移行を検証する

JunieでPHPをC#／Razor Pagesへ移行するためのハーネスです。**どのファイルを対象にしたか、移行後の検証で何が分かったか**を記録します。

<a href="https://sssan-00.github.io/php-to-csharp-migration-harness/progress-demo.html"><img src="assets/migration-harness-demo.jpg" width="640" alt="移行ハーネスの進捗画面。移行工程と実行ログ、移行項目を表示"></a>

[進捗画面を試す（模擬データ）](https://sssan-00.github.io/php-to-csharp-migration-harness/progress-demo.html)

### 03 ｜ [SQL Analyzer](https://github.com/SSsan-00/sql-analyzer) · SQLの構造を読む

PostgreSQLとT-SQLの構造を**ツリーで表示する**Windowsツールです。ツリーで要素を選ぶと、元のSQLで該当する箇所を確認できます。

<a href="https://github.com/SSsan-00/sql-analyzer"><img src="assets/sql-analyzer-screen.png" width="640" alt="SQL Analyzerの実行画面。左にサンプルSQL、右に解析結果のツリー"></a>

*Windows版の実行画面：JOINと集計を含むサンプルSQLを解析*

### 04 ｜ [Diff Viewer](https://github.com/SSsan-00/diff-viewer) · 変更点を比べる

2つのソースコードを並べて差分を確認できるブラウザツールです。行の位置がずれている場合は、**対応する行にアンカーを置いて**比較できます。[ブラウザで試す](https://diff-viewer-mu.vercel.app)

<a href="https://diff-viewer-mu.vercel.app"><img src="assets/diff-viewer-demo.jpg" width="640" alt="Diff Viewerの比較画面。コードを左右に並べて差分を色分け"></a>

## そのほかのツール

<details>
<summary>9つのツールを画像で見る</summary>

以下は操作画面ではなく、各ツールの用途と入出力をまとめた紹介図です。

### 構造を読む

<p><a href="https://github.com/SSsan-00/table-analyzer"><img src="assets/tools/table-analyzer.png" width="640" alt="Table Analyzer：コードが使うテーブルを洗い出す。入力はC#／Razor Pages、出力はテーブル利用一覧（CSV／Excel）。読み書きの種類と実行箇所を出力"></a></p>

<p><a href="https://github.com/SSsan-00/ClassDiagramMaker"><img src="assets/tools/class-diagram-maker.png" width="640" alt="ClassDiagramMaker：クラス同士の関係を図にする。入力はC#／Razor プロジェクト、出力はMermaid／Excelのクラス図。継承・実装・参照関係を確認"></a></p>

<p><a href="https://github.com/SSsan-00/functions-analyzer"><img src="assets/tools/functions-analyzer.png" width="640" alt="Functions Analyzer：メソッドの情報を一覧にする。入力はC#の .cs ファイル、出力はExcelのメソッド一覧。名前・概要・引数名・戻り値型"></a></p>

### 開発を支える

<p><a href="https://github.com/SSsan-00/TestCodeSnippetGenerator"><img src="assets/tools/test-code-snippet-generator.png" width="640" alt="TestCodeSnippetGenerator：MSTestのひな形を作る。入力はC#の対象メソッド、出力はテストコードのひな形。期待値の検証は自分で追加"></a></p>

<p><a href="https://github.com/SSsan-00/CoverageReportGenerator"><img src="assets/tools/coverage-report-generator.png" width="640" alt="CoverageReportGenerator：テストで未実行の行を探す。入力はdotCover XML ＋ .csproj、出力はHTML／Excelレポート。未カバー行をソースから確認"></a></p>

<p><a href="https://github.com/SSsan-00/Utf8Converter"><img src="assets/tools/utf8-converter.png" width="640" alt="Utf8Converter：原本を残してUTF-8に変換。入力はCP932を含むフォルダ、出力はUTF-8版の別フォルダ。判定が曖昧なファイルはログへ"></a></p>

### 業務・記録に使う

<p><a href="https://github.com/SSsan-00/DBChangeLogger"><img src="assets/tools/db-change-logger.png" width="640" alt="DBChangeLogger：データの変更を試験証跡にする。入力は操作前後のDBデータ、出力はExcel貼り付け用の差分。追加・更新・削除を確認"></a></p>

公開版のEXEはサンプルデータで試すためのデモ版です。

<p><a href="https://github.com/SSsan-00/sql-analysis-formatter-vba"><img src="assets/tools/sql-analysis-formatter.png" width="640" alt="SQL Analysis Formatter：SQLの物理名を日本語で読む。入力はSQL ＋ 項目名の対応表、出力は和名付きのSQL・定義表。読み取り元・書き込み先も整理"></a></p>

<p><a href="https://github.com/SSsan-00/angya-app"><img src="assets/tools/angya-app.png" width="640" alt="行脚アプリ：訪れた場所を記録する。入力は訪れた場所・路線、出力は行脚の記録。訪れた場所を振り返る"></a></p>

</details>

## 開発で大切にしていること

ツールが出した結果を、**元のコードに戻って確かめられること**を大切にしています。繰り返し作業は自動化し、人が判断するための情報は残すようにしています。

**よく使う技術：** C# / .NET · Roslyn · TypeScript · SQL

[ほかの公開リポジトリを見る](https://github.com/SSsan-00?tab=repositories)

<details>
<summary>技術スタック・活動を見る</summary>

主にC# / .NET、TypeScript、Rustを使い、静的解析ツール、Windows向けのGUI・CLIツール、ブラウザで動く開発支援ツール、Excel作業を自動化するツールを作っています。

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
  "C# / .NET analysis tools" : 16
  "TypeScript / browser tools" : 13
  "Automation / PowerShell / VBA" : 17
  "Rust / low-level experiments" : 5
  "Editor / terminal configuration" : 2
  "Testing / TDD practice" : 22
```

```mermaid
%%{init: {"theme":"dark","themeVariables":{"background":"#0f172a","mainBkg":"#0f172a","textColor":"#f8fafc","primaryTextColor":"#f8fafc","pieStrokeColor":"#0f172a","pieStrokeWidth":"3px","pieOuterStrokeColor":"#f8fafc","pieOuterStrokeWidth":"2px","pieTitleTextColor":"#f8fafc","pieTitleTextSize":"18px","pieLegendTextColor":"#f8fafc","pieLegendTextSize":"15px","pieSectionTextColor":"#ffffff","pieSectionTextSize":"14px","pie1":"#3a86ff","pie2":"#fb5607","pie3":"#ff006e","pie4":"#06d6a0","pie5":"#8338ec","pie6":"#ffbe0b"}}}%%
pie showData
  title Output Types
  "Static analysis / code parsing" : 21
  "Windows GUI / CLI tools" : 20
  "Single HTML / browser apps" : 17
  "Reports / Excel automation" : 12
  "Learning / systems experiments" : 8
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
| [DBChangeLogger](https://github.com/SSsan-00/DBChangeLogger) | C#, .NET 9, .NET, PowerShell, HTML, PostgreSQL, MSTest | Windows tool to compare PostgreSQL and SQL Server changes and copy colored evidence tables to Excel. |
| [php-to-csharp-migration-harness](https://github.com/SSsan-00/php-to-csharp-migration-harness) | C#, .NET, JavaScript, HTML, Python, Roslyn, Monaco Editor | A specification draft for a PHP to C# migration harness |
| [sql-analysis-formatter-vba](https://github.com/SSsan-00/sql-analysis-formatter-vba) | C#, .NET 9, .NET, PowerShell, VBA, ScriptDom, MSTest | Excel VBA macro to convert SQL identifiers to Japanese display names using a worksheet mapping. |
| [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) | C#, .NET 9, .NET, PowerShell, Roslyn, SemanticModel, WinForms | C# AST-based class diagram generator |
| [Utf8Converter](https://github.com/SSsan-00/Utf8Converter) | C#, .NET 9, .NET, PowerShell, JavaScript, HTML, MSTest | 元ファイルと文字列を守る、.NET 9製のUTF-8変換CLI。CP932からの再帰変換と厳密な検証。 |
| [table-analyzer](https://github.com/SSsan-00/table-analyzer) | C#, .NET 9, .NET, PowerShell, Roslyn, SemanticModel, WinForms | Table Analyzer は、C# / Razor Pages のソースコードを読み取り専用で解析し、SQLで利用しているテーブル候補をCSVまたはXLSXに出力するツールです。CLI と Windows GUI を用意しています。 |
| [csharp-flow-viewer](https://github.com/SSsan-00/csharp-flow-viewer) | C#, .NET 9, .NET, PowerShell, JavaScript, HTML, Roslyn | Windows で、C# メソッドの制御フローと Razor ページのイベントを解析して Mermaid で表示する開発ツールです。左でプロジェクトのファイルと解析対象を選び、中央でフローをたどり... |
| [CoverageReportGenerator](https://github.com/SSsan-00/CoverageReportGenerator) | C#, .NET, PowerShell, HTML, Roslyn, WinForms, MSTest | C# / WinForms で作成した、JetBrains dotCover DetailedXML から HTML / Excel カバレッジレポートを生成するツールです。 |
| [sql-analyzer](https://github.com/SSsan-00/sql-analyzer) | C#, .NET 9, .NET, PowerShell, Roslyn, WinForms, ScriptDom | T-SQL analyzer WinForms tool |
| [angya-app](https://github.com/SSsan-00/angya-app) | TypeScript, JavaScript, PostgreSQL, Next.js, React, Tailwind CSS, Vitest | 行脚した場所や日時を登録する(TypeScript×Next.js) |

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

</details>
