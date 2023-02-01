# gh issue develop

管理议题的链接分支

```
gh issue develop [flags] {<number> | <url>}
```

## 选项

`-b`, `--base <string>`

要从中创建新分支的基本分支的名称

`-c`, `--checkout`

创建分支后切换到分支

`-i`, `--issue-repo <string>`

议题仓库的名称或 URL

`-l`, `--list`

列出议题的链接分支

`-n`, `--name <string>`

要创建的分支的名称

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh issue develop --list 123 # list branches for issue 123
$ gh issue develop --list --issue-repo "github/cli" 123 # list branches for issue 123 in repo "github/cli"
$ gh issue develop --list https://github.com/github/cli/issues/123 # list branches for issue 123 in repo "github/cli"
$ gh issue develop 123 --name "my-branch" --base my-feature # create a branch for issue 123 based on the my-feature branch
$ gh issue develop 123 --checkout # fetch and checkout the branch for issue 123 after creating it
```

## 另请参见

- [gh issue](/gh_issue)