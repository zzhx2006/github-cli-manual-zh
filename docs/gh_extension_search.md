# gh extension search

```
gh extension search [<query>] [flags]
```

搜索 gh 扩展。

在没有参数的情况下，该命令按 stars 排序打印出可供安装的前 30 个扩展。通过使用 --limit 标志筛选更高的限制，获取更多扩展。

当连接到终端时，该命令将打印出三列。第一列有一个 ✓ 如果扩展已经在本地安装。第二列是扩展仓库的全名，格式为 NAME/OWNER。第三列是扩展的描述。

当未连接到终端时，✓ 字符被呈现为单词“installed”，但列的顺序和内容是相同的。

此命令的行为类似于“gh search repos”，但不支持太多的搜索限定符。对于更细的扩展搜索，请尝试使用：


```
gh search repos --topic "gh-extension"
```

并根据需要添加限定符。请参阅“gh help search repos”以了解有关仓库搜索的更多信息。

要仅列出已在本地安装的扩展，请参阅：

```
gh ext list
```

## 选项

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`--license <strings>`

基于许可证类型进行筛选

`-L`, `--limit <int>`

要获取的最大扩展数

`--order <string>`

返回的仓库顺序，除非指定了“--sort”标志，否则将被忽略：\{asc|desc\}

`--owner <string>`

按所有者筛选

`--sort <string>`

对获取的存储库进行排序：\{forks|help-wanted-issues|stars|updated\}

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在 Web 浏览器中打开搜索查询

## 示例

```
# 列出按 star 降序排序的前 30 个扩展
$ gh ext search

# 列出更多扩展
$ gh ext search --limit 300

# 列出与术语“branch”匹配的扩展
$ gh ext search branch

# 列出组织“github”拥有的扩展
$ gh ext search --owner github

# 列出扩展，按最近更新、升序排序
$ gh ext search --sort updated --order asc

# 列出扩展，按许可证筛选
$ gh ext search --license MIT

# 在浏览器中打开搜索结果
$ gh ext search -w
```

## 另请参见

- [gh extension](/gh_extension)