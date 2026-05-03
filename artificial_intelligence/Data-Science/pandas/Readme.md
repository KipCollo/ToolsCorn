# Pandas

Pandas is a fast,powerful,flexible and easy to use open source data analysis and manipulation tool built on top of Python Programming Language.

Installation of Pandas on your system requires NumPy to be installed, and if you're building the library from source, you will need the appropriate tools to compile the C and Cython sources on which Pandas is built.

```bash
pip install pandas
```

Once Pandas is installed, you can import it and check the version; here is the version used by this book:

```py
import pandas
pandas.__version__
```

We will import Pandas under the alias pd:

```py
import pandas as pd
```

Built-in Documentation:- IPython gives you the ability to quickly explore the contents of a package (by using the tab completion feature) as well as the documentation of various functions (using the ? character).

For example, to display all the contents of the Pandas namespace, you can type:

```bash
In [3]: pd.<TAB>
```

And to display the built-in Pandas documentation, you can use this:

```bash
In [4]: pd?
```

## Basic data structures in pandas

Pandas provides two types of classes for handling data:

1. Series: a one-dimensional labeled array holding data of any type such as integers, strings, Python objects etc.
2. DataFrame: a two-dimensional data structure that holds data like a two-dimension array or a table with rows and columns.

Creating a Series by passing a list of values, letting pandas create a default RangeIndex.

```bash
In [7]: pandas.Series([1,2,4,8])
Out[7]: 
0    1
1    2
2    4
3    8
dtype: int64
```

Creating a DataFrame by passing a NumPy array with a datetime index using date_range() and labeled columns:

```bash
In [5]: dates = pd.date_range("20130101", periods=6)

In [6]: dates
Out[6]: 
DatetimeIndex(['2013-01-01', '2013-01-02', '2013-01-03', '2013-01-04',
               '2013-01-05', '2013-01-06'],
              dtype='datetime64[ns]', freq='D')

In [7]: df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list("ABCD"))

In [8]: df
Out[8]: 
                   A         B         C         D
2013-01-01  0.469112 -0.282863 -1.509059 -1.135632
2013-01-02  1.212112 -0.173215  0.119209 -1.044236
2013-01-03 -0.861849 -2.104569 -0.494929  1.071804
2013-01-04  0.721555 -0.706771 -1.039575  0.271860
2013-01-05 -0.424972  0.567020  0.276232 -1.087401
2013-01-06 -0.673690  0.113648 -1.478427  0.524988
```

Creating a DataFrame by passing a dictionary of objects where the keys are the column labels and the values are the column values.

```bash
In [9]: df2 = pd.DataFrame(
   ...:     {
   ...:         "A": 1.0,
   ...:         "B": pd.Timestamp("20130102"),
   ...:         "C": pd.Series(1, index=list(range(4)), dtype="float32"),
   ...:         "D": np.array([3] * 4, dtype="int32"),
   ...:         "E": pd.Categorical(["test", "train", "test", "train"]),
   ...:         "F": "foo",
   ...:     }
   ...: )
   ...: 

In [10]: df2
Out[10]: 
     A          B    C  D      E    F
0  1.0 2013-01-02  1.0  3   test  foo
1  1.0 2013-01-02  1.0  3  train  foo
2  1.0 2013-01-02  1.0  3   test  foo
3  1.0 2013-01-02  1.0  3  train  foo
```

## IO tools (text, CSV, HDF5)

The pandas I/O API is a set of top level reader functions accessed like pandas.read_csv() that generally return a pandas object. The corresponding writer functions are object methods that are accessed like DataFrame.to_csv().

- CSV & text files:- The workhorse function for reading text files (a.k.a. flat files) is read_csv(). See the cookbook for some advanced strategies.

1. read_csv() accepts the following common arguments:

```py
pd.read_csv("file-name")
```

Flat file

- read_table(filepath_or_buffer, *[, sep, ...]) - Read general delimited file into DataFrame.
- read_csv(filepath_or_buffer, *[, sep, ...]) - Read a comma-separated values (csv) file into DataFrame.
- DataFrame.to_csv([path_or_buf, sep, na_rep, ...]) - Write object to a comma-separated values (csv) file.
- read_fwf(filepath_or_buffer, *[, colspecs, ...]) - Read a table of fixed-width formatted lines into DataFrame.
