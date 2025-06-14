# Stashing

When working on a project, you might be half-way through a feature branch change when a bug is raised against master. You're not ready to commit your code, but you also don't want to lose your changes. This is where `git stash` comes in handy.

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
