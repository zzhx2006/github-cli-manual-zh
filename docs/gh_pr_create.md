# gh pr create

```
gh pr create [flags]
```
在 GitHub 上创建拉取请求。

当当前分支未完全推送到 git 远程时，将出现一个提示，询问将分支推到何处，并提供一个复刻基本仓库的选项。使用 `--head` 可以显式跳过任何复刻或推送行为。

提示还将询问拉取请求的标题和正文。使用 `--title` 和 `--body` 跳过此操作，或使用 `--fill` 从 git 提交中自动填充这些值。

通过引用拉取请求正文中的议题，将议题链接到拉取请求。如果正文中提到 `Fixes #123` 或 `Closes #123`，则在合并拉取请求时，引用的议题将自动关闭。

默认情况下，对基本仓库具有可写权限的用户可以将新提交推送到拉取请求的 head 分支。使用 `--no maintainer-edit` 禁用此功能。

向项目添加拉取请求需要“project”范围的授权。要进行授权，请运行“gh auth refresh -s project”。

## 选项

`-a`, `--assignee <login>`

通过登录名分配人员。使用“@me”自行分配。

`-B`, `--base <branch>`

要将代码合并到的分支

`-b`, `--body <string>`

拉取请求的正文

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-d`, `--draft`

将拉取请求标记为草稿

`-f`, `--fill`

不要提示输入标题/正文，只使用提交信息

`-H`, `--head <branch>`

包含拉取请求提交的分支（默认值：current branch）

`-l`, `--label <name>`

按名称添加标签

`-m`, `--milestone <name>`

按名称将拉取请求添加到里程碑

`--no-maintainer-edit`

禁用维护者修改拉取请求的能力

`-p`, `--project <name>`

按名称将拉取请求添加到项目

`--recover <string>`

从失败的创建中恢复输入

`-r`, `--reviewer <handle>`

通过头衔（handle）请求人员或团队的审查

`-t`, `--title <string>`

拉取请求的标题

`-w`, `--web`

打开 Web 浏览器以创建拉取请求

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh pr create --title "The bug is fixed" --body "Everything works again"
$ gh pr create --reviewer monalisa,hubot  --reviewer myorg/team-name
$ gh pr create --project "Roadmap"
$ gh pr create --base develop --head monalisa:feature
```

## 另请参见

- [gh pr](/gh_pr)

## 使用

### 交互式

```
# 以交互方式创建拉取请求
~/Projects/my-project$ gh pr create
Creating pull request for feature-branch into main in owner/repo
? Title My new pull request
? Body [(e) to launch nano, enter to skip]
http://github.com/owner/repo/pull/1
~/Projects/my-project$
```

### 通过标志（flag）

```
# 使用标志创建拉取请求
~/Projects/my-project$ gh pr create --title "Pull request title" --body "Pull request body"
http://github.com/owner/repo/pull/1
~/Projects/my-project$
```

### 在浏览器中

```
// 快速导航到拉取请求创建页面
~/Projects/my-project$ gh pr create --web
Opening https://github.com/owner/repo/pull/branch in your browser.
~/Projects/my-project$
```

### 使用复刻（fork）

如果您所在的仓库中没有推送（push）权限，则此命令将自动为您创建一个 fork。