# Django

Django is a back-end server side web framework.Django is free, open source and written in Python.Django makes it easier to build web pages using Python.
Django emphasizes reusability of components, also referred to as DRY (Don't Repeat Yourself), and comes with ready-to-use features like login system, database connection and CRUD operations (Create Read Update Delete).

Django follows the MVT design pattern (Model View Template).

   1. Model - The data you want to present, usually data from a database.
   2. View - A request handler that returns the relevant template and content - based on the request from the user.
   3. Template - A text file (like an HTML file) containing the layout of the web page, with logic on how to display the data.

- `Model`:- Provides data from database.Data is delivered as an Object Relational Mapping(ORM).It is usually located in a file called `models.py`.
- `View`:- It is a function or method that takes http requests as an arguments,imports relevant model(s) and finds out what data to send to template and returns final result.Located in `views.py`
- `Template`:- It is a file where you describe how result should be presented.They are often *.htm* files with HTML code describing the layout of a web page,but can also be in other file formats to present other results.Django uses standard HTML to describe the layout,but uses Django tags to add logic.
- `URLs`:-Django provides a way to navigate around different pages in a website.When a user requests a URL,Django decides which *view* it will send to.Done in a file called `urls.py`.

When you have installed Django and created your first Django web application, and the browser requests the URL, this is basically what happens:

   1. Django receives the URL, checks the urls.py file, and calls the view that matches the URL.
   2. The view, located in views.py, checks for relevant models.
   3. The models are imported from the models.py file.
   4. The view then sends the data to a specified template in the template folder.
   5. The template contains HTML and Django tags, and with the data it returns finished HTML content back to the browser.

Django was invented by Lawrence Journal-World in 2003, to meet the short deadlines in the newspaper and at the same time meeting the demands of experienced web developers.

## Getting Started

To install Django, you must have Python installed, and a package manager like PIP.

`Install Django`:-Django is installed using pip, with this command:-

```bash
python -m pip install Django 
```

```powershell
py -m pip install Django
```

You can check if Django is installed by asking for its version number like this:

```bash
django-admin --version
```

- `Create Project`:-Once you have come up with a suitable name for your Django project, navigate to where in the file system you want to store the code (in the virtual environment) and run this command in the terminal:

```bash
django-admin startproject <project-name>
```

- `Run the Django Project`:-Now that you have a Django project, you can run it, and see what it looks like in a browser.

```bash
python3 manage.py runserver
```

- `Create App`:- An app is a web application that has a specific meaning in your project, like a home page, a contact form, or a members database.
Start by navigating to the selected location where you want to store the app,and run the command below.

```bash
python3 manage.py startapp <app-name>
```

If the server is still running, and you are not able to write commands, press [CTRL] [BREAK], or [CTRL] [C] to stop the server and you should be back in the virtual environment.
