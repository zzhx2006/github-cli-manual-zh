# gh issue view

```
gh issue view {<number> | <url>} [flags]
```

显示有关议题的标题、正文和其他信息。

使用“--web”，改为在 Web 浏览器中打开议题。

## 选项

`-c`, `--comments`

查看议题评论

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在浏览器中打开议题

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh issue](/gh_issue)

## 使用

### 终端中

默认情况下，我们将在终端中显示项目。

```
# 在终端中查看议题
~/Projects/my-project$ gh issue view 21
Issue title
opened by user. 0 comments. (label)

  Issue body

View this issue on GitHub: https://github.com/owner/repo/issues/21
~/Projects/my-project$
```
### 在浏览器中

使用 `--web` 或 `-w` 在浏览器中快速打开项目。

```
# 在浏览器中查看议题
~/Projects/my-project$ gh issue view 21 --web
Opening https://github.com/owner/repo/issues/21 in your browser.
~/Projects/my-project$
```