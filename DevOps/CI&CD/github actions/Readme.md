# GitHub Actions

GitHub is more than just a platform for hosting and sharing code. It has become the beating heart of the open source community, with millions of developers from all over the world collaborating on projects of every type and size. Founded in 2008, GitHub has since grown to host over 200 million repositories and 100 million users, with a staggering 3.5 billion contributions made in the last year alone.

`GitHub Actions` is a CI/CD tool integrated within GitHub. It allows you to create custom workflows to build, test, and deploy code directly from your GitHub repository.
GitHub actions make it easy to automate all your software workflows.Workflows are defined as YAML files inside your repository.

GitHub Actions serves as the automation engine for the GitHub ecosystem. It allows users to automate various tasks, with a vast library of over 18,000 actions
available in the marketplace. From issue triaging to automatic documentation generation, there is a building block—called Action—available to address nearly any task.
With GitHub Actions, users can easily and securely automate their workflows.
That’s why GitHub Actions is more than just CI/CD. It is an automation engine that can be used to automate any kind of manual tasks in engineering, and it is already used by millions of developers worldwide. It can be used to automate not only GitHub but the entire GitHub universe.


## GitHub Actions and workflows

- `GitHub Actions` is both the name of the workflow engine and the name of an individual, reusable, and easily sharable workflow step within GitHub.GitHub Actions is a workflow engine that allows you to automate all kinds of manual engineering tasks in the GitHub ecosystem beyond CI/CD.
- `Workflows` are composed of YAML files that are stored in a specific repository location (.github/workflows).

`Triggers` initiate the workflow,and one or more jobs are included in the workflow. Jobs are executed on a `workflow runner`, which can be a machine or container with an installed runner service. GitHub offers runners with Linux, macOS, and Windows operating systems in various machine sizes, but you can also host your own runners.
Jobs execute in parallel by default, but the needs property can be used to chain jobs together. This enables you to fan out your workflow and run multiple jobs in
parallel while waiting for all parallel jobs to complete before proceeding.
`Environments` in GitHub Actions provide a way to protect jobs by defining protection rules, such as manual approvals, wait timers, and protected secrets. With this, you
can create visual workflows that track, for example, your entire release pipeline, giving you complete control over your deployment process.

A `job` is composed of one or more steps that are executed sequentially. A step can take the form of a command line, script, or reusable step that is easily shareable, known as a `GitHub Action`. These actions can be authored in JavaScript or TypeScript and executed in a NodeJS environment. Additionally, it is possible to run containers as Actions or create composite Actions that serve as a wrapper for one or multiple other Actions.


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


GitHub workflows are intended to automate various tasks. In addition to pushing code,there are numerous triggers available. A workflow can be activated when a label is added to an issue, when a pull request is opened, or when a repository is starred.


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
required, and the workflow can be completed much faster without cloning the repository. 

If you intend to utilize GitHub Actions for CI/CD purposes, the first step in a job should be to download the code by utilizing the Checkout action:

```yaml
steps:
  - name: Checkout repository
    uses: actions/checkout@v3
```

This action will clone your repository, allowing you to build and test your solution.


## GitHub Actions pricing

Hosted runners are provided for free to users with public repositories. The amount of storage and monthly build minutes available to users depends on their GitHub edition.

Jobs running on Windows and macOS runners consume more build minutes than those running on Linux. Windows consumes build minutes at a 2× rate, and macOS consumes build minutes at a 10× rate, meaning that using 1,000 Windows minutes would use up 2,000 of the minutes included in your account while using 1,000 macOS minutes would use up 10000 minutes in your account. This is due to the higher cost of build minutes on these operating systems.

Users can pay for additional build minutes in addition to those included in their GitHub edition, with the following build minute costs for each operating system:
- Linux—$0.008
- macOS—$0.08
- Windows—$0.016

These prices are for the standard machines with two cores.The charges for extra storage are uniform for all runners, set at $0.25 per GB.
If you are a customer who is billed monthly, your account is subject to a default spending limit of $0 (USD), which restricts the use of extra storage or build minutes.
However, if you pay by invoice, your account is given an unrestricted spending limit by default.

