var book = {
  title: 'A tale of two cities',
  author: 'Charles Dickens'
};

for(var p in book){ //'p' can be any key name
  console.log(p);
}

//Writing JSON objects
/* each property in the objects must be put in double quotes. JSON is not really a
JS object. It's most a string. JSON single quotes are not allowed. */

// {
//   "title":"A tale of two cites"
// }  //always use double quotes


var book_as_str = '';
var book_as_str = '{"title": "A tale of two cities", "author": "Charles Dickens", "price": 29}';

var book = JSON.parse(book_as_str);

/* global objects gives user access to window properties like undefinded, NaN, function parseInt(), function hasOwnProperty()
number,string and boolean */


/* arrays and sparce arrays */
var myarray = [];
myarray[0] = 'zero';
myarray[1] = true;
myarray[2] = 4;
//sparce arrays
myarray[10] = 'ten';

/* when 'myarray' is called : ['zero', true, 4, undefined x7 'ten'] */
