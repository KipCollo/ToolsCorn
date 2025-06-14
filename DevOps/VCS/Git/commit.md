# Committing

After making changes to your source code, you should stage those changes with Git before you can commit them.

* git commit

Now that we have added or deleted the changes we need to inform Git about, we commit the changes. This, in a way, finalized the next version of our codebase. We can go back to all the past commits to see the version history. The command works as follows.

```bash
git commit -m "The message you want to write to describe this commit"
```

Alternately, if you have only modiﬁed existing ﬁles or deleted ﬁles, and have not created any new ones, you can combine the actions of git add and git commit in a single command:

```bash
git commit -am "Commit message here"
```

Note that this will stage all modiﬁed ﬁles in the same way as git add --all.