If you set a spending limit above $0, any additional storage or minutes utilized beyond the included amounts in your account will be invoiced until the spending limit
is reached. After setting up a spending limit, enterprise administrators will receive an email notification when 75%, 90%, and 100% of the spending limit has been reached, in
addition to the default notifications for utilizing the same percentages of the included minutes in their monthly plan. You won’t incur any costs when using self-hosted runners since you provide your own computing resources.

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

With the inclusion of the `workflow_dispatch` trigger in your workflow, you have the ability to manually run the workflow. To initiate the workflow manually, return to
the Actions tab and select the workflow from the left-hand side.Once selected, you will encounter a Run Workflow menu that you can use to trigger the workflow. While the workflow is starting, go to the Workflow Overview page and the Job Details page to observe the workflow in real time.

## Workflows


- **Name** - The first element in a workflow file is typically the name of the workflow. The workflow can have a different name than the workflow file itself.The name is set using the name property:

```yaml
name:
  My workflow
```

The name property is typically followed by the triggers that start the workflow. You also might want to add a comment on top of the workflow to document what the workflow does.


- **Events and triggers** - There are three categories of triggers:-
  1. Webhook triggers.
  2. Scheduled triggers.
  3. Manual triggers.

All triggers follow the key **on:** in the workflow file.

`Webhook triggers` - Webhook triggers start the workflow based on an event in GitHub. This can be a git push to the repository:

```yml
on: push
on: [push, pull_request] # It can also be a pull request in the repo
```

Most webhook triggers can be configured to only start the workflow on certain conditions. You can, for example, start a workflow only when pushing to certain branches
or pushing when certain files in a path (paths) have been updated.
The following example will only trigger the workflow when files in the doc folder have changed, and the changes are pushed to the main branch or a branch starting with release/:

```yaml
on:
  push:
    branches:
      - 'main'
      - 'release/**'
    paths:
      - 'doc/**'
```

NOTE:- The * character is a special character in YAML, so you have to quote all strings that contain values with wildcards.

There are many webhook triggers available—for example, you could run a workflow on an issues event. Supported activity type filters are opened, edited, deleted,
transferred, pinned, unpinned, closed, reopened, assigned, unassigned, labeled,unlabeled, locked, unlocked, milestoned, and demilestoned. Any of these events
occurring in an issue will trigger the workflow to run.

You can also run a workflow when your repository is starred (watch); a branch_protection_rule is created, edited, or deleted; or when your repository visibility is
changed from private to public.

`Scheduled triggers`:- Schedule triggers allow you to start a workflow at a scheduled time—they use the same syntax as cron jobs. The syntax consists of five fields that represent the minute (0–59), hour (0–23), day of month (1–31), month (1–12 or JAN–DEC) and day of week (0–6 or SUN–SAT).

* - Any value.
, - Value list separator if you specify multiple value.
- - Range of values(from-to).
/ - Step values.

```yaml
on:
  schedule:
    # Runs at every 15th minute
    - cron: '*/15 * * * *'
    # Runs every hour from 9am to 5pm
    - cron: '0 9-17 * * *'
    # Runs every Friday at midnight
    - cron: '0 0 * * FRI'
    # Runs every quarter (00:00 on day 1 every 3rd month)
    - cron: '0 0 1 */3 *'
```

`Manual triggers`:- Manual triggers allow you to start a workflow manually. To do this using the GitHub UI or CLI, you can use the workflow_dispatch trigger:

```yaml
on: workflow_dispatch
```

The trigger always accepts one input: the branch the workflow runs on. The value defaults to the default branch of the repository, normally main.
You can also trigger the workflow using the GitHub CLI, either by name, ID, or file-name relative to .github/workflow:

```bash
gh workflow run WORKFLOW_FILENAME
```

The name of the workflow might contain blanks, which means you must quote it on the command line. The workflow ID can be obtained by running gh workflow list,
but the most practical approach is normally the name of the workflow file.

- **Workflow jobs and steps**:- The logic of the workflow is configured in the jobs section. Every job is executed on a runner. The runner can be self-hosted, or you can pick one from the cloud. There are different versions available in the cloud for all platforms. If you want to always use the latest version, you can use ubuntu-latest, windows-latest, or macos-latest.

Jobs are a YAML map—not a list—and they run in parallel by default. You can chain them in a sequence by having a job depend on the successful output of one or multiple other jobs, using the needs keyword.

