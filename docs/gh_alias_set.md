# gh alias set

```
gh alias set <alias> <expansion> [flags]
```

定义一个在调用时将扩展为完整 gh 命令的别名。

扩展（expansion）可以指定其他参数和标志（flags）。如果扩展包含位置占位符（如“$1”），别名后面的额外参数将适当插入。否则，额外的参数将附加到展开的命令。

使用“-”作为扩展参数从标准输入中读取扩展字符串。这有助于避免在定义扩展时引用问题。

如果扩展以“!”开头，或者如果给定了“--shell”，则扩展是一个 shell 表达式，在调用别名时将通过“sh”解释器进行求值。这允许通过管道和重定向链接多个命令。

## 选项

`-s`, `--shell`
声明要通过 shell 解释器传递的别名

```
# 注意：Windows的命令提示符要求参数使用双引号
$ gh alias set pv 'pr view'
$ gh pv -w 123  #=> gh pr view -w 123

$ gh alias set bugs 'issue list --label=bugs'
$ gh bugs

$ gh alias set homework 'issue list --assignee @me'
$ gh homework

$ gh alias set epicsBy 'issue list --author="$1" --label="epic"'
$ gh epicsBy vilmibm  #=> gh issue list --author="vilmibm" --label="epic"

$ gh alias set --shell igrep 'gh issue list --label="$1" | grep "$2"'
$ gh igrep epic foo  #=> gh issue list --label="epic" | grep "foo"
```

## 更多

- [gh alias](/gh_alias)