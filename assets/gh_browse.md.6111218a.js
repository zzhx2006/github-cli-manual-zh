import{_ as s,c as a,o as e,a as n}from"./app.001f7d66.js";const A=JSON.parse('{"title":"gh browse","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_browse.md","lastUpdated":1675236702000}'),l={name:"gh_browse.md"},p=n(`<h1 id="gh-browse" tabindex="-1">gh browse <a class="header-anchor" href="#gh-browse" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh browse [&lt;number&gt; | &lt;path&gt;] [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在 Web 浏览器中打开 GitHub 仓库。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-b</code>, <code>--branch &lt;string&gt;</code></p><p>通过传入分支名称选择另一个分支</p><p><code>-c</code>, <code>--commit</code></p><p>打开上次提交</p><p><code>-n</code>, <code>--no-browser</code></p><p>打印目标 URL 而不是打开浏览器</p><p><code>-p</code>, <code>--projects</code></p><p>打开仓库项目</p><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><p><code>-s</code>, <code>--settings</code></p><p>打开仓库设置</p><p><code>-w</code>, <code>--wiki</code></p><p>打开仓库维基</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">$ gh browse</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开当前仓库的主页</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh browse 217</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开 issue 或 pull request 217</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh browse 77507cd94ccafcf568f8560cfecde965fcfa63</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开提交页面</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh browse --settings</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开仓库设置</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh browse main.go:312</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开文件 main.go 到第312行</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh browse main.go --branch main</span></span>
<span class="line"><span style="color:#A6ACCD;">#=&gt; 打开 main 分支中的文件 main.go</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh.html">gh</a></li></ul>`,22),o=[p];function c(t,r,i,d,h,g){return e(),a("div",null,o)}const b=s(l,[["render",c]]);export{A as __pageData,b as default};
