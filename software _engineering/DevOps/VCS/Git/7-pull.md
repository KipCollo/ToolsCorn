# Pulling

- `git pull` - The pull command is used to access the changes (commits)from a remote repository to the local repository.
Git pull is a mix of two commands git fetch + git merge. When we used Git fetch earlier, it downloaded the current state of the remote repository first to our local device. But our files are not changed yet. To bring the changes to our file, we need git merge, which updates our local files based on the remote version.

```bash
git pull <option> [<repository_URL><refspec>...]  
```
