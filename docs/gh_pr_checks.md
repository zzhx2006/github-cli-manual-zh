# gh pr checks

```
gh pr checks [<number> | <url> | <branch>] [flags]
```

显示单个拉取请求的 CI 状态。

如果没有参数，则选中属于当前分支的拉取请求。

## 选项

`-i`, `--interval <--watch>`

使用 --watch 标志时的刷新间隔（以秒为单位）

`--required`

仅显示所需的检查（check）

`--watch`

监视检查，直到它们完成

`-w`, `--web`

打开 Web 浏览器以显示有关检查的详细信息

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)