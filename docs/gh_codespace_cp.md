# gh codespace cp

```
gh codespace cp [-e] [-r] [-- [<scp flags>...]] <sources>... <dest>
```

使用 cp 命令在本地和远程文件系统之间复制文件。

与 UNIX `cp` 命令一样，第一个参数指定源，最后一个参数指定目标；如果目标是目录，则可以在第一个源之后指定其他源。

如果所有的源都是目录，则需要 `--recursive` 标志。

任何文件名参数上的“remote:”前缀表示它指向远程（代码空间）计算机的文件系统。它是相对于远程用户的主目录进行解析的。

默认情况下，远程文件名按字面意思解释。使用 `--expand` 标志，每个这样的参数都以 `scp` 的方式处理，作为要在远程计算机上计算的 Bash表达式，受波浪号、大括号、globs、环境变量和反引号的扩展影响。为了安全起见，不要将此标志与不受信任的用户提供的参数一起使用；参见讨论 [https://lwn.net/Articles/835962](https://lwn.net/Articles/835962)。

默认情况下，“cp”命令将在目录 ~/.ssh 中创建一个公有/私有 ssh 密钥对，以共代码空间进行身份验证。

## 选项

`-c`, `--codespace <string>`

代码空间的名称

`-e`, `--expand`

在远程 shell 上展开远程文件名

`-p`, `--profile <string>`

要使用的 SSH 配置文件的名称

`-r`, `--recursive`

递归复制目录

## 示例

```
$ gh codespace cp -e README.md 'remote:/workspaces/$RepositoryName/'
$ gh codespace cp -e 'remote:~/*.go' ./gofiles/
$ gh codespace cp -e 'remote:/workspaces/myproj/go.{mod,sum}' ./gofiles/
$ gh codespace cp -e -- -F ~/.ssh/codespaces_config 'remote:~/*.go' ./gofiles/
```

## 另请参见

- [gh codespace](/gh_codespace)