import{_ as s,c as a,o as n,a as e}from"./app.888d8daa.js";const y=JSON.parse('{"title":"gh api","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"relativePath":"gh_api.md","lastUpdated":1675236702000}'),l={name:"gh_api.md"},p=e(`<h1 id="gh-api" tabindex="-1">gh api <a class="header-anchor" href="#gh-api" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh api &lt;endpoint&gt; [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>向GitHub API发出经过验证的HTTP请求并打印响应。</p><p>端点（endpoint）参数应该是GitHub API v3端点的路径，或者是访问 GitHub API v4 的“graphql”。</p><p>端点参数中的占位符“｛owner｝”、“｛repo｝”和“｛branch｝”将被当前目录的存储库或 GH_REPO 环境变量中指定的存储库中的值替换。注意，在某些 shell（例如 PowerShell）中，可能需要将包含“｛…｝”的任何值括在引号中，以防止 shell 对大括号应用特殊含义。</p><p>默认 HTTP 请求方法通常为“GET”，如果添加了参数，则为“POST”。用 <code>--method</code> 重写该方法。</p><p>以“key=value”格式传递一个或多个 <code>-f/--raw-field</code> 字段值，以将静态字符串参数添加到请求负载中。要添加非字符串或占位符确定的值，请参阅下面的 <code>--field</code>。注意，添加请求参数将自动将请求方法切换到 POST。要将参数作为 GET 查询字符串发送，请使用 <code>--method GET</code>。</p><p><code>-F/--field</code>标志根据值的格式进行自动类型转换：</p><ul><li>文字值“true”、“false”、“null”和整数被转换为适当的 JSON 类型；</li><li>占位符“｛owner｝”、“｛repo｝”和“｛branch｝”由当前目录存储库中的值填充；</li><li>如果该值以“@”开头，则该值的其余部分将被解释为读取该值的文件名。通过“-”从标准输入读取。</li></ul><p>对于 GraphQL 请求，除“query”和“operationName”之外的所有字段都被解释为 GraphQL 变量。</p><p>要在请求负载中传递嵌套参数，请在声明字段时使用“key[subkey]=value”语法。要将嵌套值作为数组传递，请使用语法“key[]=value1”，“key[]=value2”声明多个字段。要传递空数组，请使用不带值的“key[]”。</p><p>为了以其他格式传递预先构造的 JSON 或有效载荷，可以从 <code>--input</code> 指定的文件中读取请求体。使用“-”读取标准输入。以这种方式传递请求体时，通过字段标志指定的任何参数都将添加到端点 URL 的查询字符串中。</p><p>在 <code>--paginate</code> 模式下，将依次请求所有页面的结果，直到没有更多页面的结果。对于 GraphQL 请求，这要求原始查询接受 <code>$endCursor: String</code> 变量，并从集合中获取 <code>pageInfo｛ hasNextPage，endCursor ｝</code> 组字段。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--cache &lt;duration&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>缓存响应，例如“3600s”、“60m”、“1h”</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-F, --field &lt;key=value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以 key=value 格式添加类型化参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-H, --header &lt;key:value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以key:value格式添加 HTTP 请求标头</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--hostname &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>请求的 GitHub 主机名（默认为“<a href="http://github.com" target="_blank" rel="noreferrer">github.com</a>”）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-i, --include</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在输出中包含 HTTP 响应状态行和标头</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--input &lt;file&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>用作 HTTP 请求正文的文件（使用“-”从标准输入读取）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-q, --jq &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>查询以使用 jq 语法从响应中选择值</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-X, --method &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>请求的 HTTP 方法</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--paginate</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>发出其他 HTTP 请求以获取所有结果页面</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-p, --preview &lt;names&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>要请求的 GitHub API 预览名称（不带“-preview”后缀）</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-f, --raw-field &lt;key=value&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>以 key=value 格式添加字符串参数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">--silent</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>不打印响应正文</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">-t, --template &lt;string&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 列出当前存储库中的 release</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api repos/{owner}/{repo}/releases</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发布 issue 评论</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api repos/{owner}/{repo}/issues/123/comments -f body=&#39;Hi from CLI&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 发布从文件中读取的嵌套参数</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api gists -F &#39;files[myfile.txt][content]=@myfile.txt&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 向 GET 请求添加参数</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api -X GET search/issues -f q=&#39;repo:cli/cli is:open remote&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置自定义 HTTP 标头</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api -H &#39;Accept: application/vnd.github.v3.raw+json&#39; ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 选择加入 GitHub API 预览版</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api --preview baptiste,nebula ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 仅打印响应中的特定字段</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api repos/{owner}/{repo}/issues --jq &#39;.[].title&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用模板进行输出</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api repos/{owner}/{repo}/issues --template \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;{{range .}}{{.title}} ({{.labels | pluck &quot;name&quot; | join &quot;, &quot; | color &quot;yellow&quot;}}){{&quot;\\n&quot;}}{{end}}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 GraphQL 列出 release</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api graphql -F owner=&#39;{owner}&#39; -F name=&#39;{repo}&#39; -f query=&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  query($name: String!, $owner: String!) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    repository(owner: $owner, name: $name) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      releases(last: 3) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        nodes { tagName }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 列出用户的所有存储库</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh api graphql --paginate -f query=&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">  query($endCursor: String) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    viewer {</span></span>
<span class="line"><span style="color:#A6ACCD;">      repositories(first: 100, after: $endCursor) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        nodes { nameWithOwner }</span></span>
<span class="line"><span style="color:#A6ACCD;">        pageInfo {</span></span>
<span class="line"><span style="color:#A6ACCD;">          hasNextPage</span></span>
<span class="line"><span style="color:#A6ACCD;">          endCursor</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh.html">gh</a></li></ul>`,44),o=[p];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const g=s(l,[["render",t]]);export{y as __pageData,g as default};
