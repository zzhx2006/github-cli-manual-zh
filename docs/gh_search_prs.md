# gh search prs

```
gh search prs [<query>] [flags]
```

在 GitHub 上搜索拉取请求。

该命令支持使用 GitHub 搜索语法、使用参数和限定符标志或两者的组合来构造查询。

GitHub 搜索语法记录在：[https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)

## 选项

`--app <string>`

按 GitHub 应用程序作者筛选

`--archived`

将搜索限制为存档仓库

`--assignee <string>`

按请求合并负责人筛选

`--author <string>`

按作者筛选

`-B`, `--base <string>`

按基本分支名称筛选

`--checks <string>`

根据检查状态进行筛选：\{pending|success|failure\}

`--closed <date>`

筛选关闭日期

`--commenter <user>`

根据用户评论进行筛选

`--comments <number>`

筛选评论数

`--created <date>`

基于创建日期进行筛选

`--draft`

基于草稿状态进行筛选

`-H`, `--head <string>`

按 head 分支名称筛选

`--interactions <number>`

筛选反应和评论的数量

`--involves <user>`

根据用户的参与进行筛选

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`--label <strings>`

按标签筛选

`--language <string>`

基于编程语言的筛选

`-L`, `--limit <int>`

要获取的最大结果数

`--locked`

筛选锁定的对话状态

`--match <strings>`

将搜索限制为议题的特定字段：\{title|body|comments\}

`--mentions <user>`

根据用户提及进行筛选

`--merged`

基于合并状态的筛选

`--merged-at <date>`

在合并日期上筛选

`--milestone <title>`

按里程碑标题筛选

`--no-assignee`

筛选缺少的任务分配对象（assignee）

`--no-label`

筛选缺失标签

`--no-milestone`

筛选缺少的里程碑

`--no-project`

筛选缺失的项目

`--order <string>`

返回结果的顺序，除非指定了“--sort”标志，否则将被忽略：\{asc|desc\}

`--owner <string>`

按仓库所有者筛选

`--project <number>`

按项目板（project board）编号筛选

`--reactions <number>`

筛选反应（reaction）数量

`--repo <strings>`

按仓库筛选

`--review <string>`

根据审查状态进行筛选：\{none|required|approved|changes_requested\}

`--review-requested <user>`

筛选请求审查的用户或团队

`--reviewed-by <user>`

筛选已审查的用户

`--sort <string>`

对获取的结果进行排序：\{comments|reactions|reactions-+1|reactions--1|reactions-smile|reactions-thinking_face|reactions-heart|reactions-tada|interactions|created|updated\}

`--state <string>`

基于状态筛选：\{open|closed\}

`--team-mentions <string>`

根据团队提及进行筛选

`-t, --template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`--updated <date>`

筛选上次更新日期

`--visibility <strings>`

基于仓库可见性进行筛选：\{public|private|internal\}

`-w`, `--web`

在 Web 浏览器中打开搜索查询

## 示例

```
# 搜索拉取请求匹配关键词“fix”和“bug”
$ gh search prs fix bug

# 在 cli 仓库中搜索拉取请求草稿
$ gh search prs --repo=cli/cli --draft

# 搜索请求你的审查的开放拉取请求
$ gh search prs --review-requested=@me --state=open

# 搜索你自己分配的已合并的拉取请求
$ gh search prs --assignee=@me --merged

# 搜索包含大量反应（reaction）的拉取请求
$ gh search prs --reactions=">100"

# 搜索不带“bug”标签的拉取请求
$ gh search prs -- -label:bug
```

## 另请参见

- [gh search](/gh_search)