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
