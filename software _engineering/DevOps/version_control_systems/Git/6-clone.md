# Cloning

- `git clone` - If you want to use an already existing git repo(remote repo), you need to create a copy of it on your local device first(local repo). For that, we use the clone command. First, copy the cloning link of that repo(this is usually present where the remote repo is stored).

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