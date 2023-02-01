# gh issue edit

```
gh issue edit {<number> | <url>} [flags]
```

编辑议题。

编辑议题的项目需要“project”范围的授权。要授权，请运行“gh auth refresh -s project”。

## 选项

`--add-assignee <login>`

按登录名添加分配的用户。使用“@me”分配自己。

`--add-label <name>`

按名称添加标签

`--add-project <name>`

按名称将议题添加到项目

`-b, --body <string>`

设置新正文。

`-F, --body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-m, --milestone <name>`

按名称编辑议题所属的里程碑

`--remove-assignee <login>`

通过登录名删除分配的用户。使用“@me”取消分配自己。

`--remove-label <name>`

按名称移除标签

`--remove-project <name>`

按名称从项目中删除议题

`-t, --title <string>`

设置新标题。

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh issue edit 23 --title "I found a bug" --body "Nothing works"
$ gh issue edit 23 --add-label "bug,help wanted" --remove-label "core"
$ gh issue edit 23 --add-assignee "@me" --remove-assignee monalisa,hubot
$ gh issue edit 23 --add-project "Roadmap" --remove-project v1,v2
$ gh issue edit 23 --milestone "Version 1"
$ gh issue edit 23 --body-file body.txt
```

## 另请参见

- [gh issue](/gh_issue)