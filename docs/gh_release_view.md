# gh release view

```
gh release view [<tag>] [flags]
```

查看有关 GitHub 发行版的信息。

如果没有显式的标签名称参数，将显示项目中的最新版本。

## 选项

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在浏览器中打开发行版

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh release](/gh_release)