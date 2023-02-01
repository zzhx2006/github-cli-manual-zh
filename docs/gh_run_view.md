# gh run view

查看 workflow run 的摘要

```
gh run view [<run-id>] [flags]
```

## 选项

`--exit-status`

如果 run failed，则以非零状态退出

`-j`, `--job <string>`

查看 run 中的特定 job 的 ID

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`--log`

查看 run 或特定 job 的完整日志

`--log-failed`

查看 run 或特定 job 中任何失败步骤的日志

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-v`, `--verbose`

显示 job 步骤

`-w`, `--web`

在浏览器中打开 run

## 从父命令继承的选项

`-R`,  `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 以交互式选择要查看的 run，也可以选择单个 job
$ gh run view

# 查看特定的 run
$ gh run view 12345

# 查看 run 中的特定 job
$ gh run view --job 456789

# 查看一个特定 job 的完整日志
$ gh run view --log --job 456789

# 如果 run failed，则以非零状态退出
$ gh run view 0451 --exit-status && echo "run pending or passed"
```

## 另请参见

- [gh run](/gh_run)