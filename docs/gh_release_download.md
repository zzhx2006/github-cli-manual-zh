# gh release download

```
gh release download [<tag>] [flags]
```

从 GitHub 发行版下载资源（asset）。

如果没有显式的标签名称参数，资源将从项目的最新版本下载。在这种情况下，需要“--pattern”标志。

## 选项

`-A`, `--archive <format>`

以指定格式（zip 或 tar.gz）下载源代码存档

`--clobber`

覆盖同名的现有文件

`-D`, `--dir <directory>`

要将文件下载到的目录

`-O`, `--output <file>`

要将单个资源写入的文件（使用“-”写入标准输出）

`-p`, `--pattern <stringArray>`

仅下载与 glob 模式匹配的资源

`--skip-existing`

当存在同名文件时跳过下载

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 从特定发行版下载所有资源
$ gh release download v1.2.3

# 仅从最新版本中下载 Debian 包
$ gh release download --pattern '*.deb'

# 指定多个文件匹配
$ gh release download -p '*.deb' -p '*.rpm'

# 下载发行版的源代码存档（archive）
$ gh release download v1.2.3 --archive=zip
```

## 另请参见

- [gh release](/gh_release)