# gh repo fork

```
gh repo fork [<repository>] [-- <gitflags>...] [flags]
```

创建仓库的复刻（fork）。

在没有参数的情况下，创建当前仓库的复刻。否则，复刻指定的仓库。

默认情况下，新的 fork 被设置为您的“origin”远程仓库，任何现有的 origin 远程仓库都被重命名为“upstream”。要改变这种行为，可以使用 `--remote-name` 为新复刻的远程仓库设置一个名称。

可以在 `--` 之后传递其他 git 克隆标志。

## 选项

`--clone`

克隆复刻

`--fork-name <string>`

重命名复刻仓库

`--org <string>`

在组织中创建复刻

`--remote`

为复刻添加一个 git 远程

`--remote-name <string>`

指定新远程仓库的名称

## 另请参见

- [gh repo](/gh_repo)

## 使用

### 无参数

在 git 仓库中，在没有任何参数的情况下，我们将在 GitHub 上为当前目录自动创建一个 fork。然后它将提示您是否要设置上游远程仓库。

```
# 为当前仓库创建一个复刻
~/Projects/cli$ gh repo fork
- Forking cli/cli...
✓ Created fork user/cli
? Would you like to add a remote for the fork? Yes
✓ Renamed origin remote to upstream
✓ Added remote origin
~/Projects/cli$
```

### 带参数

如果您以 OWNER/REPO 格式传递仓库，“gh”将在您的帐户上自动在 GitHub 上创建一个复刻，并询问您是否要克隆它。这在 git 仓库内部或外部都有效。

```
# 为另一个仓库创建复刻。
~/Projects$ gh repo fork cli/cli
- Forking cli/cli...
✓ Created fork cli/cli
? Would you like to clone the fork? Yes
Cloning into 'cli'...
✓ Cloned fork
~/Projects$ cd cli
~/Projects/cli$
```

### 使用标志（flag）

使用标志跳过有关为复刻添加 git 远程仓库或有关在本地克隆复刻仓库的提示。

```
# 使用标志跳过远程仓库提示
~/Projects/cli$ gh repo fork --remote=false
- Forking cli/cli...
✓ Created fork user/cli
~/Projects/cli$
```

```
# 使用标志跳过克隆提示
~/Projects$ gh repo fork cli/cli --clone=false
- Forking cli/cli...
✓ Created fork user/cli
~/Projects$
```