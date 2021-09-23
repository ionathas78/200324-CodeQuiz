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
            answer: 1
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
            answer: 5
        },
        {
            /* Question 2 */
            question: "The comparison operators = and == test whether two objects are equal and strictly equal, respectively.",
            opt0: "true",
            opt1: "false",
            answer: 1
        },
        {
            /* Question 3 */
            question: "The variable types associated with numbers are integer, long, single, and double.",
            opt0: "true",
            opt1: "false",
            answer: 1
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
            answer: 3
        },
        {
            /* Question 5 */
            question: "To retrieve an element of the HTML DOM by its ID attribute, use what method of the document object?",
            opt0: "setElementById()",
            opt1: "goFetch()",
            opt2: "getId()",
            opt3: "getUniqueElement()",
            opt4: "getElementById()",
            answer: 4
        },
        {
            /* Question 6 */
            question: "To retrieve multiple elements of the HTML DOM based on a criteria, use what method of the document object?",
            opt0: "querySelector()",
            opt1: "getElementsBy()",
            opt2: "querySelectorAll()",
            opt3: "goFetch()",
            opt4: "queryElementBy",
            answer: 2
        },
        {
            /* Question 7 */
            question: "In an HTML document, the filepath for a .js file goes in which tag?",
            opt0: "<java>",
            opt1: "<div>",
            opt2: "<app>",
            opt3: "<script>",
            opt4: "<macro>",
            answer: 3
        },
        {
            /* Question 8 */
            question: "If you want to display text in a popup dialog the user can dismiss with a button, use what function?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 0
        },
        {
            /* Question 9 */
            question: "To display text in a popup dialogue with the 'OK' and 'Cancel' buttons, use which function?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 2
        },
        {
            /* Question 10 */
            question: "When you want to display a popup dialogue and return a textual response from the user, what function will you use?",
            opt0: "alert()",
            opt1: "msgbox()",
            opt2: "confirm()",
            opt3: "input()",
            opt4: "prompt()",
            answer: 4
        },
        {
            /* Question 11 */
            question: "To return a value or exit a function early, use what statement?",
            opt0: "cancel",
            opt1: "return",
            opt2: "default",
            opt3: "end",
            opt4: "break",
            answer: 1
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
            answer: 1
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
            answer: 4
        },
        {
            /* Question 14 */
            question: "The debugging function, log(), is a method of which object?",
            opt0: "window",
            opt1: "browser",
            opt2: "document",
            opt3: "console",
            answer: 3
        },
        {
            /* Question 15 */
            question: "To step out of a loop and start over at the next iteration, use what statement?",
            opt0: "return",
            opt1: "continue",
            opt2: "gosub",
            opt3: "break",
            opt4: "next",
            answer: 1
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
            answer: 0
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
            answer: 3
        },
        {
            /* Question 18 */
            question: "If you want to test a variable against a list of possible choices, use what statement?",
            opt0: "select",
            opt1: "switch",
            opt2: "choose",
            opt3: "if",
            answer: 1
        },
        {
            /* Question 19 */
            question: "When you need to account for a known exception in your code, use what statement?",
            opt0: "if",
            opt1: "while",
            opt2: "function",
            opt3: "try",
            opt4: "on error",
            answer: 3
        },
        {
            /* Question 20 */
            question: "Multi-line comments in Javascript are set off using the following punctuation:",
            opt0: "<!-- --!>",
            opt1: "** **",
            opt2: "## ##",
            opt3: "''",
            opt4: "/* */",
            answer: 4
        },
        {
            /* Question 21 */
            question: "It doesn't matter whether you capitalize variable, method, and property names correctly in JavaScript, as long as you spell them right.",
            opt0: "true",
            opt1: "false",
            answer: 1
        },
        {
            /* Question 22 */
            question: "When you declare a variable inside a function that has the same name as a global variable, that variable is said to do what to the global variable?",
            opt0: "overpower",
            opt1: "obscure",
            opt2: "shadow",
            opt3: "override",
            answer: 2
        },
        {
            /* Question 23 */
            question: "Name the operator used in the statement: 'i++'.",
            opt0: "Addition",
            opt1: "Subtraction",
            opt2: "Modulus",
            opt3: "Increment",
            opt4: "Decrement",
            answer: 3
        },
        {
            /* Question 24 */
            question: "Name the operator used in the statement: 'i--'.",
            opt0: "Addition",
            opt1: "Subtraction",
            opt2: "Exponentiation",
            opt3: "Increment",
            opt4: "Decrement",
            answer: 4
        },
        {
            /* Question 25 */
            question: "In addition to the standard '=', which of the following is also a valid assignment operator?",
            opt0: "==",
            opt1: "!=",
            opt2: "+",
            opt3: "&&",
            opt4: "*=",
            answer: 4
        },
        {
            /* Question 26 */
            question: "To concatenate a string, use which of the following assignment operators?",
            opt0: "=",
            opt1: "+=",
            opt2: "&=",
            opt3: "++",
            opt4: "%=",
            answer: 1
        },
        {
            /* Question 27 */
            question: "If you need to find out what kind of data is stored inside a variable, what operator should you use?",
            opt0: "==",
            opt1: "===",
            opt2: "!=",
            opt3: "typeof",
            answer: 3
        },
        {
            /* Question 28 */
            question: "When you use a bit mask to track boolean flags, you'll need which of the following bitwise operators?",
            opt0: "#",
            opt1: "!",
            opt2: "|",
            opt3: "<",
            opt4: "=>",
            answer: 2
        },
        {
            /* Question 29 */
            question: "('1' === 1)",
            opt0: "true",
            opt1: "false",
            answer: 1
        },
        {
            /* Question 30 */
            question: "(1 + 1) == 2",
            opt0: "true",
            opt1: "false",
            answer: 0
        },
        {
            /* Question 31 */
            question: "('1' + 1) == 2",
            opt0: "true",
            opt1: "false",
            answer: 1
        },
        {
            /* Question 32 */
            question: "('1' + 1) === '11'",
            opt0: "true",
            opt1: "false",
            answer: 0
        },
        {
            /* Question 33 */
            question: "In 'attr(a, b)', a and b are typically referred to as what?",
            opt0: "options",
            opt1: "values",
            opt2: "parameters",
            opt3: "attributes",
            opt4: "whatabudabingbong",
            answer: 2
        },
        {
            /* Question 34 */
            question: "Which of the following is a valid way to declare: 'function(x) {return 2x;}'?",
            opt0: "'f(x) = 2x'",
            opt1: "'y = 2x'",
            opt2: "'(x) => x * 2'",
            opt3: "'y == 2x'",
            answer: 2
        },
        {
            /* Question 35 */
            question: "Use the 'this' keyword when you want to refer to what?",
            opt0: "The window running the script",
            opt1: "The owner of the function",
            opt2: "The Raven",
            opt3: "The current element in an array",
            opt4: "The current webpage",
            answer: 0
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