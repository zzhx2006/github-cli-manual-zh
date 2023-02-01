# gh repo view

```
gh repo view [<repository>] [flags]
```

显示 GitHub 仓库的描述和 README 文件。

如果没有参数，将显示当前目录的仓库。

使用“--web”，在 web 浏览器中打开仓库。

使用“--branch”，查看仓库的特定分支。

## 选项

`-b`, `--branch <string>`

查看仓库的特定分支

`-q`, `--jq <expression>`

使用 jq 表达式筛选 JSON 输出

`--json <fields>`

使用指定字段输出 JSON

`-t`, `--template <string>`

使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

`-w`, `--web`

在浏览器中打开仓库

## 另请参见

- [gh repo](/gh_repo)

## 使用

### 在终端中


默认情况下，我们将在终端中显示项目。

```
# 在终端中查看一个仓库
~/Projects/my-project$ gh repo view owner/repo
owner/repo
Repository description

  Repository README

View this repository on GitHub: https://github.com/owner/repo/
~/Projects/my-project$
```

### 在浏览器中

使用 `-w` 或 `--web` 在浏览器中快速打开项目

```
# 在浏览器中查看一个仓库
~/Projects$ gh repo view owner/repo --web
Opening https://github.com/owner/repo/ in your browser.
~/Projects$
```

### 无参数

我们将显示您当前所在的仓库。

```
# 查看您当前的仓库
~/Projects/my-project$ gh repo view
owner/my-project
Repository description

  Repository README

View this repository on GitHub: https://github.com/owner/repo/
~/Projects/my-project$
```