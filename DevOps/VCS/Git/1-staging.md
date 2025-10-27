# Staging

Add file to the staging area:- The git add command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, git add doesn't really affect the repository in any significant way—changes are not actually recorded until you run git commit.
To add a single file, we use the git add command followed by a file name

- `git add`:- The git add command adds a file to the Git staging area. This area contains a list of all the files you have recently changed

```bash
git add -A
git add .  # Version ≥ 2.0
git add /path-to-test-py/test.py
```

If you need to delete a file or folder, you can check out the [git rm](https://www.git-tower.com/learn/git/commands/git-rm) command.
