# gh pr list

```
gh pr list [flags]
```

列出 GitHub 存储库中的拉取请求。

此处记录了搜索查询语法：[https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests](https://docs.github.com/en/search-github/searching-on-github/searching-issues-and-pull-requests)

## 选项

`--app <string>`

按 GitHub 应用程序作者筛选

`-a`, `--assignee <string>`

按请求合并负责人（assignee）筛选

`-A`, `--author <string>`

按作者筛选

`-B`, `--base <string>`

按基本分支筛选

`-d`, `--draft`

按草稿状态筛选

`-H`, `--head <string>`

按 head 分支筛选

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-l`, `--label <strings>`

按标签筛选

`-L`, `--limit <int>`

要获取的最大项目数量

`-S`, `--search <query>`

使用查询（query）搜索拉取请求

`-s`, `--state <string>`

按状态筛选：\{open|closed|merged|all\}

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在 Web 浏览器中列出拉取请求

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
列出你自己创作的 PR
$ gh pr list --author "@me"

仅列出具有给定标签的 PR
$ gh pr list --label bug --label "priority 1"

使用搜索语法筛选 PR
$ gh pr list --search "status:success review:required"

查找给定提交的 PR
$ gh pr list --search "<SHA>" --state merged
```

## 另请参见

- [gh pr](/gh_pr)

## 使用

### 默认

您将看到最近打开的 30 个项目。

```
# 查看开放的拉取请求列表
~/Projects/my-project$ gh pr list

Pull requests for owner/repo

#14  Upgrade to Prettier 1.19                           prettier
#14  Extend arrow navigation in lists for MacOS         arrow-nav
#13  Add Support for Windows Automatic Dark Mode        dark-mode
#8   Create and use keyboard shortcut react component   shortcut

~/Projects/my-project$
```

### 按标志筛选

您可以使用标志来筛选特定用例的列表。

```
# 查看分配给用户的已关闭的拉取请求列表
~/Projects/my-project$ gh pr list --state closed --assignee user

Pull requests for owner/repo

#13  Upgrade to Electron 7         electron-7
#8   Release Notes Writing Guide   release-notes

~/Projects/my-project$
```