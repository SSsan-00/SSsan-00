# SSsan-00

C# / .NET and TypeScript を中心に、静的解析ツール、Windows GUI/CLI、単一HTMLで動く開発支援ツールを作っています。

<!-- Generated from public repository metadata, README files, and manifests on 2026-06-07. -->

## Focus

| Area | What I Build | Repository Signals |
| --- | --- | --- |
| Static analysis | C# / Razor / SQL の構造解析、ASTベースの抽出、TreeView・CSV・XLSX出力 | [table-analyzer](https://github.com/SSsan-00/table-analyzer), [sql-analyzer](https://github.com/SSsan-00/sql-analyzer), [functions-analyzer](https://github.com/SSsan-00/functions-analyzer), [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) |
| Developer tooling | テストコード生成、MSTest補助、Razor整形、差分確認ツール | [TestCodeSnippetGenerator](https://github.com/SSsan-00/TestCodeSnippetGenerator), [BuilderBuilder](https://github.com/SSsan-00/BuilderBuilder), [Razor-Indent-Formatter](https://github.com/SSsan-00/Razor-Indent-Formatter), [diff-viewer](https://github.com/SSsan-00/diff-viewer) |
| Windows apps | .NET 9 / WinForms のGUIツール、CLI、self-contained single-file exe配布 | [table-analyzer](https://github.com/SSsan-00/table-analyzer), [sql-analyzer](https://github.com/SSsan-00/sql-analyzer), [TestCodeSnippetGenerator](https://github.com/SSsan-00/TestCodeSnippetGenerator) |
| Browser apps | TypeScript / Vite / Next.js、Monaco Editor、localStorage / IndexedDB、file://直開き対応 | [diff-viewer](https://github.com/SSsan-00/diff-viewer), [angya-app](https://github.com/SSsan-00/angya-app) |
| Automation | PowerShell bootstrap、Excel/VBAマクロ、レポート生成 | [TextLintByVBA](https://github.com/SSsan-00/TextLintByVBA), [TestCase-EvidenceMaker](https://github.com/SSsan-00/TestCase-EvidenceMaker) |

## Tech Stack

| Category | Skills |
| --- | --- |
| Languages | C#, TypeScript, PowerShell, VBA, Rust, SQL, JavaScript, Lua |
| .NET | .NET 9, WinForms, CLI tools, xUnit, MSTest, self-contained publish |
| Code analysis | Roslyn, SemanticModel, Microsoft.SqlServer.TransactSql.ScriptDom, pgsqlparser |
| Frontend | Vite, Next.js, React, Tailwind CSS, Monaco Editor, Vitest |
| Data / reports | CSV, XLSX, Excel automation, static analysis reports |
| Tooling | pnpm, PowerShell, Shell scripts, GitHub, Neovim, WezTerm |

## Featured Repositories

| Repository | Summary |
| --- | --- |
| [sql-analyzer](https://github.com/SSsan-00/sql-analyzer) | Postgres / T-SQL を解析し、WinFormsのTreeViewで構造を追えるSQL解析ツール |
| [table-analyzer](https://github.com/SSsan-00/table-analyzer) | C# / Razor Pages のソースからSQL利用テーブル候補を抽出し、CSV/XLSXへ出力するツール |
| [diff-viewer](https://github.com/SSsan-00/diff-viewer) | Monaco Editor と TypeScript / Rust WASM を使った単一HTMLの差分ビューア |
| [TestCodeSnippetGenerator](https://github.com/SSsan-00/TestCodeSnippetGenerator) | Roslynで型情報を解決し、MSTest用テストメソッドスニペットを生成するWinFormsアプリ |
| [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) | C# ASTからクラス図作成を支援するツール |

## Current Interests

- Static analysis tools that turn source code into practical reports
- Small Windows utilities that can be distributed as single-file executables
- Browser-based developer tools that run locally without a server
- TDD practice and code-generation workflows
- Rust experiments for CLI, WASM, and low-level learning
