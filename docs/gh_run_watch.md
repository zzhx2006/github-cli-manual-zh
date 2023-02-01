# gh run watch

监视 run 直到完成，显示其进度

```
gh run watch <run-id> [flags]
```

## 选项

`--exit-status`

如果 run failed，则以非零状态退出

`-i`, `--interval <int>`

刷新间隔（以秒为单位）

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 监视一个 run 直到它完成
gh run watch

# 当 run 完成时执行其他命令
gh run watch && notify-send "run is done!"
```

## 另请参见

- [gh run](/gh_run)