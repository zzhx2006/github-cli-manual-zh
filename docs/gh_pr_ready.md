# gh pr ready

```
gh pr ready [<number> | <url> | <branch>] [flags]
```

将拉取请求标记为已准备好进行审查。

如果没有参数，则属于当前分支的拉取请求被标记为就绪。

如果你的计划支持，可以使用 --undo 转换为草稿

## 选项

`--undo`

将拉取请求转换为“草稿”

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)