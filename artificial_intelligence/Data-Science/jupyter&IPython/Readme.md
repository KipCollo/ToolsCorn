# Getting Started in IPython and Jupyter

In writing Python code for data science,theres three modes of working:-

1. IPython shell for trying out short sequences of commands.
2. The Jupyter Notebook for longer interactive analysis and for sharing content with others.
3. Interactive development environments (IDEs) like Emacs or VSCode for creating reusable Python packages.

- IPython Shell:- Start by launching the IPython interpreter by typing ipython on the command line; alternatively,if you've installed a distribution like Anaconda or EPD, there may be a launcher specific to your system

```bash
ipython3                                                                                                                                                                                                                                 
Python 3.12.8 (main, Dec 13 2024, 13:19:48) [GCC 14.2.0]
Type 'copyright', 'credits' or 'license' for more information
IPython 8.31.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]:
```

- Jupyter Notebook:- The Jupyter Notebook is a browser-based graphical interface to the IPython shell, and builds on it a rich set of dynamic display capabilities.As well as executing Python/IPython statements, notebooks allow the user to include formatted text, static and dynamic visualizations, mathematical equations, JavaScript widgets, and much more. Furthermore, these documents can be saved in a way that lets other people open them and execute the code on their own systems.

Though you'll view and edit Jupyter notebooks through your web browser window, they must connect to a running Python process in order to execute code. You can start this process (known as a "kernel") by running the following command in your system shell:

```sh
jupyter-notebook

[I 2025-01-14 20:04:45.183 ServerApp] jupyter_lsp | extension was successfully linked.
[I 2025-01-14 20:04:45.187 ServerApp] jupyter_server_terminals | extension was successfully linked.
[I 2025-01-14 20:04:45.192 ServerApp] jupyterlab | extension was successfully linked.
[I 2025-01-14 20:04:45.196 ServerApp] notebook | extension was successfully linked.
[I 2025-01-14 20:04:45.472 ServerApp] http://localhost:8889/tree?token=bb1f8c895662b38981a79d6b7d18f013124d831093326390
[I 2025-01-14 20:04:45.472 ServerApp]     http://127.0.0.1:8889/tree?token=bb1f8c895662b38981a79d6b7d18f013124d831093326390
[I 2025-01-14 20:04:45.472 ServerApp] Use Control-C to stop this server and shut down all kernels (twice to skip confirmation).
[C 2025-01-14 20:04:45.495 ServerApp] 
```
