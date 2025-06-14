# GitHub Actions

GitHub Actions is a CI/CD tool integrated within GitHub. It allows you to create custom workflows to build, test, and deploy code directly from your GitHub repository.
GitHub actions make it easy to automate all your software workflows.
With GitHub Actions, you can create and set up workflows in your repository to build, test, and deploy your code to Azure. This webinar training series is for teams looking to build end-to-end continuous integration (CI) and continuous deployment (CD) capabilities directly in their GitHub repositories.

Workflows are defined as YAML files inside your repository.

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
