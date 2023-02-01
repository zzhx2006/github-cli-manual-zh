# gh extension install

```
gh extension install <repository> [flags]
```

在本地安装 GitHub 仓库作为 GitHub CLI 扩展。

仓库参数可以以“owner/repo”格式以及完整 URL 指定。当仓库不在 github.com 上时，URL 格式非常有用。

要从当前目录安装开发中的扩展，请使用“.”作为仓库参数的值。

请参阅 [https://github.com/topics/gh-extension](https://github.com/topics/gh-extension) 上的可用扩展列表。

## 选项

`--pin <string>`

将扩展固定到发行标签（release tag）或提交引用（commit ref）

## 示例

```
$ gh extension install owner/gh-extension
$ gh extension install https://git.example.com/owner/gh-extension
$ gh extension install .
```

## 另请参见

- [gh extension](/gh_extension)