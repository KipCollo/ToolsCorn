# Frameworks

## Google Test (gtest)

Google Test, also known as gtest or googletest, is a C++ testing framework developed by Google. It provides a user-friendly API for writing test cases and is designed for use in a range of applications, from simple unit tests to complex system-level tests. 

## Getting Started with Google Test

To use Google Test in your project, follow these steps:

- Download the source code from the [GoogleTest GitHub repository](https://github.com/google/googletest).
- Build and install Google Test on your system. Instructions for various platforms can be found in the [README](https://github.com/google/googletest/blob/main/googletest/README.md) file.
- Include the necessary headers and link against the Google Test library in your project.

## Writing a Test with Google Test

Here's an example of how to write a simple test using Google Test:

- **Include the necessary headers**

   ```cpp
   #include "gtest/gtest.h"
   ```

- **Write the functions you want to test**

   Suppose we have a simple function to test:

   ```cpp
   int add(int a, int b) {
      return a + b;
   }
   ```

- **Write the test cases**

   To create a test case, use the `TEST()` macro, which takes two arguments: the test suite name and the test case name.

   ```cpp
   // Test the 'add' function.
   TEST(AdditionTest, PositiveNumbers) {
      EXPECT_EQ(3, add(1, 2));
      EXPECT_EQ(5, add(2, 3));
   }

   TEST(AdditionTest, NegativeNumbers) {
      EXPECT_EQ(-3, add(-1, -2));
      EXPECT_EQ(-5, add(-2, -3));
   }
   ```

- **Write a `main()` function**

   In order to run the tests, include a `main()` function that initializes Google Test and runs the tests.

   ```cpp
   int main(int argc, char **argv) {
      ::testing::InitGoogleTest(&argc, argv);
      return RUN_ALL_TESTS();
   }
   ```

- **Compile and run the tests**

   Compile your test program with the Google Test library and run the test executable.

## More Features

Google Test offers a wide range of features to make testing easier, such as:

- **Test Fixtures**: Test fixtures allow you to reuse the same set of objects for multiple tests. You can define a test fixture by creating a class that inherits from `::testing::Test` and writing setup and teardown methods.

- **Assertions**: Google Test provides a variety of assertion macros to help you verify your code's behavior. Some common ones include `EXPECT_EQ`, `EXPECT_TRUE`, `EXPECT_FALSE`, `ASSERT_EQ`, `ASSERT_TRUE`, and `ASSERT_FALSE`.

- **Parameterized Tests**: Google Test supports parameterized tests, allowing you to run the same test with different inputs easily.

- **Death Tests**: Google Test allows you to write tests that verify if your code terminates correctly or with the expected error message.

For more information about Google Test and its features, refer to the [official documentation](https://github.com/google/googletest/blob/main/docs/primer.md).

## Qt Framework

Qt is an open-source, cross-platform framework for creating high-performance applications with interactive user interfaces. It is mainly used for developing GUI applications but can also be used for creating non-GUI applications like console tools and servers.

Qt provides a wide range of C++ libraries and seamless integration with popular IDEs, making it easier for developers to create feature-rich applications. It offers a comprehensive development environment, including tools for designing, coding, debugging, and profiling applications.

## Key Features

- **Cross-platform**: Qt can create applications that run on different platforms (e.g., Windows, macOS, Linux, Android, iOS) without any platform-specific code.
- **Modular Libraries**: Qt consists of several modular libraries, including QtCore (core non-GUI functionality), QtGui (GUI-related classes), QtWidgets (GUI widgets), and QtNetwork (networking support).
- **Signals and Slots**: Qt provides a unique mechanism to handle events called "signals and slots", which allows safe and flexible inter-object communication.
- **OpenGL Integration**: Qt supports rendering 2D and 3D graphics using OpenGL, making it suitable for game development and other graphical applications.

## Code Example

Here's a simple example of a "Hello, World!" application using Qt:

```cpp
#include <QApplication>
#include <QLabel>

int main(int argc, char *argv[])
{
    QApplication app(argc, argv);

    QLabel label("Hello, World!");
    label.show();

    return app.exec();
}
```

In this example, we include the necessary header files, create QApplication and QLabel objects, display the label with a "Hello, World!" message, and execute the application.

To compile and run this example, you need to install the Qt library and configure your development environment to use it.

For more information and tutorials about Qt, you can refer to the [official Qt documentation](https://doc.qt.io/qt-5/index.html).

## Catch2

Catch2 is a modern, C++-native, test framework for unit tests, TDD, and BDD. It is a single-header library, meaning you only need to include one header file (`catch.hpp`) to start using it. Catch2 is fast, easy to use, and supports various test styles.

### Features

- **Single-header:** Just `#include "catch.hpp"` and start writing tests.
- **Test cases:** Declare test cases using the `TEST_CASE` macro.
- **Sections:** Divide test cases into sections using `SECTION` macro.
- **BDD:** Behavior-Driven Development style supported with `SCENARIO`, `GIVEN`, `WHEN`, `THEN`.
- **Matchers:** Use rich built-in matchers for more expressive assertions.
- **Test discovery:** Catch2 automatically discovers your test cases and sections.

### Code examples

### Basic test case

```cpp
#define CATCH_CONFIG_MAIN  // Tells Catch to provide a main() function
#include "catch.hpp"

int add(int a, int b) {
    return a + b;
}

TEST_CASE("Addition") {
    REQUIRE(add(2, 3) == 5);
}
```

### Sections

```cpp
TEST_CASE("Sections example") {
    int a = 1;

    SECTION("incrementing a") {
        a++;
        REQUIRE(a == 2);
    }

    SECTION("decrementing a") {
        a--;
        REQUIRE(a == 0);
    }
}
```

### BDD style

```cpp
SCENARIO("vector can be sized and resized", "[vector]") {
    std::vector<int> v;

    GIVEN("A vector with some items") {
        v.push_back(1);
        v.push_back(2);
        v.push_back(3);

        REQUIRE(v.size() == 3);

        WHEN("the size is increased") {
            v.resize(5);

            THEN("the size and contents change") {
                REQUIRE(v.size() == 5);
                REQUIRE(v[3] == 0);
                REQUIRE(v[4] == 0);
            }
        }
        WHEN("the size is reduced") {
            v.resize(2);

            THEN("the size changes but not the contents") {
                REQUIRE(v.size() == 2);
                REQUIRE(v[0] == 1);
                REQUIRE(v[1] == 2);
            }
        }
    }
}
```

## Matchers

```cpp
TEST_CASE("Matchers example") {
    std::string str = "Hello, world!";

    CHECK_THAT(str, Catch::Matchers::StartsWith("Hello"));
    CHECK_THAT(str, Catch::Matchers::EndsWith("world!"));
    CHECK_THAT(str, Catch::Matchers::Contains("lo, wo"));
}
```

For more information, visit the [Catch2 GitHub repository](https://github.com/catchorg/Catch2).

## PyTorch C++

PyTorch C++ is the C++ API (Application Programming Interface) for PyTorch. It is also known as LibTorch, which is a library that provides almost all the functionality of PyTorch accessible through C++ language. The main goal of providing a C++ API is to enable high-performance integration with other deep learning platforms and enable seamless operation in enterprise and production-level systems.

## Installation

To use the PyTorch C++ API, you need to install the LibTorch distribution. Follow the instructions on the [official PyTorch C++ API page](https://pytorch.org/cppdocs/installing.html) to install the library based on your platform and requirements.

## Example: Tensors

```cpp
#include <iostream>
#include <torch/torch.h>

int main() {
  // Create a 3x3 matrix with zeros.
  torch::Tensor a = torch::zeros({3, 3});
  std::cout << a << std::endl;

  // Create a 2x2 matrix with ones and convert to float.
  torch::Tensor b = torch::ones({2, 2}).to(torch::kFloat);
  std::cout << b << std::endl;

  // Create a random tensor size 2x2 and specify its type.
  torch::Tensor c = torch::randint(0, 10, {2, 2}, torch::kInt);
  std::cout << c << std::endl;

  // Perform element-wise addition.
  auto sum = b + c.to(torch::kFloat);
  std::cout << sum << std::endl;
}
```

## Example: Creating a Custom Module

```cpp
#include <iostream>
#include <torch/torch.h>

// Define a custom module.
struct Net : torch::nn::Module {
  Net() {
    fc1 = register_module("fc1", torch::nn::Linear(784, 64));
    fc2 = register_module("fc2", torch::nn::Linear(64, 10));
  }

  torch::Tensor forward(torch::Tensor x) {
    x = x.view({-1, 784});
    x = torch::relu(fc1->forward(x));
    x = torch::log_softmax(fc2->forward(x), 1);
    return x;
  }

  torch::nn::Linear fc1{nullptr};
  torch::nn::Linear fc2{nullptr};
};

int main() {
  // Create an instance of the custom module.
  Net net;

  // Use the custom module.
  torch::Tensor input = torch::randn({2, 1, 28, 28});
  torch::Tensor output = net.forward(input);
  std::cout << output << std::endl;

  return 0;
}
```

In these examples, we demonstrated how to use various tensor operations and how to create a custom neural network module with PyTorch C++. For more detailed information and tutorials, visit the [official PyTorch C++ documentation](https://pytorch.org/cppdocs/).

## Orbit Profiler

Orbit Profiler is a performance profiler for C++ applications. It is designed to provide developers with real-time feedback on their application's performance and help them identify performance bottlenecks. It supports both Windows and Linux platforms, profiling both local and remote processes.

**Major features of Orbit Profiler:**

- Sampling-based profiling
- Instrumentation-based profiling
- Callstacks collection
- Frame-based measurements using scopes macros

## Usage

- **Include OrbitProfiler.h**: First, you need to include the `OrbitProfiler.h` header file in your project:

   ```cpp
   #include "OrbitProfiler.h"
   ```

- **Starting and Stopping the profiler**: Use `ORBET_START` and `ORBIT_STOP` to start and stop the profiler.

   ```cpp
   ORBIT_START();
   // Your application code here
   ORBIT_STOP();
   ```

- **Instrumenting scopes**: Use the `ORBET_SCOPE` macro to annotate the scope of the function you want to measure:

   ```cpp
   void ExampleFunction() {
     ORBIT_SCOPE("Example Function");
     // Function content here
   }
   ```

- **Visualizing the captured data**: Orbit Profiler provides a **Session View** that displays the captured data and allows you to navigate through the timeline, analyze data, and identify performance bottlenecks.

## Example

For demonstration purposes, consider the following example of a simple C++ application:

```cpp
#include "OrbitProfiler.h"

void FunctionA() {
  ORBIT_SCOPE("Function A");
  // Function A code here
}

void FunctionB() {
  ORBIT_SCOPE("Function B");
  // Function B code here
}

int main() {
  ORBIT_START();

  FunctionA();
  FunctionB();

  ORBIT_STOP();
  return 0;
}
```

By using Orbit Profiler, we are able to pinpoint performance issues in FunctionA and FunctionB and optimize our application accordingly.

For more information, refer to the [official Orbit Profiler GitHub repository](https://github.com/google/orbit).