```yaml
jobs:
  job_1:
    runs-on: ubuntu-latest
    steps:
      - run: "echo Job: ${{ github.job }}"

  job_2:
    runs-on: ubuntu-latest
    needs: job_1
    steps:
      - run: "echo Job: ${{ github.job }}"

  job_3:
    runs-on: ubuntu-latest
    needs: job_1
    steps:
      - run: "echo Job: ${{ github.job }}"

  job_4:
    runs-on: ubuntu-latest
    needs: [job_2, job_3]
    steps:
      - run: "echo Job: ${{ github.job }}"
```

- **Workflow steps**:- A job contains a sequence of steps, and each step can run a command. Steps are always executed one after the other:

```yaml
steps:
  - name: Install Dependencies
    run: npm install
  - run: npm run build
```

The name property is optional and defines how the step is displayed in the workflow log.
Literal blocks allow you to write multiline scripts in one workflow step. If you want the workflow to run in a different shell than the default shell, you can configure it together with other values, like the working-directory:

```yaml
- name: Clean install dependencies and build
  run: |
    npm install
    npm run build
  working-directory: ./temp
  shell: bash
```

- bash - Bash shell. The default shell on all non-Windows platforms with a fallback to sh. When specified on Windows,the bash shell included with Git is used.
- pwsh - PowerShell Core. Default on the Windows platform.
- python - The Python shell—allows you to run python scripts
- cmd - Windows only! The Windows command prompt.
- powershell - Windows only! The classic Windows PowerShell.

The default shell on non-Windows systems is bash with a fallback to sh. The default on windows is pwsh with a fallback to cmd.
You can also configure a custom shell with the with the syntax shell: command [options] {0}. The placeholder {0} will be replaced with the script you provide. Here
is an example for running a perl script:

```yaml
- run: print %ENV
  shell: perl {0}
```

`Using GitHub actions`:- Most of the time, you want to use reusable steps, called GitHub actions. You can reference an action using the uses keyword and the following syntax:

```yaml
{owner}/{repo}@{ref}
```

The {owner}/{repo} is the path to the actions repository in GitHub. If you have multiple actions in a repository, the syntax is the following:

```yml
{owner}/{repo}/{path}@{ref}
```

The reference {ref} is the version of the action. It is a Git reference to the point in time in the history of changes. The reference can be all kinds of valid Git references, including a tag, a branch, or an individual commit referenced by its SHA-1 value. The most common is using tags for explicit versioning with major and minor versions:-

- uses: actions/checkout@v3 - References a version using a tag
- uses: actions/checkout@v3.5.2
- uses: action/checkout@main - References the current head of a branch.
- uses: actions/checkout@8e5e7e5ab8b370d6c329ec480221332ada57f0ab - References a specific commit.

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

## GitHub Actions

- There are three different types of actions:
  1. Docker container actions
  2. JavaScript actions
  3. Composite actions

Docker container actions only run on Linux whereas JavaScript and composite actions can be used on any platforms.
All actions are defined by a file, action.yml (or action.yaml), which contains the metadata for the action. This file cannot be named differently, meaning an action must reside in its own repository or folder.

`Docker container actions`:- Docker container actions contain all their dependencies and are, therefore, very consistent. They allow you to develop your actions in any language—the only restriction is that it has to run on Linux. Docker container actions are slower then JavaScript actions because of the time required to retrieve or build the image and start the container.

Docker container actions can reference an image in a container registry, like Docker Hub or GitHub Packages. It can also build a Dockerfile at run time that you provide
with the action files. In this case, you specify Dockerfile as the image name.

You can pass inputs of the action to the container either by specifying them as arguments to the container or setting them as environment variables. The following listing
shows an example of an action.yml for a container action.

`JavaScript actions`:- JavaScript actions run directly on the runner and are executed in NodeJS. They are faster than Docker container actions, and they support all operating systems. Normally,two NodeJS versions are supported; older versions will be deprecated at some point.
This means you have to maintain your actions and update to newer versions from time to time. That is not necessary for Docker-container-based actions, as the container
holds all its dependencies.
JavaScript actions support TypeScript, as TypeScript compiles to normal JavaScript code. That’s why the best practice is to develop your actions in TypeScript, enabling
static typing, enhanced tooling, better readability and maintainability, and earlier error detection.

