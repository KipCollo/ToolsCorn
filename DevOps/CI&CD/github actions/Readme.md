# GitHub Actions

GitHub is more than just a platform for hosting and sharing code. It has become the beating heart of the open source community, with millions of developers from all over the world collaborating on projects of every type and size. Founded in 2008, GitHub has since grown to host over 200 million repositories and 100 million users, with a staggering 3.5 billion contributions made in the last year alone.

GitHub Actions is a CI/CD tool integrated within GitHub. It allows you to create custom workflows to build, test, and deploy code directly from your GitHub repository.
GitHub actions make it easy to automate all your software workflows.

With GitHub Actions, you can create and set up workflows in your repository to build, test, and deploy your code to Azure. This webinar training series is for teams looking to build end-to-end continuous integration (CI) and continuous deployment (CD) capabilities directly in their GitHub repositories.

Workflows are defined as YAML files inside your repository.

The platform’s capabilities have expanded into six broad categories:

1. Collaborative coding
2. Planning and tracking
3. Workflows and CI/CD
4. Developer productivity
5. Client applications
6. Security

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

GitHub Actions serves as the automation engine for the GitHub ecosystem. It allows users to automate various tasks, with a vast library of over 18,000 actions
available in the marketplace. From issue triaging to automatic documentation generation, there is a building block—called Action—available to address nearly any task.
With GitHub Actions, users can easily and securely automate their workflows.

That’s why GitHub Actions is more than just CI/CD. It is an automation engine that can be used to automate any kind of manual tasks in engineering, and it is already used by millions of developers worldwide. It can be used to automate not only GitHub but the entire GitHub universe.


## GitHub Actions and workflows

GitHub Actions is both the name of the workflow engine and the name of an individual, reusable, and easily sharable workflow step within GitHub.
Workflows are composed of YAML files that are stored in a specific repository location (.github/workflows).


`Triggers` initiate the workflow,and one or more jobs are included in the workflow. `Jobs` are executed on a workflow runner, which can be a machine or container with an installed runner service. GitHub offers runners with Linux, macOS, and Windows operating systems in various machine sizes, but you can also host your own runners.
Jobs execute in parallel by default, but the needs property can be used to chain jobs together. This enables you to fan out your workflow and run multiple jobs in
parallel while waiting for all parallel jobs to complete before proceeding.

Environments in GitHub Actions provide a way to protect jobs by defining protection rules, such as manual approvals, wait timers, and protected secrets. With this, you
can create visual workflows that track, for example, your entire release pipeline, giving you complete control over your deployment process.


A `job` is composed of one or more steps that are executed sequentially. A step can take the form of a command line, script, or reusable step that is easily shareable, known as a GitHub Action. These actions can be authored in JavaScript or TypeScript and executed in a NodeJS environment. Additionally, it is possible to run containers as Actions or create composite Actions that serve as a wrapper for one or multiple other Actions.


```yaml
name: Build and publish package # Name of the workflow

on: # Events that trigger the workflow(with filters)
  release:
    types: [created]

jobs: # Jobs
  build:
    runs-on: ubuntu-latest # Runner that executes the job
    steps: # Steps
      - uses: actions/checkout@v3 # actions with input parameters
      - uses: actions/setup-node@v3
        with:
          node-version: 16

      - run: npm ci
      - run: npm test
      - run: npm publish # shell execution with secrets as environment variables
        env:
          NODE_AUTH_TOKEN: ${{secrets.npm_token}}
```


GitHub workflows are intended to automate various tasks. In addition to pushing code,there are numerous triggers available. A workflow can be activated when a label is
added to an issue, when a pull request is opened, or when a repository is starred.


```yaml
name: Issue triage

on:
  issues:
    types: [opened, edited]

  jobs:
    triage:
      runs-on: ubuntu-latest
      steps:
        - name: Label issue
          run: |
            if (contains(github.event.issue.body, 'bug')) {
              echo '::add-labels: bug';
            } else if (contains(github.event.issue.body, 'feature')) {
              echo '::add-labels: feature';
            } else {
              echo 'Labeling issue as needs-triage';
              echo '::add-labels: needs-triage';
            }
```

