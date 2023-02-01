# gh pr checkout

在 git 中切换拉取请求

```
gh pr checkout {<number> | <url> | <branch>} [flags]
```

## 选项

`-b`, `--branch <string>`

使用本地分支名称（默认：head 分支的名称）

`--detach`

使用一个分离的 HEAD 切换拉取请求

`-f`, `--force`

将现有本地分支重置为拉取请求的最新状态

`--recurse-submodules`

切换后更新所有子模块

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 另请参见

- [gh pr](/gh_pr)

## 使用

### 使用拉取请求编号

您可以使用其拉取请求编号在仓库中切换任何拉取请求，包括来自复刻（fork）的请求

```
// 在本地切换拉取请求
~/Projects/my-project$ gh pr checkout 12
remote: Enumerating objects: 66, done.
remote: Counting objects: 100% (66/66), done.
remote: Total 83 (delta 66), reused 66 (delta 66), pack-reused 17
Unpacking objects: 100% (83/83), done.
From https://github.com/owner/repo
 * [new ref]             refs/pull/8896/head -> patch-2
M       README.md
Switched to branch 'patch-2'

~/Projects/my-project$
```

### 使用其他选择条件

您还可以使用 URL 和分支名称来切换拉取请求。

```
// 在本地切换拉取请求
~/Projects/my-project$ gh pr checkout branch-name
Switched to branch 'branch-name'
Your branch is up to date with 'origin/branch-name'.
Already up to date.

~/Projects/my-project$
```