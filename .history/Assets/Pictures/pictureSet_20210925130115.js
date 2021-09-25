const _PICTURE_ID = "id";
const _FILE_PATH = "filepath";
const _FILE_NAME = "filename";
const _FILE_EXTENSION_NAME = "extension";
const _PICTURE_NAME = "name";
const _ATTRIBUTION_NAME = "creator";
const _COPYRIGHT_DATE_NAME = "date";
const _PICTURE_CAPTION = "caption";

const _DEFAULT_PATH = "./Assets/Pictures/";         // If no filepath is specified, default to this value

function pictureList() {
    var pictures = [
        {
            /* Picture 0 */
            id: "array",
            filepath: "",
            filename: "array",
            extension: "jpg",
            name: "Arrayed Against",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Arrays are versatile data collections in programming."
        },
        {
            /* Picture 1 */
            id: "DOM",
            filepath: "",
            filename: "dom_object",
            extension: "jpg",
            name: "RomComDOM",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "The Document Object Model gives hierarchical structure to a webpage."
        },
        {
            /* Picture 2 */
            id: "exitFn",
            filepath: "",
            filename: "exit_function",
            extension: "jpg",
            name: "Bye Bye Function",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Because sometimes, it's just time to get out."
        },
        {
            /* Picture 3 */
            id: "fn",
            filepath: "",
            filename: "function",
            extension: "jpg",
            name: "myFunction()",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "The function of a Function() is to functionally function."
        },
        {
            /* Picture 4 */
            id: "loop",
            filepath: "",
            filename: "loop",
            extension: "jpg",
            name: "Time Loop... Loop... Loop...",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Loops are not a glitch in the Matrix. Loops are not a glitch in the Matrix."
        },
        {
            /* Picture 5 */
            id: "method",
            filepath: "",
            filename: "method",
            extension: "jpg",
            name: "Method Man",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "A method by any other name... is a function."
        },
        {
            /* Picture 6 */
            id: "obj",
            filepath: "",
            filename: "object",
            extension: "jpg",
            name: "Object, Objectified",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Objects are indiscriminate data collections that can store variables as well as functions."
        },
        {
            /* Picture 7 */
            id: "ops",
            filepath: "",
            filename: "operators",
            extension: "jpg",
            name: "Smooth Operators",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Using an operator == a good idea!"
        },
        {
            /* Picture 8 */
            id: "props",
            filepath: "",
            filename: "property",
            extension: "jpg",
            name: "Virtual Property",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Is it a property? Is it a variable? Is it a function? ... Yes."
        },
        {
            /* Picture 9 */
            id: "punctuation",
            filepath: "",
            filename: "punctuation",
            extension: "jpg",
            name: "Periodt!",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Because, syntax: matters!"
        },
        {
            /* Picture 10 */
            id: "stmt",
            filepath: "",
            filename: "statement",
            extension: "jpg",
            name: "Making a Statement",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "A statement is a language-defined directive to the computer."
        },
        {
            /* Picture 11 */
            id: "stepout",
            filepath: "",
            filename: "stepout_block",
            extension: "jpg",
            name: "",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Stepping out... and back in."
        },
        {
            /* Picture 12 */
            id: "tag",
            filepath: "",
            filename: "tag",
            extension: "jpg",
            name: "Tag! You're it.",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Part hashtag, part nametag. All ML."
        },
        {
            /* Picture 13 */
            id: "vars",
            filepath: "",
            filename: "variables",
            extension: "jpg",
            name: "Visiting Vexations",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "The virtuous variable vivifies its veracious vocation in the vicissitudinous variation and valorous vigilance of its value."
        }


//       {
//            /* Picture 0 */
//            id: "",
//            filepath: "",
//            filename: "",
//            extension: "",
//            name: "",
//            creator: "",
//            date: "",
//            caption: ""
//        },
    ];
    return pictures;
};

function getPictureByTag(tagName, pictureArray) {
    for (var i = 0; i < pictureArray.length; i++) {
        var id = pictureArray[i];
        if (tagName.toUpper() == id.toUpper()) return id;
    };
};
