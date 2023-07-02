const linkedinUrlRegex =
  /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function validateLinkedinUrl(url) {
  if (linkedinUrlRegex.test(url)) {
    console.log(`"${url}" is a valid LinkedIn profile URL.`);
  } else {
    console.log(`"${url}" is not a valid LinkedIn profile URL.`);
  }
}

// example usage
validateLinkedinUrl("https://www.linkedin.com/in/vikarnjha"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/vikarn_jha123"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/vikarn-jha"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/vikarnjha12345"); // valid
validateLinkedinUrl("https://www.linkedin.com/in/jha"); // invalid (too short)
validateLinkedinUrl("https://www.linkedin.com/in/vikarn@jha"); // invalid (contains invalid characters)
validateLinkedinUrl("https://www.linkedin.com/vikarnjha"); // invalid (missing 'in/')
validateLinkedinUrl("https://www.linkedin.com/in/vikarnjha/"); // invalid (trailing slash)
