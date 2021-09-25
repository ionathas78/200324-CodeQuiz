const _QUESTION_NAME = "question";
const _CHOICE_PREFIX = "opt";
const _ANSWER_NAME = "answer";
const _QUESTION_PICTURE = "illustration";   // Tag of picture to use
const _QUESTION_CAPTION = "caption";        // If this is blank, use default caption.

function questionList() {
    var questions = [
        {
            /* Question 0 */
            question: "To declare a new variable, use what statement?",
            opt0: "decl",
            opt1: "var",
            opt2: "new",
            opt3: "set",
            opt4: "make",
            answer: 1,
            illustration: "vars",
            caption: " "
        },
        {
            /* Question 1 */
            question: "A statement used to iterate through a block of code and perform an increment after each pass is what kind of loop?",
            opt0: "while",
            opt1: "each",
            opt2: "step",
            opt3: "do",
            opt4: "inc",
            opt5: "for",
            answer: 5,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 2 */
            question: "The comparison operators = and == test whether two objects are equal and strictly equal, respectively.",
            opt0: "true",
            opt1: "false",
            answer: 1,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 3 */
            question: "The variable types associated with numbers are integer, long, single, and double.",
            opt0: "true",
            opt1: "false",
            answer: 1,
            illustration: "vars",
            caption: " "
        },
        {
            /* Question 4 */
            question: "Call out the index of an array using the following punctuation:",
            opt0: "( )",
            opt1: "{ }",
            opt2: "< >",
            opt3: "[ ]",
            opt4: "/ /",
            opt5: "# #",
            answer: 3,
            illustration: "arrays",
            caption: " "
        },
        {
            /* Question 5 */
            question: "To retrieve an element of the HTML DOM by its ID attribute, use what method of the document object?",
            opt0: "setElementById()",
            opt1: "goFetch()",
            opt2: "getId()",
            opt3: "getUniqueElement()",
            opt4: "getElementById()",
            answer: 4,
            illustration: "DOMs",
            caption: " "
        },
        {
            /* Question 6 */
            question: "To retrieve multiple elements of the HTML DOM based on a criteria, use what method of the document object?",
            opt0: "querySelector()",
            opt1: "getElementsBy()",
            opt2: "querySelectorAll()",
            opt3: "goFetch()",
            opt4: "queryElementBy",
            answer: 2,
            illustration: "DOMs",
            caption: " "
        },
        {
            /* Question 7 */
            question: "In an HTML document, the filepath for a .js file goes in which tag?",
            opt0: "<java>",
            opt1: "<div>",
            opt2: "<app>",
            opt3: "<script>",
            opt4: "<macro>",
            answer: 3,
            illustration: "tags",
            caption: " "
        },
        {
            /* Question 8 */
            question: "If you want to display text in a popup dialog the user can dismiss with a button, use what function?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 0,
            illustration: "fns",
            caption: " "
        },
        {
            /* Question 9 */
            question: "To display text in a popup dialogue with the 'OK' and 'Cancel' buttons, use which function?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 2,
            illustration: "fns",
            caption: " "
        },
        {
            /* Question 10 */
            question: "When you want to display a popup dialogue and return a textual response from the user, what function will you use?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 4,
            illustration: "fns",
            caption: " "
        },
        {
            /* Question 11 */
            question: "To return a value or exit a function early, use what statement?",
            opt0: "cancel",
            opt1: "return",
            opt2: "default",
            opt3: "end",
            opt4: "break",
            answer: 1,
            illustration: "exitFns",
            caption: " "
        },
        {
            /* Question 12 */
            question: "Specify an object by enclosing a list of key-value pairs in the following punctuation:",
            opt0: "( )",
            opt1: "{ }",
            opt2: "< >",
            opt3: "[ ]",
            opt4: "/ /",
            opt5: "# #",
            answer: 1,
            illustration: "puncts",
            caption: " "
        },
        {
            /* Question 13 */
            question: "A regular expression is set off with the following punctuation:",
            opt0: "( )",
            opt1: "{ }",
            opt2: "< >",
            opt3: "[ ]",
            opt4: "/ /",
            opt5: "# #",
            answer: 4,
            illustration: "puncts",
            caption: " "
        },
        {
            /* Question 14 */
            question: "The debugging function, log(), is a method of which object?",
            opt0: "window",
            opt1: "browser",
            opt2: "document",
            opt3: "console",
            answer: 3,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 15 */
            question: "To step out of a loop and start over at the next iteration, use what statement?",
            opt0: "return",
            opt1: "continue",
            opt2: "gosub",
            opt3: "break",
            opt4: "next",
            answer: 1,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 16 */
            question: "A statement used to test a condition and iterate through a block of code, checking again at each pass, is what kind of loop?",
            opt0: "while",
            opt1: "each",
            opt2: "step",
            opt3: "do",
            opt4: "inc",
            opt5: "for",
            answer: 0,
            illustration: "loops",
            caption: " "
        },
        {
            /* Question 17 */
            question: "A statement used to execute a block of code, then iterate through it again only if a condition is true, is what kind of loop?",
            opt0: "while",
            opt1: "each",
            opt2: "step",
            opt3: "do",
            opt4: "inc",
            opt5: "for",
            answer: 3,
            illustration: "loops",
            caption: " "
        },
        {
            /* Question 18 */
            question: "If you want to test a variable against a list of possible choices, use what statement?",
            opt0: "select",
            opt1: "switch",
            opt2: "choose",
            opt3: "if",
            answer: 1,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 19 */
            question: "When you need to account for a known exception in your code, use what statement?",
            opt0: "if",
            opt1: "while",
            opt2: "function",
            opt3: "try",
            opt4: "on error",
            answer: 3,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 20 */
            question: "Multi-line comments in Javascript are set off using the following punctuation:",
            opt0: "<!-- --!>",
            opt1: "** **",
            opt2: "## ##",
            opt3: "''",
            opt4: "/* */",
            answer: 4,
            illustration: "puncts",
            caption: " "
        },
        {
            /* Question 21 */
            question: "It doesn't matter whether you capitalize variable, method, and property names correctly in JavaScript, as long as you spell them right.",
            opt0: "true",
            opt1: "false",
            answer: 1,
            illustration: "vars",
            caption: " "
        },
        {
            /* Question 22 */
            question: "When you declare a variable inside a function that has the same name as a global variable, that variable is said to do what to the global variable?",
            opt0: "overpower",
            opt1: "obscure",
            opt2: "shadow",
            opt3: "override",
            answer: 2,
            illustration: "vars",
            caption: " "
        },
        {
            /* Question 23 */
            question: "Name the operator used in the statement: 'i++'.",
            opt0: "Addition",
            opt1: "Subtraction",
            opt2: "Modulus",
            opt3: "Increment",
            opt4: "Decrement",
            answer: 3,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 24 */
            question: "Name the operator used in the statement: 'i--'.",
            opt0: "Addition",
            opt1: "Subtraction",
            opt2: "Exponentiation",
            opt3: "Increment",
            opt4: "Decrement",
            answer: 4,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 25 */
            question: "In addition to the standard '=', which of the following is also a valid assignment operator?",
            opt0: "==",
            opt1: "!=",
            opt2: "+",
            opt3: "&&",
            opt4: "*=",
            answer: 4,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 26 */
            question: "To concatenate a string, use which of the following assignment operators?",
            opt0: "=",
            opt1: "+=",
            opt2: "&=",
            opt3: "++",
            opt4: "%=",
            answer: 1,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 27 */
            question: "If you need to find out what kind of data is stored inside a variable, what operator should you use?",
            opt0: "==",
            opt1: "===",
            opt2: "!=",
            opt3: "typeof",
            answer: 3,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 28 */
            question: "When you use a bit mask to track boolean flags, you'll need which of the following bitwise operators?",
            opt0: "#",
            opt1: "!",
            opt2: "|",
            opt3: "<",
            opt4: "=>",
            answer: 2,
            illustration: "ops",
            caption: " "
        },
        {
            /* Question 29 */
            question: "('1' === 1)",
            opt0: "true",
            opt1: "false",
            answer: 1,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 30 */
            question: "(1 + 1) == 2",
            opt0: "true",
            opt1: "false",
            answer: 0,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 31 */
            question: "('1' + 1) == 2",
            opt0: "true",
            opt1: "false",
            answer: 1,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 32 */
            question: "('1' + 1) === '11'",
            opt0: "true",
            opt1: "false",
            answer: 0,
            illustration: "stmts",
            caption: " "
        },
        {
            /* Question 33 */
            question: "In 'attr(a, b)', a and b are typically referred to as what?",
            opt0: "options",
            opt1: "values",
            opt2: "parameters",
            opt3: "attributes",
            opt4: "whatabudabingbong",
            answer: 2,
            illustration: "fns",
            caption: " "
        },
        {
            /* Question 34 */
            question: "Which of the following is a valid way to declare: 'function(x) {return 2x;}'?",
            opt0: "'f(x) = 2x'",
            opt1: "'y = 2x'",
            opt2: "'(x) => x * 2'",
            opt3: "'y == 2x'",
            answer: 2,
            illustration: "fns",
            caption: " "
        },
        {
            /* Question 35 */
            question: "Use the 'this' keyword when you want to refer to what?",
            opt0: "The window running the script",
            opt1: "The owner of the function",
            opt2: "The current element in an array",
            opt3: "The Raven",
            opt4: "The current webpage",
            answer: 1,
            illustration: "objs",
            caption: " "
        },
        {
            /* Question 36 */
            question: "The join() method does what?",
            opt0: "It removes the last element in an array and returns it.",
            opt1: "It creates an array from a delimited list contained in a single string.",
            opt2: "It removes the first element in an array, returns it, and moves the rest of the array down to fill the space.",
            opt3: "It concatenates all items in an array into a single string.",
            opt4: "It adds an element to the end of an array.",
            answer: 3,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 37 */
            question: "The pop() method does what?",
            opt0: "It concatenates all items in an array into a single string.",
            opt1: "It removes the last element in an array and returns it.",
            opt2: "It removes the first element in an array, returns it, and moves the rest of the array down to fill the space.",
            opt3: "It creates an array from a delimited list contained in a single string.",
            opt4: "It adds an element to the end of an array.",
            answer: 1,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 38 */
            question: "The push() method does what?",
            opt0: "It removes the last element in an array and returns it.",
            opt1: "It adds an element to the end of an array.",
            opt2: "It removes the first element in an array, returns it, and moves the rest of the array down to fill the space.",
            opt3: "It creates an array from a delimited list contained in a single string.",
            opt4: "It concatenates all items in an array into a single string.",
            answer: 1,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 39 */
            question: "The shift() method does what?",
            opt0: "It adds an element to the end of an array.",
            opt1: "It creates an array from a delimited list contained in a single string.",
            opt2: "It removes the last element in an array and returns it.",
            opt3: "It concatenates all items in an array into a single string.",
            opt4: "It removes the first element in an array, returns it, and moves the rest of the array down to fill the space.",
            answer: 4,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 40 */
            question: "The length property returns the number of elements in what kind of variable?",
            opt0: "Array",
            opt1: "Number",
            opt2: "Date",
            opt3: "String",
            opt4: "Array or String",
            answer: 4,
            illustration: "props",
            caption: " "
        },
        {
            /* Question 41 */
            question: "Use the sort() method to do what?",
            opt0: "Return the highest value in an array",
            opt1: "Arrange the elements of an array alphabetically",
            opt2: "Swap the order of elements in an array",
            opt3: "Return the lowest value in an array",
            opt4: "Iterate through an array once for each element",
            answer: 1,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 42 */
            question: "For which purpose would you use Math.max.apply()?",
            opt0: "Iterate through an array once for each element",
            opt1: "Return the lowest value in an array",
            opt2: "Swap the order of elements in an array",
            opt3: "Return the highest value in an array",
            opt4: "Arrange the elements of an array alphabetically",
            answer: 3,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 43 */
            question: "You would use Math.min.apply() if you wanted to do what?",
            opt0: "Arrange the elements of an array alphabetically",
            opt1: "Return the highest value in an array",
            opt2: "Swap the order of elements in an array",
            opt3: "Iterate through an array once for each element",
            opt4: "Return the lowest value in an array",
            answer: 4,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 44 */
            question: "Apply the forEach() method to accomplish what end?",
            opt0: "Iterate through an array once for each element",
            opt1: "Return the lowest value in an array",
            opt2: "Return the highest value in an array",
            opt3: "Arrange the elements of an array alphabetically",
            opt4: "Swap the order of elements in an array",
            answer: 0,
            illustration: "methods",
            caption: " "
        },
        {
            /* Question 45 */
            question: "The reverse() method does what?",
            opt0: "Arranges the elements of an array alphabetically",
            opt1: "Returns the highest value in an array",
            opt2: "Swaps the order of elements in an array",
            opt3: "Iterates through an array once for each element",
            opt4: "Returns the lowest value in an array",
            answer: 2,
            illustration: "methods",
            caption: " "
        }














        // {
        //     /* Question x */
        //     question: "",
        //     opt0: "",
        //     opt1: "",
        //     opt2: "",
        //     opt3: "",
        //     opt4: "",
        //     answer: 0
        // }
    ]

    return questions;
}