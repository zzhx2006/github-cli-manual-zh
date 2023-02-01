# gh pr review

```
gh pr review [<number> | <url> | <branch>] [flags]
```

向拉取请求添加审阅（review）。

在没有参数的情况下，将检查属于当前分支的拉取请求。

## 选项

`-a`, `--approve`

批准拉取请求

`-b`, `--body <string>`

指定审阅的正文

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-c`, `--comment`

评论关于拉取请求

`-r`, `--request-changes`

请求对拉取请求进行更改

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 批准当前分支的拉取请求
$ gh pr review --approve

# 为当前分支留下评论
$ gh pr review --comment -b "interesting"

# 为特定拉取请求添加评论
$ gh pr review 123

# 请求更改特定拉取请求
$ gh pr review 123 -r -b "needs more ASCII art"
```

## 另请参见

- [gh pr](/gh_pr)