import{_ as s,c as a,o as e,a as n}from"./app.888d8daa.js";const A=JSON.parse('{"title":"gh repo fork","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"无参数","slug":"无参数","link":"#无参数","children":[]},{"level":3,"title":"带参数","slug":"带参数","link":"#带参数","children":[]},{"level":3,"title":"使用标志（flag）","slug":"使用标志-flag","link":"#使用标志-flag","children":[]}]}],"relativePath":"gh_repo_fork.md","lastUpdated":1675236702000}'),l={name:"gh_repo_fork.md"},p=n(`<h1 id="gh-repo-fork" tabindex="-1">gh repo fork <a class="header-anchor" href="#gh-repo-fork" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh repo fork [&lt;repository&gt;] [-- &lt;gitflags&gt;...] [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>创建仓库的复刻（fork）。</p><p>在没有参数的情况下，创建当前仓库的复刻。否则，复刻指定的仓库。</p><p>默认情况下，新的 fork 被设置为您的“origin”远程仓库，任何现有的 origin 远程仓库都被重命名为“upstream”。要改变这种行为，可以使用 <code>--remote-name</code> 为新复刻的远程仓库设置一个名称。</p><p>可以在 <code>--</code> 之后传递其他 git 克隆标志。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>--clone</code></p><p>克隆复刻</p><p><code>--fork-name &lt;string&gt;</code></p><p>重命名复刻仓库</p><p><code>--org &lt;string&gt;</code></p><p>在组织中创建复刻</p><p><code>--remote</code></p><p>为复刻添加一个 git 远程</p><p><code>--remote-name &lt;string&gt;</code></p><p>指定新远程仓库的名称</p><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_repo.html">gh repo</a></li></ul><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-hidden="true">#</a></h2><h3 id="无参数" tabindex="-1">无参数 <a class="header-anchor" href="#无参数" aria-hidden="true">#</a></h3><p>在 git 仓库中，在没有任何参数的情况下，我们将在 GitHub 上为当前目录自动创建一个 fork。然后它将提示您是否要设置上游远程仓库。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 为当前仓库创建一个复刻</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/cli$ gh repo fork</span></span>
<span class="line"><span style="color:#A6ACCD;">- Forking cli/cli...</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Created fork user/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">? Would you like to add a remote for the fork? Yes</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Renamed origin remote to upstream</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Added remote origin</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/cli$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="带参数" tabindex="-1">带参数 <a class="header-anchor" href="#带参数" aria-hidden="true">#</a></h3><p>如果您以 OWNER/REPO 格式传递仓库，“gh”将在您的帐户上自动在 GitHub 上创建一个复刻，并询问您是否要克隆它。这在 git 仓库内部或外部都有效。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 为另一个仓库创建复刻。</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects$ gh repo fork cli/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">- Forking cli/cli...</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Created fork cli/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">? Would you like to clone the fork? Yes</span></span>
<span class="line"><span style="color:#A6ACCD;">Cloning into &#39;cli&#39;...</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Cloned fork</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects$ cd cli</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/cli$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="使用标志-flag" tabindex="-1">使用标志（flag） <a class="header-anchor" href="#使用标志-flag" aria-hidden="true">#</a></h3><p>使用标志跳过有关为复刻添加 git 远程仓库或有关在本地克隆复刻仓库的提示。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 使用标志跳过远程仓库提示</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/cli$ gh repo fork --remote=false</span></span>
<span class="line"><span style="color:#A6ACCD;">- Forking cli/cli...</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Created fork user/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects/cli$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 使用标志跳过克隆提示</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects$ gh repo fork cli/cli --clone=false</span></span>
<span class="line"><span style="color:#A6ACCD;">- Forking cli/cli...</span></span>
<span class="line"><span style="color:#A6ACCD;">✓ Created fork user/cli</span></span>
<span class="line"><span style="color:#A6ACCD;">~/Projects$</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,30),o=[p];function c(t,r,i,d,h,C){return e(),a("div",null,o)}const f=s(l,[["render",c]]);export{A as __pageData,f as default};