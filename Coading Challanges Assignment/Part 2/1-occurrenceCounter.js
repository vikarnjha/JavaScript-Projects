function wordCount(string) {
  const words = string.split(" "); // split the string into words
  const count = {};
  for (const word of words) {
    count[word] = (count[word] || 0) + 1; // increment the count for each word
  }
  return count;
}
const text =
  "A non-negative integer specifying a limit on the number of substrings to be included in the array. If provided, splits the string at each occurrence of the specified separator, but stops when limit entries have been placed in the array. Any leftover text is not included in the array at all.";
console.log(wordCount(text));
/* output: {
    A: 1,
    'non-negative': 1,
    integer: 1,
    specifying: 1,
    a: 1,
    limit: 2,
    on: 1,
    the: 6,
    number: 1,
    of: 2,
    substrings: 1,
    to: 1,
    be: 1,
    included: 2,
    in: 3,
    'array.': 2,
    If: 1,
    'provided,': 1,
    splits: 1,
    string: 1,
    at: 2,
    each: 1,
    occurrence: 1,
    specified: 1,
    'separator,': 1,
    but: 1,
    stops: 1,
    when: 1,
    entries: 1,
    have: 1,
    been: 1,
    placed: 1,
    Any: 1,
    leftover: 1,
    text: 1,
    is: 1,
    not: 1,
    array: 1,
    'all.': 1
  }
  */
