# gh label clone

```
gh label clone <source-repository> [flags]
```

将标签从源仓库克隆到 GitHub 上的目标仓库。默认情况下，目标仓库是当前仓库。

源仓库中的所有标签都将复制到目标仓库。目标仓库中不在源仓库中的标签将不会被删除或修改。

目标仓库中已存在的源仓库中的标签将被跳过。您可以使用 --force 标志覆盖目标仓库中的现有标签。

## 选项

`-f`, `--force`

覆盖目标仓库中的标签

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 将标签从 cli/cli 仓库克隆并覆盖到当前仓库中
$ gh label clone cli/cli --force

# 将标签从 cli/cli 仓库克隆到 octocat/cli 仓库中
$ gh label clone cli/cli --repo octocat/cli
```

## 另请参见

- [gh label](/gh_label)