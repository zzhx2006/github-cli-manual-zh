import{_ as s,c as a,o as l,a as e}from"./app.001f7d66.js";const C=JSON.parse('{"title":"gh alias set","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"relativePath":"gh_alias_set.md","lastUpdated":1675236702000}'),n={name:"gh_alias_set.md"},t=e(`<h1 id="gh-alias-set" tabindex="-1">gh alias set <a class="header-anchor" href="#gh-alias-set" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh alias set &lt;alias&gt; &lt;expansion&gt; [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>定义一个在调用时将扩展为完整 gh 命令的别名。</p><p>扩展（expansion）可以指定其他参数和标志（flags）。如果扩展包含位置占位符（如“$1”），别名后面的额外参数将适当插入。否则，额外的参数将附加到展开的命令。</p><p>使用“-”作为扩展参数从标准输入中读取扩展字符串。这有助于避免在定义扩展时引用问题。</p><p>如果扩展以“!”开头，或者如果给定了“--shell”，则扩展是一个 shell 表达式，在调用别名时将通过“sh”解释器进行求值。这允许通过管道和重定向链接多个命令。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-s</code>, <code>--shell</code> 声明要通过 shell 解释器传递的别名</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 注意：Windows的命令提示符要求参数使用双引号</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh alias set pv &#39;pr view&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh pv -w 123  #=&gt; gh pr view -w 123</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh alias set bugs &#39;issue list --label=bugs&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh bugs</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh alias set homework &#39;issue list --assignee @me&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh homework</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh alias set epicsBy &#39;issue list --author=&quot;$1&quot; --label=&quot;epic&quot;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh epicsBy vilmibm  #=&gt; gh issue list --author=&quot;vilmibm&quot; --label=&quot;epic&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh alias set --shell igrep &#39;gh issue list --label=&quot;$1&quot; | grep &quot;$2&quot;&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh igrep epic foo  #=&gt; gh issue list --label=&quot;epic&quot; | grep &quot;foo&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="更多" tabindex="-1">更多 <a class="header-anchor" href="#更多" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_alias.html">gh alias</a></li></ul>`,11),p=[t];function i(o,c,r,h,g,u){return l(),a("div",null,p)}const A=s(n,[["render",i]]);export{C as __pageData,A as default};
