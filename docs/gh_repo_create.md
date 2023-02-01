# gh repo create

```
gh repo create [<name>] [flags]
```

创建新的 GitHub 仓库。

要以交互方式创建仓库，请使用不带参数的 `gh repo create`。

要以非交互方式创建远程仓库，请提供仓库名称和 `--public`、`--private` 或 `--internal` 之一。传递 `--clone` 以在本地克隆新仓库。

要从现有本地仓库创建远程仓库，请使用 `--source` 指定源目录。默认情况下，远程仓库名称将是源目录的名称。传递 `--push` 将任何本地提交推送到新的仓库。

## 选项

`--add-readme`

将 README 文件添加到新仓库

`-c`, `--clone`

将新仓库克隆到当前目录

`-d`, `--description <string>`

仓库的说明

`--disable-issues`

在新仓库中禁用议题

`--disable-wiki`

在新仓库中禁用 wiki

`-g`, `--gitignore <string>`

为仓库指定 gitignore 模板

`-h`, `--homepage <URL>`

仓库主页网址

`--include-all-branches`

包括模板仓库中的所有分支

`--internal`

使新仓库成为内部仓库

`-l`, `--license <string>`

为仓库指定开源许可证

`--private`

将新仓库设为私有

`--public`

公开新仓库

`--push`

将本地提交推送到新仓库

`-r`, `--remote <string>`

指定新仓库的远程名称

`-s`, `--source <string>`

指定要用作源的本地仓库的路径

`-t`, `--team <name>`

要授予访问权限的组织团队的名称

`-p`, `--template <repository>`

基于模板仓库创建新仓库

## 示例

```
# 以交互式创建一个仓库
gh repo create

# 创建一个新的远程仓库并把它克隆到本地
gh repo create my-project --public --clone

# 从当前目录创建一个远程仓库
gh repo create my-project --private --source=. --remote=upstream
```

## 另请参见

- [gh repo](/gh_repo)