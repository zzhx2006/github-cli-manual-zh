import{_ as s,c as n,o as a,a as l}from"./app.001f7d66.js";const g=JSON.parse('{"title":"gh formatting","description":"","frontmatter":{},"headers":[{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_help_formatting.md","lastUpdated":1675236702000}'),e={name:"gh_help_formatting.md"},o=l(`<h1 id="gh-formatting" tabindex="-1">gh formatting <a class="header-anchor" href="#gh-formatting" aria-hidden="true">#</a></h1><p>默认情况下，<code>gh</code> 命令的结果以基于行的纯文本格式输出。一些命令支持传递 <code>--json</code> 标志，该标志将输出转换为 JSON 格式。在 JSON 中，可以通过添加 <code>--jq</code> 或 <code>--template</code> 标志，根据所需的格式化字符串进一步格式化输出。这对于选择数据子集、创建新的数据结构、以不同格式显示数据或作为另一个命令行脚本的输入非常有用。</p><p><code>--json</code> 标志需要一个逗号分隔的字段列表来获取。要查看命令的可能 <code>JSON</code> 字段名，请在运行命令时省略 <code>--json</code> 标志的字符串参数。注意，必须传递 <code>--json</code> 标志和字段名才能使用 <code>--jq</code> 或 <code>--template</code> 标志。</p><p><code>--jq</code> 标志需要 jq 查询语法中的字符串参数，并且只打印与查询匹配的 JSON 值。jq 查询可用于从数组中选择元素、从对象中选择字段、创建新数组等。使用此格式化指令不需要在系统上安装 jq 实用程序。要了解 jq 查询语法，请参阅：<a href="https://stedolan.github.io/jq/manual/v1.6/" target="_blank" rel="noreferrer">https://stedolan.github.io/jq/manual/v1.6/</a></p><p><code>--template</code> 标志需要 Go 模板语法中的字符串参数，并且只打印与查询匹配的 JSON 值。除了标准库中的 Go 模板函数外，以下函数也可用于此格式化指令：</p><ul><li><code>autocolor</code>：类似于 <code>color</code>,但只向终端发送颜色</li><li><code>color &lt;style&gt; &lt;input&gt;</code>：使用 <a href="https://github.com/mgutz/ansi" target="_blank" rel="noreferrer">https://github.com/mgutz/ansi</a> 对输入进行着色</li><li><code>join &lt;sep&gt; &lt;list&gt;</code>：使用分隔符连接列表（<code>&lt;list&gt;</code>）中的值</li><li><code>pluck &lt;field&gt; &lt;list&gt;</code>：从输入的所有项目中收集字段（<code>&lt;field&gt;</code>）的值</li><li><code>tablerow &lt;fields&gt;...</code>：将输出中的字段垂直对齐为表格</li><li><code>tablerender</code>：就地呈现表行（tablerow）添加的字段</li><li><code>timeago &lt;time&gt;</code>：将时间戳设置为相对于现在</li><li><code>timefmt &lt;format&gt; &lt;time&gt;</code>：使用 Go 的 Time.Format 函数格式化时间戳</li><li><code>truncate &lt;length&gt; &lt;input&gt;</code>：确保输入适当长度</li><li><code>hyperlink &lt;url&gt; &lt;text&gt;</code>：呈现终端超链接</li></ul><p>了解有关 Go 模板的更多信息，请参阅：<a href="https://golang.org/pkg/text/template/" target="_blank" rel="noreferrer">https://golang.org/pkg/text/template/</a>。</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 默认输出格式</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pr list</span></span>
<span class="line"><span style="color:#A6ACCD;">Showing 23 of 23 open pull requests in cli/cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#123  A helpful contribution          contribution-branch              about 1 day ago</span></span>
<span class="line"><span style="color:#A6ACCD;">#124  Improve the docs                docs-branch                      about 2 days ago</span></span>
<span class="line"><span style="color:#A6ACCD;">#125  An exciting new feature         feature-branch                   about 2 days ago</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加带有字段名称列表的 --json 标志</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pr list --json number,title,author</span></span>
<span class="line"><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;author&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  &quot;login&quot;: &quot;monalisa&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;number&quot;: 123,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;title&quot;: &quot;A helpful contribution&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;author&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  &quot;login&quot;: &quot;codercat&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;number&quot;: 124,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;title&quot;: &quot;Improve the docs&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;author&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">	  &quot;login&quot;: &quot;cli-maintainer&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">	},</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;number&quot;: 125,</span></span>
<span class="line"><span style="color:#A6ACCD;">	&quot;title&quot;: &quot;An exciting new feature&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加 --jq 标志并从数组中选择字段</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pr list --json author --jq &#39;.[].author.login&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">monalisa</span></span>
<span class="line"><span style="color:#A6ACCD;">codercat</span></span>
<span class="line"><span style="color:#A6ACCD;">cli-maintainer</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将 --template 标志与超链接帮助一起使用</span></span>
<span class="line"><span style="color:#A6ACCD;">gh issue list --json title,url --template &#39;{{range .}}{{hyperlink .url .title}}{{&quot;\\n&quot;}}{{end}}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 添加 --template 标志并修改显示格式</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pr list --json number,title,headRefName,updatedAt --template \\</span></span>
<span class="line"><span style="color:#A6ACCD;">	&#39;{{range .}}{{tablerow (printf &quot;#%v&quot; .number | autocolor &quot;green&quot;) .title .headRefName (timeago .updatedAt)}}{{end}}&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#123  A helpful contribution      contribution-branch       about 1 day ago</span></span>
<span class="line"><span style="color:#A6ACCD;">#124  Improve the docs            docs-branch               about 2 days ago</span></span>
<span class="line"><span style="color:#A6ACCD;">#125  An exciting new feature     feature-branch            about 2 days ago</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 一个更复杂的示例，带有 --template 标志，该标志使用多个带有标头的表格式拉取请求：</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pr view 3519 --json number,title,body,reviews,assignees --template \\</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;{{printf &quot;#%v&quot; .number}} {{.title}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{.body}}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">{{tablerow &quot;ASSIGNEE&quot; &quot;NAME&quot;}}{{range .assignees}}{{tablerow .login .name}}{{end}}{{tablerender}}</span></span>
<span class="line"><span style="color:#A6ACCD;">{{tablerow &quot;REVIEWER&quot; &quot;STATE&quot; &quot;COMMENT&quot;}}{{range .reviews}}{{tablerow .author.login .state .body}}{{end}}</span></span>
<span class="line"><span style="color:#A6ACCD;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">#3519 Add table and helper template functions</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Resolves #3488</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ASSIGNEE  NAME</span></span>
<span class="line"><span style="color:#A6ACCD;">mislav    Mislav Marohnić</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">REVIEWER  STATE              COMMENT</span></span>
<span class="line"><span style="color:#A6ACCD;">mislav    COMMENTED          This is going along great! Thanks for working on this ❤️</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh.html">gh</a></li></ul>`,11),t=[o];function p(c,i,r,A,C,u){return a(),n("div",null,t)}const h=s(e,[["render",p]]);export{g as __pageData,h as default};
