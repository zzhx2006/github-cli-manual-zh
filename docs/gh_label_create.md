# gh label create

```
gh label create <name> [flags]
```

在 GitHub 上创建新标签，或使用 --force 更新现有标签。

必须指定标签的名称。说明（description）和颜色是可选的。如果未提供颜色，则将随机选择颜色。

标签颜色必须为 6 个字符的十六进制值。

## 选项

`-c`, `--color <string>`

标签的颜色

`-d`, `--description <string>`

标签说明

`-f`, `--force`

如果标签已存在，更新标签颜色和说明

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 创建新的 bug 标签
$ gh label create bug --description "Something isn't working" --color E99695
```

## 另请参见

- [gh label](/gh_label)