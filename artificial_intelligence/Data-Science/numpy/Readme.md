# NumPy

NumPy is the fundamental package for scientific computing in Python. It is a Python library that provides a multidimensional array object, various derived objects (such as masked arrays and matrices), and an assortment of routines for fast operations on arrays, including mathematical, logical, shape manipulation, sorting, selecting, I/O, discrete Fourier transforms, basic linear algebra, basic statistical operations, random simulation and much more.

NumPy (Numerical Python) is an open source Python library that’s widely used in science and engineering. The NumPy library contains multidimensional array data structures, such as the homogeneous, N-dimensional ndarray, and a large library of functions that operate efficiently on these data structures.

## Installing NumPy

The only prerequisite for installing NumPy is Python itself. If you don’t have Python yet and want the simplest way to get started, we recommend you use the Anaconda Distribution - it includes Python, NumPy, and many other commonly used packages for scientific computing and data science.

NumPy can be installed with conda, with pip, with a package manager on macOS and Linux, or from source.

- CONDA:- If you use conda, you can install NumPy from the defaults or conda-forge channels:

```bash
# Best practice, use an environment rather than install in the base env
conda create -n my-env
conda activate my-env
# If you want to install from conda-forge
conda config --env --add channels conda-forge
# The actual install command
conda install numpy
```

- PIP:- If you use pip, you can install NumPy with:

```bash
pip install numpy
```

It may be imported into Python code like:

```py
import numpy as np
```

This widespread convention allows access to NumPy features with a short, recognizable prefix (np.) while distinguishing NumPy features from others that have the same name.

## Array

In computer programming, an array is a structure for storing and retrieving data. We often talk about an array as if it were a grid in space, with each cell storing one element of the data.

In NumPy, this idea is generalized to an arbitrary number of dimensions, and so the fundamental array class is called ndarray: it represents an “N-dimensional array”.
Most NumPy arrays have some restrictions. For instance:

1. All elements of the array must be of the same type of data.
2. Once created, the total size of the array can’t change.
3. he shape must be “rectangular”, not “jagged”; e.g., each row of a two-dimensional array must have the same number of columns.

When these conditions are met, NumPy exploits these characteristics to make the array faster, more memory efficient, and more convenient to use than less restrictive data structures.

One way to initialize an array is using a Python sequence, such as a list

```bash
In [12]: import numpy

In [14]: arr = numpy.array([1,2,3,4])
    ...: arr
Out[14]: array([1, 2, 3, 4])
```

Elements of an array can be accessed in various ways. For instance, we can access an individual element of this array as we would access an element in the original list: using the integer index of the element within square brackets.

```bash
In [15]: arr[1]
Out[15]: np.int64(2)

In [16]: arr[4]
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
Cell In[16], line 1
----> 1 arr[4]

IndexError: index 4 is out of bounds for axis 0 with size 4
```

As with built-in Python sequences, NumPy arrays are “0-indexed”: the first element of the array is accessed using index 0, not 1.

Two- and higher-dimensional arrays can be initialized from nested Python sequences:

```bash
In [20]: arrs = numpy.array([[1,2,3],[4,5,6]])

In [21]: arrs
Out[21]: 
array([[1, 2, 3],
       [4, 5, 6]])
```

- Array attributes

ndim - The number of dimensions of an array is contained in the ndim attribute.

```bash
In [22]: arrs.ndim
Out[22]: 2
```

The shape of an array is a tuple of non-negative integers that specify the number of elements along each dimension.

```bash
In [23]: arrs.shape
Out[23]: (2, 3)
```

The fixed, total number of elements in array is contained in the size attribute.

```bash
In [24]: arrs.size
Out[24]: 6
```

Arrays are typically “homogeneous”, meaning that they contain elements of only one “data type”. The data type is recorded in the dtype attribute.

```bash
In [25]: arrs.dtype
Out[25]: dtype('int64')
```
