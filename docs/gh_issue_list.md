# gh issue list

```
gh issue list [flags]
```

列出 GitHub 仓库中的问题。

搜索查询语法参阅此处：[https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)

## 选项

`--app <string>`

按 GitHub 应用程序作者筛选

`-a`, `--assignee <string>`

按请求合并负责人（assignee）筛选

`-A`, `--author <string>`

按作者筛选

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-l`, `--label <strings>`

按标签筛选

`-L`, `--limit <int>`

要获取的最大问题数量

`--mention <string>`

按提及（mention）筛选

`-m`, `--milestone <string>`

按里程碑编号或标题筛选

`-S`, `--search <query>`

用查询（query）搜索问题

`-s`, `--state <string>`

按状态筛选：\{open|closed|all\}

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在 Web 浏览器中列出问题

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh issue list --label "bug" --label "help wanted"
$ gh issue list --author monalisa
$ gh issue list --assignee "@me"
$ gh issue list --milestone "The big 1.0"
$ gh issue list --search "error no:assignee sort:created-asc"
```

## 另请参见

- [gh issue](/gh_issue)

## 使用

### 默认显示

您将看到最近 30 个打开的项目。

```
# 查看已开放的议题列表
~/Projects/my-project$ gh issue list

Issues for owner/repo

#14  Update the remote url if it changed  (bug)
#14  PR commands on a detached head       (enhancement)
#13  Support for GitHub Enterprise        (wontfix)
#8   Add an easier upgrade command        (bug)

~/Projects/my-project$
```

### 按标志筛选

您可以使用标志来筛选特定用例的列表。

```
# 查看分配给用户的已关闭议题的列表
~/Projects/my-project$ gh issue list --state closed --assignee user

Issues for owner/repo

#13  Enable discarding submodule changes  (bug)
#8   Upgrade to latest react              (upgrade)

~/Projects/my-project$
```