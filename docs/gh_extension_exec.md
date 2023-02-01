# gh extension exec

```
gh extension exec <name> [args]
```

使用短名称执行扩展。例如，如果扩展仓库是“owner/gh-extension”，则应传递“extension”。当短名称与核心 gh 命令冲突时，可以使用此命令。

扩展名之后的所有参数都将转发给扩展的可执行文件。

## 示例

```
# 执行 label 扩展而不是核心 gh label 命令
$ gh extension exec label
```

## 另请参见

- [gh extension](/gh_extension)