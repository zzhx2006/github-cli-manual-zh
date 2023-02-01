# gh issue status

显示相关议题的状态

```
gh issue status [flags]
```

## 选项

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh issue](/gh_issue)

##  使用

```
# 查看与您相关的议题
~/Projects/my-project$ gh issue status
Issues assigned to you
  #8509 [Fork] Improve how Desktop handles forks  (epic:fork, meta)

Issues mentioning you
  #8938 [Fork] Add create fork flow entry point at commit warning  (epic:fork)
  #8509 [Fork] Improve how Desktop handles forks  (epic:fork, meta)

Issues opened by you
  #8936 [Fork] Hide PR number badges on branches that have an upstream PR  (epic:fork)
  #6386 Improve no editor detected state on conflicts modal  (enhancement)

~/Projects/my-project$
```