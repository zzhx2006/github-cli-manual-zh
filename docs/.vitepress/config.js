import Sitemap from 'vite-plugin-sitemap'

export default {
    lang: 'zh-CN',
    title: 'GitHub CLI 中文手册',
    description: 'GitHub CLI 中文手册',
    base: "/github-cli-manual-zh/",
    lastUpdated: true,
    plugins: [
        Sitemap(),
    ],
    themeConfig: {
        nav: [
            { text: '首页', link: '/index' },
            { text: 'GitHub CLI', link: 'https://cli.github.com/' }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/ZhangZhanhaoxiang/github-cli-manual-zh' },
            { icon: 'twitter', link: 'https://twitter.com/ZH2219658023' }
        ],
        outlineTitle: '这一页',
        lastUpdatedText: '最后更新',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: 'https://github.com/ZhangZhanhaoxiang/github-cli-manual-zh/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页'
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2024 Zhang Zhanhaoxiang'
        },
        sidebar: [
            { text: "gh", link: "/gh" },
            {
                text: "alias",
                link: "/gh_alias",
                collapsed: false,
                items: [
                    { text: "alias delete", link: "/gh_alias_delete" },
                    { text: "alias list", link: "/gh_alias_list" },
                    { text: "alias set", link: "/gh_alias_set" },
                ]
            },
            { text: "api", link: "/gh_api" },
            {
                text: "auth",
                link: "/gh_auth",
                collapsed: false,
                items: [
                    { text: "auth login", link: "/gh_auth_login" },
                    { text: "auth logout", link: "/gh_auth_logout" },
                    { text: "auth refresh", link: "/gh_auth_refresh" },
                    { text: "auth setup-git", link: "/gh_auth_setup-git" },
                    { text: "auth status", link: "/gh_auth_status" },
                    { text: "auth token", link: "/gh_auth_token" },
                ]
            },
            { text: "browse", link: "/gh_browse" },
            {
                text: "codespace",
                link: "/gh_codespace",
                collapsed: false,
                items: [
                    { text: "codespace code", link: "/gh_codespace_code" },
                    { text: "codespace cp", link: "/gh_codespace_cp" },
                    { text: "codespace create", link: "/gh_codespace_create" },
                    { text: "codespace delete", link: "/gh_codespace_delete" },
                    { text: "codespace edit", link: "/gh_codespace_edit" },
                    { text: "codespace jupyter", link: "/gh_codespace_jupyter" },
                    { text: "codespace list", link: "/gh_codespace_list" },
                    { text: "codespace logs", link: "/gh_codespace_logs" },
                    { text: "codespace ports", link: "/gh_codespace_ports" },
                    { text: "codespace ports forward", link: "/gh_codespace_ports_forward" },
                    { text: "codespace ports visibility", link: "/gh_codespace_ports_visibility" },
                    { text: "codespace rebuild", link: "/gh_codespace_rebuild" },
                    { text: "codespace ssh", link: "/gh_codespace_ssh" },
                    { text: "codespace stop", link: "/gh_codespace_stop" },
                ]
            },
            { text: "completion", link: "/gh_completion" },
            {
                text: "config",
                link: "/gh_config",
                collapsed: false,
                items: [
                    { text: "config get", link: "/gh_config_get" },
                    { text: "config list", link: "/gh_config_list" },
                    { text: "config set", link: "/gh_config_set" },
                ]
            },
            {
                text: "extension",
                link: "/gh_extension",
                collapsed: false,
                items: [
                    { text: "extension browse", link: "/gh_extension_browse" },
                    { text: "extension create", link: "/gh_extension_create" },
                    { text: "extension exec", link: "/gh_extension_exec" },
                    { text: "extension install", link: "/gh_extension_install" },
                    { text: "extension list", link: "/gh_extension_list" },
                    { text: "extension remove", link: "/gh_extension_remove" },
                    { text: "extension search", link: "/gh_extension_search" },
                    { text: "extension upgrade", link: "/gh_extension_upgrade" },
                ]
            },
            {
                text: "gist",
                link: "/gh_gist",
                collapsed: false,
                items: [
                    { text: "gist clone", link: "/gh_gist_clone" },
                    { text: "gist create", link: "/gh_gist_create" },
                    { text: "gist delete", link: "/gh_gist_delete" },
                    { text: "gist edit", link: "/gh_gist_edit" },
                    { text: "gist list", link: "/gh_gist_list" },
                    { text: "gist view", link: "/gh_gist_view" },
                ]
            },
            {
                text: "gpg-key",
                link: "/gh_gpg-key",
                collapsed: false,
                items: [
                    { text: "gpg-key add", link: "/gh_gpg-key_add" },
                    { text: "gpg-key delete", link: "/gh_gpg-key_delete" },
                    { text: "gpg-key list", link: "/gh_gpg-key_list" },
                ]
            },
            {
                text: "help",
                link: "/gh_help",
                collapsed: false,
                items: [
                    { text: "help environment", link: "/gh_help_environment" },
                    { text: "help exit-codes", link: "/gh_help_exit-codes" },
                    { text: "help formatting", link: "/gh_help_formatting" },
                    { text: "help mintty", link: "/gh_help_mintty" },
                ]
            },
            {
                text: "issue",
                link: "/gh_issue",
                collapsed: false,
                items: [
                    { text: "issue close", link: "/gh_issue_close" },
                    { text: "issue comment", link: "/gh_issue_comment" },
                    { text: "issue create", link: "/gh_issue_create" },
                    { text: "issue delete", link: "/gh_issue_delete" },
                    { text: "issue develop", link: "/gh_issue_develop" },
                    { text: "issue edit", link: "/gh_issue_edit" },
                    { text: "issue list", link: "/gh_issue_list" },
                    { text: "issue lock", link: "/gh_issue_lock" },
                    { text: "issue pin", link: "/gh_issue_pin" },
                    { text: "issue reopen", link: "/gh_issue_reopen" },
                    { text: "issue status", link: "/gh_issue_status" },
                    { text: "issue transfer", link: "/gh_issue_transfer" },
                    { text: "issue unlock", link: "/gh_issue_unlock" },
                    { text: "issue unpin", link: "/gh_issue_unpin" },
                    { text: "issue view", link: "/gh_issue_view" },
                ]
            },
            {
                text: "label",
                link: "/gh_label",
                collapsed: false,
                items: [
                    { text: "label clone", link: "/gh_label_clone" },
                    { text: "label create", link: "/gh_label_create" },
                    { text: "label delete", link: "/gh_label_delete" },
                    { text: "label edit", link: "/gh_label_edit" },
                    { text: "label list", link: "/gh_label_list" },
                ]
            },
            {
                text: "pr",
                link: "/gh_pr",
                collapsed: false,
                items: [
                    { text: "pr checkout", link: "/gh_pr_checkout" },
                    { text: "pr checks", link: "/gh_pr_checks" },
                    { text: "pr close", link: "/gh_pr_close" },
                    { text: "pr comment", link: "/gh_pr_comment" },
                    { text: "pr create", link: "/gh_pr_create" },
                    { text: "pr diff", link: "/gh_pr_diff" },
                    { text: "pr edit", link: "/gh_pr_edit" },
                    { text: "pr list", link: "/gh_pr_list" },
                    { text: "pr lock", link: "/gh_pr_lock" },
                    { text: "pr merge", link: "/gh_pr_merge" },
                    { text: "pr ready", link: "/gh_pr_ready" },
                    { text: "pr reopen", link: "/gh_pr_reopen" },
                    { text: "pr review", link: "/gh_pr_review" },
                    { text: "pr status", link: "/gh_pr_status" },
                    { text: "pr unlock", link: "/gh_pr_unlock" },
                    { text: "pr view", link: "/gh_pr_view" },
                ]
            },
            {
                text: "release",
                link: "/gh_release",
                collapsed: false,
                items: [
                    { text: "release create", link: "/gh_release_create" },
                    { text: "release delete-asset", link: "/gh_release_delete-asset" },
                    { text: "release delete", link: "/gh_release_delete" },
                    { text: "release download", link: "/gh_release_download" },
                    { text: "release edit", link: "/gh_release_edit" },
                    { text: "release list", link: "/gh_release_list" },
                    { text: "release upload", link: "/gh_release_upload" },
                    { text: "release view", link: "/gh_release_view" },
                ]
            },
            {
                text: "repo",
                link: "/gh_repo",
                collapsed: false,
                items: [
                    { text: "repo archive", link: "/gh_repo_archive" },
                    { text: "repo clone", link: "/gh_repo_clone" },
                    { text: "repo create", link: "/gh_repo_create" },
                    { text: "repo delete", link: "/gh_repo_delete" },
                    { text: "repo deploy-key", link: "/gh_repo_deploy-key" },
                    { text: "repo deploy-key add", link: "/gh_repo_deploy-key_add" },
                    { text: "repo deploy-key delete", link: "/gh_repo_deploy-key_delete" },
                    { text: "repo deploy-key list", link: "/gh_repo_deploy-key_list" },
                    { text: "repo edit", link: "/gh_repo_edit" },
                    { text: "repo fork", link: "/gh_repo_fork" },
                    { text: "repo list", link: "/gh_repo_list" },
                    { text: "repo rename", link: "/gh_repo_rename" },
                    { text: "repo set-default", link: "/gh_repo_set-default" },
                    { text: "repo sync", link: "/gh_repo_sync" },
                    { text: "repo view", link: "/gh_repo_view" },
                ]
            },
            {
                text: "run",
                link: "/gh_run",
                collapsed: false,
                items: [
                    { text: "run cancel", link: "/gh_run_cancel" },
                    { text: "run download", link: "/gh_run_download" },
                    { text: "run list", link: "/gh_run_list" },
                    { text: "run rerun", link: "/gh_run_rerun" },
                    { text: "run view", link: "/gh_run_view" },
                    { text: "run watch", link: "/gh_run_watch" },
                ]
            },
            {
                text: "search",
                link: "/gh_search",
                collapsed: false,
                items: [
                    { text: "search commits", link: "/gh_search_commits" },
                    { text: "search issues", link: "/gh_search_issues" },
                    { text: "search prs", link: "/gh_search_prs" },
                    { text: "search repos", link: "/gh_search_repos" },
                    { text: "secret", link: "/gh_secret" },
                    { text: "secret delete", link: "/gh_secret_delete" },
                    { text: "secret list", link: "/gh_secret_list" },
                    { text: "secret set", link: "/gh_secret_set" },
                ]
            },
            {
                text: "ssh-key",
                link: "/gh_ssh-key",
                collapsed: false,
                items: [
                    { text: "ssh-key add", link: "/gh_ssh-key_add" },
                    { text: "ssh-key delete", link: "/gh_ssh-key_delete" },
                    { text: "ssh-key list", link: "/gh_ssh-key_list" },
                ]
            },
            { text: "status", link: "/gh_status", },
            {
                text: "workflow",
                link: "/gh_workflow",
                collapsed: false,
                items: [
                    { text: "workflow disable", link: "/gh_workflow_disable" },
                    { text: "workflow enable", link: "/gh_workflow_enable" },
                    { text: "workflow list", link: "/gh_workflow_list" },
                    { text: "workflow run", link: "/gh_workflow_run" },
                    { text: "workflow view", link: "/gh_workflow_view" }
                ]
            },

        ]
    }
}

