# gh release create

```
gh release create [<tag>] [<files>...]
```

为仓库创建新的 GitHub 发行版。

可以提供要上传到新发行版的资源文件（asset file）列表。要定义资源的显示标签，请在文件名后附加以 `#` 开头的文本。

如果匹配的 git 标签还不存在，将自动从默认分支的最新状态创建一个。使用 `--target` 为自动标签创建指向不同的分支或提交。如果标签不存在，则使用 `--verify-tag` 中止发布（release）。要在发布后本地获取新标签，请执行 `git fetch --tags origin`。

要从带注释的 git 标签创建发行版，首先使用 git 在本地创建一个，将标签推送到 GitHub，然后运行此命令。

使用自动生成的发行说明（release notes）时，除非明确传递了标题，否则也会自动生成发行标题。可以使用 `--notes` 参数将额外的发行说明添加到自动生成的说明中。

## 选项

`--discussion-category <string>`

在指定类别（category）中开始讨论

`-d`, `--draft`

将发行版另存为草稿，而不是发布

`--generate-notes`

自动生成发行版的标题和说明

`--latest`

将此发行版标记为“最新”（默认：根据日期和版本自动标记）

`-n`, `--notes <string>`

发行说明

`-F`, `--notes-file <file>`

从文件中读取发行说明（使用“-”从标准输入读取）

`--notes-start-tag <string>`

用作生成发行说明起点的标签

`-p`, `--prerelease`

将发行版标记为预发行版（prerelease）

`--target <branch>`

目标分支或提交的完整 SHA（默认：main branch）

`-t`, `--title <string>`

发行版标题

`--verify-tag`

如果远程仓库中尚不存在 git 标签，则中止

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
以交互式创建一个发行版
$ gh release create

以交互式从特定标签创建一个发行版
$ gh release create v1.2.3

不以交互式创建一个发行版
$ gh release create v1.2.3 --notes "bugfix release"

使用自动生成的发行说明
$ gh release create v1.2.3 --generate-notes

使用来源于文件的发行说明
$ gh release create v1.2.3 -F changelog.md

上传目录中的所有压缩包作为发行资产（release assets）
$ gh release create v1.2.3 ./dist/*.tgz

上传带有显示标签的发行资产
$ gh release create v1.2.3 '/path/to/asset.zip#My display label'

创建一个发行版并开始讨论
$ gh release create v1.2.3 --discussion-category "General"
```

## 另请参见

- [gh release](/gh_release)