GitHub does not automatically download or clone your repository when a workflow is executed. In many automation scenarios, the repository’s code or files may not be
required, and the workflow can be completed much faster without cloning the repository. If you intend to utilize GitHub Actions for CI/CD purposes, the first step in a job should be to download the code by utilizing the Checkout action:

```yaml
steps:
- name: Checkout repository
uses: actions/checkout@v3
```

This action will clone your repository, allowing you to build and test your solution.








GitHub is hosted in data centers located in the United States. Signing up for GitHub is free and provides users with unlimited private and public repositories. While many features on GitHub are available for free on open source projects, they may not be available for private repositories. Enterprises have a variety of options for hosting GitHub



`GitHub Enterprise Cloud`- GitHub Enterprise Cloud (GHEC) is a software as a service (SaaS) offering from GitHub,and it is fully hosted on its cloud infrastructure in the United States. GHEC provides additional security features and supports single sign-on for users. With GHCE, users can host private and public repositories, including open source projects within their enterprise environment. GHEC guarantees a monthly uptime service-level agreement (SLA) of 99.9%, which translates to a maximum downtime of 45 minutes per month.



`GitHub Enterprise Server` - The GitHub Enterprise Server (GHES) is a system that can be hosted anywhere, either in a private data center or in a cloud environment like Azure, AWS, or GCP. Using GitHub Connect, it is possible to connect to GitHub.com, which enables the sharing of licenses and the use of open source on the server.
GHES is based on the same source as GHEC, which means all features eventually, usually within a few months, become available on the server. However, some features
provided in the cloud must be managed independently on GHES. For instance, runners in GitHub Actions require self-hosted solutions, whereas the cloud provides
GitHub-hosted runners.
Managed services that provide hosting for GHES are also available, including in an Azure data center within the user’s region. This approach ensures full data residency and eliminates the need to manage the servers personally. Some managed services also include hosting for managed GitHub Actions runners.



**GitHub pricing** - GitHub’s pricing model is based on a monthly per-user billing system and consists of three tiers: Free, Team, and Enterprise.

Public repositories, and therefore open source projects, are entirely free of charge and offer many features, such as Actions, Packages, and various security features. Private repositories are also free but with limited functionality, including 2,000 Action minutes and 500 MB of storage per month.

A team license is required to collaborate on private repositories with advanced features, such as protected branches, CODEOWNERS, and enhanced pull request fea-
tures. This license also includes access to Codespaces, although this feature requires a separate payment. Additionally, the team tier provides 3,000 free Action minutes per month and 2 GB of monthly storage for packages.

Free and Team tiers are only available on GitHub.com. If users require GitHub Enterprise Cloud or Server, the GitHub enterprise license must be purchased. This license
includes all enterprise features, such as single sign-on, user management, auditing, and policies, along with 50,000 Actions minutes and 50 GB of storage for packages per month. It also allows for the purchase of additional add-ons, such as GitHub Advanced Security and premium support.





**GitHub Actions pricing** - Hosted runners are provided for free to users with public repositories. The amount of storage and monthly build minutes available to users depends on their GitHub edition





## Creating a new workflow


Sign into your GitHub account.Navigate to repository you want to use workflows.
Navigate to the Actions tab inside the repository. If this is a new repository and there are no workflows set up yet, you will automatically be redirected to the new
Action page (Actions/New). This is the same page you would land on if you clicked the New Workflow button in the workflow overview page, which is displayed if there are workflows in the repository. The new workflow page presents a plethora of templates for different languages and scenarios.
The new workflow page presents a plethora of templates for different languages and scenarios.



`Using the workflow editor` - It’s worth noting that a workflow is essentially a YAML file inside the .github/workflows folder. You can modify the filename as necessary from the top of the editor window.
On the right side of the editor, you’ll find the marketplace as well as the workflow documentation. The documentation provides valuable guidance to get you started.
Moreover, the editor supports autocomplete when you use the Ctrl-Space keyboard shortcut.