```yaml
name: 'Your name here'
description: 'Provide a description here'
author: 'Your name or organization here'
inputs:
  input_one:
    required: true
    description: 'input description here'
    default: 'default value if applicable'
runs:
  using: 'node16'
  main: 'dist/index.js'
```

`Composite actions`:- They are nothing more than a wrapper for other steps or actions. You can use them to bundle together multiple run commands and actions or to provide default values for other actions to the users in your organization.

Composite actions just have steps in the runs section of the action.yml file—like you would have in a normal workflow. You can access input arguments using the inputs
context and output parameters using the outputs of the step in the steps context. The following listing shows an example of a composite action and how you can process
inputs and outputs.



## Workflow runtime (Runners)

The runtime of GitHub actions is provided by services called `runners`.Runners are standalone instances that continuously ask GitHub if there is work for them to execute.
They provide the runtime for your job definitions:they will execute the steps defined in the job for you and provide information about the outcome back to GitHub as well as logs and any data uploaded to GitHub e.g artifacts,cache information.

`Targetting a runner`:-Job definitions have to specify a set of labels they want to use for the GitHub service to find a match when job is queued to be executed.
A job must target at least one runner label and can target multiple labels if needed.The GitHub-hosted runners have several default labels available to indicate,e.g operating system of runner.

```yml
job:
  example_job:
    runs_on: [ubuntu-latest,sql]
    steps:
      run: #what to run
```

GitHub will use the list of labels to find a runner that is online and ready to handle jobs.For a job to find a runner,all labels in the *runs_on* array need to match.

**GitHub-hosted runners**:- GitHub provides runners as a service.Thses are called `GitHub-hosted runners` and comes with certain compute power and preinstalled software, and they are maintained with latest security and operating system (OS) updates.There is no cost attached to using these runners.Depending on your plan,you will have a certain amount of action minutes included for free.
GitHub hosts runners to allow their users to get started using GitHub Actions quickly.That means that GitHub hosts the environments that execute the runner service and makes sure the OS is secured, continuously updated, and has the latest security updates installed. Any tool they provide on the environment also needs to be updated to the latest version and include new security fixes.


**Self-hosted runners**:- You can also install your own runners in your own environments,which are referred to as `self-hosted runners`.
Creating self-hosted runners gives you full control over their execution environment,like placing it inside of the company network or adding specific hardware or software capabilities,cost perspective since you do not need to pay for any action minutes for job that run on self-hosted runners.
Self-hosted runners can prove beneficial by allowing you to run a self-hosted runner inside of your company network, enabling the runtime to connect to a database service to run certain integration tests or deploy into your production environment, which cannot be accessed from outside the company perimeter.

`Setting up self-hosted runners`:- Self-hosted runners can be set up by installing the runner application and following the steps from the documentation for the OS that will be hosting the service.
The service itself is open source and can be found in the following repository: <https://github.com/actions/runner>. This repository also hosts the releases of the application. The application is based on the .NET core runtime and can be executed on a large number of operating systems and processor types, including x86, x64, and ARM processors as well as on Linux, Windows, and macOS.
To get started installing the runner, you will need to have an environment that is supported by the .NET core version.The .NET core does not need to be preinstalled; the runner is self-contained. It also includes the two most recent versions of the Node binaries it supports, as most of the public actions will need Node to execute. To run the checkout action, you will need to have a recent version of Git installed.

## CI/CD with GitHub Actions

## Continuous integration

Continuous integration (CI) is a DevOps practice, in which you regularly merge code changes into the central repository and run automated builds and tests to check the
correctness and quality of the code. CI aims to provide rapid feedback and identify and correct defects as soon as possible. CI relies on the source code version control
system to trigger builds and tests at every commit.

Types of CI

`Using a branching strategy: GitHub Flow`:- GitHub Flow is the advertised way of working when you use Git and deliver a software product the DevOps way. With GitHub Flow, you create a branch called feature/name- of-feature, and you commit your changes to that branch.


## Continuous Delivery

Continuous delivery (CD) is a DevOps practice in which we deploy our software to production fully automated.