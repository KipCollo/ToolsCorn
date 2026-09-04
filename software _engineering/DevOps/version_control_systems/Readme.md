# Version Control

Version control systems allow you to track changes to your codebase/files over time. They allow you to go back to some previous version of the codebase without any issues. Also, they help in collaborating with people working on the same code – if you’ve ever collaborated with other people on a project, you might already know the frustration of copying and merging the changes from someone else into your codebase; version control systems allow you to get rid of this issue.

Version control systems includes:- `Git`,`mercurial`,`Subversion`.
Git Hosting tools includes:- `Gitea`,`GitHub`,`sourcehut`,`tangled.sh`,`forgejo`,`codeberg`,`Gitlab`,`radicle.`


----------

## Git

[Git](https://git-scm.com/) is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git’s purpose is to keep track of projects and files as they change over time with manipulations happening from different users. 
Git stores information about the project’s progress on a repository. A repository has commits to the project or a set of references to the commits called heads. All this information is stored in the same folder as the project in a sub-folder called .git and will mostly be hidden by default in most systems.

So basically,Git keeps track of the changes a couple of people make on a single project and then merges the code where people have worked on different parts into one project.This way, when someone introduces a bug, you can track down the code that introduced the bug by going through the commits. Commits must be made to a project to tell git that you’re satisfied with the changes you’ve made and want to commit the changes into the main branch called master by default.

You can then upload the code to GitHub,Gitlab or BitBucket where authorised users can either view, pull the code or push changes.

Git is basically used for:-

1. Version control- Git can be used for tracking changes in any set of files
2. Collaboration - Can be used when sharing the code btwn devs and collaborate bwtn devs.
3. Open source - Git has concept of branching which helps in collaboration of open source.

LOCAL FOLDER-------->STAGING AREA------->LOCAL REPOSITORY(.git)

[Repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories): They are a collection of files of various versions of a Project.

[Remote repository](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories): The current repo that is stored remotely/online. So the repos we see on Github or Gitlab website are the remote repos for those projects. They contain the changes made and pushed by everyone.

[Local repository](https://stackoverflow.com/questions/13072111/gits-local-repository-and-remote-repository-confusing-concepts): The current repo that is stored on your local device. It contains the changes made by you and can also include the changes present on the remote repo.

[Commits](https://docs.github.com/en/github/committing-changes-to-your-project/creating-and-editing-commits/about-commits): They essentially represent versions of a codebase. Each commit contains changes concerning the last state of the repo.

[Branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches): A branch represents an independent line of development. When we create a branch, we sort of create a brand new working directory, staging area, and project history. New commits are recorded in the history of the current branch then.


**Help** - To get more information about any git command – i.e. details about what the command does, available options and other documentation – use the --help option or the help command.

```sh
git diff --help
git help diff
```

If you only want a quick help showing you the meaning of the most used command line ﬂags, use -h:

```sh
git checkout -h
```


**Configurations** - Based on scopes:

1. Global- `~/.gitconfig`, or `C:\users\[user\.gitconfig]`.
2. Local:- For specific repo `.git/config`.It overrides global configurations.


Let's start with setting up our environment for Git.The mandatory configuration is name and email associated with your git.That will allow commits to have the right author name and email associated to them.
It has nothing to do with authentication when pushing to a remote repository (e.g. when pushing to a remote repository using your GitHub, BitBucket, or GitLab account)


*git config* - To check the configurations list that is default use the command:

```bash
git config --list #list the configurations
```

To declare that identity for all repositories, use `git config --global`.This will store the setting in your user's .gitconfig ﬁle: e.g. `$HOME/.gitconfig` or for Windows, `%USERPROFILE%\.gitconfig`.

```sh
git config --global user.name "KipCollo"
git config --global user.email "kipkosgei.tech@gmail.com"
```

To declare an identity for a single repository, use git config inside a repo.This will store the setting inside the individual repository, in the ﬁle $GIT_DIR/config. e.g. /path/to/your/repo/.git/config.

```sh
cd /path/to/my/repo
git config user.name "Your Login At Work"
git config user.email mail_at_work@example.com
```

Settings stored in a repository's conﬁg ﬁle will take precedence over the global conﬁg when you use that repository.

If you have diﬀerent identities (one for open-source project, one at work, one for private repos, ...), and you don't want to forget to set the right one for each diﬀerent repos you are working on:

- Remove a global identity

```sh
git config --global --remove-section user.name
git config --global --remove-section user.email
```

- Version >2.8 - To force git to look for your identity only within a repository's settings, not in the global conﬁg:

```sh
git config --global user.useConfigOnly true
```

That way, if you forget to set your user.name and user.email for a given repository and try to make a commit, you will see:

```sh
no name was given and auto-detection is disabled
no email was given and auto-detection is disabled
```


**Setting up SSH**:- If you are using Windows open Git Bash. If you are using Mac or Linux open your Terminal.
Before you generate an SSH key, you can check to see if you have any existing SSH keys.
List the contents of your ~/.ssh directory:

```bash
ls -al ~/.ssh
# Lists all the files in your ~/.ssh directory
```

Check the directory listing to see if you already have a public SSH key. By default the ﬁlenames of the public keys are one of the following:

1. id_dsa.pub
2. id_ecdsa.pub
3. id_ed25519.pub
4. id_rsa.pub

If you see an existing public and private key pair listed that you would like to use on your Bitbucket, GitHub (or similar) account you can copy the contents of the id_*.pub ﬁle.

If not, you can create a new public and private key pair with the following command:

```sh
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

`git status` - The git status command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven't, and which files aren't being tracked by Git.

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

## Roadmaps

`Fundamental`:- Git init,Git clone,Git status,Git add,Git commit,git log,git config,.gitignore.
`Branches`:- Git branch,git checkout,git switch,git merge,merge conflicts and resolving,git branch strategies.
`Remote repositories`:- Git remote add origin,git push,git pull,git fetch,git remote -V,tracking remote branches.
`undoing changes`:- git reset(soft,mixed,hard),git revert,git checkout,git restore.
`advanced`:- rebase,interactive rebase,stash,cherry-pick,tagging
`collaborative workflows`:- forking and pull requests,rebasing and merging,squash commits,handling merge conflicts during PRs.
`Git internals`:- .git folder,Object models(blobs,Trees,Commits),SHA1 hosting,Detached HEAD.
`GUI Tools and Git Hosting`:- GitHub Desktop,GitKraken,GitHub actions,GitHub issues

```sh
git --version
```

**Staging**:- Add file to the staging area:- The `git add` command adds a change in the working directory to the staging area(This area contains a list of all the files you have recently changed). It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.
To add a single file, we use the git add command followed by a file name

```bash
git add -A
git add .  # Version ≥ 2.0
git add /path-to-test-py/test.py
```

If you need to delete a file or folder, you can check out the [git rm](https://www.git-tower.com/learn/git/commands/git-rm) command.

`restore` - Reverse the add command.

```sh
git restore --staged .
```

**Committing**:- After making changes to your source code, you should stage those changes with Git before you can commit them.Now that we have added or deleted the changes we need to inform Git about, we commit the changes. This, in a way, finalized the next version of our codebase. We can go back to all the past commits to see the version history. The command works as follows.

```bash
git commit -m "The message you want to write to describe this commit"
```

Alternately, if you have only modiﬁed existing ﬁles or deleted ﬁles, and have not created any new ones, you can combine the actions of git add and git commit in a single command:

```bash
git commit -am "Commit message here"
```

Note that this will stage all modiﬁed ﬁles in the same way as git add --all.

ammend - changes to most recent commit | --amend -m "new message"


**revert** - You can use git revert to create a new commit that undoes changes introduced by previous commit.

`reset` - Removes all the commits made after the mentioned commit in the git resest command.

```sh
git reset <commit_id>
```


**Pushing**:- Till now, whatever we were doing was happening to our local repository, but at some point, we needed to push it to the remote repository as well so that others could see and use our code. The git push command does this.It sends local commits to the specified remote repository,updating the branch on the remote with new commits.

```bash
$ git push <remote> <local> 
# <remote> is the name of the remote branch
# <local> is the name of the local branch
# Example
$ git push origin master
```

**Cloning**:- If you want to use an already existing git repo(remote repo), you need to create a copy of it on your local device first(local repo), which includes all of its history and branches. For that, we use the clone command. First, copy the cloning link of that repo(this is usually present where the remote repo is stored).

```bash
 git clone LINK
 git clone https://github.com/KipCollo
```

- `git fetch` - The command git fetch downloads the remote repository details and changes on your device

```bash
$ git fetch 
# fetch for just one branch
$ git fetch <remote> <local> 
# <remote> is the name of the remote branch
# <local> is the name of the local branch
# an example of it is 
$ git fetch origin master
```

**Pulling**:- The pull command is used to access the changes (commits)from a remote repository to the local repository and merges into current branch.
Git pull is a mix of two commands git fetch + git merge. When we used Git fetch earlier, it downloaded the current state of the remote repository first to our local device. But our files are not changed yet. To bring the changes to our file, we need git merge, which updates our local files based on the remote version.

```bash
git pull <option> [<repository_URL><refspec>...]  
```

**Stashing**:- When working on a project, you might be half-way through a feature branch change when a bug is raised against master. You're not ready to commit your code, but you also don't want to lose your changes. This is where `git stash` comes in handy.
Save the current state of working directory and the index (also known as the staging area) in a stack of stashes.

```bash
git stash
```

To include all untracked ﬁles in the stash use the --include-untracked or -u ﬂags.

```bash
git stash --include-untracked
```

To include a message with your stash to make it more easily identiﬁable later

```bash
git stash save "<whatever message>"
```

To leave the staging area in current state after stash use the --keep-index or -k ﬂags.

```bash
git stash --keep-index
```

`git stash pop` - Brings stash files back.
`git stash clear` - Removes all the files which were in stash.

### Branching

- `git branch` - This command lets us create, list, rename, and delete branches. Let's look at a few examples.

```bash
# this lists the name of the branches present
$ git branch 
main 
another_branch 
feature_inprogress_branch
# delete a branch safely
$ git branch -d <branch>
$ git branch -d another_branch
```


- `Git checkout` - The git checkout command lets you navigate between the branches created by git branch.

```bash
$ git checkout <branch_name>
$ git checkout another_branch
# create a new branch
$ git checkout -b <new_branch_name>
$ git checkout -b new_feature_branch
```

- `git diff` - There are times when we will need to compare the code between versions or between branches; that is when we use git diff.

```bash
# print any uncommitted changes since the last commit.
$ git diff
# compare code between two branches
$ git diff branch1 branch2
# print the uncommitted changes made in one file
$ git diff /filepath/filename
```

- `git rebase` - Rebase is one of two Git utilities that specializes in integrating changes from one branch onto another. The other change integration utility is git merge. Merge is always a forward-moving change record. Alternatively, rebase has powerful history rewriting features.
Let's see a visual of what git rebase does.

```bash
  B -- C (another_branch)
   /      
  A--------D (master)
Rebasing another_branch onto master
             
             B -- C (another_branch)
            /      
  A--------D (master)
```

The corresponding code

```bash
git pull origin master
git checkout another_branch
git rebase master
```

`git merge` - Combines the changes from one branch into another,creating a new commit that reflects merged changes.

```sh
git merge branch_name>
```

*Adding a Repository* - git remote add origin <address>
- git renote -v - shows all URLs attched to the folder.
