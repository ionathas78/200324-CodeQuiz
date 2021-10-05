const _PICTURE_ID = "id";
const _FILE_PATH = "filepath";
const _FILE_NAME = "filename";
const _FILE_EXTENSION_NAME = "extension";
const _PICTURE_NAME = "name";
const _ATTRIBUTION_NAME = "creator";
const _COPYRIGHT_DATE_NAME = "date";
const _PICTURE_CAPTION = "caption";
const _PICTURE_LOCATION = "location";
const _PICTURE_HEIGHT = "height";
const _PICTURE_WIDTH = "width";

const _LOCATION_INDEX_TOP = 0;
const _LOCATION_INDEX_BOTTOM = -1;

const _DEFAULT_PATH = "./Assets/Pictures/";         // If no filepath is specified, default to this value

function pictureList() {
    var pictures = [
        {
            /* Picture 0 */
            id: "arrays",
            filepath: "",
            filename: "array",
            extension: "jpg",
            name: "Arrayed Against",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Arrays are versatile data collections in programming.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 1 */
            id: "DOMs",
            filepath: "",
            filename: "dom_object",
            extension: "jpg",
            name: "RomComDOM",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "The Document Object Model gives hierarchical structure to a webpage.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 2 */
            id: "exitFns",
            filepath: "",
            filename: "exit_function",
            extension: "jpg",
            name: "Bye Bye Function",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Because sometimes, it's just time to get out.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 3 */
            id: "fns",
            filepath: "",
            filename: "function",
            extension: "jpg",
            name: "myFunction()",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "The function of a Function() is functional functioning.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 4 */
            id: "loops",
            filepath: "",
            filename: "loop",
            extension: "jpg",
            name: "Time Loop... Loop... Loop...",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Loops are not a glitch in the Matrix. Loops are not a glitch in the Matrix.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 5 */
            id: "methods",
            filepath: "",
            filename: "method",
            extension: "jpg",
            name: "Method Man",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "A method by any other name... is a function.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 6 */
            id: "objs",
            filepath: "",
            filename: "object",
            extension: "jpg",
            name: "Object, Objectified",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Objects are indiscriminate data collections that can store variables as well as functions.",
            location: _LOCATION_INDEX_TOP
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
            caption: "Using an operator == a good idea!",
            location: _LOCATION_INDEX_TOP
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
            caption: "Is it a property? Is it a variable? Is it a function? ... Yes.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 9 */
            id: "puncts",
            filepath: "",
            filename: "punctuation",
            extension: "jpg",
            name: "Periodt!",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Because, syntax: matters!",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 10 */
            id: "stmts",
            filepath: "",
            filename: "statement",
            extension: "jpg",
            name: "Making a Statement",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "A statement is a language-defined directive to the computer.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 11 */
            id: "stepouts",
            filepath: "",
            filename: "stepout_block",
            extension: "jpg",
            name: "",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Stepping out... and back in.",
            location: _LOCATION_INDEX_TOP
        },
        {
            /* Picture 12 */
            id: "tags",
            filepath: "",
            filename: "tag",
            extension: "jpg",
            name: "Tag! You're it.",
            creator: "Jonathan Andrews",
            date: "2021",
            caption: "Part hashtag, part nametag. All ML.",
            location: _LOCATION_INDEX_TOP
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
            caption: "The virtuous variable vivifies its veracious vocation in the vicissitudinous variation and valorous vigilance of its value.",
            location: _LOCATION_INDEX_TOP
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
//            caption: "",
//            location: _LOCATION_INDEX_TOP
//        },
    ];
    return pictures;
};

function getPictureByID(tagName, pictureArray) {
    let returnValue = null;
    for (var i = 0; i < pictureArray.length; i++) {
        var id = pictureArray[i].id;
        if (tagName.toUpperCase() == id.toUpperCase()) {
            returnValue = pictureArray[i];
            break;
        };
    };
    return returnValue;
};
