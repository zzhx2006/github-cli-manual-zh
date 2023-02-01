# gh issue unpin

```
gh issue unpin {<number> | <url>}
```

从仓库中取消固定议题。

可以通过议题编号或 URL 指定议题。

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 从当前仓库中取消固定议题
$ gh issue unpin 23

# 按网址取消固定议题
$ gh issue unpin https://github.com/owner/repo/issues/23

# 从特定仓库取消固定议题
$ gh issue unpin 23 --repo owner/repo
```

## 另请参见

- [gh issue](/gh_issue)