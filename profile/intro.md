![SSsan-00 | Developer Tools · Code Analysis · Migration](assets/profile-banner.svg)

# 読みにくいコードを、追える形に。

ソースコードやSQLを読み解く手間を減らすために、**構造・処理の流れ・差分を見える化する開発ツール**を作っています。最近は、PHPからC#への移行で、AIがどこを変え、何を確認したかを追える仕組みに取り組んでいます。

## 代表作

### 01 ｜ [C# Flow Viewer](https://github.com/SSsan-00/csharp-flow-viewer) · コードの流れを読む

分岐や呼び出しをソースだけで追うのが大変なときに。RoslynでC#メソッドを解析し、**制御フロー図と対応するソース**を並べて表示するWindowsツールです。

### 02 ｜ [PHP → C# Migration Harness](https://github.com/SSsan-00/php-to-csharp-migration-harness) · 移行を検証する

移行エージェントにコードを渡して終わりにしない。Junieを使ったPHP → C#／Razor Pages移行で、**作業範囲と検証結果を追えるようにする**ハーネスです。

### 03 ｜ [SQL Analyzer](https://github.com/SSsan-00/sql-analyzer) · SQLの構造を読む

長いSQLから必要な箇所を見つけたいときに。PostgreSQL・T-SQLの構造を**ツリー表示**し、選んだ要素と元のSQLの対応を確認できます。

### 04 ｜ [Diff Viewer](https://github.com/SSsan-00/diff-viewer) · 変更点を比べる

ずれたコードの対応を追いたいときに。ブラウザ上でソースの差分を並べ、**アンカーで比較の基準**を指定できます。[ブラウザで試す](https://diff-viewer-mu.vercel.app)

## 開発で大切にしていること

結果だけでなく、**元のコードまで戻って確かめられること**。繰り返す手作業はツールに任せ、判断に必要な情報を残すこと。

**よく使う技術:** C# / .NET · Roslyn · TypeScript · SQL

[ほかの公開リポジトリを見る](https://github.com/SSsan-00?tab=repositories)
