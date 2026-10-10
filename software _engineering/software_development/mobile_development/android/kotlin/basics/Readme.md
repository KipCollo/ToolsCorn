# Basic literals: numbers, strings and characters

`Integer numbers` - We use integer numbers to count things in the real world. We will also often use integer numbers in Kotlin.

Here are several examples of valid integer number literals separated by commas: 0, 1, 2, 10, 11, 100.

If an integer value contains a lot of digits, we can add underscores to divide the digits into blocks to make this number more readable: for example, 1_000_000 is much easier to read than 1000000.

You can add as many underscores as you would like: 1__000_000, 1_2_3. Remember, underscores can’t appear at the start or at the end of the number. If you write _10 or 100_ , you get an error.

`Characters`

A single character can represent a digit, a letter, or another symbol. To write a single character, we wrap a symbol in single quotes as follows: 'A', 'B', 'C', 'x', 'y', 'z', '0', '1', '2', '9'. Character literals can represent alphabet letters, digits from '0' to '9', whitespaces (' '), or some other symbols (e.g., '$').

Do not confuse characters representing numbers (e.g., '9') and numbers themselves (e.g., 9).

A character cannot include two or more digits or letters because it represents a single symbol. The following two examples are incorrect: 'abc', '543' because these literals have too many characters.

`Strings`

Strings represent text information, such as the text of an advertisement, the address of a web page, or the login to a website. A string is a sequence of any individual characters.

To write strings, we wrap characters in double quotes instead of single ones. Here are some valid examples: "text", "I want to learn Kotlin", "123456", "e-mail@gmail.com". So, strings can include letters, digits, whitespaces, and other characters.

A string can also contain just one single character, like "A". Do not confuse it with the character 'A', which is not a string.
