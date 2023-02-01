# gh label edit

```
gh label edit <name> [flags]
```

更新 GitHub 上的标签。

可以使用 `--name` 标志重命名标签。

标签颜色必须为 6 个字符的十六进制值。

## 选项

`-c`, `--color <string>`

标签的颜色

`-d`, `--description <string>`

标签说明

`-n`, `--name <string>`

标签的新名称

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 更新 bug 标签的颜色
$ gh label edit bug --color FF0000

# 重命名 bug 标签并编辑其说明
$ gh label edit bug --name big-bug --description "Bigger than normal bug"
```

## 另请参见

- [gh label](/gh_label)