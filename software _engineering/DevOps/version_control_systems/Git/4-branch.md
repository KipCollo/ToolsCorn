# Branching

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