`Running the workflow` - The workflow will start automatically because of the push trigger on the main branch.To observe the workflow run, navigate to the Actions tab
Within the workflow run overview page, you will come across a detail pane situated at the top, providing information about the trigger, status, and duration of the workflow. On the left-hand side, you will find a list displaying the jobs, while the workflow designer is located in the center



## Workflows


Workflows are written in YAML.

**Name** - The first element in a workflow file is typically the name of the workflow. The workflow can have a different name than the workflow file itself.The name is set using the name property:

```yaml
name:
  My workflow
```

The name property is typically followed by the triggers that start the workflow. You also might want to add a comment on top of the workflow to document what the workflow does.


**Events and triggers** - There are three categories of triggers:

1. Webhook triggers
2. Scheduled triggers
3. Manual triggers

All triggers follow the key on: in the workflow file.

`Webhook triggers` - Webhook triggers start the workflow based on an event in GitHub. This can be a git push to the repository:

```yml
on: push
```

It can also be a pull request in the repo:

```yaml
on: [push, pull_request]
```

Most webhook triggers can be configured to only start the workflow on certain conditions. You can, for example, start a workflow only when pushing to certain branches
or pushing when certain files in a path (paths) have been updated.




The workflow designer on the web can be very helpful when authoring GitHub Actions, but an even better experience is provided by the Visual Studio Code extension
for GitHub Actions.
The extension provides the following features:

1. Managing workflows and monitoring workflow runs
2. Manually triggering workflows
3. Syntax highlighting for workflows and expressions
4. Integrating documentation
5. Validating and completing code
6. Smart validation


The extension’s smart validation is an especially great help. It supports code completion for referenced actions and reusable workflows, and it parses parameters, inputs, and outputs for referenced actions and provides validation, code completion, and inline documentation. Together with GitHub Copilot, this increases quality and speed for authoring workflows tremendously.










































## Key Concepts in GitHub Actions

`Workflows:` - A workflow is an automated process defined by a YAML file. It runs one or more jobs.
Workflows can be triggered by events like code pushes, pull requests, or on a schedule.Location: .github/workflows/ directory.

`Events`: - Events are activities that trigger the workflow. Example events include push,pull_request, release, or scheduled cron jobs.

`Jobs`:- A job is a set of steps that run on the same runner.Jobs can run sequentially or in parallel.Each job runs on its own virtual machine (runner).

`Steps`:- Steps are individual tasks that make up a job. These steps can run commands, scripts, or actions.
You can either write your own commands or use existing pre-defined actions from the GitHub Actions marketplace.

`Runners`:- Runners are servers that run the jobs.GitHub provides free hosted runners, or you can use self-hosted runners.
Hosted runners come with predefined environments (e.g., Linux, Windows,macOS).




```yaml
name: 'Produce Presentation Content'
on:
  push:
    branches:
      - main
jobs:
  build-pptx:
    name: 'Build PowerPoint Presentation'
    runs-on: ubuntu-latest
    container:
      image: seesharprun/pandoc-build 
    steps:
      - name: 'Checkout Code'
        uses: actions/checkout@v2
      - name: 'Run Pandoc Builds'
        run: ls | grep '.md' | xargs basename -s '.md' | xargs -I % sh -c "pandoc %.md --standalone --slide-level=3 --reference-doc=../.production/template.pptx --variable=monofont:'Cascadia Code' --output %-v${{ github.run_number }}.pptx"
        working-directory: ./presentations
      - name: 'Upload Presentation Artifacts'
        uses: actions/upload-artifact@v2
        with:
          name: presentations
          path: ./presentations/*.pptx
  release-content:
    name: 'Create GitHub Release'
    runs-on: ubuntu-latest
    needs: [ build-pptx ]
    env:
      GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }} 
    steps:      
      - name: 'Download Presentation Artifacts'
        uses: actions/download-artifact@v2
        with:
          name: presentations
      - name: 'Create GitHub Release'
        uses: softprops/action-gh-release@v1
        with:
          files: ./**/*.pptx         
          tag_name: v${{ github.run_number }}
          name: Release V${{ github.run_number }}
```

