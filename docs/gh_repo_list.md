# gh repo list

列出用户或组织拥有的仓库

```
gh repo list [<owner>] [flags]
```

## 选项

`--archived`

仅显示已存档的仓库

`--fork`

仅显示复刻

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-l`, `--language <string>`

按主要编程语言筛选

`-L`, `--limit <int>`

要列出的仓库的最大数量

`--no-archived`

省略存档的仓库

`--source`

仅显示非复刻

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`--topic <strings>`

按主题筛选

`--visibility <string>`

按仓库可见性筛选：\{public|private|internal\}

## 另请参见

- [gh repo](/gh_repo)