# gh browse

```
gh browse [<number> | <path>] [flags]
```

在 Web 浏览器中打开 GitHub 仓库。

## 选项

`-b`, `--branch <string>`

通过传入分支名称选择另一个分支

`-c`, `--commit`

打开上次提交

`-n`, `--no-browser`

打印目标 URL 而不是打开浏览器

`-p`, `--projects`

打开仓库项目

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

`-s`, `--settings`

打开仓库设置

`-w`, `--wiki`

打开仓库维基

## 示例

```
$ gh browse
#=> 打开当前仓库的主页

$ gh browse 217
#=> 打开 issue 或 pull request 217

$ gh browse 77507cd94ccafcf568f8560cfecde965fcfa63
#=> 打开提交页面

$ gh browse --settings
#=> 打开仓库设置

$ gh browse main.go:312
#=> 打开文件 main.go 到第312行

$ gh browse main.go --branch main
#=> 打开 main 分支中的文件 main.go
```

## 另请参见

- [gh](/gh)