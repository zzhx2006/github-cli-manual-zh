# gh repo set-default

```
gh repo set-default [<repository>] [flags]
```

此命令设置在查询本地克隆仓库的 GitHub API 时要使用的默认远程仓库。

gh 将默认仓库用于以下内容：

- 查看和创建拉取请求
- 查看和创建议题
- 查看和创建发行版
- 使用 Actions
- 添加仓库和环境变量（environment secrets）

## 选项

`-u`, `--unset`

取消设置当前默认仓库

`-v`, `--view`

查看当前默认仓库

## 示例

```
以交互方式选择默认仓库：
$ gh repo set-default

显式设置仓库：
$ gh repo set-default owner/repo

查看当前默认仓库：
$ gh repo set-default --view

在交互式选取器（interactive picker）中显示更多仓库选项：
$ git remote add newrepo https://github.com/owner/repo
$ gh repo set-default
```

## 另请参见

- [gh repo](/gh_repo)