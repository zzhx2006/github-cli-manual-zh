# gh run list

列出当前的 workflow run

```
gh run list [flags]
```

## 选项

`-b`, `--branch <string>`

按分支筛选 run

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-L`, `--limit <int>`

要获取的最大 run 数量

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-u`, `--user <string>`

按触发 run 的用户筛选 run

`-w`, `--workflow <string>`

按 workflow 筛选 run

## 从父命令继承的选项

`-R`,  `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh run](/gh_run)