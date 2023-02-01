import{_ as s,c as e,o as a,a as n}from"./app.001f7d66.js";const A=JSON.parse('{"title":"gh pr view","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"在终端中","slug":"在终端中","link":"#在终端中","children":[]},{"level":3,"title":"在浏览器中","slug":"在浏览器中","link":"#在浏览器中","children":[]},{"level":3,"title":"无参数","slug":"无参数","link":"#无参数","children":[]}]}],"relativePath":"gh_pr_view.md","lastUpdated":1675236702000}'),l={name:"gh_pr_view.md"},p=n(`<h1 id="gh-pr-view" tabindex="-1">gh pr view <a class="header-anchor" href="#gh-pr-view" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh pr view [&lt;number&gt; | &lt;url&gt; | &lt;branch&gt;] [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>显示拉取请求的标题、正文和其他信息。</p><p>如果没有参数，将显示属于当前分支的拉取请求。</p><p>使用“--web”，在 web 浏览器中打开拉取请求。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-c</code>, <code>--comments</code></p><p>查看拉取请求评论</p><p><code>-q</code>, <code>--jq &lt;expression&gt;</code></p><p>使用 jq 表达式筛选 JSON 输出</p><p><code>--json &lt;fields&gt;</code></p><p>使用指定字段输出 JSON</p><p><code>-t</code>, <code>--template &lt;string&gt;</code></p><p>使用 Go 模板格式化 JSON 输出；请参阅“gh help formatting”</p><p><code>-w</code>, <code>--web</code></p><p>在浏览器中打开拉取请求</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_pr.html">gh pr</a></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><h3 id="在终端中" tabindex="-1">在终端中 <a class="header-anchor" href="#在终端中" aria-hidden="true">#</a></h3><p>默认情况下，我们将在终端中显示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 在终端中查看拉取请求</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr view 21</span></span>
<span class="line"><span style="color:#A6ACCD;">Pull request title</span></span>
<span class="line"><span style="color:#A6ACCD;">opened by user. 0 comments. (label)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Pull request body</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">View this pull request on GitHub: https://github.com/owner/repo/pull/21</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="在浏览器中" tabindex="-1">在浏览器中 <a class="header-anchor" href="#在浏览器中" aria-hidden="true">#</a></h3><p>使用 <code>--web</code> 或 <code>-w</code> 在浏览器中快速打开</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 在浏览器中查看拉取请求</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr view 21 --web</span></span>
<span class="line"><span style="color:#A6ACCD;">Opening https://github.com/owner/repo/pull/21 in your browser.</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="无参数" tabindex="-1">无参数 <a class="header-anchor" href="#无参数" aria-hidden="true">#</a></h3><p>我们将显示您当前所在的分支的拉取请求。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 查看您所在分支的拉取请求</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$ gh pr view</span></span>
<span class="line"><span style="color:#A6ACCD;">Pull request title</span></span>
<span class="line"><span style="color:#A6ACCD;">opened by user. 0 comments. (label)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  Pull request body</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">View this pull request on GitHub: https://github.com/owner/repo/pull/21</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/my-project$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,31),t=[p];function o(c,r,i,d,h,C){return a(),e("div",null,t)}const g=s(l,[["render",o]]);export{A as __pageData,g as default};