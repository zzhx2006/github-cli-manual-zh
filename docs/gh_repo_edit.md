# gh repo edit

```
gh repo edit [<repository>] [flags]
```

编辑仓库设置。

要关闭设置，请使用 `--flag=false` 语法。

## 选项

`--add-topic <strings>`

添加仓库话题（topic）

`--allow-forking`

允许复刻组织仓库

`--allow-update-branch`

允许更新落后于其基本分支的拉取请求 head 分支

`--default-branch <name>`

设置仓库的默认分支名称

`--delete-branch-on-merge`

合并拉取请求时删除 head 分支

`-d`, `--description <string>`

仓库的说明

`--enable-auto-merge`

启用自动合并功能

`--enable-discussions`

在仓库中启用讨论

`--enable-issues`

在仓库中启用议题

`--enable-merge-commit`

启用通过合并提交合并拉取请求

`--enable-projects`

在仓库中启用项目

`--enable-rebase-merge`

启用通过 rebase 合并拉取请求

`--enable-squash-merge`

启用通过压缩提交（squashed commit）合并拉取请求

`--enable-wiki`

在仓库中启用 Wiki

`-h`, `--homepage <URL>`

仓库主页网址

`--remove-topic <strings>`

删除仓库话题

`--template`

使仓库可用作模板仓库

`--visibility <string>`

将仓库的可见性更改为 \{public,private,internal\}

## 示例

```
# 启用议题和 wiki
gh repo edit --enable-issues --enable-wiki

# 禁用项目
gh repo edit --enable-projects=false
```

## 另请参见

- [gh repo](/gh_repo)