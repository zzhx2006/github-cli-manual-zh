# gh pr status

显示相关拉取请求的状态

```
gh pr status [flags]
```

## 选项

`-c`, `--conflict-status`

显示每个拉取请求的合并冲突状态

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

- [gh pr](/gh_pr)

## 使用

```
# 查看相关拉取请求的状态
~/Projects/my-project$ gh pr status
Current branch
  #12 Remove the test feature [user:patch-2]
   - All checks failing - Review required

Created by you
  You have no open pull requests

Requesting a code review from you
  #13 Fix tests [branch]
  - 3/4 checks failing - Review required
  #15 New feature [branch]
   - Checks passing - Approved

~/Projects/my-project$
```