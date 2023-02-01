# gh pr view

```
gh pr view [<number> | <url> | <branch>] [flags]
```

显示拉取请求的标题、正文和其他信息。

如果没有参数，将显示属于当前分支的拉取请求。

使用“--web”，在 web 浏览器中打开拉取请求。

## 选项

`-c`, `--comments`

查看拉取请求评论

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在浏览器中打开拉取请求

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)

## 使用

### 在终端中

默认情况下，我们将在终端中显示。

```
# 在终端中查看拉取请求
~/Projects/my-project$ gh pr view 21
Pull request title
opened by user. 0 comments. (label)

  Pull request body

View this pull request on GitHub: https://github.com/owner/repo/pull/21
~/Projects/my-project$
```

### 在浏览器中

使用 `--web` 或 `-w` 在浏览器中快速打开

```
# 在浏览器中查看拉取请求
~/Projects/my-project$ gh pr view 21 --web
Opening https://github.com/owner/repo/pull/21 in your browser.
~/Projects/my-project$
```

### 无参数

我们将显示您当前所在的分支的拉取请求。

```
# 查看您所在分支的拉取请求
~/Projects/my-project$ gh pr view
Pull request title
opened by user. 0 comments. (label)

  Pull request body

View this pull request on GitHub: https://github.com/owner/repo/pull/21
~/Projects/my-project$
```