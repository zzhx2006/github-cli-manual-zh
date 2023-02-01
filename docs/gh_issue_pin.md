# gh issue pin

```
gh issue pin {<number> | <url>}
```

将议题固定到仓库。

可以通过议题编号或 URL 指定议题。

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 将议题固定到当前仓库
$ gh issue pin 23

# 按网址固定议题
$ gh issue pin https://github.com/owner/repo/issues/23

# 将议题固定到特定仓库
$ gh issue pin 23 --repo owner/repo
```

## 另请参见

- [gh issue](/gh_issue)