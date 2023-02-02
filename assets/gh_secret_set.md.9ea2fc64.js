import{_ as s,c as e,o as n,a}from"./app.888d8daa.js";const g=JSON.parse('{"title":"gh secret set","description":"","frontmatter":{},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[]},{"level":2,"title":"从父命令继承的选项","slug":"从父命令继承的选项","link":"#从父命令继承的选项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":2,"title":"另请参见","slug":"另请参见","link":"#另请参见","children":[]}],"relativePath":"gh_secret_set.md","lastUpdated":1675236702000}'),l={name:"gh_secret_set.md"},t=a(`<h1 id="gh-secret-set" tabindex="-1">gh secret set <a class="header-anchor" href="#gh-secret-set" aria-hidden="true">#</a></h1><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">gh secret set &lt;secret-name&gt; [flags]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>给以下级别之一的 secret 设置一个值：</p><ul><li>仓库（默认）：可用于仓库中的 Actions run 或 Dependabot</li><li>环境：可用于为仓库中的部署环境的 Actions run</li><li>组织：可用于组织内的 Actions run、Dependabot 或代码空间</li><li>用户：可用于用户的代码空间</li></ul><p>可以选择将组织和用户 secret 限制为仅对特定仓库可用。 secret 值在发送到 GitHub 之前进行了本地加密。</p><h2 id="选项" tabindex="-1">选项 <a class="header-anchor" href="#选项" aria-hidden="true">#</a></h2><p><code>-a</code>, <code>--app &lt;string&gt;</code></p><p>为 secret 设置应用程序：{actions|codespaces|dependabot}</p><p><code>-b</code>, <code>--body &lt;string&gt;</code></p><p>secret 的值（如果未指定，则从标准输入读取）</p><p><code>-e</code>, <code>--env &lt;environment&gt;</code></p><p>设置部署环境 secret</p><p><code>-f</code>, <code>--env-file &lt;file&gt;</code></p><p>从 dotenv-formatted 文件加载 secret 名称和值</p><p><code>--no-store</code></p><p>打印加密的 base64 编码值，而不是将其存储在 Github 上</p><p><code>-o</code>, <code>--org &lt;organization&gt;</code></p><p>设置组织 secret</p><p><code>-r</code>, <code>--repos &lt;repositories&gt;</code></p><p>可以访问组织或用户 secret 的仓库列表</p><p><code>-u</code>, <code>--user</code></p><p>为用户设置 secret</p><p><code>-v</code>, <code>--visibility &lt;string&gt;</code></p><p>设置组织 secret 的可见性：{all|private|selected}</p><h2 id="从父命令继承的选项" tabindex="-1">从父命令继承的选项 <a class="header-anchor" href="#从父命令继承的选项" aria-hidden="true">#</a></h2><p><code>-R</code>, <code>--repo &lt;[HOST/]OWNER/REPO&gt;</code></p><p>使用 [HOST/]OWNER/REPO 格式选择另一个仓库</p><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 在交互式提示中粘贴当前仓库的 secret 值</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 从环境变量读取 secret 值</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --body &quot;$ENV_VALUE&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 从文件中读取 secret 值</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET &lt; myfile.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 为当前仓库中的部署环境设置 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --env myenvironment</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置对公共和私有仓库都可见的组织级 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --org myOrg --visibility all</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置对特定仓库可见的组织级 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --org myOrg --repos repo1,repo2,repo3</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 为代码空间设置用户级 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --user</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 为 Dependabot 设置仓库级 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set MYSECRET --app dependabot</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"># 设置从“.env”文件导入的多个 secret</span></span>
<span class="line"><span style="color:#A6ACCD;">$ gh secret set -f .env</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="另请参见" tabindex="-1">另请参见 <a class="header-anchor" href="#另请参见" aria-hidden="true">#</a></h2><ul><li><a href="/github-cli-manual-zh/gh_secret.html">gh secret</a></li></ul>`,31),p=[t];function c(o,r,i,d,C,h){return n(),e("div",null,p)}const y=s(l,[["render",c]]);export{g as __pageData,y as default};
