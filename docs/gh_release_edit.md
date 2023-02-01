# gh release edit

编辑一个发行版

```
gh release edit <tag>
```

## 选项

`--discussion-category <string>`

发布草稿时在指定类别（category）中启动讨论

`--draft`

将发行版另存为草稿，而不是发布

`--latest`

明确将发行版标记为“最新”

`-n`, `--notes <string>`

发行说明

`-F`, `--notes-file <file>`

从文件中读取发行说明（使用“-”从标准输入读取）

`--prerelease`

将发行版标记为预发行版

`--tag <string>`

标签的名称

`--target <branch>`

目标分支或提交的完整 SHA（默认：main branch）

`-t`, `--title <string>`

发行标题

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
发布以前是草稿的发行版
$ gh release edit v1.0 --draft=false

从文件内容更新发行说明
$ gh release edit v1.0 --notes-file /path/to/release_notes.md
```

## 另请参见

- [gh release](/gh_release)