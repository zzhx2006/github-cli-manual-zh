# gh pr diff

```
gh pr diff [<number> | <url> | <branch>] [flags]
```

查看拉取请求中的更改。

如果没有参数，将选择属于当前分支的拉取请求。

使用“--web”，在 web 浏览器中打开拉取请求 diff。

## 选项

`--color <string>`

在差异（diff）输出中使用颜色：\{always|never|auto\}

`--name-only`

仅显示已更改文件的名称

`--patch`

以补丁（patch）格式显示差异

`-w`, `--web`

在浏览器中打开拉取请求差异

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)