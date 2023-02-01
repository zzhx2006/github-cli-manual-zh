# gh workflow view

查看 workflow 摘要

```
gh workflow view [<workflow-id> | <workflow-name> | <filename>] [flags]
```

## 选项

`-r`, `--ref <string>`

包含要查看的 workflow 文件版本的分支或标签名称

`-w`, `--web`

在浏览器中打开 workflow

`-y`, `--yaml`

查看 workflow yaml 文件

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 以交互方式选择要查看的 workflow
$ gh workflow view

# 查看特定 workflow
$ gh workflow view 0451
```

## 另请参见

- [gh workflow](/gh_workflow)