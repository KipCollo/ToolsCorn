# GitHub

GitHub is more than just a platform for hosting and sharing code. It has become the beating heart of the open source community, with millions of developers from all over the world collaborating on projects of every type and size. Founded in 2008, GitHub has since grown to host over 200 million repositories and 100 million users, with a staggering 3.5 billion contributions made in the last year alone.

At the core of GitHub lies the essential component of version control - Git.
GitHub has extended beyond its function as a hosting platform for Git and has evolved into a comprehensive DevOps platform that supports collaborative coding through aynchronous means,such as pull requests and issues.
The platform's capabilities have expanded into six broad categories:-

1. Collaborative coding.
2. Planning and tracking.
3. Workflows and CI/CD.
4. Developer productivity.
5. Client applications.
6. Security:- Developers can use GitHub as an identity provider to access their applications.

These categories encapsulate the key features GitHub offers, making it a versatile and comprehensive DevOps platform that supports various stages of software development.

GitHub ecosystem:-

1. `Planning and tracking` — In addition to issues and milestones, GitHub offers **GitHub Discussions**, a forum dedicated to collaboration on ideas. Furthermore,
**GitHub Projects** is a flexible planning solution that is fully integrated with issues and pull requests, which supports nested backlogs, boards, and road maps. Additionally, GitHub integrates seamlessly with other popular planning and tracking solutions, such as Azure Boards and Jira.
2. `Client applications`—GitHub provides a fully featured code editor that can be accessed directly in the browser. It also offers mobile applications for both iOS
and Android platforms, enabling teams to collaborate from anywhere. Additionally, a cross-platform desktop application and an extensible command line interface (CLI) are available. GitHub also integrates smoothly with popular client applications, such as Visual Studio, Visual Studio Code, and Eclipse. Moreover, it
seamlessly integrates with popular chat platforms, such as Slack and Teams.
3. `Security`—GitHub provides a comprehensive solution for ensuring software supply-chain security, which includes several key features. For example, it
generates software bills of material (SBoMs) to keep track of all the components included in your software. And with its Dependabot functionality, GitHub can
alert you whenever vulnerabilities are detected in any of the dependencies,you’re using. Furthermore, GitHub can scan your repository to detect secrets,
and it boasts a sophisticated code analysis engine called CodeQL. The platform also supports integrations with other security tools, like Snyk, Veracode, and
Checkmarx, and it can be integrated into Microsoft Defender for DevOps.
4. `Developer productivity`—In GitHub, developers can quickly create a customized,containerized development environment using GitHub Codespaces. This allows
new developers to be productive right away. Additionally, Copilot, an AI-powered assistant, can generate code based on the context of comments or other code.
This can significantly increase productivity, with reports of up to 50% gains.GitHub also offers code search, a command palette, and other features that can
further enhance developer productivity.
5. `Workflows and CI/CD`—In the world of continuous integration and continuous delivery (CI/CD), GitHub is a popular platform with widespread support from
most CI/CD tools on the market. Furthermore, GitHub provides a secure integration with all the major cloud providers for CI/CD workflows using Open ID
Connect (OIDC). This ensures a secure and streamlined experience for developers who rely on cloud-based services. Additionally, GitHub Packages is equipped
with a robust package registry that supports a wide range of package formats,providing a powerful and versatile tool for developers to manage and distribute
their code packages.


## GitHub  Hosting

GitHub is hosted in data centers located in the United States. Signing up for GitHub is free and provides users with unlimited private and public repositories. While many features on GitHub are available for free on open source projects, they may not be available for private repositories. Enterprises have a variety of options for hosting GitHub

`GitHub Enterprise Cloud`- GitHub Enterprise Cloud (GHEC) is a software as a service (SaaS) offering from GitHub,and it is fully hosted on its cloud infrastructure in the United States. GHEC provides additional security features and supports single sign-on for users. With GHCE, users can host private and public repositories, including open source projects within their enterprise environment. GHEC guarantees a monthly uptime service-level agreement (SLA) of 99.9%, which translates to a maximum downtime of 45 minutes per month.

`GitHub Enterprise Server` - The GitHub Enterprise Server (GHES) is a system that can be hosted anywhere, either in a private data center or in a cloud environment like Azure, AWS, or GCP. Using GitHub Connect, it is possible to connect to GitHub.com, which enables the sharing of licenses and the use of open source on the server.
GHES is based on the same source as GHEC, which means all features eventually, usually within a few months, become available on the server. However, some features
provided in the cloud must be managed independently on GHES. For instance, runners in GitHub Actions require self-hosted solutions, whereas the cloud provides
GitHub-hosted runners.
Managed services that provide hosting for GHES are also available, including in an Azure data center within the user’s region. This approach ensures full data residency and eliminates the need to manage the servers personally. Some managed services also include hosting for managed GitHub Actions runners.


## GitHub pricing

GitHub’s pricing model is based on a monthly per-user billing system and consists of three tiers: Free, Team, and Enterprise.

- `Free`- $ 0 per user/month :- 
   1. Unlimited public and private repositories
   2. Public repositories:-
      - Actions free
      - Packages free
   3. Private repositories:
      - 2,000 GitHub Actions minutes
      - 500 MB Package storage
   4. Dependency graph
   5. Dependabot
- `Team`:- $ 4 per user/month:-
   1. 3,000 GitHub Actions minutes
   2. 2GB Package storage
   3. Access Codespaces
   4. Proteceted branches
   5. CODEOWNERS
   6. Advanced pull request features.
`Enterprise`:- $21 per user/month:-
   1. 50,000 GitHub Actions minutes
   2. 50GB Package storage
   3. Server and cloud
   4. GitHub connect
   5. Single sign-on(SAML,LDAP)
   6. IP allow list.
   7. Enterprised Managed Users.
   8. SCIM
   9. Auditing/Policies


Public repositories, and therefore open source projects, are entirely free of charge and offer many features, such as Actions, Packages, and various security features. Private repositories are also free but with limited functionality, including 2,000 Action minutes and 500 MB of storage per month.

A team license is required to collaborate on private repositories with advanced features, such as protected branches, CODEOWNERS, and enhanced pull request fea-
tures. This license also includes access to Codespaces, although this feature requires a separate payment. Additionally, the team tier provides 3,000 free Action minutes per month and 2 GB of monthly storage for packages.

Free and Team tiers are only available on GitHub.com. If users require GitHub Enterprise Cloud or Server, the GitHub enterprise license must be purchased. This license
includes all enterprise features, such as single sign-on, user management, auditing, and policies, along with 50,000 Actions minutes and 50 GB of storage for packages per month. It also allows for the purchase of additional add-ons, such as GitHub Advanced Security and premium support.


