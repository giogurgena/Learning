// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - return result in an array or null
// const result = re.exec('hello world');
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);
// console.log(result.length);

// test() - returns true or false
// const result = re.test('Hello');
// console.log(result);

// match() - return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search () - return index of the first match. if not found returns -1
// const str = 'brad Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);




let re;
// Literal characters
re = /hello/;
re = /hello/i;

// Metacharacter symbols
re = /^h/i;                   // Must start with
re = /d$/i;                  // Must end with
re = /^hello$/i;            // Must begin and end with
re = /h.llo/i;             // matches any one character
re = /h*llo/i;            // matches any character 0 or more times
re = /gra?e?y/i;         // Optional character
re = /gra?e?y\?/i;      // Escape character


// Brackets [] - character sets
re = /gr[ae]y/i;                              // Must be an a or e
re = /[GF]ray/i;                              // Must be an G or F
re = /^[GF]ray/i;                              // Must be an G or F
re = /[^GF]ray/i;                              // match anything except G or F
re = /[A-Z]ray/;                              // match any uppercase letter
re = /[a-z]ray/;                              // match any lowercase letter
re = /[A-Za-z]ray/;                              // match any letter
re = /[0-9]ray/;                              // match any digit
re = /[0-9][0-9]ray/;                              // match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;                                 // Must occur exactly {m} amount of times
re = /Hel{2,4}o/i;                                 // Must occur exactly {m} amount of times
re = /Hel{2,}o/i;                                 // Must occur exactly at least {m} times

// Paretheses () - grouping
re = /([0-9]x){3}/;
re = /^([0-9]x){3}$/;



// Shorthand character classes
re = /\w/;                                         // word character - alphanumeric pr _
re = /\w+/;                                         // + one or more
re = /\W/;                                         // non-word character - alphanumeric pr _
re = /\d/;                                         // match any digit
re = /\d+/;                                         // match any digit 0 or more times
re = /\D/;                                         // match any non digit
re = /\s/;                                         // match whitespace character
re = /\S/;                                         // match non whitespace character
re = /Hell/i;                                         // word boundary
re = /Hell\b/i;                                         // word boundary


// Assertions
re = /x(?=y)/;                                       // match x only if followed by y
re = /x(?!y)/;                                       // match x only if not followed by y

// String to match
const str = 'xxisys';

// Loc results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)) {
    console.log(`${str} matched ${re.source}`);
  } else {
    console.log(`${str} does not match ${re.source}`);
  }
}

reTest(re, str);