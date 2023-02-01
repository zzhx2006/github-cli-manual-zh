# gh completion

```
gh completion -s <shell>
```

为 GitHub CLI 命令生成 shell 自动补全脚本。

通过包管理器安装 GitHub CLI 时，可能不需要额外的 shell 配置来获得自动补全支持。有关 Homebrew，请参阅 [https://docs.brew.sh/Shell-Completion](https://docs.brew.sh/Shell-Completion)

如果需要手动设置完成，请遵循以下说明。确切的配置文件位置可能因系统而异。在测试完成是否正常之前，请确保重新启动 shell 。

## bash

首先，确保使用包管理器已经安装了 `bash-completion`。

然后，添加以下内容到 `~/.bash_profile`：

```
eval "$(gh completion -s bash)"
```

## zsh

生成一个 `_gh` 自动补全脚本并将其放在 `$fpath` 中的某个位置：

```
gh completion -s zsh > /usr/local/share/zsh/site-functions/_gh
```

确保 `~/.zshrc` 中存在以下内容：

```
autoload -U compinit
compinit -i
```

建议使用 Zsh 5.7 版或更高版本。

## fish

生成一个 `gh.fish` 自动补全脚本：

```
gh completion -s fish > ~/.config/fish/completions/gh.fish
```

## PowerShell

打开您的配置文件脚本：

```
mkdir -Path (Split-Path -Parent $profile) -ErrorAction SilentlyContinue
notepad $profile
```

添加以下内容并保存文件：

```
Invoke-Expression -Command $(gh completion -s powershell | Out-String)
```

## 选项

`-s`, `--shell <string>`

Shell 类型：\{bash|zsh|fish|powershell\}

## 另请参见

- [gh](/gh)