const urlRegex = /^(http|https):\/\/[\w\d\s\S]+\.[\w]+$/;

function checkUrl(input) {
  if (urlRegex.test(input)) {
    console.log("Valid URL!");
  } else {
    console.log("Invalid URL.");
  }
}

// example usage
checkUrl("http://www.example.com"); // Valid URL!
checkUrl("https://space @example.com"); // Valid URL!
checkUrl("ftp://example.com"); // Invalid URL.
