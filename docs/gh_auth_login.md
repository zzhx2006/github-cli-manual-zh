# gh auth login

```
gh auth login [flags]
```

使用 GitHub 主机进行身份验证。

默认身份验证模式是基于 Web 的浏览器流。完成后，身份验证令牌（`token`）将在内部存储。

或者，使用 `--with-token` 在标准输入上传入令牌。令牌所需的最小范围是：“repo”、“read:org”。

或者，gh 将使用在环境变量中找到的身份验证令牌。这种方法最适合于 gh 的“无头（headless）”使用，例如在自动化中。有关详细信息，请参阅 `gh help environment`。

要在 GitHub Actions 中使用 gh，请将以下内容添加到 “env”中：

```
GH_TOKEN: ${{ github.token }}
```

## 选项

`-p`, `--git-protocol <string>`

用于 git 操作的协议：\{ssh|https\}

`-h`, `--hostname <string>`

要进行身份验证的 GitHub 实例的主机名

`-s`, `--scopes <strings>`

要请求的其他身份验证范围

`-w`, `--web`

打开浏览器进行身份验证

`--with-token`

从标准输入读取令牌

## 示例

```
# 开始交互式设置
$ gh auth login

# 通过从文件中读取令牌来针对 github.com 进行身份验证
$ gh auth login --with-token < mytoken.txt

# 使用特定 GitHub 实例进行身份验证
$ gh auth login --hostname enterprise.internal
```
## 另请参见

- [gh auth](/gh_auth)