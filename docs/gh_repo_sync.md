# gh repo sync

```
gh repo sync [<destination-repository>] [flags]
```

从源仓库同步目标仓库。同步（sync）使用源仓库的主分支来更新目标仓库上的匹配分支，使它们相等。除非指定了 `--force` 标志，否则将使用快进更新（fast forward update），然后将使用硬重置（hard reset）同步两个分支。

如果没有参数，则选择本地仓库作为目标仓库。

默认情况下，源仓库是目标仓库的父级。这可以用 `--source` 标志覆盖。

## 选项

`-b`, `--branch <string>`

要同步的分支（默认：main branch）

`--force`

硬重置目标仓库的分支以匹配源仓库

`-s`, `--source <string>`

源仓库

## 示例

```
# 从远程父级（remote parent）同步本地仓库
$ gh repo sync

# 从特定分支上的远程父级同步本地仓库
$ gh repo sync --branch v1

# 从其父级同步远程复刻
$ gh repo sync owner/cli-fork

# 从另一个远程仓库同步远程仓库
$ gh repo sync owner/repo --source owner2/repo2
```

## 另请参见

- [gh repo](/gh_repo)