# gh pr edit

```
gh pr edit [<number> | <url> | <branch>] [flags]
```

编辑拉取请求。

如果没有参数，将选择属于当前分支的拉取请求。

编辑拉取请求的项目需要“project”范围的授权。要进行授权，请运行“gh auth refresh -s project”。

## 选项

`--add-assignee <login>`

按登录名添加分配的用户。使用“@me”分配自己。

`--add-label <name>`

按名称添加标签

`--add-project <name>`

按名称将拉取请求添加到项目

`--add-reviewer <login>`

通过其登录名添加审阅者。

`-B`, `--base <branch>`

更改此拉取请求的基本分支

`-b`, `--body <string>`

设置新正文。

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-m`, `--milestone <name>`

按名称编辑拉取请求所属的里程碑

`--remove-assignee <login>`

通过登录名删除分配的用户。使用“@me”取消分配自己。

`--remove-label <name>`

按名称移除标签

`--remove-project <name>`

按名称从项目中删除拉取请求

`--remove-reviewer <login>`

通过其登录名删除审阅者。

`-t`, `--title <string>`

设置新标题。

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh pr edit 23 --title "I found a bug" --body "Nothing works"
$ gh pr edit 23 --add-label "bug,help wanted" --remove-label "core"
$ gh pr edit 23 --add-reviewer monalisa,hubot  --remove-reviewer myorg/team-name
$ gh pr edit 23 --add-assignee "@me" --remove-assignee monalisa,hubot
$ gh pr edit 23 --add-project "Roadmap" --remove-project v1,v2
$ gh pr edit 23 --milestone "Version 1"
```

## 另请参见

- [gh pr](/gh_pr)