# gh issue create

```
gh issue create [flags]
```

在 GitHub 上创建议题。

将议题添加到项目需要“project”范围的授权。 要授权，请运行“gh auth refresh -s project”。

## 选项

`-a`, `--assignee <login>`

通过登录名分配人员。使用“@me”自行分配。

`-b`, `--body <string>`

提供主体（body）。否则将提示一个。

`-F`, `--body-file <file>`

从文件中读取正文文本（使用“-”从标准输入中读取）

`-l`, `--label <name>`

按名称添加标签

`-m`, `--milestone <name>`

按名称将议题添加到里程碑

`-p`, `--project <name>`

按名称将议题添加到项目

`--recover <string>`

从失败的创建中恢复输入

`-t`, `--title <string>`

提供标题。否则将提示一个。

`-w`, `--web`

打开浏览器以创建议题

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
$ gh issue create --title "I found a bug" --body "Nothing works"
$ gh issue create --label "bug,help wanted"
$ gh issue create --label bug --label "help wanted"
$ gh issue create --assignee monalisa,hubot
$ gh issue create --assignee "@me"
$ gh issue create --project "Roadmap"
```

## 另请参见

- [gh issue](/gh_issue)

## 使用

### 交互式

```
# 以交互方式创建议题
~/Projects/my-project$ gh issue create
Creating issue in owner/repo
? Title My new issue
? Body [(e) to launch nano, enter to skip]
http://github.com/owner/repo/issues/1
~/Projects/my-project$
```

### 带标志（flag）

```
# 使用标志创建一个议题
~/Projects/my-project$ gh issue create --title "Issue title" --body "Issue body"
http://github.com/owner/repo/issues/1
~/Projects/my-project$
```

### 在浏览器中

```
// 快速导航到议题创建页面
~/Projects/my-project$ gh issue create --web
Opening https://github.com/owner/repo/issues/new in your browser.
~/Projects/my-project$
```