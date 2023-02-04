import{_ as e,c as a,o as l,a as s}from"./app.888d8daa.js";const u=JSON.parse('{"title":"gh label clone","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_label_clone.md","lastUpdated":1675236702000}'),n={name:"gh_label_clone.md"},c=s(`<h1 id="gh-label-clone" tabindex="-1">gh label clone <a class="header-anchor" href="#gh-label-clone" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh label clone &lt;source-repository&gt; [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>将标签从源仓库克隆到 GitHub 上的目标仓库。默认情况下，目标仓库是当前仓库。</p><p>源仓库中的所有标签都将复制到目标仓库。目标仓库中不在源仓库中的标签将不会被删除或修改。</p><p>目标仓库中已存在的源仓库中的标签将被跳过。您可以使用 --force 标志覆盖目标仓库中的现有标签。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-f</code>, <code>--force</code></p><p>覆盖目标仓库中的标签</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 将标签从 cli/cli 仓库克隆并覆盖到当前仓库中</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh label clone cli/cli --force</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 将标签从 cli/cli 仓库克隆到 octocat/cli 仓库中</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh label clone cli/cli --repo octocat/cli</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_label.html">gh label</a></li></ul>`,15),t=[c];function o(i,p,r,d,h,_){return l(),a("div",null,t)}const b=e(n,[["render",o]]);export{u as __pageData,b as default};