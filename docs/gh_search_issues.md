# gh search issues

```
gh search issues [<query>] [flags]
```

在 GitHub 上搜索议题。

该命令支持使用 GitHub 搜索语法、使用参数和限定符标志或两者的组合来构造查询。

GitHub 搜索语法记录在：[https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests](https://docs.github.com/search-github/searching-on-github/searching-issues-and-pull-requests)

## 选项

`--app <string>`

按 GitHub 应用程序作者筛选

`--archived`

将搜索限制为存档仓库

`--assignee <string>`

按受请求合并负责人（assignee）筛选

`--author <string>`

按作者筛选

`--closed <date>`

按关闭日期筛选

`--commenter <user>`

根据用户评论进行筛选

`--comments <number>`

筛选评论数

`--created <date>`

基于创建日期进行筛选

`--include-prs`

在结果中包含拉取请求

`--interactions <number>`

筛选反应（reaction）和评论的数量

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

要获取的最大结果数量

`--locked`

筛选锁定的对话状态

`--match <strings>`

将搜索限制为议题的特定字段：\{title|body|comments\}

`--mentions <user>`

根据用户提及（mention）进行筛选

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

筛选反应（reactions）数量

`--repo <strings>`

按仓库筛选

`--sort <string>`

对获取的结果进行排序：\{comments|created|interactions|reactions|reactions-+1|reactions--1|reactions-heart|reactions-smile|reactions-tada|reactions-thinking_face|updated\}

`--state <string>`

基于状态筛选：\{open|closed\}

`--team-mentions <string>`

根据团队提及进行筛选

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`--updated <date>`

筛选上次更新日期

`--visibility <strings>`

基于仓库可见性进行筛选：\{public|private|internal\}

`-w`, `--web`

在 Web 浏览器中打开搜索查询

## 示例

```
# 搜索议题匹配关键词“readme”和“typo”
$ gh search issues readme typo

# 搜索议题匹配短语“broken feature”
$ gh search issues "broken feature"

# 在 cli 组织中搜索问题和拉取请求
$ gh search issues --include-prs --owner=cli

# 搜索由你自己负责（assign）的开放议题
$ gh search issues --assignee=@me --state=open

# 搜索包含大量评论的问题
$ gh search issues --comments=">100"

# 搜索没有“bug”标签的议题
$ gh search issues -- -label:bug
```

## 另请参见

- [gh search](/gh_search)