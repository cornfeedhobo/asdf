import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.01af844e.js";const g=JSON.parse('{"title":"asdf","description":"","frontmatter":{},"headers":[],"relativePath":"zh-hans/contribute/core.md","filePath":"zh-hans/contribute/core.md","lastUpdated":1687069487000}'),l={name:"zh-hans/contribute/core.md"},o=n(`<h1 id="asdf" tabindex="-1">asdf <a class="header-anchor" href="#asdf" aria-label="Permalink to &quot;asdf&quot;">​</a></h1><p><code>asdf</code> 核心贡献指南.</p><h2 id="初始化安装" tabindex="-1">初始化安装 <a class="header-anchor" href="#初始化安装" aria-label="Permalink to &quot;初始化安装&quot;">​</a></h2><p>在 Github 上 fork <code>asdf</code> 并且/或者使用 Git 克隆默认分支：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 克隆你 fork 的 asdf</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/</span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">GITHUB_USE</span><span style="color:#E1E4E8;">R</span><span style="color:#F97583;">&gt;</span><span style="color:#9ECBFF;">/asdf.git</span></span>
<span class="line"><span style="color:#6A737D;"># 或者直接克隆 asdf</span></span>
<span class="line"><span style="color:#B392F0;">git</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">clone</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/asdf-vm/asdf.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 克隆你 fork 的 asdf</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/</span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">GITHUB_USE</span><span style="color:#24292E;">R</span><span style="color:#D73A49;">&gt;</span><span style="color:#032F62;">/asdf.git</span></span>
<span class="line"><span style="color:#6A737D;"># 或者直接克隆 asdf</span></span>
<span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">clone</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/asdf-vm/asdf.git</span></span></code></pre></div><p>核心开发所需的工具都列举在这个存储库的 <code>.tool-versions</code> 文件中。如果你想要使用 <code>asdf</code> 自身来管理它，请使用以下命令添加这些插件：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">bats</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shellcheck</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">plugin</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">add</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">shfmt</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">https://github.com/luizm/asdf-shfmt.git</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">bats</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/timgluz/asdf-bats.git</span></span>
<span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shellcheck</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/luizm/asdf-shellcheck.git</span></span>
<span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">plugin</span><span style="color:#24292E;"> </span><span style="color:#032F62;">add</span><span style="color:#24292E;"> </span><span style="color:#032F62;">shfmt</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://github.com/luizm/asdf-shfmt.git</span></span></code></pre></div><p>使用以下命令安装这些版本来开发 <code>asdf</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">asdf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">asdf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span></code></pre></div><p>在本地机器的开发过程中不使用 <code>asdf</code> 来管理工具 <em>或许</em> 对你有帮助，因为你可能需要打破某些可能会影响到你的开发工具链的功能。以下是所需工具的原始列表：</p><ul><li><a href="https://github.com/bats-core/bats-core" target="_blank" rel="noreferrer">bats-core</a>：Bash 自动化测试系统，用于单元测试 Bash 或 POSIX 兼容脚本。</li><li><a href="https://github.com/koalaman/shellcheck" target="_blank" rel="noreferrer">shellcheck</a>：Shell 脚本的静态分析工具。</li><li><a href="https://github.com/mvdan/sh" target="_blank" rel="noreferrer">shfmt</a>：支持 Bash 的 Shell 解析器、格式化器和解释器；包含 shfmt。</li></ul><h2 id="开发" tabindex="-1">开发 <a class="header-anchor" href="#开发" aria-label="Permalink to &quot;开发&quot;">​</a></h2><p>如果你想要在不更改已安装的 <code>asdf</code> 的情况下尝试应用你的更改，可以将 <code>$ASDF_DIR</code> 变量设置为克隆存储库的路径，并临时将目录的 <code>bin</code> 和 <code>shims</code> 目录添加到你的路径中。</p><p>最好在提交或推送到远程之前，在本地做好格式化、lint 检查和测试你的代码。可以使用以下脚本/命令：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 脚本检查</span></span>
<span class="line"><span style="color:#B392F0;">./scripts/shellcheck.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 格式化</span></span>
<span class="line"><span style="color:#B392F0;">./scripts/shfmt.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试：所有案例</span></span>
<span class="line"><span style="color:#B392F0;">bats</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test/</span></span>
<span class="line"><span style="color:#6A737D;"># 测试：特定命令</span></span>
<span class="line"><span style="color:#B392F0;">bats</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">test/list_commands.bash</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 脚本检查</span></span>
<span class="line"><span style="color:#6F42C1;">./scripts/shellcheck.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 格式化</span></span>
<span class="line"><span style="color:#6F42C1;">./scripts/shfmt.bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 测试：所有案例</span></span>
<span class="line"><span style="color:#6F42C1;">bats</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test/</span></span>
<span class="line"><span style="color:#6A737D;"># 测试：特定命令</span></span>
<span class="line"><span style="color:#6F42C1;">bats</span><span style="color:#24292E;"> </span><span style="color:#032F62;">test/list_commands.bash</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">提示</p><p><strong>增加测试！</strong> - 新特性需要进行测试，并加快错误修复的审查速度。请在创建拉取请求之前覆盖新的代码路径。查看 <a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-core 文档</a> 了解更多。</p></div><h2 id="bats-测试" tabindex="-1">Bats 测试 <a class="header-anchor" href="#bats-测试" aria-label="Permalink to &quot;Bats 测试&quot;">​</a></h2><p><strong>强烈建议</strong>在编写测试之前检查现有的测试套件和 <a href="https://bats-core.readthedocs.io/en/stable/index.html" target="_blank" rel="noreferrer">bats-core 文档</a>。</p><p>Bats 调试有时可能很困难。使用带有 <code>-t</code> 标识的 TAP 输出将使你能够在测试执行期间打印带有特殊文件描述符 <code>&gt;&amp;3</code> 的输出，从而简化调试。例如：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;">printf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;%s\\n&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">printf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;%s\\n&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&gt;&amp;3</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># test/some_tests.bats</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;">printf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;%s\\n&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Will not be printed during bats test/some_tests.bats&quot;</span></span>
<span class="line"><span style="color:#005CC5;">printf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;%s\\n&quot;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;Will be printed during bats -t test/some_tests.bats&quot;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&gt;&amp;3</span></span></code></pre></div><p>进一步相关文档请查看 bats-core 的 <a href="https://bats-core.readthedocs.io/en/stable/writing-tests.html#printing-to-the-terminal" target="_blank" rel="noreferrer">Printing to the Terminal</a> 部分.</p><h2 id="拉取请求、发布以及约定式提交" tabindex="-1">拉取请求、发布以及约定式提交 <a class="header-anchor" href="#拉取请求、发布以及约定式提交" aria-label="Permalink to &quot;拉取请求、发布以及约定式提交&quot;">​</a></h2><p><code>asdf</code> 正在使用一个名为 <a href="https://github.com/googleapis/release-please" target="_blank" rel="noreferrer">Release Please</a> 的自动发布工具来自动碰撞 <a href="https://semver.org/" target="_blank" rel="noreferrer">SemVer</a> 版本并生成 <a href="https://github.com/asdf-vm/asdf/blob/master/CHANGELOG.md" target="_blank" rel="noreferrer">变更日志</a>。这个信息是通过读取自上次发布以来的提交历史记录来确定的。</p><p><a href="https://www.conventionalcommits.org/zh-hans/" target="_blank" rel="noreferrer">约定式提交</a> 定义了拉取请求标题的格式，该标题成为默认分支上的提交消息格式。这是通过 Github Action <a href="https://github.com/amannn/action-semantic-pull-request" target="_blank" rel="noreferrer"><code>amannn/action-semantic-pull-request</code></a> 强制执行的。</p><p>约定式提交遵循以下格式：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;!-- 例子 --&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">fix: some fix</span></span>
<span class="line"><span style="color:#e1e4e8;">feat: a new feature</span></span>
<span class="line"><span style="color:#e1e4e8;">docs: some documentation update</span></span>
<span class="line"><span style="color:#e1e4e8;">docs(website): some change for the website</span></span>
<span class="line"><span style="color:#e1e4e8;">feat!: feature with breaking change</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;type&gt;[optional scope][optional !]: &lt;description&gt;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">&lt;!-- 例子 --&gt;</span></span>
<span class="line"><span style="color:#24292e;">fix: some fix</span></span>
<span class="line"><span style="color:#24292e;">feat: a new feature</span></span>
<span class="line"><span style="color:#24292e;">docs: some documentation update</span></span>
<span class="line"><span style="color:#24292e;">docs(website): some change for the website</span></span>
<span class="line"><span style="color:#24292e;">feat!: feature with breaking change</span></span></code></pre></div><p><code>&lt;types&gt;</code> 的所有类型包含： <code>feat</code>、<code>fix</code>、<code>docs</code>、<code>style</code>、<code>refactor</code>、<code>perf</code>、<code>test</code>、<code>build</code>、<code>ci</code>、<code>chore</code>、<code>revert</code>。</p><ul><li><code>!</code>：表示重大更改</li><li><code>fix</code>：将会创建一个新的 SemVer <code>patch</code> 补丁</li><li><code>feat</code>：将会创建一个新的 SemVer <code>minor</code> 小版本</li><li><code>&lt;type&gt;!</code>：将会创建一个新的 SemVer <code>major</code> 大版本</li></ul><p>拉取请求标题必须遵循这种格式。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>请使用约定式提交信息格式作为拉取请求标题。</p></div><h2 id="docker-镜像" tabindex="-1">Docker 镜像 <a class="header-anchor" href="#docker-镜像" aria-label="Permalink to &quot;Docker 镜像&quot;">​</a></h2><p><a href="https://github.com/vic/asdf-alpine" target="_blank" rel="noreferrer">asdf-alpine</a> 和 <a href="https://github.com/vic/asdf-ubuntu" target="_blank" rel="noreferrer">asdf-ubuntu</a> 项目正在努力提供一些 asdf 工具的容器化镜像。你可以使用这些容器镜像作为开发服务器的基础镜像，或者运行生产应用。</p>`,32),p=[o];function t(c,r,i,d,h,y){return a(),e("div",null,p)}const E=s(l,[["render",t]]);export{g as __pageData,E as default};
