![SSsan-00 | 開発支援・コード解析・移行](assets/profile-banner.svg)

# コードの流れと変更点を、追える形に。

C#やSQLを読み解くツールと、PHPからC#への移行を支援するツールを作っています。解析やAIの出力をそのまま信じるのではなく、**元のコードと検証結果を見比べて判断できること**を大切にしています。

## 代表作

### [C# Flow Viewer](https://github.com/SSsan-00/csharp-flow-viewer)

C#メソッドの分岐・呼び出しと、RazorページのイベントやJavaScriptを図でたどるWindowsツールです。図とソースを行き来でき、静的に特定できた呼び出し先も開けます。

<a href="https://github.com/SSsan-00/csharp-flow-viewer"><img src="assets/csharp-flow-viewer-screen.png" width="760" alt="C# Flow Viewerの注文処理サンプル。左にファイルと解析対象、中央に制御フロー、右にC#ソース、図の下に呼び出し元・呼び出し先へ移動するボタン"></a>

### [MoCA（モカ）](https://github.com/SSsan-00/moca)

Junie CLIを使ったPHPからC#／Razor Pagesへの移行を、Run単位で管理します。進捗・差分・ビルドやチェッカーの結果を記録し、停止したRunを再開できます。

<a href="https://sssan-00.github.io/moca/progress-demo.html"><img src="assets/migration-harness-demo.png" width="760" alt="MoCAの進捗ダッシュボード。模擬データで移行工程と実行ログを表示"></a>

[進捗デモ](https://sssan-00.github.io/moca/progress-demo.html) · [Windowsユーザーガイド](https://github.com/SSsan-00/moca/blob/main/docs/windows-user-guide.md)

### [SQL Analyzer](https://github.com/SSsan-00/sql-analyzer)

PostgreSQL／T-SQLのCTE、JOIN、サブクエリなどをツリーに分解するWindowsツールです。ノードを選ぶと、対応するSQLの箇所を確認できます。

<a href="https://github.com/SSsan-00/sql-analyzer"><img src="assets/sql-analyzer-screen.png" width="760" alt="SQL Analyzer。左にJOINと集計を含むサンプルSQL、右に解析結果のツリー"></a>

### [Diff Viewer](https://github.com/SSsan-00/diff-viewer)

左右のエディターで行単位・行内の差分を確認できます。対応する行をアンカーで指定し、複数ファイルの比較や作業途中の保存にも使えます。単体HTML版ならオフラインでも動きます。

<a href="https://diff-viewer-mu.vercel.app"><img src="assets/diff-viewer-demo.jpg" width="760" alt="Diff Viewer。左右のエディターで行と行内の差分を表示"></a>

[ブラウザーで試す](https://diff-viewer-mu.vercel.app)

## そのほかのツール

<details>
<summary>用途ごとに見る</summary>

| 用途 | リポジトリ |
| --- | --- |
| コードの構造を調べる | [Table Analyzer](https://github.com/SSsan-00/table-analyzer) · [ClassDiagramMaker](https://github.com/SSsan-00/ClassDiagramMaker) · [Functions Analyzer](https://github.com/SSsan-00/functions-analyzer) |
| テストと開発作業を支援する | [TestCodeSnippetGenerator](https://github.com/SSsan-00/TestCodeSnippetGenerator) · [CoverageReportGenerator](https://github.com/SSsan-00/CoverageReportGenerator) · [Utf8Converter](https://github.com/SSsan-00/Utf8Converter) |
| データや記録を扱う | [DBChangeLogger](https://github.com/SSsan-00/DBChangeLogger)（公開版はサンプル用） · [SQL Analysis Formatter](https://github.com/SSsan-00/sql-analysis-formatter-vba) · [行脚アプリ](https://github.com/SSsan-00/angya-app) |

</details>

**主に使う技術：** C# / .NET、Roslyn、TypeScript、SQL、Python

[公開リポジトリの一覧](https://github.com/SSsan-00?tab=repositories)
