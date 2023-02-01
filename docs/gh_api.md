# gh api

```
gh api <endpoint> [flags]
```

向GitHub API发出经过验证的HTTP请求并打印响应。

端点（endpoint）参数应该是GitHub API v3端点的路径，或者是访问 GitHub API v4 的“graphql”。

端点参数中的占位符“｛owner｝”、“｛repo｝”和“｛branch｝”将被当前目录的存储库或 GH_REPO 环境变量中指定的存储库中的值替换。注意，在某些 shell（例如 PowerShell）中，可能需要将包含“｛…｝”的任何值括在引号中，以防止 shell 对大括号应用特殊含义。

默认 HTTP 请求方法通常为“GET”，如果添加了参数，则为“POST”。用 `--method` 重写该方法。

以“key=value”格式传递一个或多个 `-f/--raw-field` 字段值，以将静态字符串参数添加到请求负载中。要添加非字符串或占位符确定的值，请参阅下面的 `--field`。注意，添加请求参数将自动将请求方法切换到 POST。要将参数作为 GET 查询字符串发送，请使用 `--method GET`。

`-F/--field`标志根据值的格式进行自动类型转换：

- 文字值“true”、“false”、“null”和整数被转换为适当的 JSON 类型；
- 占位符“｛owner｝”、“｛repo｝”和“｛branch｝”由当前目录存储库中的值填充；
- 如果该值以“@”开头，则该值的其余部分将被解释为读取该值的文件名。通过“-”从标准输入读取。

对于 GraphQL 请求，除“query”和“operationName”之外的所有字段都被解释为 GraphQL 变量。

要在请求负载中传递嵌套参数，请在声明字段时使用“key[subkey]=value”语法。要将嵌套值作为数组传递，请使用语法“key[]=value1”，“key[]=value2”声明多个字段。要传递空数组，请使用不带值的“key[]”。

为了以其他格式传递预先构造的 JSON 或有效载荷，可以从 `--input` 指定的文件中读取请求体。使用“-”读取标准输入。以这种方式传递请求体时，通过字段标志指定的任何参数都将添加到端点 URL 的查询字符串中。

在 `--paginate` 模式下，将依次请求所有页面的结果，直到没有更多页面的结果。对于 GraphQL 请求，这要求原始查询接受 `$endCursor: String` 变量，并从集合中获取 `pageInfo｛ hasNextPage，endCursor ｝` 组字段。

## 选项

```
--cache <duration>
```
缓存响应，例如“3600s”、“60m”、“1h”

```
-F, --field <key=value>
```
以 key=value 格式添加类型化参数

```
-H, --header <key:value>
```
以key:value格式添加 HTTP 请求标头

```
--hostname <string>
```
请求的 GitHub 主机名（默认为“github.com”）

```
-i, --include
```
在输出中包含 HTTP 响应状态行和标头

```
--input <file>
```
用作 HTTP 请求正文的文件（使用“-”从标准输入读取）

```
-q, --jq <string>
```
查询以使用 jq 语法从响应中选择值

```
-X, --method <string>
```
请求的 HTTP 方法

```
--paginate
```
发出其他 HTTP 请求以获取所有结果页面

```
-p, --preview <names>
```
要请求的 GitHub API 预览名称（不带“-preview”后缀）

```
-f, --raw-field <key=value>
```
以 key=value 格式添加字符串参数

```
--silent
```
不打印响应正文

```
-t, --template <string>
```
使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”

## 示例

```
# 列出当前存储库中的 release
$ gh api repos/{owner}/{repo}/releases

# 发布 issue 评论
$ gh api repos/{owner}/{repo}/issues/123/comments -f body='Hi from CLI'

# 发布从文件中读取的嵌套参数
$ gh api gists -F 'files[myfile.txt][content]=@myfile.txt'

# 向 GET 请求添加参数
$ gh api -X GET search/issues -f q='repo:cli/cli is:open remote'

# 设置自定义 HTTP 标头
$ gh api -H 'Accept: application/vnd.github.v3.raw+json' ...

# 选择加入 GitHub API 预览版
$ gh api --preview baptiste,nebula ...

# 仅打印响应中的特定字段
$ gh api repos/{owner}/{repo}/issues --jq '.[].title'

# 使用模板进行输出
$ gh api repos/{owner}/{repo}/issues --template \
  '{{range .}}{{.title}} ({{.labels | pluck "name" | join ", " | color "yellow"}}){{"\n"}}{{end}}'

# 使用 GraphQL 列出 release
$ gh api graphql -F owner='{owner}' -F name='{repo}' -f query='
  query($name: String!, $owner: String!) {
    repository(owner: $owner, name: $name) {
      releases(last: 3) {
        nodes { tagName }
      }
    }
  }
'

# 列出用户的所有存储库
$ gh api graphql --paginate -f query='
  query($endCursor: String) {
    viewer {
      repositories(first: 100, after: $endCursor) {
        nodes { nameWithOwner }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
'
```

## 更多

- [gh](/gh)