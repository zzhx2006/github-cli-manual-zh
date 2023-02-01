# gh status

```
gh status [flags]
```

status 命令在您订阅的所有仓库中打印有关您在 GitHub 上工作的信息，包括：

- 分配的议题（Assigned Issues）
- 分配的拉取请求（Assigned Pull Requests）
- 审查请求（Review Requests）
- 提及（Mentions）
- 仓库活动（新的议题/拉取请求，评论）[Repository Activity (new issues/pull requests, comments)]

## 选项

`-e`, `--exclude <strings>`

以所有者/名称格式排除的以逗号分隔的存储库列表

`-o`, `--org <string>`

报告组织内的状态

## 示例

```
$ gh status -e cli/cli -e cli/go-gh # 排除多个存储库
$ gh status -o cli # 将结果限制为单个组织
```

## 另请参见

- [gh](/gh)