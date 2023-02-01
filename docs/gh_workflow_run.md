# gh workflow run

```
gh workflow run [<workflow-id> | <workflow-name>] [flags]
```

为给定 workflow 创建 workflow_dispatch 事件。

此命令将触发 GitHub Actions 以运行给定的 workflow 文件。给定的 workflow 文件必须支持 workflow_dispatch “on”触发器才能以这种方式运行。

如果 workflow 文件支持输入，可以通过以下几种方式指定输入：

- 以交互方式
- 通过 -f 或 -f 标志
- 作为 JSON，通过 STDIN

## 选项

`-F`, `--field <key=value>`

以 key=value 格式添加字符串参数，遵循 @ 语法

`--json`

通过 STDIN 将 workflow 输入读取为 JSON

`-f`, `--raw-field <key=value>`

以 key=value 格式添加字符串参数

`-r`, `--ref <string>`

包含要运行的 workflow 文件版本的分支或标签名称

## 从父命令继承的选项

`-R`, `--repo <[HOST/]OWNER/REPO>`

使用 [HOST/]OWNER/REPO 格式选择另一个仓库

## 示例

```
# 让 gh 提示您要运行的 workflow 并交互式收集输入
$ gh workflow run

# 在远程的默认分支上运行 workflow 文件“triage.yml”
$ gh workflow run triage.yml

# 在指定的引用处运行 workflow 文件“triage.yml”
$ gh workflow run triage.yml --ref my-branch

# 使用命令行输入并运行 workflow 文件“triage.yml”
$ gh workflow run triage.yml -f name=scully -f greeting=hello

# 通过标准输入使用 JSON 运行 workflow 文件“triage.yml”
$ echo '{"name":"scully", "greeting":"hello"}' | gh workflow run triage.yml --json
```

## 另请参见

- [gh workflow](/gh_workflow)