import{_ as s,c as a,o as n,a as e}from"./app.888d8daa.js";const g=JSON.parse('{"title":"gh issue unpin","description":"","frontmatter":{},"headers":[{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_issue_unpin.md","lastUpdated":1675236702000}'),l={name:"gh_issue_unpin.md"},p=e(`<h1 id="gh-issue-unpin" tabindex="-1">gh issue unpin <a class="header-anchor" href="#gh-issue-unpin" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh issue unpin {&lt;number&gt; | &lt;url&gt;}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>从仓库中取消固定议题。</p><p>可以通过议题编号或 URL 指定议题。</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 从当前仓库中取消固定议题</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh issue unpin 23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 按网址取消固定议题</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh issue unpin https://github.com/owner/repo/issues/23</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 从特定仓库取消固定议题</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh issue unpin 23 --repo owner/repo</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_issue.html">gh issue</a></li></ul>`,11),i=[p];function t(o,c,r,h,d,u){return n(),a("div",null,i)}const C=s(l,[["render",t]]);export{g as __pageData,C as default};