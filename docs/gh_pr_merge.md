# gh pr merge

```
gh pr merge [<number> | <url> | <branch>] [flags]
```

在 GitHub 上合并拉取请求。

如果没有参数，将选择属于当前分支的拉取请求。

当以需要合并队列（merge queue）的分支为目标时，不需要合并策略（merge strategy）。如果所需的检查尚未通过，将启用自动合并（AutoMerge）。如果通过了所需的检查，则拉取请求将被添加到合并队列中。要绕过合并队列并直接合并，请传递“--admin”标志。

## 选项

`--admin`

使用管理员权限合并不符合要求的拉取请求

`-A`, `--author-email <text>`

合并提交的作者的电子邮件文本

`--auto`

仅在满足必要要求后自动合并

`-b`, `--body <text>`

合并提交的正文文本

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-d`, `--delete-branch`

合并后删除本地和远程分支

`--disable-auto`

禁用此拉取请求的自动合并

`--match-head-commit <SHA>`

提交请求头（head）必须匹配的 SHA 以允许合并

`-m`, `--merge`

将提交与基本分支（base branch）合并

`-r`, `--rebase`

将提交重新放（rebase）到基本分支上

`-s`, `--squash`

将多个提交压缩为一个提交并将其合并到基本分支中

`-t`, `--subject <text>`

合并提交的主题文本

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)