# gh repo clone

```
gh repo clone <repository> [<directory>] [-- <gitflags>...]
```

在本地克隆 GitHub 仓库。通过在“--”之后列出其他 `git clone` 标志来传递它们。

如果省略了“OWNER/REPO”仓库参数的“OWNER/”部分，则默认为认证用户的名称。

如果仓库是一个 fork，那么它的父仓库将被添加为一个名为“upstream”的额外 git 远程仓库。可以使用 `--upstream-remote-name` 配置远程仓库名称。`--upstream-remote-name` 选项支持一个“@owner”值，该值将以父仓库的所有者命名远程仓库。

## 选项

`-u`, `--upstream-remote-name <string>`

克隆 fork 时的上游远程仓库名称

## 另请参见

- [gh repo](/gh_repo)

## 使用

### 用 OWNER/REPO 语法

您可以使用 OWNER/REPO 语法克隆任意仓库。

```
# 克隆一个仓库
~/Projects$ gh repo clone cli/cli
Cloning into 'cli'...
~/Projects$ cd cli
~/Projects/cli$
```

### 用其他选项

您也可以用 GitHub URL 来克隆仓库。

```
# 克隆一个仓库
~/Projects/my-project$ gh repo clone https://github.com/cli/cli
Cloning into 'cli'...
remote: Enumerating objects: 99, done.
remote: Counting objects: 100% (99/99), done.
remote: Compressing objects: 100% (76/76), done.
remote: Total 21160 (delta 49), reused 35 (delta 18), pack-reused 21061
Receiving objects: 100% (21160/21160), 57.93 MiB | 10.82 MiB/s, done.
Resolving deltas: 100% (16051/16051), done.

~/Projects/my-project$
```