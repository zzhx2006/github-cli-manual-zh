# gh codespace ssh

```
gh codespace ssh [<flags>...] [-- <ssh-flags>...] [<command>]
```

“ssh”命令用于 SSH 连接到代码空间。在最简单的形式中，您可以运行“gh cs ssh”，以交互方式选择代码空间，然后连接。

默认情况下，“ssh”命令将在 ~/.ssh 目录中创建一对公有/私有密钥来对代码空间进行身份验证。

“ssh”命令还支持使用“--config”选项与 OpenSSH 进行更深入的集成，该选项以 OpenSSH 格式生成每个代码空间的 ssh 配置。在 ~/.ssh/config 中包含此配置可以改善与 OpenSSH 集成的工具的用户体验，例如 ssh 主机名的 bash/zsh 自动补全、scp/rsync/sshfs 的远程路径补全、git ssh remotes 等。

一旦设置好了（请参见下面的第二个示例），您就可以像普通远程主机一样 ssh 连接到代码空间（使用“ssh”，而不是“gh cs ssh”）。

请注意，您要连接的代码空间必须预先安装了 SSH 服务器。如果用于代码空间的 docker 映像没有 SSH 服务器，请将其安装在 Dockerfile 中，或者，对于使用基于 Debian 的映像的代码空间，可以将以下内容添加到 devcontainer.json中：

"features": { "ghcr.io/devcontainers/features/sshd:1": { "version": "latest" } }

## 选项

`-c`, `--codespace <string>`

代码空间的名称

`--config`

将 OpenSSH 配置写入标准输出

`-d`, `--debug`

将调试数据记录到文件

`--debug-file <string>`

文件日志的路径

`--profile <string>`

要使用的 SSH 配置文件的名称

`--server-port <int>`

SSH 服务器端口号（0 => 选择空闲的）

## 示例

```
$ gh codespace ssh

$ gh codespace ssh --config > ~/.ssh/codespaces
$ printf 'Match all\nInclude ~/.ssh/codespaces\n' >> ~/.ssh/config
```

## 另请参见

- [gh codespace](/gh_codespace)