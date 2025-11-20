// Markdown Heading Converter
// Given a string representing a Markdown heading, return the equivalent HTML heading.

// A valid Markdown heading must:

// Start with zero or more spaces, followed by
// 1 to 6 hash characters (#) in a row, then
// At least one space. And finally,
// The heading text.
// The number of hash symbols determines the heading level. For example, one hash symbol corresponds to an h1 tag, and six hash symbols correspond to an h6 tag.

// If the given string doesn't have the exact format above, return "Invalid format".

// For example, given "# My level 1 heading", return "<h1>My level 1 heading</h1>".

// Note: The console may not display HTML tags in strings when logging messages. Check the browser console to see logs with tags included.

// function convert(heading) {
//take in the heading and split it up
// const array = heading.split(' ');
// does array.include "level"
// console.log(array.includes('level'));
// if (array.includes('level')) {
// look at the array[0]
// console.log(array[0])
//// does it contain all #s?
// if (array[0].includes('#')) {
//console.log("true")
////// if no return "Invalid format"
////// if yes
//////// what is the length of array[0]?
//console.log(array[0].length)
// let length = array[0].length;
////////// if its between 1-6
//////////// store length in a variable
// if (length >= 1 && length <= 6) {
//  return `<h${length}>${array.slice(1).join(' ')}</h${length}>`;
// } else return 'Invalid format';
// } else return 'Invalid format';
// } else return 'Invalid format';
//////////// return `<h${variable}>` + remainder of array (pop first entry? and loop through with spaces added?)
//////////// else return Invalid format
// const pattern = /#/g
// let result = heading.match(pattern)
// console.log(result)
// if (result.length > 0) {
//  console.log(heading)
// }
//}

// const regex = //
// start with zero or more spaces
// const regex = /^\s*/
////
// start with zero or more spaces
// 1 to 6 hash characters (#) in a row
// const regex = /^[\s]*\#{1,6}/
////
// start with zero or more spaces
// 1 to 6 hash characters (#) in a row
// At least one space
// const regex = /^[\s]*\#{1,6}[\s]+/
////
// start with zero or more spaces
// 1 to 6 hash characters (#) in a row
// At least one space
// The heading text.
// const regex = /^[\s]*\#{1,6}[\s]+[a-zA-Z]+/

function convert(heading) {
  const regex = /^[\s]*\#{1,6}[\s]+[a-zA-Z]+/;
  console.log(heading.test(regex));
}
