![SSsan-00 | Developer Tools · Code Analysis · Migration](assets/profile-banner.svg)

# 読みにくいコードを、追える形に。

ソースコードやSQLの**構造・処理の流れ・差分がひと目で分かるツール**を作っています。最近は、PHPからC#へ移行する際に、AIが何を変更し、どう検証したかを確認できる仕組みも作っています。

## 代表作

### 01 ｜ [C# Flow Viewer](https://github.com/SSsan-00/csharp-flow-viewer) · コードの流れを読む

C#の分岐やメソッド呼び出しを、図でたどれるWindowsツールです。Roslynでコードを解析し、**制御フロー図と対応するソースコード**を並べて表示します。

### 02 ｜ [PHP → C# Migration Harness](https://github.com/SSsan-00/php-to-csharp-migration-harness) · 移行を検証する

JunieでPHPをC#／Razor Pagesへ移行するためのハーネスです。**どのファイルを対象にしたか、移行後の検証で何が分かったか**を記録します。

<a href="https://sssan-00.github.io/php-to-csharp-migration-harness/progress-demo.html"><img src="assets/migration-harness-demo.jpg" width="640" alt="移行ハーネスの進捗画面。移行工程と実行ログ、移行項目を表示"></a>

[進捗画面を試す（模擬データ）](https://sssan-00.github.io/php-to-csharp-migration-harness/progress-demo.html)

### 03 ｜ [SQL Analyzer](https://github.com/SSsan-00/sql-analyzer) · SQLの構造を読む

PostgreSQLとT-SQLの構造を**ツリーで表示する**Windowsツールです。ツリーで要素を選ぶと、元のSQLで該当する箇所を確認できます。

### 04 ｜ [Diff Viewer](https://github.com/SSsan-00/diff-viewer) · 変更点を比べる

2つのソースコードを並べて差分を確認できるブラウザツールです。行の位置がずれている場合は、**対応する行にアンカーを置いて**比較できます。[ブラウザで試す](https://diff-viewer-mu.vercel.app)

<a href="https://diff-viewer-mu.vercel.app"><img src="assets/diff-viewer-demo.jpg" width="640" alt="Diff Viewerの比較画面。コードを左右に並べて差分を色分け"></a>

## 開発で大切にしていること

ツールが出した結果を、**元のコードに戻って確かめられること**を大切にしています。繰り返し作業は自動化し、人が判断するための情報は残すようにしています。

**よく使う技術：** C# / .NET · Roslyn · TypeScript · SQL

[ほかの公開リポジトリを見る](https://github.com/SSsan-00?tab=repositories)
