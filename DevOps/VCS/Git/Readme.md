# Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git’s purpose is to keep track of projects and files as they change over time with manipulations happening from different users. Git stores information about the project’s progress on a repository. A repository has commits to the project or a set of references to the commits called heads. All this information is stored in the same folder as the project in a sub-folder called .git and will mostly be hidden by default in most systems.

So basically. Git keeps track of the changes a couple of people make on a single project and then merges the code where people have worked on different parts into one project.This way, when someone introduces a bug, you can track down the code that introduced the bug by going through the commits. Commits must be made to a project to tell git that you’re satisfied with the changes you’ve made and want to commit the changes into the main branch called master by default.

You can then upload the code to GitHub,Gitlab or BitBucket where authorised users can either view, pull the code or push changes.

Git is basically used for:-

1. Version control- Git can be used for tracking changes in any set of files
2. Collaboration - Can be used when sharing the code btwn devs and collaborate bwtn devs.
3. Open source - Git has concept of branching which helps in collaboration of open source.

LOCAL FOLDER-------->STAGING AREA------->LOCAL REPOSITORY(.git)

## Git cheatsheet

Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

As a coder, at some point in time, you will need Git, and once you start using it, you won't stop, even though it could get frustrating at times. So here is a cheat sheet you can use when you are revisiting Git after a long time, or want to learn more applications of Git, or if you need to time travel and get your older code back.

Before we dive in, let me explain the structure of Git so that you can understand the commands better.

[Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories): They are a collection of files of various versions of a Project.

[Remote repository](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories): The current repo that is stored remotely/online. So the repos we see on Github or Gitlab website are the remote repos for those projects. They contain the changes made and pushed by everyone.

[Local repository](https://stackoverflow.com/questions/13072111/gits-local-repository-and-remote-repository-confusing-concepts): The current repo that is stored on your local device. It contains the changes made by you and can also include the changes present on the remote repo.

[Commits](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/about-commits): They essentially represent versions of a codebase. Each commit contains changes concerning the last state of the repo.

[Branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches): A branch represents an independent line of development. When we create a branch, we sort of create a brand new working directory, staging area, and project history. New commits are recorded in the history of the current branch then.

## Configurations

Based on scopes:

  1. Global- **~.gitconfig**, or **C:\users\[user\.gitconfig]**
  2. Local:- For specific repo **.git/config**.It overrides global configurations

* git config

Let's start with setting up our environment for Git.The mandatory configuration is name and email associated with your git.

To check the configurations list that is default use the command:

```bash
git config --list #list the configurations
git config --global user.name "KipCollo"
git config --global user.email "kipkosgei.tech@gmail.com"
```

## Set up SSH

If you are using Windows open Git Bash. If you are using Mac or Linux open your Terminal.

Before you generate an SSH key, you can check to see if you have any existing SSH keys.
List the contents of your ~/.ssh directory:

```bash
ls -al ~/.ssh
# Lists all the files in your ~/.ssh directory
```

Check the directory listing to see if you already have a public SSH key. By default the ﬁlenames of the public keys
are one of the following:

```bash
id_dsa.pub
id_ecdsa.pub
id_ed25519.pub
id_rsa.pub
```

If you see an existing public and private key pair listed that you would like to use on your Bitbucket, GitHub (or similar) account you can copy the contents of the id_*.pub ﬁle.

If not, you can create a new public and private key pair with the following command:

```bash
ssh-keygen
```

Press the Enter or Return key to accept the default location. Enter and re-enter a passphrase when prompted, or leave it empty.

Ensure your SSH key is added to the ssh-agent. Start the ssh-agent in the background if it's not already running:

```bash
eval "$(ssh-agent -s)"
```

Add you SSH key to the ssh-agent. Notice that you'll need te replace id_rsa in the command with the name of your private key ﬁle:

```bash
ssh-add ~/.ssh/id_rsa
```

If you want to change the upstream of an existing repository from HTTPS to SSH you can run the following command:

```bash
git remote set-url origin ssh://git@bitbucket.server.com:7999/projects/your_project.git
```

In order to clone a new repository over SSH you can run the following command:

```bash
git clone ssh://git@bitbucket.server.com:7999/projects/your_project.git
```

* Initialize Git:- To create a new repo, you'll use the git init command. git init is a one-time command you use during the initial setup of a new repo.
Executing this command will create a new .git subdirectory in your current working directory.The command actually creates a .git hidden folder inside your folder. This folder signifies that it is a git repo and stores the metadata required by Git.

```bash
# Run the following command inside the folder
git init
# Run the following command to create a new directory that is a git repo
git init DIRECTORY_PATH/DIRECTORY_NAME
```

Once, the repository is initialized git tracks the changes in the files and folders of the project.

* git status

The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

```bash
$ git status 
# a sample output of this command is as follows
On branch master
Your branch is ahead of 'origin/master' by 1 commit.
  (use "git push" to publish your local commits)

Untracked files:
  (use "git add <file>..." to include in what will be committed)

README.txt
lab1
```

## Browsing the History

* git log

After performing multiple commits, we will actually want to look at how the code has evolved. As we will learn ahead, there are also chances that many people make commits to their branch and at some point might want to merge their branch with a different branch. All such actions that have been done in our repo can be accessed using the git log command

```bash
$ git log --graph --oneline --decorate
# a sample output
*   0e25143 (HEAD, main) Merge branch 'feature'
|\  
| * 16b36c6 Fix a bug in the new feature
| * 23ad9ad Start a new feature
* | ad8621a Fix a critical security issue
|/  
* 400e4b7 Fix typos in the documentation
* 160e224 Add the initial code base
```

* git revert

git revert can be described as the undo button, but a smart one. It doesn't just go back in time but brings the past changes into the next commit so that the unwanted changes are still a part of the version history.
For git revert, we will need the commit codes that we saw earlier in the log.

```bash
$ git log --oneline
86bb32e prepend content to demo file
3602d88 add new content to demo file
299b15f initial commit
$ git reset --hard c14809fa
# this command will not changes files that you have not git added 
```

## Show

* git show:- shows various Git objects

## Git GUI

Git is a command line tool,but there are soma visualizations such as:

1. GitKraken
2. VSCode i.e git history,git history
