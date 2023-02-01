# gh issue comment

```
gh issue comment {<number> | <url>} [flags]
```

向 GitHub issue 添加评论。

如果没有通过标志提供的正文文本，该命令将以交互方式提示输入注释文本。

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
$ gh issue comment 12 --body "Hi from GitHub CLI"
```

## 另请参见

- [gh issue](/gh_issue)