# gh pr comment

```
gh pr comment [<number> | <url> | <branch>] [flags]
```

向 GitHub 拉取请求添加评论（comment）。

如果没有通过标志提供正文文本，该命令将以交互方式提示输入评论。

## 选项

`-b`, `--body <text>`

评论的正文文本

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`--edit-last`

编辑同一作者的最后一条评论

`-e`, `--editor`

跳过提示并打开文本编辑器以编写正文

`-w`, `--web`

打开网络浏览器以撰写评论

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh pr comment 13 --body "Hi from GitHub CLI"
```

## 另请参见

- [gh pr](/gh_pr)