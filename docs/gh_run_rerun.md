# gh run rerun

重新运行一个失败（failed）的 run

```
gh run rerun [<run-id>] [flags]
```

## 选项

`-d`, `--debug`

使用调试日志记录重新运行

`--failed`

仅重新运行失败的 job，包括依赖项

`-j`, `--job <string>`

从 run 中重新运行特定 job，包括依赖项

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh run](/gh_run)