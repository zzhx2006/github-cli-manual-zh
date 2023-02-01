# gh formatting

默认情况下，`gh` 命令的结果以基于行的纯文本格式输出。一些命令支持传递 `--json` 标志，该标志将输出转换为 JSON 格式。在 JSON 中，可以通过添加 `--jq` 或 `--template` 标志，根据所需的格式化字符串进一步格式化输出。这对于选择数据子集、创建新的数据结构、以不同格式显示数据或作为另一个命令行脚本的输入非常有用。

`--json` 标志需要一个逗号分隔的字段列表来获取。要查看命令的可能 `JSON` 字段名，请在运行命令时省略 `--json` 标志的字符串参数。注意，必须传递 `--json` 标志和字段名才能使用 `--jq` 或 `--template` 标志。

`--jq` 标志需要 jq 查询语法中的字符串参数，并且只打印与查询匹配的 JSON 值。jq 查询可用于从数组中选择元素、从对象中选择字段、创建新数组等。使用此格式化指令不需要在系统上安装 jq 实用程序。要了解 jq 查询语法，请参阅：[https://stedolan.github.io/jq/manual/v1.6/](https://stedolan.github.io/jq/manual/v1.6/)

`--template` 标志需要 Go 模板语法中的字符串参数，并且只打印与查询匹配的 JSON 值。除了标准库中的 Go 模板函数外，以下函数也可用于此格式化指令：

- `autocolor`：类似于 `color`,但只向终端发送颜色
- `color <style> <input>`：使用 [https://github.com/mgutz/ansi](https://github.com/mgutz/ansi) 对输入进行着色
- `join <sep> <list>`：使用分隔符连接列表（`<list>`）中的值
- `pluck <field> <list>`：从输入的所有项目中收集字段（`<field>`）的值
- `tablerow <fields>...`：将输出中的字段垂直对齐为表格
- `tablerender`：就地呈现表行（tablerow）添加的字段
- `timeago <time>`：将时间戳设置为相对于现在
- `timefmt <format> <time>`：使用 Go 的 Time.Format 函数格式化时间戳
- `truncate <length> <input>`：确保输入适当长度
- `hyperlink <url> <text>`：呈现终端超链接

了解有关 Go 模板的更多信息，请参阅：[https://golang.org/pkg/text/template/](https://golang.org/pkg/text/template/)。

## 示例

```
# 默认输出格式
$ gh pr list
Showing 23 of 23 open pull requests in cli/cli

#123  A helpful contribution          contribution-branch              about 1 day ago
#124  Improve the docs                docs-branch                      about 2 days ago
#125  An exciting new feature         feature-branch                   about 2 days ago


# 添加带有字段名称列表的 --json 标志
$ gh pr list --json number,title,author
[
  {
	"author": {
	  "login": "monalisa"
	},
	"number": 123,
	"title": "A helpful contribution"
  },
  {
	"author": {
	  "login": "codercat"
	},
	"number": 124,
	"title": "Improve the docs"
  },
  {
	"author": {
	  "login": "cli-maintainer"
	},
	"number": 125,
	"title": "An exciting new feature"
  }
]


# 添加 --jq 标志并从数组中选择字段
$ gh pr list --json author --jq '.[].author.login'
monalisa
codercat
cli-maintainer


# 将 --template 标志与超链接帮助一起使用
gh issue list --json title,url --template '{{range .}}{{hyperlink .url .title}}{{"\n"}}{{end}}'


# 添加 --template 标志并修改显示格式
$ gh pr list --json number,title,headRefName,updatedAt --template \
	'{{range .}}{{tablerow (printf "#%v" .number | autocolor "green") .title .headRefName (timeago .updatedAt)}}{{end}}'

#123  A helpful contribution      contribution-branch       about 1 day ago
#124  Improve the docs            docs-branch               about 2 days ago
#125  An exciting new feature     feature-branch            about 2 days ago


# 一个更复杂的示例，带有 --template 标志，该标志使用多个带有标头的表格式拉取请求：
$ gh pr view 3519 --json number,title,body,reviews,assignees --template \
'{{printf "#%v" .number}} {{.title}}

{{.body}}

{{tablerow "ASSIGNEE" "NAME"}}{{range .assignees}}{{tablerow .login .name}}{{end}}{{tablerender}}
{{tablerow "REVIEWER" "STATE" "COMMENT"}}{{range .reviews}}{{tablerow .author.login .state .body}}{{end}}
'

#3519 Add table and helper template functions

Resolves #3488

ASSIGNEE  NAME
mislav    Mislav Marohnić


REVIEWER  STATE              COMMENT
mislav    COMMENTED          This is going along great! Thanks for working on this ❤️
```

## 另请参见

- [gh](/gh)