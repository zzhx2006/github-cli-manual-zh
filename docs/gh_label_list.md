# gh label list

```
gh label list [flags]
```

显示在 GitHub 存储库中的标签。

使用 `--search` 标志时，结果按查询的最佳匹配排序。不能使用 `--order` 或 `--sort` 标志配置此行为。

## 选项

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-L`, `--limit <int>`

要获取的最大标签数量

`--order <string>`

返回的标签顺序：\{asc|desc\}

`-S`, `--search <string>`

搜索标签名称和说明

`--sort <string>`

对获取的标签进行排序：\{created|name\}

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在网络浏览器中列出标签

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 按名称排序标签
$ gh label list --sort name

# 查找名称或说明中含有“bug”的标签
$ gh label list --search bug
```

## 另请参见

- [gh label](/gh_label)