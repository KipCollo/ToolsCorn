# Shell Scripting

After you start a terminal emulation package or login to a linux virtual console,you get access to the shell CLI prompt.The prompt is your gateway to the shell.
The default prompt symbol for bash shell is dollar sign($).This symbol indicates that the shell is waiting for you to enter text.DifferentLinux distributions use different formats for the prompt.
Besides acting as your access point to the shell, the prompt can provide additional helpful information.
The shell prompt is not static. It can be changed to suit your needs.


The key to shell scripts is the ability to enter multiple commands and process the results from each command, even possibly passing the results of one command to another. The shell allows you to chain commands together into a single step.
If you want to run two commands together, you can enter them on the same prompt line, separated with a semicolon.
Using this technique is ﬁ ne for small scripts, but it has a major drawback: You must enter the entire command at the command prompt every time you want to run it. Instead of having to manually enter the commands onto a command line, you can combine the commands into a simple text ﬁle. When you need to run the commands, just simply run the text ﬁle.

Shell script has to be called from absolute path e.g /home/collins/script.bash
If called from current location then ./script.bash

`Creating a Script File`:- To place shell commands in a text ﬁle, ﬁ rst you need to use a text editor to create a ﬁle and then enter the commands into the ﬁle.
When creating a shell script ﬁle, you must specify the shell you are using in the ﬁ rst line of the ﬁle. Here’s the format for this:

```sh
#!/bin/bash
```

In a normal shell script, the pound sign (#) is used as a comment line. A comment line in a shell script isn’t processed by the shell. However, the ﬁrst line of a shell script ﬁle is a special case, and the pound sign followed by the exclamation point tells the shell what shell to run the script under (yes, you can be using a bash shell and run your script using another shell).
After indicating the shell, commands are entered onto each line of the ﬁle, followed by a carriage return. As mentioned, comments can be added by using the pound sign. An example looks like this:

```sh
#!/bin/bash
# This script displays the date and who's logged on
date
who
```

`Displaying Messages`:- Most shell commands produce their own output, which is displayed on the console monitor where the script is running. Many times, however, you will want to add your own text messages to help the script user know what is happening within the script. You can do this with the echo command. The echo command can display a simple text string if you add the string following the command.

```sh
echo "Hello,World's"
```

You can use the -n parameter for the echo statement to echo a text string on the same line as a command output.

`Using Variables`:-You can incorporate other data in your shell commands to process information.
Variables allow you to temporarily store information within the shell script for use with other commands in the script.
