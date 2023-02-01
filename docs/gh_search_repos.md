# gh search repos

```
gh search repos [<query>] [flags]
```

在 GitHub 上搜索仓库。

该命令支持使用 GitHub 搜索语法、使用参数和限定符标志或两者的组合来构造查询。

GitHub 搜索语法记录在：[https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)

## 选项

`--archived`

根据存档状态进行筛选

`--created <date>`

基于创建日期进行筛选

`--followers <number>`

根据关注者数量进行筛选

`--forks <number>`

根据 fork 数量过滤

`--good-first-issues <number>`

按带有“good first issue”标签的议题数量进行筛选

`--help-wanted-issues <number>`

按带有“help wanted”标签的议题数量进行筛选

`--include-forks <string>`

在获取的仓库中包含 fork：\{false|true|only\}

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`--language <string>`

基于编程语言的筛选

`--license <strings>`

基于许可证类型进行筛选

`-L`, `--limit <int>`

要获取的最大仓库数量

`--match <strings>`

将搜索限制为仓库的特定字段：\{name|description|readme\}

`--number-topics <number>`

筛选主题数量

`--order <string>`

返回的仓库顺序，除非指定了“--sort”标志，否则将被忽略：\{asc|desc\}

`--owner <string>`

按所有者筛选

`--size <string>`

按大小范围进行筛选（以 KB 为单位）

`--sort <string>`

对获取的仓库进行排序：\{forks|help-wanted-issues|stars|updated\}

`--stars <number>`

根据 star 数量筛选

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`--topic <strings>`

按主题筛选

`--updated <date>`

筛选上次更新日期

`--visibility <strings>`

基于可见性的筛选：\{public|private|internal\}

`-w`, `--web`

在 Web 浏览器中打开搜索查询

## 示例

```
# 搜索仓库匹配关键词“cli”和“shell”
$ gh search repos cli shell

# 搜索仓库匹配短语“vim plugin”
$ gh search repos "vim plugin"

# 搜索在 microsoft 组织中的公共仓库
$ gh search repos --owner=microsoft --visibility=public

# 按主题搜索仓库
$ gh search repos --topic=unix,terminal

# 按编程语言和“good first issues”的数量搜索仓库
$ gh search repos --language=go --good-first-issues=">=10"

# 搜索不带“linux”主题的仓库
$ gh search repos -- -topic:linux
```

## 另请参见

- [gh search](/gh_search)