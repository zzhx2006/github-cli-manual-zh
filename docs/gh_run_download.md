# gh run download

```
gh run download [<run-id>] [flags]
```

下载由 GitHub Actions workflow run 生成的 artifacts。

每个 artifact 的内容将根据 artifact 名称在单独的目录下提取。如果只指定了一个 artifact，它将被提取到当前目录中。

## 选项

`-D`, `--dir <string>`

要将 artifact 下载到的目录

`-n`, `--name <stringArray>`

下载与任何给定名称匹配的 artifact

`-p`, `--pattern <stringArray>`

下载与 glob 模式匹配的 artifact

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 下载由一个 workflow run 生成的所有 artifact
$ gh run download <run-id>

# 下载在一个 run 中的特定的 artifact
$ gh run download <run-id> -n <name>

# 下载在一个仓库中的跨所有 run 的特定 artifact
$ gh run download -n <name1> -n <name2>

# 以交互式选择 artifact
$ gh run download
```

## 另请参见

- [gh run](/gh_run)